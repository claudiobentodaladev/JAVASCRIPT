// Sets is like array that you cann't repeat the values

const numbers = new Set([,1, 5, 10, 2, -12,55, 0, 819, 1975])

numbers.add(30) // -> to add value
numbers.delete(1) // -> to delete value
numbers.has(440) // -> to check if the value is in set
// numbers.clear() // -> to clear the set
// numbers.size() // -> to check how many values is in the set

numbers.forEach(value => {
    console.log(`Value: ${value}`)
})

console.log(numbers)