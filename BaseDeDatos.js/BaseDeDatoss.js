const fs = require('fs');
const { startServer, onEvent } = require('soquetic');
//MARTIN
onEvent("contadordecalorias", (data) => {
    let datosjugador = JSON.parse(fs.readFileSync("datos.json", "utf-8"));
    datosjugador[0].calorias = data.caloriasactuales; 
    fs.writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});

onEvent("contadordedinero", (data) => {
    let datosjugador = JSON.parse(fs.readFileSync("datos.json", "utf-8"));
    datosjugador[0].dinero = data.dineroactual; 
    fs.writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});

onEvent("contadormusculo", (data) => {
    let datosjugador = JSON.parse(fs.readFileSync("datos.json", "utf-8"));
    datosjugador[0].musculo = data.musculoactual; 
    fs.writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});

onEvent("logros", (data) => {
    let datosjugador = JSON.parse(fs.readFileSync("datos.json", "utf-8"));
    datosjugador[0].logros = data.logrosactuales; 
    fs.writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});

onEvent("comidas", (data) => {
    console.log(data);
    let datosjugador = JSON.parse(fs.readFileSync("datos.json", "utf-8"));
    datosjugador[0].comidas = data.comidaactuales; 
    fs.writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});

onEvent("ejercicios", (data) => {
    console.log(data);
    let datosjugador = JSON.parse(fs.readFileSync("datos.json", "utf-8"));
    datosjugador[0].ejercicios = data.ejerciciosactuales; 
    fs.writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});
//AARON
startServer();
