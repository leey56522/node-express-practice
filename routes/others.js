const express = require('express');
const router = express.Router();

router.get('/say-hi', (req, res) => {
    res.send('Hi'); // Puts in broswer body
})

router.get('/apple', (req, res) => {
    res.json({ apple: 'pie' }) // send json down in 200 status
})

router.get('/download-file', (req, res) => {
    res.download('server.js') // downloads serve.js file 
})

router.get('/error', (req, res) => {
    res.status(500).json({ message: 'Error!' }) // forces error to occur and puts json file in the broswer
})

module.exports = router;