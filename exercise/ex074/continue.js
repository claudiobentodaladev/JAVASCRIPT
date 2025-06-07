// continue is used to skip a instrucion
for (let i = 0; i < 10; i++){
    if (i == 6) {
        console.log(`skiped in ${i}`)
        continue;
    }
    i++;console.log(`${i}`);i--
}