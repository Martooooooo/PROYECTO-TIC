const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Ruta para obtener los datos guardados
app.get('/datos', (req, res) => {
    fs.readFile('datos.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error al leer los datos');
        }
        res.json(JSON.parse(data));
    });
});

// Ruta para guardar los datos
app.post('/datos', (req, res) => {
    const datos = req.body;

    fs.writeFile('datos.json', JSON.stringify(datos), (err) => {
        if (err) {
            return res.status(500).send('Error al guardar los datos');
        }
        res.send('Datos guardados con éxito');
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
