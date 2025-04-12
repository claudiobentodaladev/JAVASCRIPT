function run(){
    var time = new Date()
    var hour = time.getHours()
    var minute = time.getMinutes()
    var time = window.document.querySelector('p#time')
    var letter = window.document.querySelector('#letter')
    
    time.innerText = `${hour}:${minute}`
    
    if(hour < 12){
        document.body.style.background = 'wheat'
    }
    else if(hour >= 12 && hour < 18){
        document.body.style.background = 'brown'
    }
    else{
        document.body.style.background = '#1f1f1f'
        letter.style.color = 'white'
    }
}