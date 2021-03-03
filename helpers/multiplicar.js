const fs = require('fs');
//const { rejects } = require('node:assert');

/*PROMESA!!!
const crearArchivo = (base = 9) => {
        return new Promise((resolve, reject) => {
            let salida = '';
            for (let i = 1; i <= 10; i++) {
                salida += (`${base} x ${i} = ${base * i}\n`)
            }
            //  console.log(salida);

            fs.writeFileSync(`tabla ${base}.txt`, salida);
            resolve("tabla creada!!");
        })
    }
    //FIN PROMESA */



const crearArchivo = async(base = 9) => {
    try {
        let salida = '';
        for (let i = 1; i <= 10; i++) {
            salida += (`${base} x ${i} = ${base * i}\n`)
        }
        //  console.log(salida);

        fs.writeFileSync(`./salida/tabla ${base}.txt`, salida);
        console.log("tabla creada!!");

    } catch (err) {
        throw err;
    }
}

module.exports = {
    // crearArchivo: crearArchivo
    crearArchivo
}