function saludo(){
    let saludar

    saludar = document.getElementById("txtSaludo").value;
    document.getElementById("saludo").innerHTML = "<strong>"+saludar+"</strong>"

    return false;
}

