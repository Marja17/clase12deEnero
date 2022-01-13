/*Escribir un programa que detecte el cupón que tiene el usuario

Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un 
 cupón equivocado
*/
let precio= parseInt(prompt('Escribe el precio'))
let cuponDescuento = prompt ('Escribe tu cupón')

let descuento; 

switch(cuponDescuento){
    case 'Bronce':
    descuento = precio * 0.95;
    break;
    case 'Plata':
    descuento = precio *0.90;
    break;
    case 'Oro':
    descuento = precio* 0.80;
    break;
    case 'Platino':
    descuento = precio * 0.75;
    break ;
    default:
    descuento =('Cupón erróneo');
    break;
}


    document.write(`El precio original es ${precio} y tu descuento es =  ${descuento}`);
