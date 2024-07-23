
function tabla(){

  let num = document.getElementById("txtNumeroUno").value;

  let contar=0;
  let multi;

   while(contar < num){
    contar=contar+1;

    multi=num*contar;

    document.getElementById("resultado").innerHTML += num+"*"+contar+"= "+multi+"\n";
  }
  return false;
}
