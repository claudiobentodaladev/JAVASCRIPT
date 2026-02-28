var months = ['jan','feb','mar','apri','may','jun','jul','ago','set','oct','nov','dec']

const date = {
    year:  new Date().getFullYear(),
    month: months[new Date().getMonth()],
    day: new Date().getDate(),
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
    milliseconds:  new Date().getMilliseconds()
};

const fullDate = `${date.month} ${date.day} ${date.year} ${date.hour}:${date.minute}:${date.seconds}:${date.milliseconds}`

console.log(fullDate)