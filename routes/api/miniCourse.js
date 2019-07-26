const express = require('express');
const router = express.Router();
const MiniCourse = require('../../models/miniCourse');
const cors = require('cors');
const {check, validationResult} = require('express-validator/check');
const User = require('../../models/user');
const auth = require('../../middleware/auth');





router.post('/', async (req, res) => {
    try {
        const ids = req.body.ids;
        console.log("ids:",ids);
        let id = [];
        ids.map(item => id.push(item.id));
        console.log(id);
        const result = await MiniCourse.find({'_id': { $in: id}});
        res.send(result);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});


router.post('/add', [
    check('name', 'Name is required').not().isEmpty(),
        check('link', 'Link is required').not().isEmpty()
],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        const {name, link, subtitle, tags, text, picture} = req.body;

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
                text,
                picture,
            });
            const result = await miniCourse.save();
            res.send(result.id);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('server error');
        }
});

router.get('/miniCourseAddToUser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await MiniCourse.findById(id);
        console.log("getting course byd id", result);
        res.json(result);
    } catch (err) {
        console.log("error getting course byd id");

    }
});

router.post('/addCourseToUser', auth ,async(req, res) => {
    const miniCourseId = req.body.id;
    const user = await User.findById(req.user.id);
    let userHaveCourse = false;
    user.miniCourses.map(UserMiniCourseId =>
        {
            console.log("UserMiniCourseId : ", UserMiniCourseId._id);
            if(miniCourseId === UserMiniCourseId._id.toString()) {
                //console.log("in if");
                userHaveCourse = true;
                return null;
            }
        }
    );
    if(!userHaveCourse){
    user.miniCourses.push(miniCourseId);
    console.log(miniCourseId);
    await user.save();
    } else{
        return res.json({msg: "you already have this course"});
    }
});

router.get('/name/:name', async (req, res) => {

    const name = req.params.name;
    console.log("got this name:",name);
    try{
        const miniCourse = await MiniCourse.findOne({name});
        if(!miniCourse)
            return res.json({errors:[{msg:"no MiniCourse with this name"}]});
        return res.json(miniCourse);
    } catch (err) {
        return res.status(500).json({erros:[{msg:"server error"}]});
    }

});

router.post('/modify', async (req, res) => {
    const miniCourseChanges = req.body.miniCourse;
    const miniCourse = await MiniCourse.findOne({name: miniCourseChanges.MiniCourseName});
    miniCourse.tags = miniCourseChanges.tags;
    miniCourse.link = miniCourseChanges.link;
    miniCourse.subtitle = miniCourseChanges.subtitle;
    miniCourse.text = miniCourseChanges.text;
    miniCourse.picture = miniCourseChanges.picture;
    await miniCourse.save();
});





module.exports = router;
