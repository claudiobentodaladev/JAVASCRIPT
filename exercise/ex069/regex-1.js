let text = 'this is a text';
let regex = /this/g;

let result = text.match(regex);
/*
            OR
let result = text.match(/this/g);
*/
console.log(result) // if false it shows « null »