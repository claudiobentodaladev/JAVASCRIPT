/* 
exports.name = function name(params) {
    return params;
}
            OR

exports.name = function (params) {
    return params;
}
            OR
*/

//to export function from single function
exports.add = (a,b) => a + b;
exports.subtract = (a,b) => a - b;

exports.greeting = "hello, claudio!"    // to export data

console.log("child!");

/*
To export function from module function

module.exports = {
    add,
    subtract
}
*/