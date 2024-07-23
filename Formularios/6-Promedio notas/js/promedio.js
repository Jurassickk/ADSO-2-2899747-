function promedios() {

  let nota1 = parseInt(document.getElementById("txtNumeroUno").value);
  let nota2 = parseInt(document.getElementById("txtNumeroDos").value);
  let nota3 = parseInt(document.getElementById("txtNumeroTres").value);

  let porcentaje1 = 30;
  let porcetaje2 = 40;

    resuNota1=(nota1*porcentaje1)/100;
    resuNota2=(nota2*porcentaje1)/100;
    resuNota3=(nota3*porcetaje2)/100;

  let suma=resuNota1+resuNota2+resuNota3;

  document.getElementById("promedio").innerHTML="<strong> Promedio de las tres notas: "+suma+"</strong>"

  return false

}
