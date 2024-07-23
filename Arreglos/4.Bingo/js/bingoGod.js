/**
 * Autor: Viego
 * Bingou
 */
document.addEventListener("DOMContentLoaded", function () {
  function generarBingo(tipo) {
    let Bingo = [];

    // Generar números aleatorios para las casillas del Bingo
    for (let iteracion = 0; iteracion < 5; iteracion++) {
      Bingo[iteracion] = [];
      for (let iteracion2 = 0; iteracion2 < 5; iteracion2++) {
        Bingo[iteracion][iteracion2] = Math.floor(Math.random() * 99) + 1;
      }
    }

    /** Para llenar el bingo de con multiplos de 2  -- Otra manera
      let aumento = 1;
      for (iteracion = 0; iteracion < 5; iteracion++) {
        for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
          Bingo[iteracion][iteracion2] = 2 * aumento;
          aumento++;
        }
      }
   */

    // Marcar las 3 "X"
    if (tipo === 2) {
      
      
      for (iteracion = 0; iteracion < 3; iteracion++) {
        for (iteracion2 = 0; iteracion2 < 3; iteracion2++) { 
          if (iteracion === iteracion2 || iteracion + iteracion2 === 2) {      //"x" de la izquierda arriba
            Bingo[iteracion][iteracion2] = '<div class="x">' + "x" + "</div>";
          }
        }
      }
      for (iteracion = 2; iteracion < 5; iteracion++) {
        for (iteracion2 = 0; iteracion2 < 3; iteracion2++) {
          if (
            iteracion + iteracion2 == (iteracion2 + 1) * 2 ||                  //"x" de la izquierda abajo
            iteracion + iteracion2 === 4
          ) {
            Bingo[iteracion][iteracion2] = '<div class="x">' + "x" + "</div>";
          }
        }
      }
      for (iteracion = 0; iteracion < 3; iteracion++) {
        for (iteracion2 = 2; iteracion2 < 5; iteracion2++) {
          if (
            iteracion + iteracion2 === (iteracion2 - 1) * 2 ||                 //"x" de la derecha 
            iteracion + iteracion2 === 4
          ) {
            Bingo[iteracion][iteracion2] = '<div class="x">' + "x" + "</div>";
          }
        }
      }
    }

    // Marcar una sola "X"
    if (tipo === 4) {
      for (iteracion = 0; iteracion < 5; iteracion++) {
        Bingo[iteracion][iteracion] = '<div class="x">' + "x" + "</div>"; // aplica las "x" en la diagonal principal
        Bingo[iteracion][4 - iteracion] = '<div class="x">' + "x" + "</div>"; // aplica las "x" en diagonales invertidas
      }
    }
    // Colorear los números correspondientes a la columna según el tipo
    if (tipo >= 5 && tipo <= 9) {
      for (let iteracion = 0; iteracion < 5; iteracion++) {
        Bingo[iteracion][tipo - 5] = Bingo[iteracion][tipo - 5]; //Reasigna cada elemento en la columna
      }
    }

    // HTML para mostrar el Bingo
    let resultadoPrint = "";
    let bingoClass =
      tipo === 5
        ? "bingo5"
        : tipo === 6
        ? "bingo6"
        : tipo === 7           //si el tipo es 5,6,7,8 o 9, se aplica la clase correspondiente
        ? "bingo7"
        : tipo === 8
        ? "bingo8"
        : tipo === 9
        ? "bingo9"
        : "";                  //Si ninguna de las condiciones anteriores es verdadera será una cadena vacía
        
    resultadoPrint += `<div class="card text-center mb-3 bingo-card ${bingoClass}">`;
    resultadoPrint += '<div class="card-body">';
    resultadoPrint += '<table class="table">';
    resultadoPrint +=
      '<thead><tr><th class="columna-0">B</th><th class="columna-1">I</th><th class="columna-2">N</th><th class="columna-3">G</th><th class="columna-4">O</th></tr></thead>';
    resultadoPrint += "<tbody>";

    for (iteracion = 0; iteracion < 5; iteracion++) {
      resultadoPrint += "<tr>";
      for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
        let columnaClass =
          tipo === 3                                           // Aquí se determina la clase CSS que se asignará a la celda actual
            ? `columna-${iteracion2}`
            : tipo >= 5 && tipo <= 9 && iteracion2 === tipo - 5
            ? `columna-${iteracion2}`: "";
        resultadoPrint += `<td class="${columnaClass}">${Bingo[iteracion][iteracion2]}</td>`;
      }
      resultadoPrint += "</tr>";
    }

    resultadoPrint += "</tbody>";
    resultadoPrint += "</table>";
    resultadoPrint += "</div>";
    resultadoPrint += "</div>";

    return resultadoPrint;
  }

  let contenedor = document.getElementById("bingou");
  contenedor.innerHTML += generarBingo(1); // Primer Bingo

  contenedor.innerHTML += generarBingo(2); // Segundo Bingo con las 3 "X"
  contenedor.innerHTML += generarBingo(4); // Cuarto Bingo con una sola "X" de esquina a esquina
  contenedor.innerHTML += generarBingo(3); // Tercer Bingo con columnas de diferente color
  contenedor.innerHTML += generarBingo(5); // Quinto Bingo con la columna "B" de diferente color
  contenedor.innerHTML += generarBingo(6); // Sexto Bingo con la columna "I" de diferente color
  contenedor.innerHTML += generarBingo(7); // Séptimo Bingo con la columna "N" de diferente color
  contenedor.innerHTML += generarBingo(8); // Octavo Bingo con la columna "G" de diferente color
  contenedor.innerHTML += generarBingo(9); // Noveno Bingo con la columna "O" de diferente color
});


