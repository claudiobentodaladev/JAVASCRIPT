function load(){
    return true
}
function loaded(){
    return true
}
let head = window.document.querySelector('header')
let main = window.document.querySelector('main')
let foot = window.document.querySelector('footer')
if(load()) {
    head.style.display = 'none'
    main.style.display = 'none'
    foot.style.display = 'none'
    alert('wait...')
}
if(loaded()){
    head.style.display = 'block'
    main.style.display = 'block'
    foot.style.display = 'block'
    alert('ok')
}