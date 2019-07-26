const express = require('express');
const router = express.Router();
const Course = require('../../models/course');
const MiniCourse = require('../../models/miniCourse');

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const {name, type} = data;
        console.log("got this: ", name );
        const regex = new RegExp(name);
        switch (type) {
            case "course" : {
                let courses = [];
                const result = await Course.find({name: regex}).sort({date: 1}).limit(3);
                result.forEach(course => {
                    courses.push(course.name);
                });
                res.status(200).json(courses);
            }
            case "MiniCourse": {
                let MiniCourses = [];
                const result = await MiniCourse.find({name: regex}).sort({date: 1}).limit(3);
                result.forEach(miniCourse => {
                    MiniCourses.push(miniCourse.name);
                });
                res.status(200).json(MiniCourses);
            }
            default:
                res.send('got nothing');
        }
    } catch (e) {
        return res.status(500).json({msg: "server error"});
    }
});

module.exports = router;
