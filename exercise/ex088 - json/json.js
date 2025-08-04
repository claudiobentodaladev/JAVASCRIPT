/*  JSON ( JavaScript Object Notation) is a way to convert OBJECT to text and TEXT to object,
simple way to system comunication.                                                         */

const person = {
    name: 'claudio bento dala',
    yearsOld: 16,
    job: 'web developer'
}

var text = JSON.stringify(person) // JSON.stringify(object) is used to convert OBJECT to TEXT

document.querySelector('pre#area').innerHTML = text

export{
    text
}