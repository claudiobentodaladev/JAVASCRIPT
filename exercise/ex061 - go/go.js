function go() {
    var name = window.document.querySelector('input#iname').value
    var language = window.document.querySelector('select#ilang').value
    var show = window.document.querySelector('p#show')

    if (name == "") {
        window.alert('IPUT NAME!')
    } else{
        show.innerHTML =`${name} speak ${language}`
    }
    window.open('show.html')
}