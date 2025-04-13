function generar(){
    var product = window.document.querySelector('input#iproduct').value
    var show = window.document.querySelector('div#show')
    for(var start = 0;start > 12; start++){
        window.document.show.innerHTML = `${product} X ${start} = ${product*start}`
    }
}