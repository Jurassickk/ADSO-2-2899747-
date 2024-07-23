function numero(){

  let num1 = document.getElementById("txtNumeroUno").value;
  let num2 = document.getElementById("txtNumeroDos").value;

  switch (true) {
    case (num1 == num2):
         document.getElementById("numeroM").innerHTML ="son igualiticos";
        break
    case (num1 > num2):
         document.getElementById("numeroM").innerHTML ="el numero 1 es mayor";
         break
    case (num1 < num2):
         document.getElementById("numeroM").innerHTML ="el numero 2 es mayor";
         break
      default:
      "<strong>Error!!! no reconoce la operacion</strong>";
      break;
  }
  return false;
}   