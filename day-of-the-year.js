// Create a function named dayOfTheYear which accepts a Date. Your function should return the number of days since the first day of that year.

function dayOfTheYear(date) {
    var start = new Date(date.getFullYear(), 0, 0)  // get first day of the given year
    var diff = date - start //gives the diff in ms
    var oneDay = 1000 * 60 * 60 * 24
    var day = Math.floor(diff / oneDay)
    return day > 0? day: 1
}