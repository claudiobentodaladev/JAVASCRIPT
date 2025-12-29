let num = [3,5,1,0,14]
num.sort()
// ARRAY is used to more of one value
/*for(let i = 0; i < num.length;i++){
    console.log(` Position ${i}, value  ${num[i]}`)
}*/
for (var i in num){
    console.log(` Position ${i}, value  ${num[i]}`)
}   