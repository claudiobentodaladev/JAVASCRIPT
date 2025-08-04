const count = require('./module.child') // require is used to import function and data from other file 

console.log("parent")

console.log(`add ${count.add(1,3)}`)
console.log(`subtract ${count.subtract(1,3)}`)

console.log(`Data in other file: ${count.greeting}`)