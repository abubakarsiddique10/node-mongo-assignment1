const express = require('express');
const { randomUsers, getAllUsers, saveUser, updateUser, deleteUser } = require('../controllers/users.controllers');
const router = express.Router();


// get random user from json file
router.get('/user/random', randomUsers);

// get all user from json file
router.get('/user/all', getAllUsers);

// save user in the json file
router.post('/user', saveUser)

// upadate a random user
router.patch('/user/update/:id', updateUser)

// delete user form json file
router.delete('/user/delete/:id', deleteUser)



/* app.patch('/user/bulk-update', (req, res) => {
    const getId = req.query.id;
    const filter = userData.filter(user => {
        return getId.find(id => id == user.id)
    });
    const name = filter.map(user => {
    })
    console.log('run')
}) */

module.exports = router;