const express = require('express');
const {check, validationResult} = require('express-validator/check');
const router = express.Router();
const Video = require('../../models/video');
const Course = require('../../models/course');
const mongoose = require('mongoose');


router.get('/', async (req, res)=> {
    try{
        const courses = await Course.find().sort({date:-1});
        res.json(courses);
    } catch (err) {
        console.error(err.message);
    }
});

router.post('/id', [
        check('name', 'Name is required').not().isEmpty(),
        check('picture', 'picture is required').not().isEmpty()
    ],
    async (req, res)=> {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors: errors.array()});
            }
            const {videos, name, length, volume, picture} = req.body;
            console.log(typeof videos);
            let course = await Course.findOne({name});
            if(course){
                return res.status(400).json({errors : [{msg: 'course already exist'}]});
            }
            course = new Course({
               videos,
               name,
               length,
               volume,
               picture
            });
            await course.save();
            res.send(course);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('server error');
        }
    });

// important : when we are adding courses with this > we dont check that videos exist already or not. so be carefull adding
// videos
router.post('/', [
        check('name', 'Name is required').not().isEmpty(),
        check('picture', 'picture is required').not().isEmpty()
    ],
    async (req, res)=> {
        try {
            data = req.body;
            let video_ids = [];
            let video = [];
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors: errors.array()});
            }
            const {name, tags, length, volume, picture, text, videos} = data;

            videos.forEach(vid => {
                const {name, link, subtitle, tags, length, volume, picture, number} = vid;
                video.push(new Video({
                    name,
                    link,
                    subtitle,
                    tags,
                    length,
                    volume,
                    picture,
                    number
                }));
            });
            let {insertedIds,insertedCount} = await Video.collection.insertMany(video);
            for (let i = 0; i < insertedCount; i++)
            {
                video_ids.push(insertedIds[i]);
            }
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
                videos: video_ids
            });
            await course.save();
            res.send(course);
        } catch (err) {
            console.error(err.message);
            return res.status(500).send('server error');
        }
    });


router.get('/name/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const course = await Course.findOne({name});
        const video_Ids = course.videos;
        //console.log(video_Ids);
        // let videos = [];
        // video_Ids.forEach( async  video_ID => {
        //     let id = mongoose.Types.ObjectId(video_ID.toString());
        //     const video = await Video.findById(id);
        //     videos.push(video);
        // });
        // console.log(videos);
        // res.json(videos);
        // for(let i= 0; i < video_Ids.length; i++){
        //     video_Ids[i] = mongoose.Types.ObjectId(video_Ids[i].toString());
        //     console.log(mongoose.Types.ObjectId.isValid(video_Ids[i]));
        // }
        let videos = await Video.find({'_id' :video_Ids});
        res.json(videos);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});

router.get("/id/:id", async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const course = await Course.findById(id);
        const video_Ids = course.videos;
        let videos = await Video.find({'_id':video_Ids});
        res.json(videos);
    } catch (err) {
        if(err) {
            console.error(err.message);
            res.status(500).send('server error');
        }
    }
});


module.exports = router;
