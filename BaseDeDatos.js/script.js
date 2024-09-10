const calorias = document.getElementById("calorias");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (calorias.value) {
    postData("message", { msg: input.value }, (data) => {
      a.innerHTML = data.msg;
    });
    input.value = "";
  }
});

fetchData("date", (data) => {
  date.innerText = data;
});

receive("second", () => {
  seconds.innerText = parseInt(seconds.innerText) + 1;
});