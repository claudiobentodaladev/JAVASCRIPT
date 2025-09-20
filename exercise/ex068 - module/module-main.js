const { add, greeting, subtract } = require('./module.child') // require is used to import function and data from other file 

console.log("parent")

console.log(`add ${add(1, 3)}`)
console.log(`subtract ${subtract(1, 3)}`)

console.log(`Data in other file: ${greeting}`)