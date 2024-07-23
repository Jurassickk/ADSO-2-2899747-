function contador(){

  let num1 = document.getElementById("txtNumeroUno").value;

  let contador =0;

  for( contador = 1; contador <= num1; contador++){
    document.getElementById("contadores").innerHTML += "<strong>"+contador+"</strong>";
  }

  return false;

}
