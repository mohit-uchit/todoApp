const mongoose = require('mongoose')
const Todo = require('../models/todo')
//Helpers
const CommonHelper = require('../helpers/commonHelper')


const createTodo = async (todoData) => {
  return Todo.create(todoData)

}

const getTodos = async ({ status, priority, search, sort, page, limit, fields }) => {
  const currentPage = Math.max(parseInt(page) || 1, 1)
  const perPage = Math.min(Math.max(parseInt(limit) || 10, 1), 100)
  const query = _buildQuery(status, priority, search, sort, fields)
  const skipRecs = (currentPage - 1) * perPage

  const [todos, total] = await Promise.all([
    Todo.find(query.filters)
      .sort(query.sortFields)
      .skip(skipRecs)
      .limit(perPage)
      .select(query.selectFields),
    Todo.countDocuments(query.filters)
  ])

  return { todos, pagination: CommonHelper.paginate(currentPage, perPage, total) };
}

const _buildQuery = (status, priority, search, sort, fields) => {
  const filters = {}
  const sortFields = {}

  if (status) {
    filters.status = status
  }
  if (priority) {
    filters.priority = priority
  }
  if (search) {
    // regex special characters escape karo taaki user input se query na toote
    const regex = new RegExp(String(search).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')
    filters.$or = [{ title: regex }, { description: regex }, { tags: regex }]
  }

  // ?sort=-createdAt ya ?sort=priority,-dueDate
  const sortValues = sort ? _toList(sort) : ['-createdAt']
  sortValues.forEach(v => {
    if (v.startsWith('-')) {
      sortFields[v.slice(1)] = -1;
    } else {
      sortFields[v] = 1;
    }
  });

  // ?fields=title,status => sirf wahi fields aayengi (_id hamesha aata hai)
  const selectFields = fields ? _toList(fields).join(' ') : ''

  return { filters, sortFields, selectFields }
}

// query param array ho ya comma separated string, dono ko list bana deta hai
const _toList = (value) => {
  const values = Array.isArray(value) ? value : [value]
  return values.flatMap(v => String(v).split(',')).map(v => v.trim()).filter(Boolean)
}

const getTodoById = async (id) => {
  _validateId(id)
  const todo = await Todo.findById(id)
  if (!todo) {
    throw _createError('Todo not found', 404)
  }
  return todo
}

const updateTodo = async (id, todoData) => {
  _validateId(id)
  const todo = await Todo.findByIdAndUpdate(id, todoData, { returnDocument: 'after', runValidators: true })
  if (!todo) {
    throw _createError('Todo not found', 404)
  }
  return todo
}

const deleteTodo = async (id) => {
  _validateId(id)
  const todo = await Todo.findByIdAndDelete(id)
  if (!todo) {
    throw _createError('Todo not found', 404)
  }
  return todo
}

const _validateId = (id) => {
  if (!mongoose.isValidObjectId(id)) {
    throw _createError('Invalid todo id', 400)
  }
}

const _createError = (message, statusCode) => {
  const error = new Error(message)
  error.statusCode = statusCode
  return error
}

module.exports = {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
}


