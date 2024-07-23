function sumar(){
    
    let num1 = parseInt(document.getElementById("txtNumeroUno").value);
    let num2 = parseInt(document.getElementById("txtNumeroDos").value);

    let suma = num1 + num2;

    document.getElementById("suma").innerHTML = "<strong>"+suma+"</strong>"

    return false;

}
