require('../config/config');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// const hbs = require('hbs');

// app.use(express.static(__dirname + '/public'));

// //Express HBS Engine
// hbs.registerPartials(__dirname + '/views/parciales');
// app.set('view engine', 'hbs');

app.get('/usuario', (req, res) => {
    res.json('get usuario');
    // console.log('Hola mundo');
});

app.post('/usuario', (req, res) => {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status('400').json({
            status: false,
            mensaje: 'El nombre es necesario'
        })
    }

    res.json({
        persona: body
    });
    // res.json('post usuario');
    // console.log('Hola mundo');
});

app.delete('/usuario', (req, res) => {
    res.json('delete usuario');
    // console.log('Hola mundo');
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;

    res.json({
        id
    });
    // res.json('put usuario');
    // console.log('Hola mundo');
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando peticiones en el puerto ${process.env.PORT}`);
});