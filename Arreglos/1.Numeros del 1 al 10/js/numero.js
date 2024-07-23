/**
 * Autor: Viego
 * Numero del 1 al 10 (array)
 */


//Areglo Manual 
let numeros = [1,2,3,4,5,6,7,8,9,10];
let iteracion;
let resultadoPrint = "";

for(iteracion = 0; iteracion < numeros.length; iteracion++){
     resultadoPrint += '<li class="list-group-item">'+numeros[iteracion]+'</li>';
}

document.getElementById('lista-Numeros').innerHTML = resultadoPrint;


//Arreglo Automatico
numeros = [];  // limpiamos el arreglo y el resultado :D
resultadoPrint = "";

for(iteracion = 0; iteracion < 10; iteracion++){
     let numero = iteracion +1;
     numeros.push(numero);
}
for(iteracion = 0; iteracion < numeros.length; iteracion++){
     resultadoPrint += '<li class="list-group-item">'+numeros[iteracion]+'</li>';
}

document.getElementById('lista-Numeros2').innerHTML = resultadoPrint;