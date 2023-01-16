const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors');

console.clear()

 crearArchivo(argv.t,argv.l,argv.h)
.then(nombreArchivo=>console.log(nombreArchivo.rainbow,'archivo creado correctamente'))
.catch(err=>console.log(err));