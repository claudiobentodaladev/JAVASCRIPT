var menor 
var maior 
var list = [8,2,3,1,5,,23,6,7,4,9]
list.sort()
for(var i in list){
    if (i > list[i]) {
        maior = 0
    } else {
        maior = list[i]
    }
}
console.log(`Maior: ${maior}`)
console.log(`Menor: ${menor}`)