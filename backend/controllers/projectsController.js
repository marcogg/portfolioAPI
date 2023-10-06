const asyncHandler = require('express-async-handler')
const mongoose = require('mongoose')

// Get Projects
const getProjects = asyncHandler (async(req, res) => { 
    try {
        res.send({message:'Todo chido desde projectController'})
        res.status(200)
    } catch (error) {
        console.error(error)
    }

})

module.exports = {getProjects}