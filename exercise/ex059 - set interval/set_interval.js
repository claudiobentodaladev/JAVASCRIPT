//SET INTERVAL is used to run fuction by the second

var time = window.document.querySelector('div#time')
var title = window.document.querySelector('h1')
var show = window.document.querySelector('p')
var count = 10
time.innerHTML = count
function start() {
    stoped = setInterval(function(){
        if(count === 0){
            show.style.display = 'block'
            show.style.color = 'red'
            show.innerText = 'Times UP!'
            title.style.color = 'red'
            time.style.color = 'red'
        }
        else{
            count -= 1
            time.innerHTML = count
            show.style.display = 'block'
            show.innerText = 'Times STARTED!'
            show.style.color = 'green'
            title.style.color = 'green'
            time.style.color = 'green'
        }
    },1000)
}

function stop(){
    clearInterval(stoped);
    if(count === 0){

    } else{
        show.style.display = 'block'
        show.style.color = 'red'
        show.innerText = 'Counter STOPED!'
        title.style.color = 'red'
        time.style.color = 'red'
    }
}