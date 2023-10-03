
const mongoose = require('mongoose')

const connectionDB = async () => {
try {
    const connection = await mongoose.connect(process.env.NODE_ENV !== 'development')
    console.log(`Mongo DB connected: ${connection.connection.host}`.white.bgGreen)

} catch (error) {
    console.log(error)
    process.exit(1)
}
}

module.exports = connectionDB