var number = window.document.querySelector('input#inum')
var inputs = window.document.querySelector('p#inputs')
var resulted = window.document.querySelector('p#resulted')
var values = []

function is_num(n) {
    if (Number(n) >= 1 && Number(n) <= 100 ) {
        return true
    } else {
        return false
    }
}

function in_num(n,l){
    if(n in l) { // n in l  OR l.indexOf(Number(n)) != -1
        return true
    } else {
        return false
    }
}
function add(){
    if(!in_num(number.value,values) && is_num(number.value)) {
        values.push(Number(number.value))
        inputs.innerHTML += `<br>`
        inputs.innerText += `value ${Number(number.value)}`
    } else {
        window.alert(`${number.value} is not valided`)
    }
    number.value = ''
    number.focus()
}

function show(){
    if (values.length == 0) {
        window.alert('add value!')
    } else {
        var sam = 0
        var medium
        resulted.innerHTML = ''
        values.sort()
        resulted.innerHTML += `<br>STASTUS: ${values}`
        resulted.innerHTML += `<br>Total number: ${values.length}`
        resulted.innerHTML += `<br>Maior number: ${values[values.length - 1]}`
        resulted.innerHTML += `<br>Menor number: ${values[values.length - 1]}`
        for(i in values){
            sam += values[i]
        }
        medium = sam / values.length
        resulted.innerHTML += `<br>Sam number: ${sam}`
        resulted.innerHTML += `<br>Medium number: ${medium.toFixed(1)}`
    }
}