import readline from "readline";

console.log("ola: ")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = () => {
    let value;
    rl.question("", (Value) => {
        console.log(Value)
        rl.close();
    });
    return value
};

input();