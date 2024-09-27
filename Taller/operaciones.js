const fs = require('fs');

function registrar(marca, modelo, color){
    fs.readFile('./vehiculos.json', 'utf-8', (error, data)=>{
        if (error){
            console.error('Error al leer el archivo', error)
            return
        } 
        // Convertir el contenido JSON en un arreglo
        const vehiculos = JSON.parse(data)

        // Crear un nuevo objeto con los datos del vehiculo
        const nuevoVehiculo = {
            marca, 
            modelo,
            color
        };

        vehiculos.push(nuevoVehiculo);

        fs.writeFile('vehiculos.json', JSON.stringify(vehiculos), (error)=>{
            if (error){
                console.error('Error al escribir en el archivo', error)
            } else {
                console.log('Vehiculo registrado con exito')
            }
        })
    });
}

const leer = ()=> {
    fs.readFile('./vehiculos.json', 'utf-8', (err, data)=>{
        if (err){
            console.error('Error al leer el archivo: ',err)
            return;
        } 
        try{
            //Se convierte el contenido del archivo JSON a un arreglo JS
            const vehiculos = JSON.parse(data)
            //Mostrando listado en la consola
            console.log('listado vehiculos')
            console.log(vehiculos)
        } catch (parseError){
            console.error('Error al parsear el archivo JSON: ', parseError)
        }
    })
}


module.exports = {registrar, leer}