const { exec } = require("child_process");

exec(`echo "Hello, world!"`, (err, stdout, stderr) => {
    if (err) {
        console.error(`Execution error: ${err}`);
        return;
    }

    console.log(`Script output: ${stdout}`);
    if(stderr) console.error(`Script output: ${stderr}`);
});
