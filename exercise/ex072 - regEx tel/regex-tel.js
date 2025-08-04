let telephone = '+244-935555500';
let tel_regex = /\+([1-9]{1,})\-([0-9]{5,})/g ;

let tel_checker_text = telephone.match(tel_regex)
let tel_checker_bool = tel_regex.test(telephone)

console.log(tel_checker_text)
console.log(tel_checker_bool)