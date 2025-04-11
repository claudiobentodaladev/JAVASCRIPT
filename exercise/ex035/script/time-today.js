var time = new Date()
var hour = time.getHours()
var minute = time.getMinutes()
var back = window.document.querySelector('body#back')
var time = window.document.querySelector('p#time')
var letter = window.document.querySelector('#letter')

time.innerText = `${hour}:${minute}`

if(hour < 12){
    back.style.background = 'wheat'
}
else if(hour >= 12 && hour < 18){
    back.style.background = 'brown'
}
else{
    back.style.background = '#1f1f1f'
    letter.style.color = 'white'
}