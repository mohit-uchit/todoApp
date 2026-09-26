const Router = require('express').Router();

//midleware

const validate = require('../middleware/validationMiddleware');

//controllers
const { createTodo, getTodo, getTodoById, updateTodo, deleteTodo } = require('../controllers/todoControllers');

//validations
const { createTodoValidation, updateTodoValidation } = require('../validations/todovalidations');

Router.post('/', validate(createTodoValidation), createTodo);

Router.get('/',getTodo )

Router.get('/:id', getTodoById)

Router.patch('/:id', validate(updateTodoValidation), updateTodo)

Router.delete('/:id', deleteTodo)

module.exports = Router;
