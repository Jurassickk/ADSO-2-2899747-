function esPar(numero) {
  return numero % 2 === 0;
}

function Tabla() {
  let num = parseInt(document.getElementById("txtNumeroUno").value); 
  let contar = 1; 
  let pares = 0;
  let impares = 0;
  let resultado = ""; 

  while (num <= 5) { 
    while (contar <= 5) {
      let multi = num * contar;

      if (esPar(contar)) {
        resultado += num + " * " + contar + " = " + multi + " es par<br>";
        pares++;
      } else {
        resultado += num + " * " + contar + " = " + multi + " es impar<br>";
        impares++;
      }
      contar++;
    }
    num++; 
    contar = 1; 
  }


  resultado += "Hay " + pares + " pares y " + impares + " impares";
  document.getElementById("resultado").innerHTML = resultado;

  return false; 
}
