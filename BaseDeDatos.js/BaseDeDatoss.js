const { startServer } = require("soquetic");

let caloriasactuales = document.getElementById("contadordecalorias").textContent
let datosjugador= JSON.parse(fs.readFileSync("datos.json","utf-8"));
let nuevo=datosjugador[0].calorias=caloriasactuales;
fs.writeFileSync("datos.json",JSON.stringify(nuevo,null,2));


startServer