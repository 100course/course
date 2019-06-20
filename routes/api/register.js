const express = require('express');
const {check, validationResult} = require('express-validator/check');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../../models/user');


router.post('/',
    [
        check('email', 'valid email is required').not().isEmpty().isEmail(),
        check('username', 'username is required').not().isEmpty(),
        check('password', 'password is required').not().isEmpty()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }
            const {email, username, password} = req.body;
            let user = await User.findOne({email});
            if (user) {
                return res.status(400).json({errors: [{msg: 'user email already exist'}]});
            }
            user = new User(
                {
                    email,
                    username,
                    password
                });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);


            await user.save();
            res.json(user);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('server error');
        }
    }
);


module.exports = router;