const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

let userData = [
    { "id": 1, name: "Jennie", "contact": "01857927915", "address": "Caldwell, New Jersey(NJ), 07006", "photoUrl": "shorturl.at/kln26" },
    { "id": 2, name: "Jhon", "contact": "01857927916", "address": "Caldwell, New Jersey(NJ), 07006", "photoUrl": "shorturl.at/kln26" },
    { "id": 3, name: "Heris", "contact": "01857927917", "address": "Caldwell, New Jersey(NJ), 07006", "photoUrl": "shorturl.at/kln26" },
    { "id": 4, name: "Halim", "contact": "01857927918", "address": "Caldwell, New Jersey(NJ), 07006", "photoUrl": "shorturl.at/kln26" },
    { "id": 5, name: "Bakar", "contact": "01857927919", "address": "Caldwell, New Jersey(NJ), 07006", "photoUrl": "shorturl.at/kln26" }
]
app.use(express.json())

// get random user from json file
app.get('/user/random', (req, res) => {
    res.send(userData[Math.floor((Math.random() * userData.length))])
});

// get all user from json file
app.get('/user/all', (req, res) => {
    res.send(userData)
});

// save user in the json file
app.post('/user', (req, res) => {
    userData.push(req.body);
    res.send(userData);
})

// upadate a random user
app.patch('/user/update/:id', (req, res) => {
    const { id } = req.params;
    let newUser = userData.find(user => user.id == id);
    newUser.name = req.body.name;
    res.send(userData)
})


// delete user form json file
app.delete('/user/delete/:id', (req, res) => {
    const { id } = req.params;
    userData = userData.filter(user => user.id !== Number(id));
    res.send(userData)
})


/* app.patch('/user/bulk-update', (req, res) => {
    const getId = req.query.id;
    const filter = userData.filter(user => {
        return getId.find(id => id == user.id)
    });
    const name = filter.map(user => {
        

    })

    console.log('run')
}) */


app.get('/', (req, res) => {
    res.send('server is running now')
})

app.listen(port, () => {
    console.log('server is running')
})