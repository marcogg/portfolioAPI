const express = require('express')
require('dotenv').config({ path: '../.env' })
const colors = require('colors')
const connectionDB = require('./config/db')
const port = process.env.PORT || 5000

console.log(process.env.MONGO_URI)
connectionDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send({message:'Todo OK!'})
    console.log('SUCCESS!!')
})

app.listen(port, () => { console.log(`Server listening on ${port}`) })
