const lodash = require('lodash');
const { arrayLetras, arrayNumeros } = require('./array')
//const array = [1, 2, 4, 4, 6, 7, 1];

const arrayUnico = lodash.uniq(arrayLetras);

console.log(arrayUnico);