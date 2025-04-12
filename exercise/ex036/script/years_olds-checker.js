function inside(){
    var buttom = window.document.querySelector('input#check')
    buttom.style.width = '70px'
    buttom.style.height = '30px'
    buttom.style.transition = '.2s'
}
function check(){
    var time = new Date()
    var year = time.getFullYear()
    var barth = window.document.querySelector('input#ibarth').value
    var show = window.document.querySelector('p#show')

    if(barth > year || barth <= 0){
        window.alert('ERROR, TRY AGAIN!')
    } else{
        var sex = window.document.getElementsByName('sex')
        var years_old = year - Number(barth)
        if(sex[1].checked){
            var genero = 'man'
        } else{
            var genero = 'woman'
        }
        show.innerText = `${genero} ${years_old} years old`
    }
}
//DEPOIS FAZER MOUSEIN E MOUSEOUT NO BOTÃO