// continue is used to skip a instrucion
for (let i = 0; i < 10; i++){
    i++;console.log(`${i}`);i--
    if (i == 6) {
        console.log(`skiped in ${i}`)
        continue; // the instrucion is skiped in this and then continued
    }
}