const fs = require('fs');

const leerArchivo = ()=> {
    fs.readFile('./listaIA.json', 'utf-8', (err, data)=>{
        if (err){
            console.error('Error al leer el archivo: ',err)
            return;
        } 
        try{
            //Se convierte el contenido del archivo JSON a un arreglo JS
            const listaIA = JSON.parse(data)
            //Mostrando listado en la consola
            console.log('listado IA')
            console.log(listaIA)
        } catch (parseError){
            console.error('Error al parsear el archivo JSON: ', parseError)
        }
    })
}

leerArchivo();