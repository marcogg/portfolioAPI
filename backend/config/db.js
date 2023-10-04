
const mongoose = require('mongoose')
const colors = require('colors')

const connectionDB = async () => {
try {
    const connection = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Mongo DB connected: ${connection.connection.host}`.white.bgGreen)

} catch (error) {
    console.log(error)
    process.exit(1)
}
}

module.exports = connectionDB