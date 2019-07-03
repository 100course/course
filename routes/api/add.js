const express = require('express');
const router = express.Router();
const Course = require('../../models/course');
const Video = require('../../models/video');

router.post('/course', async (req, res) => {
    const data = req.body;
    const {name, tags, length, volume, picture, text} = data;
    let course = await Course.findOne({name});
    if(course){
        return res.status(400).json({errors : [{msg: 'course already exist'}]});
    }
    course = new Course ({
        name,
        tags,
        length,
        volume,
        picture,
        text,
    });
    await course.save();
    res.send("course saved");
});

router.post('/video', async (req, res) => {
    const data = req.body;
    const {name, link, subtitle, tags, length, volume, picture, number, course} = data;
    let video = await Video.findOne({link});
    if(video)
        return res.send("video exist");

    let courseToAddVideo = await Course.findOne({name:course});
    video = new Video({
        name,
        link,
        subtitle,
        tags,
        length,
        volume,
        picture,
        number,
        course
    });
    const result = await video.save();
    console.log("res",result.id);
    console.log("course to add", courseToAddVideo);
    courseToAddVideo.videos.push(result);
    courseToAddVideo.save();
    res.send("successful");
});

module.exports = router;