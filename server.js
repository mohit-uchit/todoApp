//external imports

require('dotenv').config()

//internal imports

const app = require('./src/app')

const connectDB = require('./src/config/database')

// variable

const port = process.env.PORT || 3000

const startServer = async () => {
    await connectDB()

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)

})
}

startServer()

