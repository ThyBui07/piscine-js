function countLeapYears(date){
    let years = parseInt(date.getFullYear())
    let result = Math.floor(years / 4) - Math.floor(years / 100) + Math.floor(years / 400)
    return result === 0? 0: result-1
}

