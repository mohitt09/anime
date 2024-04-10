const express = require('express');
const Router = express.Router();
const bcrypt = require('bcrypt');
const user = require('../Model/User');

Router.post('/register', async (req, res) => {
    try {
        const { name, email, number, password } = req.body;

        if (!name || !email || !number || !password) {
            return res.status(400).json({
                Message: 'Bad Request',
            });
        }

        let userExist = await user.findOne({ email: email });
        if (userExist) {
            return res.status(409).json({ Message: 'User already exists' });
        }

        userExist = await user.findOne({ number: number });
        if (userExist) {
            return res.status(409).json({ Message: 'User already exists' });
        }

        const hashpassword = await bcrypt.hash(password, 10);

        const newUser = await user.create({
            name,
            email,
            number,
            password: hashpassword,
        });

        newUser.save();

        res.status(201).json({
            Message: 'User created successfully',
            name: name,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: 'Internal Server Error at register side' });
    }
});

Router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ Message: 'Bad request! Invalid Credential' });
        }

        let User = await user.findOne({ email: email });
        if (!User) {
            return res.status(409).json({ Message: 'Invalid Credential' });
        }

        let passwordMatch = await bcrypt.compare(password, User.password)
        if (!passwordMatch) {
            return res.status(409).json({ Message: 'Invalid Credential', success: false });
        }

        res.status(200).json({
            Message: 'User Logged in successfully',
            name: User.name,
            success: true
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: 'Internal Server Error at login side' });
    }
});


module.exports = Router;
