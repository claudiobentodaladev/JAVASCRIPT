//Promise are function that are run, stopping the code until been running or running all code and the n running this one

const getRandom = (params) => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            return resolve(Math.random)
        }, 3000);
    })
}

async function main() {
    console.log('START PROGRAM!')

    const random = await getRandom()
    console.log(random)

    console.log('AND PROGRAM!')

}
main() 