const mongoose = require('mongoose');
const { stringify } = require('querystring');

const projSchema = new mongoose.schema({
    projname: {
        type: String,
        required: true
    },
    member: {
        type: String,
        required: true
    },
    modname: {
        type: String,
        required: true
    },

    progress: {
        type: String,
        required: true
    },
    remarks: {
        type: String,
    }
})
const project = mongoose.model('project', projSchema);
module.exports = project;