const mongoose = require('mongoose');

const MiniCourseSchema = new mongoose.Schema ({
    name : {
        type: String,
        required : true
    },
    link : {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    tags : [String],
    picture: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }

});

module.exports = miniCourse = mongoose.model('miniCourse', MiniCourseSchema);
