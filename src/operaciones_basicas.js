function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function division(a,b){
    if(b!=0){
        return (a/b)
    }else
        return 'Error al dividir entre 0'
}

module.exports = {
    suma,
    resta,
    division
}