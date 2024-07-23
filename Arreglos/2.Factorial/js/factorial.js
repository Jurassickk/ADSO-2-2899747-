/**
 * Autor: Viego
 * Numeros factoriales (array)
 */

let Numeros = [1,2,3,4,5];
let factorial;
let resultadoPrint = "";
for (let iteracion = 0; iteracion <= Numeros.length - 1; iteracion++){
    if(Numeros === 0){
        factorial = 1;
    }else{
        factorial = Numeros[iteracion] * Numeros[iteracion] || 1;
    }

    resultadoPrint += '<li class="list-group-item">' + Numeros[iteracion] + ' ! = '+factorial+'</li>';
}
document.getElementById('lista-Numeros').innerHTML = resultadoPrint;