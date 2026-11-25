const { exec } = require("node:child_process");
const { promisify } = require("node:util");

const execAsync = promisify(exec);

async function main(instruc) {
    try {
        const { stdout, stderr } = await execAsync(instruc.join("\n"), {
            shell: "/bin/bash",
        });

        if (stderr) console.error(stderr);

        console.log(stdout);
    } catch (err) {
        console.error(`Execution error: ${err}`);
    }
}

main([
    'readonly name="Claudio"',
    "age=17",
    `echo "My name is $name and i'm $age years old"`,
]);
