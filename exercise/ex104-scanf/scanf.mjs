import { createInterface, promises } from "readline";

const rl = promises.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Input your name: ", (Name) => {
    console.log(`Hello ${Name}`);
    rl.close()
});

rl.on('close', process.exit(0));