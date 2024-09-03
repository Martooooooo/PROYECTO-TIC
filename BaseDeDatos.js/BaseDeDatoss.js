import {startServer, onEvent} from "soquetic";



onEvent("contadordecalorias",(data)=>{
    
    let datosjugador= JSON.parse(fs.readFileSync("datos.json", "utf-8 "));
    let nuevo=datosjugador[0].calorias=caloriasactuales;
    fs.writeFileSync("datos.json",JSON.stringify(nuevo,null,2));  
})
onEvent("contadordedinero",(data)=>{
    
    let datosjugador= JSON.parse(fs.readFileSync("datos.json", "utf-8 "));
    let nuevo=datosjugador[0].dinero=dineroactual;
    fs.writeFileSync("datos.json",JSON.stringify(nuevo,null,2));  
})
startServer();