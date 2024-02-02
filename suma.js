//Escribe una función llamada sumaDigitos que retorne la suma de todos los dígitos de un número dado, por ejemplo:
//5646 => 5+6+4+6 => 21


function sumaDigitos (randomNumber) {
    return randomNumber.toString().split('').map(Number).reduce((acumulador, digito) => acumulador + digito, 0);

}

const randomNumber = 5646;
const total = sumaDigitos(randomNumber);


console.log(total);