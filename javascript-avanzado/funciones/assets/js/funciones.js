/* funcion 
Es un bloque de codigo reutilizable. puede tener o no parametros de entrada . puede devolver o no un valor 
si se quiere devolver un valor es con la palabra reservada return y los valores 
return debe ser la ultima palabra de la función  
solo se ejecuta una vez, no es como un ciclo */

function sumar ( numero1 , numero2){
    //operaciones o código a ejecutar
    return numero1 + numero2;

}
//hay funciones que no necesitan el retunr
function restar ( numero1 , numero2){

    document.write(`La resta de ${numero1} y ${numero2} es ${numero1 - numero2} <br>`);
}

let numero1 = parseInt (prompt ('Numero 1'));
let numero2 = parseInt (prompt ('Numero 2'));
let suma= sumar (numero1, numero2)




//TEMPLATE STRING va entre backstick o comilla invertida ( `  ` ) habilitan el texto y de java scrip, para hacerlo es entre signo de pesos y llaves. Son las variables que se usas en la funcion o se puede hacer con concatenacion 

document.write(`La suma de ${numero1} y ${numero2} es ${suma} <br>`);
restar (numero1, numero2);
document.write('la suma de ' + numero1 + ' y ' + numero2 + ' es ' + suma );

