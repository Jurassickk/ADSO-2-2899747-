function porcentaje() {

  let num1 = parseInt(document.getElementById("txtNumeroUno").value);

  let porcentaje = num1 / 100;

  document.getElementById("porcentaje").innerHTML="<strong>"+porcentaje+"</strong>"

  return false

}
