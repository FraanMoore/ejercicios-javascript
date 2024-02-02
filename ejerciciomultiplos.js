//Si listamos todos los números por debajo del 10 que son múltiplos de 3 o 5 obtenemos: 3, 5, 6 y 9. 
//La suma de estos múltiplos es 23. 
//Realice un algoritmo para encontrar la suma de todos los múltiplos de 3 y 5 por debajo de 1000.

let suma = 0;
for ( i = 1; i <= 100; i++) {
    if( i % 3 === 0 || i % 5 === 0 ){
        suma += i
    }

};
console.log(suma)