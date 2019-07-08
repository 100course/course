const express = require('express');
const router = express.Router();
const Course = require('../../models/course');

router.post('/', async (req, res) => {
    try {

        const tag = req.body.tag;
        const regexp = new RegExp(tag);
        const courses = await Course.find({"tags": regexp});
        res.send(courses);
    } catch (err) {
        console.log(err);
        res.status(500).send("server error");
    }

});



module.exports = router;