require('dotenv').config()

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

const port = process.env.PORT || process.env.SERVER_PORT;

app.listen(port, () => console.log(`I'm all ${port}s... Groovy baby, port is up!`));