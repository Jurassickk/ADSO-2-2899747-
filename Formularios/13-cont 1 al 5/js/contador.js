function contador(){

  let num1 = document.getElementById("txtNumeroUno").value;

  let contador =0;
  
  while(contador < num1){
    contador = contador + 1;
    document.getElementById("contadores").innerHTML += "<strong> "+contador+" </strong>";
  }

  return false;

}
