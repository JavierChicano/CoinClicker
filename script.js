// variables
let multiplicador = 1;
let contador = 0;
let autoClicks = 0;
let monedasXSegundo = 0;
let intervalo=false;

//niveles
let nivelFuerza = 1;
let nivelLegionario = 1;
let nivelCenturion = 1;
let nivelTribuno = 1;
let nivelArquero = 1;

//Costes tropas
let costeFuerza = 10;
let costeLegionario = 15;
let costeCenturion = 25;
let costeTribuno = 35;
let costeArquero = 45;


// Referencias
const clickButton = document.getElementById('monedaClick');
const numeroClicks = document.getElementById('contador');
const monedasSec = document.getElementById('MonedasSec');
const multiplicadorClick = document.getElementById('duplicadorClick');
const clickLegionario = document.getElementById('legionario');
const clickCenturion = document.getElementById('centurion');
const clickTribuno = document.getElementById('tribuno');
const clickArquero = document.getElementById('arquero');

//Referencias costes
const costeFuerzaVer = document.getElementById('costeFuerza');
const costeLegionarioVer = document.getElementById('costeLegionario');
const costeCenturionVer = document.getElementById('costeCenturion');
const costeTribunoVer = document.getElementById('costeTribuno');
const costeArqueroVer = document.getElementById('costeArquero');

//Referencias de niveles
const lvlFuerza = document.getElementById('levelCountFuerza');
const lvlLegionario = document.getElementById('levelCountSoldado');
const lvlCenturion = document.getElementById('levelCountCenturion');
const lvlTribuno = document.getElementById('levelCountTribuno');
const lvlArquero = document.getElementById('levelCountArquero');

numeroClicks.textContent = `Monedas: ${contador}`;
monedasSec.textContent = `Monedas por segundo: ${monedasXSegundo}`;
costeFuerzaVer.textContent = `${costeFuerza}`;
costeLegionarioVer.textContent = `${costeLegionario}`;
costeCenturionVer.textContent = `${costeCenturion}`;
costeTribunoVer.textContent = `${costeTribuno}`;
costeArqueroVer.textContent = `${costeArquero}`;
lvlFuerza.textContent = `Nivel: ${nivelFuerza}`;
lvlLegionario.textContent = `Nivel: ${nivelLegionario}`;
lvlCenturion.textContent = `Nivel: ${nivelLegionario}`;
lvlTribuno.textContent = `Nivel: ${nivelLegionario}`;
lvlArquero.textContent = `Nivel: ${nivelLegionario}`;

// Método para contar el click
clickButton.addEventListener('click', () => {  
    contador = contador + multiplicador;  

    // Actualizar la visualización del contador
    numeroClicks.textContent = `Monedas: ${Math.trunc(contador)}`;
});


//Método para el multiplicador de clicks
multiplicadorClick.addEventListener('click', () => {
    if(contador>=costeFuerza){
        contador=contador-costeFuerza;
        costeFuerza = Math.trunc(costeFuerza * 1.5);
        numeroClicks.textContent = `Monedas: ${Math.trunc(contador)}`;
        costeFuerzaVer.textContent = `${costeFuerza}`;
        multiplicador++;
        nivelFuerza ++;
        lvlFuerza.textContent = `Nivel: ${nivelFuerza}`;
    }
});

//Funcion autoclick
function autoClick(){
    
    // Establecer el intervalo solo si no está en funcionamiento
    if (intervalo==false) {
        intervalo=true;
        // Usar setInterval para sumar monedas cada 100 ms (1 segundo)
        intervalo = setInterval(() => {
            contador += autoClicks;
            numeroClicks.textContent = `Monedas: ${Math.trunc(contador)}`;
        }, 100);
    }
}

// Método para el autoclick del Legionario (Aumenta en 3)
clickLegionario.addEventListener('click', () => {
    if (contador >= costeLegionario) {
        contador = contador - costeLegionario;
        costeLegionario = Math.trunc(costeLegionario * 3);
        numeroClicks.textContent = `Monedas: ${Math.trunc(contador)}`;
        costeLegionarioVer.textContent = `${costeLegionario}`;
        nivelLegionario++;
        autoClicks += 0.1;
        monedasXSegundo = Math.trunc(autoClicks * 10);
        monedasSec.textContent = `Monedas por segundo: ${monedasXSegundo}`;
        lvlLegionario.textContent = `Nivel: ${nivelLegionario}`;

        autoClick();

    }
});

//Metodo para el autoclick del Centurion (Aumenta en 5)
clickCenturion.addEventListener('click', () => {
    if (contador >= costeCenturion) {
        contador = contador - costeCenturion;
        costeCenturion = Math.trunc(costeCenturion * 5);
        numeroClicks.textContent = `Monedas: ${Math.trunc(contador)}`;
        costeCenturionVer.textContent = `${costeCenturion}`;
        nivelCenturion++;
        autoClicks += 0.3;
        monedasXSegundo = Math.trunc(autoClicks * 10);
        monedasSec.textContent = `Monedas por segundo: ${monedasXSegundo}`;
        lvlCenturion.textContent = `Nivel: ${nivelCenturion}`;

        autoClick();
    }
});

//Metodo para el autoclick del Tribuno (Aumenta en 7)
clickTribuno.addEventListener('click', () => {
    if (contador >= costeTribuno) {
        contador = contador - costeTribuno;
        costeTribuno = Math.trunc(costeTribuno * 7);
        numeroClicks.textContent = `Monedas: ${Math.trunc(contador)}`;
        costeTribunoVer.textContent = `${costeTribuno}`;
        nivelTribuno++;
        autoClicks += 0.5;
        monedasXSegundo = Math.trunc(autoClicks * 10);
        monedasSec.textContent = `Monedas por segundo: ${monedasXSegundo}`;
        lvlTribuno.textContent = `Nivel: ${nivelTribuno}`;

        autoClick();
    }
});

//Metodo para el autoclick del Arquero (Aumenta en 10)
clickArquero.addEventListener('click', () => {
    if (contador >= costeArquero) {
        contador = contador - costeArquero;
        costeArquero = Math.trunc(costeArquero * 10);
        numeroClicks.textContent = `Monedas: ${Math.trunc(contador)}`;
        costeArqueroVer.textContent = `${costeArquero}`;
        nivelArquero++;
        autoClicks += 0.7;
        monedasXSegundo = Math.trunc(autoClicks * 10);
        monedasSec.textContent = `Monedas por segundo: ${monedasXSegundo}`;
        lvlArquero.textContent = `Nivel: ${nivelArquero}`;

        autoClick();
    }
});

//Gestion de unidades
if(contador>=100){
    clickButton.src = "img/nivel 1/1.png";
}

//Seccion dos del html

//Variables

//Costes objetos
let costeCandado = 100000;
let costeTienda = 50000;
let bandera = false;

//Referencias
const mostrarCandado = document.getElementById('mostrarCandado');
const comprarTienda = document.getElementById('objetosCandado1');
const tienda = document.getElementById('tienda');


//Referencias para ocultar
const mostrarElemento = document.getElementsByClassName('cuadroTexto');
const ocultarCoste = document.getElementsByClassName('coste');
const iconoDudas = document.getElementById('dudas');


//Referencias costes
const costeCandadoVer = document.getElementById('costeCandado');
const costeTiendaVer = document.getElementById('costeTienda');

//Desbloqueo del candado
costeCandadoVer.textContent = `${costeCandado/1000}K`;
mostrarCandado.addEventListener('click', () => {
    if (contador >= costeCandado) {
        contador = contador - costeCandado;
        numeroClicks.textContent = `Monedas: ${Math.trunc(contador)}`;

        // Oculta el candado al hacer clic
        mostrarCandado.style.display = 'none';
    }
});

//Desbloqueo de la tienda
costeTiendaVer.textContent = `${costeTienda/1000}K`;
comprarTienda.addEventListener('click', () => {
    if (contador >= costeTienda) {
        contador = contador - costeTienda;
        numeroClicks.textContent = `Monedas: ${Math.trunc(contador)}`;

        // Oculta el candado al hacer clic
        tienda.style.display = 'block';
        comprarTienda.style.display = 'none';
    }
});

//Mostrar informacion de los items
iconoDudas.addEventListener('click', () => {
    if(bandera==false){
        bandera=true;
        lvlFuerza.style.display = 'none';    
        lvlLegionario.style.display = 'none';
        lvlCenturion.style.display = 'none';
        lvlTribuno.style.display = 'none';
        lvlArquero.style.display = 'none';  
        for (let i = 0; i < ocultarCoste.length; i++) {
            ocultarCoste[i].style.display = 'none';
        }  
        for (let i = 0; i < mostrarElemento.length; i++) {
            mostrarElemento[i].style.display = 'block';
        }
    }else if(bandera==true){
        bandera=false;
        lvlFuerza.style.display = 'block';    
        lvlLegionario.style.display = 'block';
        lvlCenturion.style.display = 'block';
        lvlTribuno.style.display = 'block';
        lvlArquero.style.display = 'block';  
        for (let i = 0; i < ocultarCoste.length; i++) {
            ocultarCoste[i].style.display = 'block';
        }  
        for (let i = 0; i < mostrarElemento.length; i++) {
            mostrarElemento[i].style.display = 'none';
        }
    }
    
});