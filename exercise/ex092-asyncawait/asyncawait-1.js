// Promise are function that are run, stopping the code until been running or running all code and the n running this one

// await is used to wait the promise came
// async is used to async function
// OBSERVATION: to use await the function must to be async

const requestCar = (drivers) => new Promise((resolve, reject) => {
    if (drivers > 0) {
        return resolve("Your driver is caming")
    } else {
        return reject("There's no drivers for your, this moment!")
    }
})

async function main() {
    const request = await requestCar(1).catch(() => {
        return "Error!"
    })

    console.log(request)

}
main()

/*          OR

const request = await requestCar(2)

request.then(message => {
    console.log(`message: ${message}`)
}).catch(err => {
    console.log(`ERROR: ${err}`)
}).finally(() => {
    console.log("FINISHED!")
})

*/