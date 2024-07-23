function operacion() {

  let num1 = parseInt(document.getElementById("txtNumeroUno").value);
  let num2 = parseInt(document.getElementById("txtNumeroDos").value);

  let operaciones = document.getElementById("opciones").value;

  switch (operaciones) {
    case "suma":
      let suma = num1 + num2;
      resultado = "Suma: " + suma;
      break;
    case "resta":
      let restar = num1 - num2;
      resultado = "Resta: " + restar;
      break;
    case "multiplicacion":
      let mutiplicar = num1 * num2;
      resultado = "Multiplicacion: " + mutiplicar;
      break;
    case "Division":
      let dividir = num1 / num2;
      resultado = "Division: " + dividir;
      break;
    default:
      "<strong>Error!!! no reconoce la operacion</strong>";
      break;
  }

  document.getElementById("operaciones").innerHTML ="<strong>" + resultado + "<strong>";

  return false

}
