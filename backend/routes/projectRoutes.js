const express = require('express')
const router = express.Router()

const {getProjects, postProjects} = require('../controllers/projectsController')

router.get('/', getProjects)
router.get('/getProjects/:category', getProjects)
router.post('/postProjects', postProjects)
// router.patch('/updateProjects', updateProjects)
// router.delete('/deleteProjects', protect, deleteProjects)

module.exports = router