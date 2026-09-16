const Router = require('express').Router();

//midleware

const validate = require('../middleware/validationMiddleware');

//controllers
const { createTodo, getTodo } = require('../controllers/todoControllers');

//validations
const createTodoValidation = require('../validations/todovalidations');

Router.post('/', validate(createTodoValidation), createTodo);

Router.get('/',getTodo )

module.exports = Router;
