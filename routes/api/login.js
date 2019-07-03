const express = require('express');
const {check, validationResult} = require('express-validator/check');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../../models/user');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');



// @route    GET api/auth
// @desc     Test route
// @access   Public
router.get('/', auth, async (req, res) => {
    try {
        console.log("req, header : ", req.headers);
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



router.post('/', [
        check('email', 'valid email is required').not().isEmpty().isEmail(),
        check('password', 'password is required').not().isEmpty()
    ],
    async (req, res) => {
        try {
            const {email, password} = req.body;
            let user = await User.findOne({email});
            if (user) {
                const isMatch = await bcrypt.compare(password,user.password);
                if(!isMatch)
                    return res.status(400).json({errors: [{msg: 'password or email is incorrect'}]});


                const payload = {
                    user: {
                        id: user.id
                    }
                };
                jwt.sign(payload,
                    config.get('jwtToken'),
                    {expiresIn: 3600},
                    (err, token) => {
                        if(err)
                            throw err;
                        res.json({token});
                    });
            } else{
                return res.status(400).json({errors: [{msg: 'user doesnt exist'}]});
            }

        } catch (err) {
            console.error(err.message);
            res.status(500).send('server error');
        }
    }
);


module.exports = router;