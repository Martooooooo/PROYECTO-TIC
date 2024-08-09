function click() {
    document.getElementById("Fatguy").innerHTML =
      Number(document.getElementById("cantidad").innerHTML) + 1;
  }

  document.getElementById("Fatguy").addEventListener("click", click);
 