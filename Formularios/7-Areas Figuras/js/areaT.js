function area(){
  
    let base = parseInt(document.getElementById("txtNumeroUno").value);
    let altura = parseInt(document.getElementById("txtNumeroDos").value);
  
    let areaT = (base*altura)/2;
  
    document.getElementById("areaT").innerHTML="<strong> El area del Triangulo: "+areaT+"</strong>";
  
    document.getElementById("lado1").innerHTML="<strong>"+base+"</strong>";
    document.getElementById("lado2").innerHTML="<strong>"+altura+"</strong>";
  
    return false
  }
  