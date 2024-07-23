function cuadrados(){

  let num1 = document.getElementById("txtNumeroUno").value;
  let num2 = document.getElementById("txtNumeroDos").value;
  let num3 = document.getElementById("txtNumeroTres").value;

  cuad1 = num1 * num1;
  cuad2 = num2 * num2;
  cuad3 = num3 * num3;

  switch(true){
    case (cuad1 == cuad2 && cuad2 == cuad3):
      document.getElementById("cuadrado").innerHTML = "son igualiticos";
      break;
    case (cuad1 > cuad2 && cuad1 > cuad3):
      document.getElementById("cuadrado").innerHTML = "el cuadrado 1 es mayor";
      break;
    case (cuad2 > cuad1 && cuad2 > cuad3):
      document.getElementById("cuadrado").innerHTML = "el cuadrado 2 es mayor";
      break;
    case (cuad3 > cuad1 && cuad3 > cuad2):
      document.getElementById("cuadrado").innerHTML = "el cuadrado 3 es mayor";
      break;
    case (cuad1 == cuad2):
      document.getElementById("cuadrado").innerHTML = "el cuadrado 1 y el cuadrado 2 son iguales";
      break;
    case (cuad1 == cuad3):
      document.getElementById("cuadrado").innerHTML = "el cuadrado 1 y el cuadrado 3 son iguales";
      break;
    case (cuad2 == cuad3):
      document.getElementById("cuadrado").innerHTML = "el cuadrado 2 y el cuadrado 3 son iguales";
      break;  
  }
  return false;
}   
