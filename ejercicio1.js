function contrasenaValida(password){
    if ( password === "2Fj(jjbFsuj" || password === "eoZiugBf&g9" ){
        return true
    } else {
        return false
    };
}

console.log(contrasenaValida("eoZiugBf&g9"))
console.log(contrasenaValida("Hola"))
console.log(contrasenaValida("2Fj(jjbFsuj")) 
