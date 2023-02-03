function bloodySunday(date) {
    const reference = new Date('0001-01-01')
    let diffMillisec = Math.round(((reference.getTime()) - (date.getTime())))
    let diffDays = Math.abs(millisecToDays(diffMillisec))
    let dayCount = (diffDays % 6) + 1

    switch (dayCount) {
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
    }
}

function millisecToDays(millisec) {
    return Math.floor(millisec / (1000 * 60 * 60 * 24))
}

// console.log(bloodySunday(new Date('0001-01-01'))) // 'Monday')
// console.log(bloodySunday(new Date('0001-01-02'))) // 'Tuesday')
// console.log(bloodySunday(new Date('0001-01-03'))) // 'Wednesday')
// console.log(bloodySunday(new Date('0001-01-04'))) // 'Thursday')
// console.log(bloodySunday(new Date('0001-01-05'))) // 'Friday')
// console.log(bloodySunday(new Date('0001-01-06'))) // 'Saturday')
// console.log(bloodySunday(new Date('0001-01-07'))) // 'Monday')
// console.log(bloodySunday(new Date('0001-12-01'))) // 'Friday')
// console.log(bloodySunday(new Date('1664-08-09'))) // 'Saturday')
// console.log(bloodySunday(new Date('2020-01-01'))) // 'Monday')
// console.log(bloodySunday(new Date('2048-12-08'))) // 'Thursday')