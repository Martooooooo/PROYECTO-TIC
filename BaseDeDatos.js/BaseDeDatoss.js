const fs = require('fs').promises;

// Función para leer y actualizar el archivo JSON
async function actualizarCaloriasAuto(rutaArchivo, incremento) {
  try {
    const data = await fs.readFile(rutaArchivo, 'utf8');
    const datosJugador = JSON.parse(data);

    // Actualizar las calorías automáticamente
    datosJugador.calorias = (datosJugador.calorias || 0) + incremento;

    // Guardar los datos actualizados de vuelta en el archivo JSON
    await fs.writeFile(rutaArchivo, JSON.stringify(datosJugador, null, 2), 'utf8');
    console.log(`Calorías actualizadas: ${datosJugador.calorias}`);
  } catch (err) {
    console.error('Ocurrió un error:', err);
  }
}

// Simular el progreso del jugador con un intervalo que actualiza las calorías automáticamente
function iniciarJuego(rutaArchivo, intervalo, incremento) {
  setInterval(() => {
    actualizarCaloriasAuto(rutaArchivo, incremento);
  }, intervalo);
}

// Iniciar el juego con un intervalo de 5 segundos y un incremento de 50 calorías cada vez
iniciarJuego('jugador.json', 5000, 50);
