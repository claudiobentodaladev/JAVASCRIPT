//EXEMPLE FATORIAL: 5! = 5 X 4 X 3 X 2 X 1
function fatorial(n){
    var fat = 1
    for(var i = n;i > 1;i--){
        fat *= i
    }
    return fat
}
console.log(fatorial(5))