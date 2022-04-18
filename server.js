// npm init -y
// npm i express
// npm i --save-dev nodemon
// nodemon server.js

const express = require('express');
const app = express();
const port = 3000;

// loads static html website in public folder
// app.use(express.static('public'))

// allow access of information coming from forms
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// npm i ejs
// change index.html to index.ejs
app.set('view engine', 'ejs') // must be in to use ejs
// app.use(logger) // logs url every time when refreshed

app.get('/', logger, (req, res) => { //logs url only when endpoint is /. Can put as many middlewares as I want
    res.render('index', { name: 'Lucia' }) 
    // second parameter for sending info to ejs file
})

// saving /user/... in other files using router
const userRouter = require('./routes/users');
app.use('/users', userRouter)

// middleware
function logger(req, res, next) {
    // prints url on every request
    console.log(req.originalUrl)
    next()
}

app.listen(port, () => console.log('Listening to Port 3000'))