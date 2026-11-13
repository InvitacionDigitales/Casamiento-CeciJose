
/* =========================================
   INVITACIÓN DE BODA
   CECILIA MATUS & JOSÉ ANTONIO FRESCO
========================================= */


/* =========================================
   1. CUENTA REGRESIVA
========================================= */

// IMPORTANTE: cambiar por la fecha y hora reales.
const FECHA_BODA = new Date("2027-02-13T00:00:00");

function actualizarCuentaRegresiva() {

    const ahora = new Date();
    const diferencia = FECHA_BODA - ahora;

    if (diferencia <= 0) {
        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = String(horas).padStart(2, "0");
    document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
    document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
}

actualizarCuentaRegresiva();
setInterval(actualizarCuentaRegresiva, 1000);


/* =========================================
   2. CARRUSEL DE FOTOGRAFÍAS
========================================= */

const fotografias = [
    // Agregaremos las rutas de las fotografías.
];

let fotoActual = 0;

const contenidoCarrusel = document.getElementById("carrusel-contenido");

function mostrarFotografia() {

    if (!contenidoCarrusel || fotografias.length === 0) {
        return;
    }

    contenidoCarrusel.innerHTML = `
        <img src="${fotografias[fotoActual]}"
             alt="Recuerdo de Cecilia y José">
    `;
}

document.querySelector(".carrusel-anterior").addEventListener("click", () => {

    if (fotografias.length === 0) return;

    fotoActual = (fotoActual - 1 + fotografias.length) % fotografias.length;
    mostrarFotografia();

});

document.querySelector(".carrusel-siguiente").addEventListener("click", () => {

    if (fotografias.length === 0) return;

    fotoActual = (fotoActual + 1) % fotografias.length;
    mostrarFotografia();

});


/* =========================================
   3. COPIAR ALIAS DE MERCADO PAGO
========================================= */

const botonCopiar = document.getElementById("copiar-alias");

botonCopiar.addEventListener("click", async () => {

    const alias = document.getElementById("alias-regalo").textContent.trim();

    try {
        await navigator.clipboard.writeText(alias);

        botonCopiar.textContent = "¡Alias copiado!";

        setTimeout(() => {
            botonCopiar.textContent = "Copiar alias";
        }, 2000);

    } catch (error) {
        botonCopiar.textContent = "No se pudo copiar";
        console.error("Error al copiar:", error);
    }

    document.getElementById("anio").textContent = new Date().getFullYear();

});

