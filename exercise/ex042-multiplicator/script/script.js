function generar(){
    var product = window.document.querySelector('input#iproduct').value
    var show = window.document.querySelector('div#show')

    product = Number(product)
    show.innerHTML = ''
    for(var start = 0;start <= 5; start++){
        show.innerHTML += `<br>${product} X ${start} = ${product*start}<br>`
    }
}