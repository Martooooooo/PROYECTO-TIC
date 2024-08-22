let cantidaddedinero = 0;

loadGameData()
let contadordecalorias = Number(document.getElementById("contadorDeCalorias").innerText);

document.addEventListener('DOMContentLoaded', () => {
let calorias = 0;
let clicksPerSecond = 0;
let intervalId;


const circulo = document.getElementById('circulo');
const contadorDeCalorias = document.querySelectorAll('.contadorDeCalorias');
const ejercicios = document.querySelectorAll('.ejercicios');
const comidas = document.querySelectorAll('.Comida');
const body = document.body;

const incrementoCosto = 1.15;

const ejerciciosInfo = {
'ejerciciosmancuernas': { costo: 5, produccion: 1 },
'ejerciciosbicicleta': { costo: 50, produccion: 10 },
'ejerciciospresbanca': { costo: 500, produccion: 100 },
'ejercicioscaminadora': { costo: 5000, produccion: 1000 },
'ejerciciossentadilla': { costo: 50000, produccion: 10000 }
};

const comidasInfo = {
'Arroz': { costo: 500, potenciador: 1.10, duracion: 5000 },
'Chukistrukis': { costo: 500, potenciador: 1.20, duracion: 5000 },
'Avena': { costo: 500, potenciador: 1.30, duracion: 5000 },
'Proteinaenpolvo': { costo: 500, potenciador: 1.40, duracion: 5000 },
'Farmecutico locales': { costo: 500, potenciador: 1.50, duracion: 5000 }
};

function updateCalorias() {
contadorDeCalorias.forEach(contador => {
contador.textContent = calorias;
});
}

function updateEjercicios() {
for (let key in ejerciciosInfo) {
const ejercicio = document.getElementById(key);
ejercicio.querySelector('p').textContent = `Ejercicio tiene un coste de ${ejerciciosInfo[key].costo} y produce ${ejerciciosInfo[key].produccion}`;
}
}

function click() {
    contadordecalorias += 1;
    console.log(contadordecalorias)
    document.getElementById("contadorDeCalorias").innerHTML = contadordecalorias;
}
document.getElementById("circulo").addEventListener("click", click);

function startAutoClicks() {
if (!intervalId) {
intervalId = setInterval(() => {
calorias += clicksPerSecond;
updateCalorias();
}, 1000);
}
}
let preciodinero = 5
document.getElementById("titulodinero").addEventListener("click", () => {if (contadordecalorias >=preciodinero){
    alert('lo compraste')
    contadordecalorias = contadordecalorias - preciodinero;
    document.getElementById("contadorDeCalorias").innerHTML = contadordecalorias;
    cantidaddedinero = cantidaddedinero + 1
    console.log(cantidaddedinero)
  } else alert(`te faltan ${contadordecalorias - preciodinero}`)
});

ejercicios.forEach(ejercicio => {
ejercicio.addEventListener('click', () => {
const ejercicioId = ejercicio.id;
const costoActual = ejerciciosInfo[ejercicioId].costo;
const produccionActual = ejerciciosInfo[ejercicioId].produccion;

if (calorias >= costoActual) {
calorias -= costoActual; 
clicksPerSecond += produccionActual; 
              ejerciciosInfo[ejercicioId].costo = Math.ceil(costoActual * incrementoCosto); 
updateCalorias();
updateEjercicios();
startAutoClicks(); 
} else {
alert("No tienes suficiente dinero para comprar este ejercicio.");
}
});
});


function aplicarPotenciador(potenciador, duracion) {
body.style.backgroundColor = 'gold';
      clicksPerSecond *= potenciador;

setTimeout(() => {
    clicksPerSecond /= potenciador;
body.style.backgroundColor = ''; 
}, duracion);
}

comidas.forEach(comida => {
comida.addEventListener('click', () => {
const comidaId = comida.id;
const { costo, potenciador, duracion } = comidasInfo[comidaId];

if (calorias >= costo) {
calorias -= costo;
aplicarPotenciador(potenciador, duracion); 
updateCalorias();
 } else {
alert("No tienes suficiente dinero para comprar esta comida.");
          }
      });
  });

 
  startAutoClicks();
  updateEjercicios();
});


function toggleMenu() {
  var dropdown = document.getElementById("myDropdown");

  if (dropdown.classList.contains("show")) {
      dropdown.style.height = dropdown.scrollHeight + 'px';
      dropdown.style.opacity = '1';
      dropdown.style.visibility = 'visible';

      setTimeout(function() {
          dropdown.style.height = '0';
          dropdown.style.opacity = '0';
}, 10);

dropdown.addEventListener('transitionend', function() {
if (!dropdown.classList.contains("show")) {
dropdown.style.visibility = 'hidden';
dropdown.style.height = '';  
dropdown.style.opacity = ''; 
}
}, { once: true });

} else {
    
dropdown.style.visibility = 'visible';
dropdown.style.height = '0';
dropdown.style.opacity = '0';

setTimeout(function() {
    dropdown.style.height = dropdown.scrollHeight + 'px';
dropdown.style.opacity = '1';
}, 10);
}

dropdown.classList.toggle("show");
}
//Backend
function saveGameData(contadordecalorias, cantidaddedinero) {
    console.log(contadordecalorias,cantidaddedinero)
  localStorage.setItem('contadorDeCalorias', contadordecalorias);
localStorage.setItem('cantidaddedinero', cantidaddedinero);
  
}

function loadGameData () {
    let calorias = localStorage.getItem('contadorDeCalorias') || 0;
    cantidaddedinero = Number(localStorage.getItem("cantidaddedinero"))
    let contadorCalorias = document.getElementById("contadorDeCalorias");
    contadorCalorias.innerText = calorias;
    
}

setInterval(()=>{
    saveGameData(document.getElementById("contadorDeCalorias").innerText, cantidaddedinero)

},1000) 

// localStorage.clear()
// document.getElementById("contadordecalorias").innerHTML = 0; 
