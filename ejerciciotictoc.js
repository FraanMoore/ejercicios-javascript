//Escriba una rutina que imprima los números del 1 al 100 pero: 
//cuando el número sea múltiplo de 3, imprima “Tic”, en lugar del número. 
//Cuando el número sea múltiplo de 5, imprima “Toc”, en lugar del número. 
//Cuando el número sea múltiplo tanto de 3 como de 5, imprima “TicToc”, en lugar del número.


for ( i = 1; i <= 100; i++) {
    if( i % 3 === 0){
        console.log("tic")
    }
    else if( i % 5 === 0 ){
        console.log("toc")
    }else {
        console.log(i)
    }

};
