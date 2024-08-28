

const fs = require('fs');
const { onEvent, sendEvent, startServer } = require('soquetic');

onEvent('actualizarCalorias', (data) => {
    let datosJugador = JSON.parse(fs.readFileSync('datos.json', 'utf-8'));
    
   
    datosJugador[0].calorias = data.caloriasActuales;

    // Guardar los datos actualizados en el archivo JSON
    fs.writeFileSync('datos.json', JSON.stringify(datosJugador, null, 2));

    console.log('Datos de calorías actualizados:', datosJugador);
});


startServer();

