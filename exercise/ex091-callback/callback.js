// Callback function is used to get function into another function as a parameter

const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eigth", "nine", "ten"]

const map2 = (array, running) => {
    for (const index in array) {
        running(array[index])
    }
}

map2(numbers, values => {
    console.log(`Couting: ${values}`)
})