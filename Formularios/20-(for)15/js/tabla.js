
function tabla(){

  let num = document.getElementById("txtNumeroUno").value;

  let contar=0;
  let multi;

  for ( contar = 1; contar <= num; contar++) {
     multi = num * contar;
    document.getElementById("resultado").innerHTML += num + "*" + contar + "= " + multi + "<br>";
  }
  return false;
}
