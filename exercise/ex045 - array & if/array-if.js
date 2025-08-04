let num = [3,5,1,0,14]
num.push(33)
num.sort()
let position = num.indexOf(4)
if (position == -1) {
    confirm.log(`Something is wrong, try again!`)
} 
else{
    console.log(`The index is ${position}`)
}
console.log(num)