function count(){
    var start = window.document.querySelector('input#istart').value
    start = Number(start)
    var end = window.document.querySelector('input#iend').value
    end = Number(end)
    var step = window.document.querySelector('input#istep').value
    step = Number(step)
    var show = window.document.querySelector('div#ishow')
    
    if (start == 0 || end == 0 || step == 0) {
        window.alert('ERROR, BOX EMPTY!')
        window.onload()
    } 
    else if(start >= end){
        window.alert('ERROR, TRY AGAIN!')
    }
    else{
        show.innerHTML = `Counting:\n`
        for(start;start <= end;start+=step){
            show.innerHTML += `${start} -> \n`
        }
    }
}