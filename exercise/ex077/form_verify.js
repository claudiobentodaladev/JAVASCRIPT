let form = {
    email: 'programmer.',
    phonenumber: '935555500',
    regex: /([a-z0-9])/gi
}
let result = {
    email: form.regex.test(form.email),
    phonenumber: form.regex.test(form.phonenumber)
}
console.log(result.email)
console.log(result.email)