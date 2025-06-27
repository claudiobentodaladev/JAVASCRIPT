// ERROR 

//THESE CODE BLOCK IS RUN WHEN THERE IS:
try {
    // NO mistake 
    sam(3,2)
    console.log('There is no mistake')
} catch (error) { // error is a private variable that is saved the mistake
    // MISTAKE 
    console.log(`Mistake - ${error}`)
}