function area(){
  
    let base = parseInt(document.getElementById("txtNumeroUno").value);
    let altura = parseInt(document.getElementById("txtNumeroDos").value);
  
    let area = base*altura;
  
    document.getElementById("areaR").innerHTML="<strong> El area del Rectangulo: "+area+"</strong>";
  
    document.getElementById("lado1").innerHTML="<strong>"+base+"</strong>";
    document.getElementById("lado2").innerHTML="<strong>"+altura+"</strong>";
  
    return false
  }