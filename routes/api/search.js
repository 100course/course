const express = require('express');
const router = express.Router();
const Course = require('../../models/course');

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const {name, type} = data;
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
            default:
                res.send('got nothing');
        }
    } catch (e) {
        return res.status(500).json({msg: "server error"});
    }
});

module.exports = router;