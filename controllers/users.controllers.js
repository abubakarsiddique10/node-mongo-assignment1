let userData = require('../models/users.models')

exports.randomUsers = (req, res) => {
    res.send(userData[Math.floor((Math.random() * userData.length))])
}

exports.getAllUsers = (req, res) => {
    res.send(userData)
}

exports.saveUser = (req, res) => {
    userData.push(req.body);
    res.send(userData);
}

exports.updateUser = (req, res) => {
    const { id } = req.params;
    let newUser = userData.find(user => user.id == id);
    newUser.name = req.body.name;
    res.send(userData)
}

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    userData = userData.filter(user => user.id !== Number(id));
    res.send(userData)
}