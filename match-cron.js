function matchCron(cron,date){
    let cronArr = cron.split(' ')
    let cronIndex = 0
    let cronVal = 0
    for (let i= 0; i<cronArr.length; i++){
        if (cronArr[i] != '*'){
            cronIndex = i
            cronVal = parseInt(cronArr[i])
        }
    }
    if (cronVal === 0) {
        return true
    }
    switch (cronIndex){
        case 0: // Minute
            return date.getMinutes() === cronVal
        case 1: // Hour
            return date.getHours() === cronVal
        case 2: // Day of the Month 
            return date.getDate() === cronVal
        case 3: // Month of the Year
            return (date.getMonth() + 1) === cronVal
        case 4: // Day of the Week
            return date.getDay() === cronVal
    }
    return true
}