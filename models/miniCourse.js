const mongoose = require('mongoose');

const MiniCourseSchema = new mongoose.Schema ({
    name : {
        type: String,
        required: true
    },
    link : {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
    },
    tags : [String],
    text : {
      type: String
    },
    picture: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now()
    }

});

module.exports = miniCourse = mongoose.model('miniCourse', MiniCourseSchema);
