const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema ({
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
    length : {
        type: Number, //in minutes
        required: true,
    },
    volume: {
        type: Number, // in Mb
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    course: {
            type: String,
            required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }

});

module.exports = video = mongoose.model('video', VideoSchema);
