// SPREAD OPERATOR allow us spread string and array elements.we may use it on:

// -> ARRAYS

var name1 = ['bento', 'dala']
/* Other way for array atribuition, with spread operator.
var name2 = ['claudio'].concat(name1)
*/
var name2 = ['claudio',...name1]
console.log(`ARRAY: ${name2}`)


// -> STRING

var sentece = 'this is a sentece!'
/* Other way to get evry char in string, with spread operator.
var char = sentece.split('')
*/
var char = [...sentece]
console.log(`STRING: ${char}`)

// -> FUNCTION

function sam(x,y,z) {
    return x + y + z
}
/* other way to put value in function's parameters, with spread operator
let resulted = sam(10,20,30)
*/
let values = [10,20,30]
let resulted = sam(...values)
console.log(`FUNCTION: ${resulted}`)