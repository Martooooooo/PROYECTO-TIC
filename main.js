function click() {
    document.getElementById("contadordemusculo").innerHTML = 
    Number(document.getElementById("contadordemusculo").innerHTML) + 1;
    document.getElementById("contadordecalorias").innerHTML = 
    Number(document.getElementById("contadordecalorias").innerHTML) + 1;
  }
document.getElementById("circulo").addEventListener("click", click);
  
  