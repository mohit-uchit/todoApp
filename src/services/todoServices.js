const Todo = require('../models/todo')
//Helpers
const CommonHelper = require('../helpers/commonHelper')


const createTodo = async (todoData) => {
  return Todo.create(todoData)

}

const getTodos = async ({ status, priority, sort, page: currentPage, limit, fields }) => {
  const dbFields = (Array.isArray(fields) ? fields?.join(' ') : fields)
  const query = _buildQuery(currentPage, limit, status, priority, sort)
  const skipRecs = (currentPage - 1) * limit
  const dbTodos = await Todo.find(query.filters)
    .sort(query.sortFields)
    .skip(skipRecs)
    .select(dbFields ? dbFields + '-_id' : '-_id' || '_id')
    .limit(limit);
  const total = await Todo.countDocuments(query.filters);
  const todos = _formatTodos(dbTodos)
  return { dbTodos, pagination: CommonHelper.paginate(currentPage, limit, total) };
}

const _buildQuery = (currentPage, limit, status, priority, sort) => {
  const filters = {}
  const sortFields = {}

  if (!currentPage) {
    currentPage = 1
  }
  if (!limit) {
    limit = 10
  }
  if (status) {
    filters.status = status
  }
  if (priority) {
    filters.priority = priority
  }
  if (sort) {
    const sortValues = Array.isArray(sort) ? sort : [sort];

    sortValues.forEach(v => {
      if (v.startsWith('-')) {
        sortFields[v.slice(1)] = -1;
      } else {
        sortFields[v] = 1;
      }
    });
  }

  return { filters, sortFields }
}

const _formatTodos = (todos) => {
   return todos.map((t) => {
      const res = {}
      return {
         id : t._id,
         title : t.title,
         priority : t.priority
      }
   })
}

module.exports = {
  createTodo,
  getTodos,
}


