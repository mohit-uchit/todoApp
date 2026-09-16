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



module.exports = {
    createTodo,
    getTodo
}