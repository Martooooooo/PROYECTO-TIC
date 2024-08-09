function click() {
    document.getElementById("circulo").innerHTML =
      Number(document.getElementById("contadordemusculo").innerHTML) + 1;
  }

  document.getElementById("circulo").addEventListener("click", click);
  console.log=click