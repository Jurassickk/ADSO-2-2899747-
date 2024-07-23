/**
 * Autor: Viego
 * Tablas De Multiplicar (array)
 */

document.addEventListener('DOMContentLoaded', function(){

    let tabla =[];
    let multiplo = [];
    let numeroTabla;
    let numeroMultiplo;
    let resultadoPrint = "";

    for(let iteracionTabla = 0; iteracionTabla < 8; iteracionTabla++){
        numeroTabla = iteracionTabla + 1;
        multiplo =[];
        for(let iteracionMultiplo = 0; iteracionMultiplo < 10; iteracionMultiplo++){
            numeroMultiplo = iteracionMultiplo + 1;
            let resultado =  numeroTabla * numeroMultiplo;
            multiplo.push(resultado);
        }
        tabla.push(multiplo);
    }

    for( iteracionTabla = 0; iteracionTabla < tabla.length; iteracionTabla++){
        numeroTabla = iteracionTabla + 1;
        
        resultadoPrint +='<div class="card" style="width: 19rem; margin-left: 20px; margin-top: 20px;">';
        resultadoPrint +='<div class="card-body">';

        resultadoPrint += '<table class="table">';
        resultadoPrint += '<tr><th scope ="col" colspan="2">TABLA DEL '+numeroTabla+'</tr></td>';

        for( iteracionMultiplo = 0; iteracionMultiplo < multiplo.length; iteracionMultiplo++){
            numeroMultiplo = iteracionMultiplo + 1;

            resultadoPrint += '<tr><td>'+numeroMultiplo+' x '+numeroTabla+' =  '+tabla[iteracionTabla][iteracionMultiplo]+'</tr></td>';

        }

        resultadoPrint += '</table>';
        resultadoPrint +='</div>';
        resultadoPrint +='</div>';
    }
    document.getElementById('resultado-tablas').innerHTML = resultadoPrint;

});