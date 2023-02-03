function format(date,formater){
    const monthArray = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ]
    const dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let result = ""
    let dateAdd=""
    let month =""
    let day = ""
    let hour = ""
    let minute = ""
    let second = ""
    let hour2 = ""
    let formaterString = formater 
    for(let i=0;i<formaterString.length;i++){
        if(formaterString[i].match(/[A-Za-z ]/g)){
        } else {
            if(formaterString[i-1] == " ") {
                formaterString = formaterString.slice(0,i) + " " + "µ"+formaterString[i] +" " +formaterString.slice(i+1)
            } else {
                formaterString = formaterString.slice(0,i) + " " +formaterString[i] +" " +formaterString.slice(i+1)
            }
            i +=2 
        }
    }
    formater= formaterString.split(" ")
    for(let i=0;i<formater.length;i++){
        switch (formater[i]) {
            case 'y':
                dateAdd += date.getFullYear()
                if(dateAdd[0] == "-") {
                    result += dateAdd.substring(1) + " "
                } else {
                    result += dateAdd + " "
                }
                break
            case "yyyy":
                dateAdd+=date.getFullYear()
                if(dateAdd[0] == "-") {
                    dateAdd = dateAdd.substring(1)
                }
                while(dateAdd.length<4) {
                    dateAdd = "0" + dateAdd
                }
                result += dateAdd + " "
                break
            case "G":
                if(date.getFullYear() > 0) {
                    result += "AD "
                } else {
                    result += "BC "
                }
                break
            case "GGGG":
                if(date.getFullYear() > 0) {
                    result += "Anno Domini "
                } else {
                    result += "Before Christ "
                }
                break
            case "M":
                result += (date.getMonth()+1)+" "
                break
            case "MM":
                month += (date.getMonth()+1)
                while(month.length < 2) {
                    month = "0" + month
                }
                result += month + " "
                break
            case "MMM":
                result += monthArray[date.getMonth()].slice(0,3) + " "
                break
            case "MMMM":
                result += monthArray[date.getMonth()] + " "
                break
            case "d":
                result += (date.getDate())+" "
                break
            case "dd":
                day += date.getDate()
                while(day.length < 2) {
                    day = "0" + day
                }
                result += day+" "
                break
            case "E":
                result += (dayArray[date.getDay()].slice(0,3))+" "
                break
            case "EEEE":
                result += (dayArray[date.getDay()])+" "
                break
            case "h":
                hour += date.getHours()
                if(hour>+12) {
                    hour -= 12
                }
                result += hour+" "
                break
            case "hh":
                hour += date.getHours()
                if(hour>=12) {
                    hour -= 12
                }
                hour = hour.toString()
                while(hour.length < 2) {
                    hour = "0" + hour
                }
                result += hour+" "
                break
            case "m":
                result += date.getMinutes()+" "
                break
            case "mm":
                minute += date.getMinutes()
                while(minute.length < 2) {
                    minute = "0" + minute
                }
                result += minute+" "
                break
            case "s":
                result += date.getSeconds()+" "
                break
            case "ss":
                second += date.getSeconds()
                while(second.length < 2) {
                    second = "0" + second
                }
                result += second+" "
                break
            case "H":
                result += date.getHours()+" "
                break
            case "HH":
                hour += date.getHours()
                while(hour.length < 2) {
                    hour = "0" + hour
                }
                result += hour+" "
                break
            case "a":
                hour = date.getHours()
                if(hour<12) {
                    result += "AM "
                } else {
                    result += "PM "
                }
                break
            default :
                if(formater[i]=="" || formater[i]==" ") {
                    break
                }else if(formater[i][0]=="µ") {
                    if(result[result.length - 1] != " ") {
                        result+= " "+formater[i].substring(1)
                    } else {
                        result= result.substring(0, result.length - 1)+" "+formater[i].substring(1)
                    }

                } else {
                    result= result.substring(0, result.length - 1)+ formater[i]
                }
                break
        }
        
    }
    if(result[result.length-1] == " "){
        return(result.slice(0, -1))
    } else {
        return result 
    }
} 
