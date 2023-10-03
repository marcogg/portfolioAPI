const express = require('express')
const dotenv = require('dotenv').config()
const connectionDB = require('./config/db.js')
const colors = require('colors')
const port = process.env.PORT || 5000

connectionDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send({message:'Todo OK!'})
    console.log('SUCCESS!!')
})

app.listen(port, () => { console.log(`Server listening on ${port}`) })
