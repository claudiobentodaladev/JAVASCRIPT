const fullname = {
    name: 'claudio',
    surname: 'bento',
    lastname: 'dala'
}
function number_text (number){
    if (number == 1) {
        return"one";
    } else  if(number== 2){
        return"two";
    } else  if(number== 3){
        return"three";
    }else  if(number== 4){
        return"four";
    }else  if(number== 5){
        return"two";
    }else  if(number== 6){
        return"six";
    }else  if(number== 7){
        return"seven";
    }else  if(number== 8){
        return"eigth";
    }else  if(number== 9){
        return"nine";
    }else  if(number== 10){
        return"ten";
    }else  if(number== 11){
        return"eleven";
    }else  if(number== 12){
        return"twelve";
    }else  if(number== 13){
        return"thrteen";
    } else  if(number== 14){
        return"fourteen";
    } else  if(number== 15){
        return"fiveteen";
    } else  if(number== 16){
        return"sixteen";
    }
}
const language = ['portuguese','english']
const yearsold = 16


export{
    fullname,
    number_text,
    language,
    yearsold
}