var ejerciciosInfo = {
    'ejerciciosmancuernas': { costo: 5, produccion: 1 },
    'ejerciciosbicicleta': { costo: 50, produccion: 10 },
    'ejerciciospresbanca': { costo: 500, produccion: 100 },
    'ejercicioscaminadora': { costo: 5000, produccion: 1000 },
    'ejerciciossentadilla': { costo: 50000, produccion: 10000 }
};

var comidasInfo = {
    'Arroz': { costo: 500, potenciador: 1.10, duracion: 5000 },
    'Chukistrukis': { costo: 500, potenciador: 1.20, duracion: 5000 },
    'Avena': { costo: 500, potenciador: 1.30, duracion: 5000 },
    'Proteinaenpolvo': { costo: 500, potenciador: 1.40, duracion: 5000 },
    'farmacity': { costo: 500, potenciador: 1.50, duracion: 5000 }
};

var cantidades = {
    "mancuernas":0,
    "bicicleta":0,
    "pressbanca":0,
    "caminadora":0,
    "sentadilla":0,

}


let cantidaddedinero = 0;
let contadordecalorias = Number(document.getElementById("contadorDeCalorias").innerText);
let cantidaddemusculo = 0;
let contadordemusculo= Number(document.getElementById("contadorDeMusculo").innerText);
cantidaddedinero=Number(document.getElementById("titulodinero").innerText);

function click() {
    contadordecalorias += 1;
    console.log(contadordecalorias);
    document.getElementById("contadorDeCalorias").innerHTML = contadordecalorias;
}
document.getElementById("circulo").addEventListener("click", click);

function toggleMenu() {
    var dropdown = document.getElementById("myDropdown");

    if (dropdown.classList.contains("show")) {
        dropdown.style.transition = 'none'; 
        dropdown.style.height = '0';
        dropdown.style.opacity = '0';
        dropdown.style.visibility = 'hidden';

        setTimeout(() => {
            dropdown.style.transition = '';
        }, 300);
    } else {
      
        dropdown.style.visibility = 'visible';
        dropdown.style.height = '100vh'; 
        dropdown.style.opacity = '1';

        dropdown.offsetHeight;

        dropdown.style.transition = 'height 0.3s ease, opacity 0.3s ease';
    }

   
    dropdown.classList.toggle("show");
}


document.getElementById("caja2").addEventListener("click", () => {
    let cambio = document.getElementById("cajanegra").textContent
    if (contadordecalorias >= Number(cambio) * 5) {
        contadordecalorias -= Number(cambio) * 5;
        document.getElementById("contadorDeCalorias").textContent = contadordecalorias;
        cantidaddedinero += Number(document.getElementById("cajanegra").textContent);
        document.getElementById("input1").value = 0;
        document.getElementById("cajanegra").textContent = 0;
        document.getElementById("titulodinero").textContent = cantidaddedinero;
    }
});

document.getElementById("input1").addEventListener("input", () => {
    if (Number(document.getElementById("input1").textContent) >= 0) {
        document.getElementById("cajanegra").textContent = Math.floor(Number(document.getElementById("input1").value) / 5);
    }
});


function calculodeprecio (ejerciciosInfo,idejercicio){
    if (cantidaddedinero >= ejerciciosInfo.costo){
        
    cantidaddedinero = cantidaddedinero - ejerciciosInfo.costo;
    ejerciciosInfo.costo = ejerciciosInfo.costo*1.15;
    document.getElementById("titulodinero").innerHTML = cantidaddedinero;
    console.log(ejerciciosInfo.costo);
    setInterval(() => {  contadordemusculo = contadordemusculo+ ejerciciosInfo.produccion;
    document.getElementById("contadorDeMusculo").innerHTML = contadordemusculo;
    console.log("hola");

    }, 10000);

    document.getElementById(idejercicio).innerHTML = Math.ceil(ejerciciosInfo.costo);

    switch (idejercicio){
    case "precio1":
        cantidades.mancuernas ++;    
        console.log ("mancuenas:" + cantidades.mancuernas );

        break
    case "precio2":
        cantidades.bicicleta ++;  
        console.log ("bicicleta:" + cantidades.bicicleta );

          
        break    
    case "precio3":
        cantidades.pressbanca ++;  
        console.log ("pressbanca:" + cantidades.pressbanca );
  
        break
    case "precio4":
        cantidades.caminadora ++;   
        console.log ("caminadora:" + cantidades.caminadora );
 
        break
    case "precio5":
        cantidades.sentadilla ++;    
        console.log ("sentadilla:" + cantidades.sentadilla );
        
        break
    default:
        console.log ("no se ha encontrado nada");    

    }

 }
 else {
    console.log("Dinero Insuficiente")
 }
}


document.getElementById("ejerciciosmancuernas").addEventListener("click",() => calculodeprecio(ejerciciosInfo.ejerciciosmancuernas,"precio1"));
document.getElementById("ejerciciosbicicleta").addEventListener("click",() => calculodeprecio(ejerciciosInfo.ejerciciosbicicleta,"precio2"));
document.getElementById("ejerciciospresbanca").addEventListener("click",() => calculodeprecio(ejerciciosInfo.ejerciciospresbanca,"precio3"));
document.getElementById("ejercicioscaminadora").addEventListener("click",() => calculodeprecio(ejerciciosInfo.ejercicioscaminadora,"precio4"));
document.getElementById("ejerciciossentadilla").addEventListener("click",() => calculodeprecio(ejerciciosInfo.ejerciciossentadilla,"precio5"));

window.addEventListener("beforeunload", function(e){
    postData("Guardar infromacion", {
        cantidades:cantidades
      });    
 });



// Backend
// Carga de datos desde el almacenamiento local
function loadGameData() {
    let calorias = 0;
    cantidaddedinero = Number(localStorage.getItem("cantidaddedinero")) || 0;
    let contadorCalorias = document.getElementById("contadorDeCalorias");
    contadorCalorias.innerText = calorias;
}

for (let i in ejerciciosInfo){
    document.getElementById(i).addEventListener("click",()=>{
        cantidaddemusculo += ejerciciosInfo[i].produccion;
        cantidaddedinero -= ejerciciosInfo[i].costo;
    })
}

function toggleVisibility(triggerSelector, targetSelector) {
    const triggerElement = document.querySelector(triggerSelector);
    const targetElement = document.querySelector(targetSelector);

    triggerElement.addEventListener('click', function() {
        if (targetElement.classList.contains('hidden')) {
            targetElement.classList.remove('hidden');
            targetElement.classList.add('visible'); 
        } else {
            targetElement.classList.remove('visible');
            targetElement.classList.add('hidden'); 
        }
    });
}

toggleVisibility('#trigger-div', '#target-div');
