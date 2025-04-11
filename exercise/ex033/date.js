// Get date from system, where the script is running
var now = new Date()
var hour = now.getHours()
console.log(`Right now is ${hour}`)

if(hour < 12){
    console.log('So, Good Morning!')
}
else if(hour > 18){
    console.log('So, Good Afternoon!')
}
else{
    console.log('So, Good Night')
}