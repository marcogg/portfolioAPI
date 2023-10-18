require('dotenv').config({ path: '../.env' })
const express = require('express')
const cors = require('cors')
const colors = require('colors')
const connectionDB = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

connectionDB()

const app = express()

app.use(cors())
app.use(express.json())

// Projects Routes
app.use('/api/projects', require('./routes/projectRoutes'))
app.use(errorHandler)

// app.get('/', (req, res) => {
//     res.send({message:'Everything is cool!'})
// })

app.listen(port, () => { console.log(`Server listening on ${port}`) })
