
/* flujo orden en que se ejecuta las declaraciones 
java scrip tiene un orden de arriba a abajo. Si no se manda a llamar una fencion no puede ser declarada*/

let miVariable = 10;
console.log (miVariable);

/*Estructura de control de flujo*/
/*let edad = 17
let tienesINE = true 

if(edad >= 18 || tienesINE == true ){

console.log ('puedes entrar')

}

else{
    console.log ('No puedes entrar')
}
/*operador ternario

(condicion a evaluar) ? se ejecuta si es verdadero: se ejecuta si es falso solo se puede hacer con una desicion verdadero o falso*/

let edad1 = 19;

/*(edad1 >= 18) 
? console.log ("Mayor de edad") 
: console.log ('Menor de edad ')


let pregunta = (edad1 >= 18)
? 'Mayor de edad'
: 'Menor de edad';

console.log(Pregunta)*/

let preguntaEdad = `Tengo  ${edad1} años y soy ${ (edad1>=18) ?'Mayor' : 'Menor'} de edad`;

console.log (preguntaEdad)

let dia= 4;
if (dia === 0){
    console.log ('Domingo')
}
else if (dia === 1){
    (console.log ('lunes'))
}
else if (dia === 2){
    console.log ('martes')
}
else if (dia === 3){
    console.log ('miercoles')
}

else if (dia === 4){
    console.log ('jueves')
 }

 else if (dia === 5){
    console.log ('viernes')
 }

 else if (dia === 6){
    console.log ('sabado')
 } 
 else if (dia === 7){
    console.log ('Domingo')
 }
 else {
     console.log ('no es un dia')
 }

 /*switch (variable a evaluar){
     case valor:
         -codigo a ejecuta-
         break;
         case valor 
         -codigo a ejecutar-
         break;
default: -codigo a ejecutar si sale de las opciones
break;
 */
let dia2 = 4;

 switch (dia2){
        case 0:
        console.log('Domingo');
        break; 
        case 1:
        console.log ('lunes');
        break;
        case 2:
        console.log ('Martes')
        break;
        case 3:
        console.log ('miercoles')
        break;
        case 4: 
        console.log ('jueves')
        break; 
        case 5: 
        console.log ('viernes')
        break;
        case 6:
        console.log ('sabado')
        break;
        default:
        console.log ('no es un día valido')
        break;
 }


 let  cuponDescuento = 'Plata';

 let descuento; 

 switch(cuponDescuento){
     case 'Bronce':
     descuento = 5;
     break;
     case 'Plata':
     descuento = 10;
     break;
     case 'Oro':
     descuento = 15;
     break;
     default:
     console.log ('Cupón erróneo');
     break;
 }

 console.log (descuento)