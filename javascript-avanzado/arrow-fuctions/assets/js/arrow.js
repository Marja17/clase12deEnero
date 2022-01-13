/*arrow fuction
función flecha

es un bloque de código reutilizable
puede tener o no parametros de entrada. 
puede devolver o no un valor 
si es una función en flecha, se pone en constante y el simbolo de flecha 
Antes de utilizarlas deben de estar declaradas

El único detalle con esta función es que no se puede llamar antes de ser declarada
*/

/*function sumar (numero1, numero2){
    return numero1 + numero2
}*/

const sumar= (numero1, numero2) => {
    return numero1 + numero2
}

let numero1 = parseInt (prompt ('Numero 1'));
let numero2 = parseInt (prompt ('Numero 2'));
let suma= sumar (numero1, numero2)


document.write(`La suma de ${numero1} y ${numero2} es ${suma} <br>`);

