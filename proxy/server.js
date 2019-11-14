require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const port = 4000;
const Axios = require('axios');

var morgan = require('morgan')

app.use(morgan('dev'));


app.use('/rooms/:id', express.static(path.join(__dirname, './public')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/api/:id', (req, res) =>{
    Axios.get('http://localhost:3004/api/:id')
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.send('error' + error);
    })
});