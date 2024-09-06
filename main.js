let cantidaddedinero = 0;

loadGameData();
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
        console.log(contadordecalorias);
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
        dropdown.style.transition = 'none'; // Desactiva la transición para el cierre inmediato
        dropdown.style.height = '0';
        dropdown.style.opacity = '0';
        dropdown.style.visibility = 'hidden';

        // Después de que el estilo de altura se haya aplicado, habilitar la transición para futuras aperturas
        setTimeout(() => {
            dropdown.style.transition = ''; // Restaura la transición para futuras aperturas
        }, 300); // Espera un poco para asegurarse de que la transición de cierre se haya completado
    } else {
        // Si el menú está oculto, se debe mostrar
        dropdown.style.visibility = 'visible';
        dropdown.style.height = '100vh'; // Ocupa toda la altura de la pantalla
        dropdown.style.opacity = '1';

        // Forza un redibujado para que el navegador registre el cambio de altura antes de la transición
        dropdown.offsetHeight; // Esto es solo para forzar el reflow

        dropdown.style.transition = 'height 0.3s ease, opacity 0.3s ease';
    }

    // Alterna la clase "show" para manejar la visibilidad con CSS
    dropdown.classList.toggle("show");
}

document.getElementById("caja2").addEventListener("click", toggleMenu);

document.getElementById("caja2").addEventListener("click", () => {
    if (Number(document.getElementById("contadorDeCalorias").textContent) >= Number(document.getElementById("cajanegra").textContent) * 5) {
        document.getElementById("contadorDeCalorias").textContent = Number(document.getElementById("contadorDeCalorias").textContent) - Number(document.getElementById("cajanegra").textContent) * 5;
        let dinero = Number(document.getElementById("titulodinero").textContent) + Number(document.getElementById("cajanegra").textContent);
        contadordecalorias = contadordecalorias - Number(document.getElementById("cajanegra").textContent) * 5;
        document.getElementById("input1").value = 0;
        document.getElementById("titulodinero").textContent = dinero;
    }
});

document.getElementById("input1").addEventListener("input", () => {
    if (Number(document.getElementById("input1").textContent) >= 0) {
        document.getElementById("cajanegra").textContent = Math.floor(Number(document.getElementById("input1").value) / 5);
    }
});

// Backend
// Carga de datos desde el almacenamiento local
function loadGameData() {
    let calorias = 0;
    cantidaddedinero = Number(localStorage.getItem("cantidaddedinero")) || 0;
    let contadorCalorias = document.getElementById("contadorDeCalorias");
    contadorCalorias.innerText = calorias;
}
