const express = require('express');
const socket = require('socket.io');

const app = express();
const server = app.listen(4000, () => {
    console.log('Listening to requests on port 4000');
});

app.use(express.static('public'));

const io = socket(server);

io.on('connection', () => {
    console.log('Connection socket made', socket)
})