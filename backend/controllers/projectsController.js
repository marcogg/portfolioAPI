const asyncHandler = require('express-async-handler')
const mongoose = require('mongoose')
const Project = require('../models/projectsModel')

// Get Projects
const getProjects = asyncHandler (async(req, res) => { 
    try {
        const projectList = await Project.find({category: req.category})
        res.status(200).json(projectList)

        // res.send({message:'Everything's cool projectController'})
        // res.status(200)
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Something went wrong'})  
    }

})


// Post Project
const postProjects = asyncHandler( async (req, res) => {
    try {
        if(!req.body){
            res.status(404).json({message:'Project not created, type required data'}) 
        }
        const project = await Project.create({
            category:req.category,
            projectName: req.projectName,
            client: req.client,
            year :req.year,
            caption:req.caption,
            year:req.year,
            description:{
                challenge:req.challenge,
                approach: req.impact,
                impact: req.impact
            },
            projectLink:req.projectLink,
            skills:req.skills
        })
        res.status(201).json(project)
    }
    catch (error) {
        console.error(error)
    }

})

module.exports = {getProjects, postProjects}