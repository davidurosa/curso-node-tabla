const argv = require('yargs')
.option('t',{
alias:'tabla',
type:'number',
demandOption:true,
describe:'Es la base de la tabla de multiplicar'
})
.option('h',{
    alias:'hasta',
    type:'number',
    demandOption:true,
    describe:'Es el numero hasta donde llegara la multiplicacion'
    }) 
.option('l',{
    alias:'listar',
    type:'boolean',
    default:false,
    describe:'Muestra la tabla en consola'
    })    
.check((argv,options)=>{

    if (isNaN(argv.t)) {
        throw 'la tabla debe de ser un numero'
    }
    return true;

})
.argv


module.exports = argv;