const express = require('express');
const app = express();

const port =  3002;

app.get('/', (req, res) => {
    res.send('Hello from feed service');
})


app.listen(port, () => {
    console.log(`Feed service started on port ${port}`);
})