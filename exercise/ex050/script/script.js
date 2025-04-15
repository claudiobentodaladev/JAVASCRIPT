var number = window.document.querySelector('input#inum').value
var inputs = window.document.querySelector('p#inputs')
var resulted = window.document.querySelector('p#resulted')
var values = [1,2,3]

function add(){
    if(number in values) {
        window.alert('ok')
    } else {
        window.alert('wrong')
    }
}
function show(){
    
}