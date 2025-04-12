function check(){
    var time = new Date()
    var barth = window.document.querySelector('input#ibarth')//Não esta a ficar number
    var years = Number(barth)
    var years_olds = time.getFullYear() - years
    //Pegar valor do radio
    var sex = window.document.querySelector('input#f').value
    var show = window.document.querySelector('p#show')
    //if..else do sexo
    show.innerText = `${sex} ${years_olds} years old`
}