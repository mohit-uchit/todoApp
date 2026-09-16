const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async() => {
   try {
     await mongoose.connect(process.env.MONGO_URI)
    console.log('Database is connected sucessfully✅')
   } catch (error) {

    console.log('databse is not connected❌❌')
    console.error(error.message)
    process.exit(1)
   }

}

module.exports = connectDB