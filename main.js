let contadordecalorias = Number(document.getElementById("contadordecalorias").innerHTML);

function click() {
  contadordecalorias += 1;
  document.getElementById("contadordecalorias").innerHTML = contadordecalorias;
}

document.getElementById("circulo").addEventListener("click", click);
function toggleMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

let preciodelcosoeste = 5
let cantidaddeejercicios = 0
document.getElementById("ejercicios").addEventListener("click", () => {
  if (contadordecalorias >= preciodelcosoeste){
    alert('lo compraste gordo puto')
    contadordecalorias = contadordecalorias - preciodelcosoeste
    document.getElementById("contadordecalorias").innerHTML = contadordecalorias;
    preciodelcosoeste = preciodelcosoeste*2
    cantidaddeejercicios = cantidaddeejercicios + 1
    console.log(cantidaddeejercicios)
  } else alert(`te faltan ${contadordecalorias - preciodelcosoeste}`)
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

