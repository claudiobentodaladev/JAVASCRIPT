// FINALLY 

//THESE CODE BLOCK IS RUN WHEN THERE IS:
try {
    // NO mistake 
    sam(3,2)
    console.log('There is no mistake')
} catch (error) {
    // MISTAKE 
    console.log(`Mistake - ${error}`)
} finally {
    // Either way this code block is run
    console.log('EITHER WAY!')
}