import { readFileSync, writeFileSync } from 'fs';
import { startServer, onEvent } from 'soquetic';
//MARTIN
onEvent("contadordecalorias", (data) => {
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].calorias = data.caloriasactuales; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});

onEvent("contadordedinero", (data) => {
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].dinero = data.dineroactual; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});

onEvent("contadormusculo", (data) => {
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].musculo = data.musculoactual; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});

onEvent("logros", (data) => {
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].logros = data.logrosactuales; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});

onEvent("comidas", (data) => {
    console.log(data);
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].comidas = data.comidaactuales; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});

onEvent("ejercicios", (data) => {
    console.log(data);
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].ejercicios = data.ejerciciosactuales; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});

onEvent("cantidades", (data) => {
    console.log(data);
    let datosjugador = JSON.parse(readFileSync("datos.json", "utf-8"));
    datosjugador[0].ejercicios = data.ejerciciosactuales; 
    writeFileSync("datos.json", JSON.stringify(datosjugador, null, 2));
});
//AARON
startServer();
