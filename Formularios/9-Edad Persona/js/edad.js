function Calcularedad(){
  let fecha = document.getElementById("txtFecha").value;
  let fechaN = new Date(fecha);
  let fechaH = new Date();
  let edad = fechaH.getFullYear() - fechaN.getFullYear();
  document.getElementById("edad").innerHTML = "<strong>"+edad+"</strong>";

  return false;
}