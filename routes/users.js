const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send('User List')
})

// put this above dynamic endpoint
// loads the ejs page in users/new (don't put / in the front)
router.get('/new', (req, res) => {
   res.render('users/new')
})

router.post('/', (req, res) => {
    const isValid = true;
    if (isValid) {
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log('Error!')
        res.render('users/new', { firstName: req.body.firstName })
    }
    res.send('Hi')
})

// use dynamcic endpoint to get any kind of id
// use route to organize get, put, delete...etc
router.route('/:id')
    .get((req, res) => {
        console.log(req.user)
        // calls name in index 1 of users
        console.log(req.user.name)
        res.send(`Get user with ID ${req.params.id}`) 
    })
    .put((req, res) => {
        res.send(`Update user with ID ${req.params.id}`) 
    })
    .delete((req, res) => {
        res.send(`Delete user with ID ${req.params.id}`) 
    })

const users = [{name: 'Pengu'}, {name: 'Peanut'}]
// If you go to a route with id parameter, run this code
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router;