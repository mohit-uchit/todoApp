const todoService = require('../services/todoServices')
const { handleRes, handleErr } = require('../helpers/responseHandler')


const createTodo = async (req, res) => {
    try {
        const data = await todoService.createTodo(req.body)
        return handleRes(res, data)
    } catch (error) {
        // const statusCode = error.name === 'ZodError' ? 400 : 500
        return handleErr(res, error)
    }
}

const getTodo = async (req, res) => {
    try {
        const todos = await todoService.getTodos(req.query)
        return handleRes(res, todos)
    } catch (error) {
        console.error(error.stack)
        return handleErr(res, error)
    }
}

const getTodoById = async (req, res) => {
    try {
        const todo = await todoService.getTodoById(req.params.id)
        return handleRes(res, todo)
    } catch (error) {
        return handleErr(res, error, error.statusCode)
    }
}

const updateTodo = async (req, res) => {
    try {
        const todo = await todoService.updateTodo(req.params.id, req.body)
        return handleRes(res, todo)
    } catch (error) {
        return handleErr(res, error, error.statusCode)
    }
}

const deleteTodo = async (req, res) => {
    try {
        const todo = await todoService.deleteTodo(req.params.id)
        return handleRes(res, todo)
    } catch (error) {
        return handleErr(res, error, error.statusCode)
    }
}

module.exports = {
    createTodo,
    getTodo,
    getTodoById,
    updateTodo,
    deleteTodo
}