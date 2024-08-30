
let cantidaddedinero = 0;

loadGameData()
let contadordecalorias = Number(document.getElementById("contadorDeCalorias").innerText);

document.addEventListener('DOMContentLoaded', () => {
    let calorias = 0;
    let clicksPerSecond = 0;
    let intervalId;

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
        'FarmaceuticosLocales': { costo: 500, potenciador: 1.50, duracion: 5000 }
    };

    //Funcion que actualiza las  calorias al texto(la pasas de las variables al texto)

    function updateCalorias() {
        contadorDeCalorias.forEach(contador => {
            contador.textContent = calorias;
        });
    }

    //Funcion que actualiza la cantidad de ejercicios y el costo de elos mismos

    function updateEjercicios() {
        for (let key in ejerciciosInfo) {
            const ejercicio = document.getElementById(key);
            ejercicio.querySelector('p').textContent = `Ejercicio tiene un coste de ${ejerciciosInfo[key].costo} y produce ${ejerciciosInfo[key].produccion}`;
        }
    }

    //Funcion que permite clikiar la panza y que este  sume calorias

    function click() {
        contadordecalorias += 1;
        console.log(contadordecalorias)
        document.getElementById("contadorDeCalorias").innerHTML = contadordecalorias;
    }

    document.getElementById("circulo").addEventListener("click", click);

    //Convierte calorías en dinero
    document.getElementById("titulodinero").addEventListener("click", () => {
        if (contadordecalorias >= 5) {
            const dineroGanado = Math.floor(contadordecalorias / 5);
            contadordecalorias -= dineroGanado * 5;
            cantidaddedinero += dineroGanado;
            document.getElementById("contadorDeCalorias").innerHTML = contadordecalorias;
            document.getElementById("titulodinero").innerHTML = `Dinero: ${cantidaddedinero}`;
            console.log(`Dinero total: ${cantidaddedinero}`);
        } else {
            alert('Necesitas al menos 5 calorías para convertir en dinero.');
        }
    });

    // Compra de ejercicios con dinero
    ejercicios.forEach(ejercicio => {
        ejercicio.addEventListener('click', () => {
            const ejercicioId = ejercicio.id;
            const costoActual = ejerciciosInfo[ejercicioId].costo;
            const produccionActual = ejerciciosInfo[ejercicioId].produccion;

            if (cantidaddedinero >= costoActual) {
                cantidaddedinero -= costoActual;
                clicksPerSecond += produccionActual;
                ejerciciosInfo[ejercicioId].costo = Math.ceil(costoActual * incrementoCosto);
                updateCalorias();
                updateEjercicios();
                startAutoClicks();
                document.getElementById("titulodinero").innerHTML = `Dinero: ${cantidaddedinero}`;
            } else {
                alert("No tienes suficiente dinero para comprar este ejercicio.");
            }
        });
    });

    // Compra de bonificaciones con dinero
    comidas.forEach(comida => {
        comida.addEventListener('click', () => {
            const comidaId = comida.id;
            const { costo, potenciador, duracion } = comidasInfo[comidaId];

            if (cantidaddedinero >= costo) {
                cantidaddedinero -= costo;
                aplicarPotenciador(potenciador, duracion);
                updateCalorias();
                document.getElementById("titulodinero").innerHTML = `Dinero: ${cantidaddedinero}`;
            } else {
                alert("No tienes suficiente dinero para comprar esta comida.");
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

    function startAutoClicks() {
        if (!intervalId) {
            intervalId = setInterval(() => {
                calorias += clicksPerSecond;
                updateCalorias();
            }, 1000);
        }
    }

    startAutoClicks();
    updateEjercicios();
});
//Backend
// Carga de datos desde el almacenamiento local
function loadGameData() {
    let calorias = 0;
    cantidaddedinero = Number(localStorage.getItem("cantidaddedinero")) || 0;
    let contadorCalorias = document.getElementById("contadorDeCalorias");
    contadorCalorias.innerText = calorias;
    document.getElementById("titulodinero").innerHTML = `Dinero: ${cantidaddedinero}`;
}

