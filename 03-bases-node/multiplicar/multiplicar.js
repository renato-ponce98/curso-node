const fs = require('fs');
const colors = require('colors/safe');

let listarTabla = (base, limite) => {
    console.log('================'.green);
    console.log(`tabla del ${base}`.green);
    console.log('================'.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i} \n`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject(`la base ${base} no es un número.`);
            return;
        }else if(!Number(limite)){
            reject(`el limite ${limite} no es un número.`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(colors.green(`tabla-${base}.txt`));
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}