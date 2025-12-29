//SETTIMEOUT: run a fuction or block on definty time
function start() {
    window.document.querySelector('h1').style.color = 'green'
    window.document.querySelector('div#time').style.color = 'green'
    window.document.querySelector('p').style.color = 'green'
    window.document.querySelector('p').style.display = 'block'
    window.document.querySelector('p').innerText = 'time stated'
    time = setTimeout( function() {
        window.document.querySelector('p').innerText = 'finished'
    }, 2000 )
}
function stop() {
    clearTimeout(time)
    window.document.querySelector('h1').style.color = 'red'
    window.document.querySelector('div#time').style.color = 'red'
    window.document.querySelector('p').innerText = 'time STOPED!'
    window.document.querySelector('p').style.color = 'red'
}