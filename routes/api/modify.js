const express = require('express');
const router = express.Router();
const Course = require('../../models/course');

router.post('/course', async (req, res) => {
    try {
        const data = req.body;
        const name = data.courseName;
        const result = await Course.findOne({name});
        res.json(result);
    } catch (err) {
        return res.status(500).json({errors: [{msg: "server error"}]});

    }
});



module.exports = router;