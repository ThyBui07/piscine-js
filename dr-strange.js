function addWeek(date){    
    let day0 = new Date('0001-01-01') // create a starting date reference
    let milliSecInADay=1000*3600*24 // 86400000ms in a day
    let dif = date-day0    // gives the index to access arr week
    let dayDif = dif/milliSecInADay 
    let week=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','secondMonday','secondTuesday','secondWednesday','secondThursday','secondFriday','secondSaturday','secondSunday']
    return week[dayDif%14]
}

function timeTravel({date,hour,minute,second}){   //takes in obj as parameters with  {date, hour, minute, second} as keys
    date.setHours(hour)   
    date.setMinutes(minute)   
    date.setSeconds(second)   
    return date
}