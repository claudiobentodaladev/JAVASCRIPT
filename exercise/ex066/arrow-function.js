const n1 = 10,n2 = 5;

function subtracion(a,b) {
    return a - b;
}
console.log(`NORMAL FUNCTION: ${subtracion(n1,n2)}`);

/*  Arrow function is diferent way to creat function in javascript

const subtracion_ = (a,b) => {
    return a - b;
}
*/

//SHORT FORM, but only is used when the function only have the return line.
const subtracion_ = (a,b) =>  a - b;

console.log(`ARROW FUNCTION: ${subtracion_(n1,n2)}`)