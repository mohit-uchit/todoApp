const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 200

    },
    description: {
        type: String,
        trim: true,
        maxlength: 2000
    },
    status: {
        type: String,
        enum: ['pending', "in_progress", "completed"],
        default: 'pending',

    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    dueDate: {
        type: Date,
    },
    tags: {
        type: [String],
        default: []

    },

}, {
    timestamps: true
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo