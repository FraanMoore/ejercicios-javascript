//Haga un programa que filtre el arreglo y 
//devuelva un arreglo con solo el nombre de sus amigos. 
//Si un nombre tiene exactamente 4 letras, 
//¡puedes estar seguro que es amigo tuyo! De lo contrario, puede estar seguro de que no…

amigos = ["Ryan", "Kieran", "Mark", "Miguel"] ;

const siEsMiAmigo = amigos.filter(amigo => amigo.length === 4);
console.log(siEsMiAmigo)
