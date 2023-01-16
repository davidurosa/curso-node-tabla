const fs = require('fs');
const colors = require('colors');

const crearArchivo  = async(tabla= 5, listar = false, hasta=10)=>{


    try {
        
    
        let  salida= '';
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${tabla} * ${i} = ${tabla*i}\n` ;   
        }
        if (listar) {
            
            console.log('===================='.blue);
            console.log('tabla del:'.blue,colors.yellow(tabla));
            console.log('===================='.blue);
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${tabla}.txt`,salida);
       return `tabla del ${tabla} creada y archivo txt`;

    } catch (error) {
       throw error;

    }
  
}


module.exports ={
    crearArchivo
}