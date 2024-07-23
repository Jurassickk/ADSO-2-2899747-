function esPar(numero) {
  return numero % 2 === 0;
}
function contador(){

  let num1 = document.getElementById("txtNumeroUno").value;

  let contador=0;

  for( contador = 1; contador <= num1; contador++){
    if(esPar(contador)){
      document.getElementById("contadores").innerHTML += contador + " es par <br>";
    } else {
      document.getElementById("contadores").innerHTML += contador + " es impar <br>";
    }
  }
    return false;
}
