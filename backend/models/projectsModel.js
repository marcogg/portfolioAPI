const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({ 
    category:{
        type: [String],
        type: ['webDev', 'marketing', 'productDesign', 'visualDesign', 'spatialDesign', 'design'],
        default: 'design',
    },
    projectName: {
        type: String,
        required: [true, 'Please, type a title for the project']
        
    },
    brand: {
        type: String,
        required: [true, 'Please, type a client name for the project']
    },
    year :{
        type: String,
        required: [true, 'Please, type a year for the project']
    },
    caption:{
        type: String,
        required: [true, 'Please, type a caption for the project']
    },
    image:{
        type: String,
        // required: [true, 'Please, type an image URL for this project']
    },
    challenge:{
        type: String,
        required: [true, 'Please, type a challenge for the project']
    },
    approach:{
        type: String,
        required: [true, 'Please, type an approach for the project']
    },
    impact:{
        type: String,
        required: [true, 'Please, type an impact for the project']
    },
    projectLink:{
        type: String,
        required: true,
        required: [true, 'Please, type an URL with the link to the project']
    },
    skills:{
        type: [String],
        required: [true, 'Please, type at least one skill used in this project']
    }

},
// { typeKey: '$type' },
{
    timestamps: true
})


module.exports = mongoose.model('Project', projectSchema, 'projects')