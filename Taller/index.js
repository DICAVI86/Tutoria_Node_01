const { registrar, leer } = require('./operaciones');

const operacion = process.argv[2]
const marca = process.argv[3]
const modelo = process.argv[4]
const color = process.argv[5]

//Evaluar la operacion a realizar
if (operacion === 'registrar'){
    registrar(marca, modelo, color)
} 
else if (operacion === 'leer'){
    leer()
}
else {
    console.log('Operaciopn no reconocida')
}