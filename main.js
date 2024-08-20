let contadordecalorias = Number(document.getElementById("contadordecalorias").innerHTML);

function click() {
  contadordecalorias += 1;
  document.getElementById("contadordecalorias").innerHTML = contadordecalorias;
}

document.getElementById("circulo").addEventListener("click", click);
function toggleMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

let preciodinero = 5
let cantidaddedinero = 0
document.getElementById("titulodinero").addEventListener("click", () => {
  if (contadordecalorias >=preciodinero){
    alert('lo compraste')
    contadordecalorias = contadordecalorias - preciodinero;
    document.getElementById("contadordecalorias").innerHTML = contadordecalorias;
    cantidaddedinero = cantidaddedinero + 1
    console.log(cantidaddeejercicios)
  } else alert(`te faltan ${contadordecalorias - preciodinero}`)
});

function toggleMenu() {
  var dropdown = document.getElementById("myDropdown");

  if (dropdown.classList.contains("show")) {
      dropdown.style.height = dropdown.scrollHeight + 'px';
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
      dropdown.style.opacity = '0'; 
      dropdown.style.height = '0';  

      dropdown.offsetHeight; 

      dropdown.style.opacity = '1';
      dropdown.style.height = dropdown.scrollHeight + 'px';
  }
  
  dropdown.classList.toggle("show");
}
const GameData={
  Cantidaddecalorías:"contadordecalorias",
  cantidaddemusculo: "contadordecalorias"
}
const fs = require('fs');

function saveGameDataToFile(gameData, fileName) {
    const jsonData = JSON.stringify(gameData, null, 2); // Convertir a JSON con formato
    fs.writeFileSync(fileName, jsonData, 'utf8');
    console.log(`Datos del juego guardados en ${fileName}`);
}

// Llamar a la función con los datos del juego y el nombre del archivo
saveGameDataToFile(gameData, 'gameData.json');


TEOEMPEZAAPROGRAMARDESDEACAYNOBORRESESTO