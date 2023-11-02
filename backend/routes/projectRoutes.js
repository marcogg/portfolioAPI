const express = require('express')
const router = express.Router()

const {getProjects, postProjects, getProjectsByCategory, getSelectedProject} = require('../controllers/projectsController')

router.get('/', getProjects)
router.get('/getProjects/:category', getProjectsByCategory)
router.get('/getSelectedProject/:id', getSelectedProject)
router.post('/postProjects', postProjects)
// router.patch('/updateProjects', updateProjects)
// router.delete('/deleteProjects', protect, deleteProjects)

module.exports = router