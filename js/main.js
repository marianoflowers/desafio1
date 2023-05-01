/*.
En éste primer desafío utilicé un 
- ciclo while para realizar una suma, sólo para demostrar el funcionamiento del mismo.
- variables globales y locales
- función flecha y tradicional
- parseInt, parseFloat, toFixed
- return en funciones
- console.log y prompt

Autor: Mariano Flores
*/

// alert('cargando main.js');

let empresa = '';
let meses = 0;
let sueldoProm = 0;

const sueldoAcumAnonima = (pMeses, pSueldoProm) => {
    return parseFloat(pMeses * pSueldoProm).toFixed(3);
}

principal();

function principal() {
    infoLaboral();
    console.log('Hola ' + infoPersonal()
        + ', tu sueldo promedio acumulado trabajando en ' + empresa
        + ' fue de: $' + parseFloat(sueldoAcumWhile(meses, sueldoProm)).toFixed(2)
        + ' y fue calculado con un ciclo while');
    console.log('Y ahora calculado con una arrow function a 3 decimales: $' + sueldoAcumAnonima(meses, sueldoProm));
}

function infoPersonal() {
    let nombre = prompt('Ingrese su nombre: ');
    let apellido = prompt('Ingrese su apellido: ');
    return nombre + ' ' + apellido;
}

function infoLaboral() {
    empresa = prompt('Ingrese el nombre de la empresa en la cual trabaja: ');
    meses = parseInt(prompt('Ingrese cantidad de meses trabajados: '));
    sueldoProm = parseFloat(prompt('Ingrese el valor de su sueldo promedio: '));
}

function sueldoAcumWhile(pMeses, pSueldoProm) {
    let acumWhile = 0;
    if (pMeses > 0) {
        let mes = 1;
        while (mes <= pMeses) {
            acumWhile = acumWhile + pSueldoProm;
            mes = mes + 1;
        }
    }
    return acumWhile;
}