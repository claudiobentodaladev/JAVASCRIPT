var number = window.document.querySelector('input#inum')
var inputs = window.document.querySelector('p#inputs')
var resulted = window.document.querySelector('p#resulted')
var values = []

inputs.innerHTML = ''
function is_num(n) {
    if (Number(n) >= 1 && Number(n) <= 100 ) {
        return true
    } else {
        return false
    }
}

function in_num(n,l){
    if(n in l) { // n in l  OR l.indexOf(Number(n)) != -1
        return false
    } else {
        return true
    }
}
function add(){
    if(in_num(number.value,values) && is_num(number.value)) {
        values.push(number.value)
        inputs.innerHTML += `<br>`
        inputs.innerText += `value ${number.value}`
        resulted.innerText = `${values}`
    } else {
        window.alert(`${number.value} is not valided`)
    }
    number.value = ''
    number.focus()
}

function show(){
    if (values.length == 0) {
        console.log('wrong')
    } else {
        console.log('ok')
    }
}