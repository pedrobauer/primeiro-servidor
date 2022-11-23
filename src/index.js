const express = require('express');

const app = express();

app.get('/home', (req, res)=>{
    res.send('Ola.. Esse é meu prmeiro servidor com o express')
});

app.listen(3000);


// const lodash = require('lodash');
// const { arrayLetras, arrayNumeros } = require('./array')
// //const array = [1, 2, 4, 4, 6, 7, 1];

// const arrayUnico = lodash.uniq(arrayLetras);

// console.log(arrayUnico);