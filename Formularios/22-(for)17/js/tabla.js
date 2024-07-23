function esPar(numero) {
  return numero % 2 === 0;
}

function Tabla() {
  let num = parseInt(document.getElementById("txtNumeroUno").value);
  let pares = 0;
  let impares = 0;
  let resultado = "";

  for (let i = num; i <= num + 4; i++) { // bucle exterior para iterar sobre los números (num a num + 4)
    for (let contar = 1; contar <= 5; contar++) { 
      let multi = i * contar;
      if (esPar(multi)) {
        resultado += i + " * " + contar + " = " + multi + " es par<br>";
        pares++;
      } else {
        resultado += i + " * " + contar + " = " + multi + " es impar<br>";
        impares++;
      }
    }
  }

  resultado += "Hay " + pares + " pares y " + impares + " impares";
  document.getElementById("resultado").innerHTML = resultado;

  return false;
}

