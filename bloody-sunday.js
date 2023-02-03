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

