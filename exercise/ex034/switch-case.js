var date = new Date()
var week_day = date.getDay()
//sunday(0), monday(1), tuesday(2), wednesday(3), quinta(4), friday(5), saturday(6)
switch(week_day){
    case 0:
        console.log('Today is Sunday')
        break
    case 1:
        console.log('Today is Monday')
        break
    case 2:
        console.log('Today is Tuesday')
        break
        case 3:
        console.log('Today is Wednesday')
        break
        case 4:
            console.log('Today is Quinta')
            break
        case 5:
            console.log('Today is Friday')
            break
        case 6:
            console.log('Today is Satarday')
            break
        default:
            console.log('ERROR, TRY AGAIN! :(')
}