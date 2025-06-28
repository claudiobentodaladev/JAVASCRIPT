//DESTRUCTURING are ways to get simple atribution from object/arrays to variable


// With arrays

var full_name = ['claudio', 'bento', 'dala']

/*  This is the long way to do it
var n1 = names[0]
var n2 = names[1]
var n3 = names[2]
*/

var [n1,n2,n3] = full_name // and then this is short way to do it

console.log(`My full name is ${n1} ${n2} ${n3}`)


// With object

var person = {
    job: 'software developer',
    years_old: 16,
    from: 'angola'
}

/*  This is the long way to do it
var name = person.name
var years_old = person.years_old
var from = person.from
*/

var {job,years_old,from} = person // and then this is short way to do it
//obs: the variable name have to be the same that object key

console.log(`i am ${years_old} years old and i am ${job} and i am from ${from}`)