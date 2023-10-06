const mongoose = require('mongoose')

const project = new mongoose.Schema({ 
    category:{
        type: [webDev, marketing, productDesign, visualDesign, spatialDesign],
        default: design
    },
    projectName: {
        type: String,
        required: [true, 'Please, type a title for the project']
        
    },
    client: {
        type: String,
        required: [true, 'Please, type a client name for the project']
    },
    year :{
        type: Number,
        required: [true, 'Please, type a year for the project']
    },
    caption:{
        type: String,
        required: [true, 'Please, type a caption for the project']
    },
    image:{
        type: String,
        required: [true, 'Please, type an image URL for this project']
    },
    description:{
        type: String,
        required: [true, 'Please, type a description for this project']
    },
    projectLink:{
        type: String,
        required: [true, 'Please, type an URL with the link to the project']
    },
    skills:{
        type: String,
        required: [true, 'Please, type at least one skill used in this project']
    }

},{
    timestamps: true
})

module.exports = mongoose.model('Project', project)