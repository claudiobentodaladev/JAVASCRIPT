// sessionstorage is like localstorage, but just have 5 MB storage and data is deleted when the browser is closed 

sessionStorage.setItem('name' , 'claudio');

const name = sessionStorage.getItem('name');
console.log(`the name is ${name}`);

sessionStorage.removeItem('name');

sessionStorage.clear()

// to save object in session storage
const person = {
    name: 'claudio',
    job: 'programmer',
    years_old: 16
}
sessionStorage.setItem('person', JSON.stringify(person))

// to get object in session storage and show
const getperson = sessionStorage.getItem('person');
const object_person = JSON.parse(getperson);
console.log(`Here is JSON: ${object_person.name}`)