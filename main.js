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
          }
      }, { once: true });
  } else {
      dropdown.style.visibility = 'visible';
      dropdown.style.opacity = '1';
      dropdown.style.height = dropdown.scrollHeight + 'px';
  }
  
  dropdown.classList.toggle("show");
}

