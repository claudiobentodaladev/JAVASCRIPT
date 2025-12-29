// CUSTOn ERROR MESSAGE

var number = 1
try {
    if(number != 10) {
         throw new Error(`Number ${number} is diferent of 10`) // throw is used to creat a custon error message 
    } else {
        console.log(`The number is the same of ${number}`)
    }
} catch (error) {
    console.log(error)
}