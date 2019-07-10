const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    miniCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'miniCourse'
        }

    ],
    discussion: [
        {
            course: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'course'
            },
            video: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'video'
            },
            helpful:{
                type: Boolean,
                required: true
            },
            text:{
                type: String,
                required: true
            }
        }
        ],
    latest: [
        {
            course: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'course'
            },
            video: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'video'
            }
        }
        ]
});


module.exports = user = mongoose.model('user', UserSchema);