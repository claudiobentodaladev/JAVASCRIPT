import { text } from "./json.js";

var object = JSON.parse(text) // JSON.parse(text) is used to conver TEXT to OBJECT

console.log(object.job)
console.log(`Text: ${text}`)