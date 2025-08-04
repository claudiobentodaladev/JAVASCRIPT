//break is used to stop a instrucions
for(var i = 0; i < 10; i++){
    if (i == 5) {
        console.log(`broken in ${i}`)
        break; // the instrucion is stped here and do not continue
    }
    i++;console.log(`ola ${i}`);i--
}
console.log('Finished!!!')