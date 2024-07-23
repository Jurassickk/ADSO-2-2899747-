function area(){
  
  let lado1 = parseInt(document.getElementById("txtNumeroUno").value);
  let lado2 = parseInt(document.getElementById("txtNumeroDos").value);

  let area = lado1*lado2;

  document.getElementById("areaC").innerHTML="<strong> El area del Cuadrado: "+area+"</strong>";

  document.getElementById("lado1").innerHTML="<strong>"+lado1+"</strong>";
  document.getElementById("lado2").innerHTML="<strong>"+lado2+"</strong>";

  return false
}
