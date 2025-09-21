// Callback function is used to get function into another function as a parameter

const map2 = running => {
    const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eigth", "nine", "ten"]
    for (const index in numbers) {
        running(numbers[index])
    }
}

map2(values => {
    console.log(`Couting: ${values}`)
})