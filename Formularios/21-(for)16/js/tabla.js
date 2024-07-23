function esPar(numero) {
  return numero % 2 === 0;
}
function tabla(){

  let num1 = document.getElementById("txtNumeroUno").value;

  let contador = 0;
  let multi;

  for ( contador = 1; contador <= 5; contador++) {
     multi = num1 * contador;
    if (esPar(contador)) {
      document.getElementById("resultado").innerHTML += num1 + "*" + contador + "= " + multi + " es par <br>";
    } else {
      document.getElementById("resultado").innerHTML += num1 + "*" + contador + "= " + multi + " es impar <br>";
    }
  }

  return false;
}
