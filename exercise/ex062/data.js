// Date is used to get all date
let data = new Date()
console.log(data)

//GET ESPECIFIC TIME:
//year
console.log(data.getFullYear())

//month
console.log(data.getMonth())//month start with 0,you most add +1 

var months = ['jan','feb','mar','apri','may','jun','jul','ago','set','oct','nov','dec']
console.log(months[data.getMonth()])

//day of the month
console.log(data.getDate())

//day of the month
console.log(data.getDay()) // from 0 to 6 (start SUNDAY)
var week = ['sun','mon','tue','wed','tji','fri','sat']
console.log(week[data.getDay()])

//hour
console.log(data.getHours())

//minute
console.log(data.getMinutes())