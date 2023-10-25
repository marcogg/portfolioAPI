const asyncHandler = require('express-async-handler')
const mongoose = require('mongoose')
const Project = require('../models/projectsModel')

// Get Projects
const getProjects = asyncHandler (async(req, res) => { 
    try {
        const projectList = await Project.find({})
        res.status(200).json(projectList)

        // res.send({message:'Everything's cool projectController'})
        // res.status(200)
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Something went wrong'})  
    }

})

// Get Projects by Category
const getProjectsByCategory = asyncHandler(async (req, res) => {
try {
    const projectListCat = await Project.find({ category : req.params.category}).exec()
    console.log(req.params.category)
    res.status(200).json(projectListCat)

} catch (error) {
    res.status(500).json({message:'Something went wrong'}) 
}
}) 



// Post Project
const postProjects = asyncHandler( async (req, res) => {
    try {
        if(!req.body){
            res.status(404).json({message:'Project not created, type required data'}) 
        }
        const {category, projectName, brand, year, caption, challenge, approach, impact, projectLink, skills } = req.body

        const project = await Project.create({
            category:req.body.category,
            projectName: req.body.projectName,
            brand: req.body.brand,
            year :req.body.year,
            caption:req.body.caption,
            challenge:req.body.challenge,
            approach:req.body.approach,
            impact:req.body.impact,
            projectLink:req.body.projectLink,
            skills:req.body.skills
        })
        res.status(201).json(project)
    }
    catch (error) {
        console.error(error)
    }

})

module.exports = {getProjects, getProjectsByCategory, postProjects}