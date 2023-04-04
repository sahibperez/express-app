const express = require('express');
const app = express()

app.get('/' , (req, res) => res.send('Hello world 04-03-2023 09:05 p.m.'));

app.listen(3000, () => {
    console.log('My REST API running on port 3000');
})