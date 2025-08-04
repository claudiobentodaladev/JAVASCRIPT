//THIS PROGRAM IS TO COUNT DAY OF YEAR END

let today = new Date()
let end_year = new Date(new Date().getFullYear(),11,31)
let difernt = today.getTime() - end_year.getTime()
let difernt_day = Math.ceil(-1 * (difernt / (24 * 60 * 60 * 1000)))
difernt_day = difernt_day-1
console.log(`${difernt_day} days`)