let email = 'programmer.claudio@gmail.com';
let regex_email = /([a-z0-9\.\-]{2,})\@([a-z0-9]{2,})([\.a-z0-9]{2,})([\.a-z0-9]{2,})?/gi ;

let email_checker_text = email.match(regex_email)
let email_checker_bool = regex_email.test(email)

console.log(email_checker_text)
console.log(email_checker_bool)