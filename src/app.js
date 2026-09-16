const express = require('express')
const todoRoutes = require('./routes/todoRoutes')
const app = express()

app.use(express.json())
app.use('/api/todos' , todoRoutes)

app.all(/ */, (req,res) => {
    res.status(400).send({
        payload : false,
        message :"ROUTES NOT FOUND 😒",
    })
})

module.exports = app