function isValid(date1){
    return date1 > 0 || date1 < 0  // date earlier than year 1970 has a negative milliseconds / value/number
}

function isAfter(date1, date2){
    return isValid(date1) && isValid(date2) && (date1 > date2)
}

function isBefore(date1, date2){
    return isValid(date1) && isValid(date2) && (date1 < date2)
}

function isFuture(date1){
    return isValid(date1) && (date1 > Date.now())
}

function isPast(date1){
    return isValid(date1) && (date1 < Date.now())
}