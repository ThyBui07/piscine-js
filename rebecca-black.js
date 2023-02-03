function isFriday (date){
    return (date.getDay() === 5)
}

function isWeekend(date){
    return (date.getDay() === 6) || (date.getDay() === 7)
}

// Leap Year
// If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
// If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
// If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
// The year is a leap year (it has 366 days).
// The year is not a leap year (it has 365 days).
function isLeapYear(date) {
    let year = date.getFullYear()
    if(year % 4 !== 0) {
        return false
    } else if (year % 100 !== 0) {
        return true
    } else if (year % 400 !== 0) {
        return false
    } else {
        return true
    }
}

// Last Day of the month
// Get the timestamp of the date.
// Add 1 day in milliseconds to the timestamp.
// Check if the day of the month for the date is the 1st.
function isLastDayOfMonth(date){
    let msOneDay = 1000 * 60 * 60 * 24
    return new Date(date.getTime() + msOneDay).getDate() === 1
}