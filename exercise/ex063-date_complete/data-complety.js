//complety date
let date = new Date()
let months
let day
let years = date.getFullYear()
if (date.getMonth() >= 0 && date.getMonth()<= 9) {months = `0${date.getMonth()}`}
else{months = date.getMonth()}
if (date.getDate() >= 0 && date.getDate()<= 9) {day = `0${date.getDate()}`}
else{day = date.getMonth()}
console.log(`/${years}/${months}/${day}`)
console.log(date)