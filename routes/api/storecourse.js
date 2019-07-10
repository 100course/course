const express = require('express');
const router = express.Router();
const Course = require('../../models/course');
const MiniCourse = require('../../models/miniCourse');

router.post('/', async (req, res) => {
    try {

        const tag = req.body.tag;
        const regexp = new RegExp(tag);
        const MiniCourses = await Course.find({"tags": regexp});
        res.send(MiniCourses);
    } catch (err) {
        console.log(err);
        res.status(500).send("server error");
    }

});



module.exports = router;