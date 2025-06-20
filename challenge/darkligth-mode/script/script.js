let elements = {
    botton: window.document.querySelector('button#mode'),
    main: window.document.querySelector('main')
}
function ligth() {
    elements.main.style.background = 'white'
    elements.main.style.color = 'black'
    elements.botton.style.background = 'black'
    elements.botton.style.color = 'white'
    elements.botton.innerText = 'ligth'
}
function dark() {
    elements.main.style.background = 'black'
    elements.main.style.color = 'white'
    elements.botton.style.background = 'white'
    elements.botton.style.color = 'black'
    elements.botton.innerText = 'dark'
}
function mode() {
    if (elements.main.style.background == 'black') {
        ligth()
    } else {
        dark()
    }
}
// lack fixed screen mode