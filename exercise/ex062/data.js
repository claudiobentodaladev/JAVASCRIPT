// Date is used to get all date
let date = new Date()
console.log(date)

//GET ESPECIFIC TIME:
//year
console.log(date.getFullYear())

//month
console.log(date.getMonth())//month start with 0,you most add +1 

var months = ['jan','feb','mar','apri','may','jun','jul','ago','set','oct','nov','dec']
console.log(months[date.getMonth()])

//day of the month
console.log(date.getDate())

//day of the month
console.log(date.getDay()) // from 0 to 6 (start SUNDAY)
var week = ['sun','mon','tue','wed','tji','fri','sat']
console.log(week[date.getDay()])

//hour
console.log(date.getHours()) // from 0 to 23

//minute
console.log(date.getMinutes())

//second
console.log(date.getSeconds())
