for(var i = 0; i < 10; i++){
    if (i == 5) {
        console.log(`broken in ${i}`)
        break;
    }
    i++;console.log(`ola ${i}`);i--
}
console.log('Finished!!!')