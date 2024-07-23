function esPar(numero) {
  return numero % 2 === 0;
}
function contador(){

  let num1 = document.getElementById("txtNumeroUno").value;

  let contador=0;

    while(contador < num1){

        contador=contador+1;
    
        if(esPar(contador)){
          document.getElementById("contadores").innerHTML += contador + " es par <br>";
        }
        else{
          document.getElementById("contadores").innerHTML += contador + " es impar <br>";
        }
    
    }
    return false;
}
