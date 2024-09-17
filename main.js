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


let cantidaddedinero = 0;

loadGameData();
let contadordecalorias = Number(document.getElementById("contadorDeCalorias").innerText);
let cantidaddemusculo = 0;

function click() {
    contadordecalorias += 1;
    console.log(contadordecalorias);
    document.getElementById("contadorDeCalorias").innerHTML = contadordecalorias;
}
document.getElementById("circulo").addEventListener("click", click);

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


document.getElementById("caja2").addEventListener("click", () => {
    if (contadordecalorias >= Number(document.getElementById("cajanegra").textContent) * 5) {
        contadordecalorias -= Number(document.getElementById("cajanegra").textContent) * 5;
        document.getElementById("contadorDeCalorias").textContent = contadordecalorias;
        cantidaddedinero += Number(document.getElementById("cajanegra").textContent);
        document.getElementById("input1").value = 0;
        document.getElementById("cajanegra").textContent = 0;
        document.getElementById("titulodinero").textContent = cantidaddedinero;
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

for (let i in ejerciciosInfo){
    document.getElementById(i).addEventListener("click",()=>{
        cantidaddemusculo += ejerciciosInfo[i].produccion;
        cantidaddedinero -= ejerciciosInfo[i].costo;
    })
}

function toggleVisibility(triggerSelector, targetSelector) {
    const triggerElement = document.querySelector(triggerSelector);
    const targetElement = document.querySelector(targetSelector);

    triggerElement.addEventListener('click', function() {
        if (targetElement.classList.contains('hidden')) {
            targetElement.classList.remove('hidden');
            targetElement.classList.add('visible'); 
        } else {
            targetElement.classList.remove('visible');
            targetElement.classList.add('hidden'); 
        }
    });
}

toggleVisibility('#trigger-div', '#target-div');
