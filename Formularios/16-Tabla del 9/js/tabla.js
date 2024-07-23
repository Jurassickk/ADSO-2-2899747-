function esPar(numero) {
  return numero % 2 === 0;
}
function tabla(){

  let num1 = document.getElementById("txtNumeroUno").value;

  let contador = 0;
  let multi;

  while (contador < 5) {
    contador = contador + 1;

    multi = num1 * contador;

    if (esPar(contador)) {
      document.getElementById("resultado").innerHTML += num1 + "*" + contador + "= " + multi + " es par ";
    } else {
      document.getElementById("resultado").innerHTML += num1 + "*" + contador + "= " + multi + " es impar ";
    }
  }

  return false;
}
