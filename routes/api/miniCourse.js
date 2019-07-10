const express = require('express');
const router = express.Router();
const MiniCourse = require('../../models/miniCourse');
const {check, validationResult} = require('express-validator/check');




router.post('/', async (req, res) => {
    try {
        const {ids} = req.body.ids;
        const result = await MiniCourse.find({'_id': { $in: id}});
        res.send(result);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});


router.post('/add', [
    check('name', 'Name is required').not().isEmpty(),
        check('link', 'Link is required').not().isEmpty(),
        check('picture', 'picture is required').not().isEmpty()
],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        const {name, link, subtitle, tags,picture} = req.body;
        try {
            let miniCourse = await MiniCourse.findOne({link});
            if(miniCourse){
                return res.status(400).json({errors : [{msg: 'miniCourse already exist'}]});
            }
            miniCourse = new MiniCourse ({
                name,
                link,
                subtitle,
                tags,
                picture,
            });
            const result = await miniCourse.save();
            res.send(result.id);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('server error');
        }
});




module.exports = router;