function firstDayWeek(week, year) {
    let date = (1 + ((week - 1) * 7)) 
    let monday = new Date(year, 0, date)
    while (monday.getDay() !== 1) {
        if (monday.getFullYear() == year - 1) {
            return '01-01-' + year.toString()
        }
        monday.setDate(monday.getDate() - 1)
    }
    if (year.toString().slice(0, 2) == '00') {
        monday.setDate(monday.getDate() + 1)
    }
    let resDate = `${monday.getDate().toString().padStart(2, '0')}`
    let resMonth = `${(monday.getMonth() + 1).toString().padStart(2, '0')}`
    let resYear = `${year.toString().slice(0, 2) == '00' ? '00' + monday.getFullYear().toString().slice(-2) : monday.getFullYear().toString()}`
    let result = `${resDate}-${resMonth}-${resYear}`
    return result
}