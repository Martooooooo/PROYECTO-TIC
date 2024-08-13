function click() {

    document.getElementById("contadordecalorias").innerHTML = 
    Number(document.getElementById("contadordecalorias").innerHTML) + 1;
  }
document.getElementById("circulo").addEventListener("click", click);
function toggleMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Cerrar el menú si el usuario hace clic fuera de él
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}

  
  