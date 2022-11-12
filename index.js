const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const usersRouter = require('./routes/users.route');

app.use(express.json());
app.use(usersRouter)




app.get('/', (req, res) => {
    res.send('server is running now')
})

app.all('*', (req, res) => {
    res.send('route no found')
})

app.listen(port, () => {
    console.log('server is running')
})
