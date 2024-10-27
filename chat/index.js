const express = require('express');
const app = express();

const port =  3001;

app.get('/', (req, res) => {
    res.send('Hello from chat service');
})

app.get("/friends", (req, res) => {
    res.send('Your friends will appeared here');
})


app.listen(port, () => {
    console.log(`Chat service started on port ${port}`);
})