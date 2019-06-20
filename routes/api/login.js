const express = require('express');
const {check, validationResult} = require('express-validator/check');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../../models/user');


router.get('/',
    async (req, res) => {
        try {
            const {email, password} = req.body;
            let user = await User.findOne({email});
            if (user) {
                const isMatch = await bcrypt.compare(password,user.password);
                if(!isMatch)
                    return res.status(400).json({errors: [{msg: 'password or email is incorrect'}]});

                return res.json(user)
            } else {
                return res.status(400).json({errors: [{msg: 'user doesnt exist'}]});
            }

        } catch (err) {
            console.error(err.message);
            res.status(500).send('server error');
        }
    }
);


module.exports = router;