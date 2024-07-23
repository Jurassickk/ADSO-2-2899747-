function promedios() {

  let num1 = parseInt(document.getElementById("txtNumeroUno").value);
  let num2 = parseInt(document.getElementById("txtNumeroDos").value);
  let num3 = parseInt(document.getElementById("txtNumeroTres").value);

  let promedio = (num1+num2+num3)/100;

  document.getElementById("promedio").innerHTML="<strong> Promedio de los tres numeros: "+promedio+"</strong>"

  return false

}
