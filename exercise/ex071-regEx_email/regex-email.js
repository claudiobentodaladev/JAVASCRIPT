const readline = require("readline");

console.log("input email to check: ")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let regex_email = /([a-z0-9\.\-]{2,})\@([a-z0-9]{2,})\.([\.a-z0-9]{2,})([\.a-z0-9]{2,})?/gi;
rl.question("", (email) => {

    let email_checker_text = email.match(regex_email)
    let email_checker_bool = regex_email.test(email)

    if (email_checker_bool) console.log("VALIDE EMAIL!")
    else console.log("NOT VALIDE EMAIL!")

    console.log(email_checker_text)
    console.log(email_checker_bool)
    rl.close();
});