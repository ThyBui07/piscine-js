// function format(date, formatString) {
//     let formattedString = formatString;

//     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//     formattedString = formattedString.replace("yyyy", (("0000" + ((date.getFullYear()).toString)).slice(-4)));
//     formattedString = formattedString.replace("yy", ((date.getFullYear() + '').slice(-2)));
//     formattedString = formattedString.replace("y", (date.getFullYear() + ''));
//     formattedString = formattedString.replace("MMMM", monthNames[date.getMonth()]);
//     formattedString = formattedString.replace("MMM", monthNames[date.getMonth()].slice(0, 3));
//     formattedString = formattedString.replace("MM", (date.getMonth() + 1).toString().padStart(2, '0'));
//     formattedString = formattedString.replace("M", (date.getMonth() + 1).toString());
//     formattedString = formattedString.replace("dd", date.getDate().toString().padStart(2, '0'));
//     formattedString = formattedString.replace("d", date.getDate().toString());
//     formattedString = formattedString.replace("EEEE", dayNames[date.getUTCDay()]);
//     formattedString = formattedString.replace("EEE", dayNames[date.getUTCDay()].slice(0, 3));
//     formattedString = formattedString.replace("HH", date.getHours().toString().padStart(2, '0'));
//     formattedString = formattedString.replace("H", date.getHours().toString());
//     formattedString = formattedString.replace("hh", (date.getHours() % 12).toString().padStart(2, '0'));
//     formattedString = formattedString.replace("h", (date.getHours() % 12).toString());
//     formattedString = formattedString.replace("mm", date.getMinutes().toString().padStart(2, '0'));
//     formattedString = formattedString.replace("m", date.getMinutes().toString());
//     formattedString = formattedString.replace("ss", date.getSeconds().toString().padStart(2, '0'));
//     formattedString = formattedString.replace("s", date.getSeconds().toString());
//     formattedString = formattedString.replace("a", date.getHours() < 12 ? "AM" : "PM");
//     // formattedString = formattedString.replace("GGGG", date.getFullYear() > 0 ? "A" : "B");
//     formattedString = formattedString.replace("GGG", date.getFullYear() > 0 ? "Anno Domini" : "Before Christ");
//     if (!formattedString.includes("Before Christ") && !formattedString.includes("Anno Domini")) {
//         formattedString = formattedString.replace("G", date.getFullYear() > 0 ? "AD" : "BC");
//     } else {
//         formattedString = formattedString.replace("G", '');
//     }
//     // if formattedString is negative rm the negative sign
//     if (formattedString[0] === '-') {
//         formattedString = formattedString.slice(1);
//     }
//     return formattedString;
// }
// const landing = new Date('July 20, 1969, 20:17:40')
// const returning = new Date('July 21, 1969, 17:54:12')
// const eclipse = new Date(-585, 4, 28)
// const ending = new Date('2 September 1945, 9:02:14')

// console.log(format(eclipse, 'y'))//, '585'))
// console.log(format(landing, 'y'))//, '1969'))
// console.log(format(eclipse, 'yyyy'))//, '0585'))
// console.log(format(landing, 'yyyy'))//, '1969'))
// console.log(format(eclipse, 'yyyy G'))//, '0585 BC'))
// console.log(format(landing, 'yyyy G'))//, '1969 AD'))
// console.log(format(eclipse, 'yyyy GGGG'))//, '0585 Before Christ'))
// console.log(format(landing, 'yyyy GGGG'))//, '1969 Anno Domini'))

// // month
// console.log(format(eclipse, 'M'))//, '5'))
// console.log(format(eclipse, 'MM'))//, '05'))
// console.log(format(eclipse, 'MMM'))//, 'May'))
// console.log(format(eclipse, 'MMMM'))//, 'May'))
// console.log(format(landing, 'M'))//, '7'))
// console.log(format(landing, 'MM'))//, '07'))
// console.log(format(landing, 'MMM'))//, 'Jul'))
// console.log(format(landing, 'MMMM'))//, 'July'))
// console.log(format(ending, 'M'))//, '9'))
// console.log(format(ending, 'MM'))//, '09'))
// console.log(format(ending, 'MMM'))//, 'Sep'))
// console.log(format(ending, 'MMMM'))//, 'September'))

// // day
// console.log(format(landing, 'd'))//, '20'))
// console.log(format(ending, 'd'))//, '2'))
// console.log(format(landing, 'dd'))//, '20'))
// console.log(format(ending, 'dd'))//, '02'))
// console.log(format(landing, 'E'))//, 'Sun'))
// console.log(format(returning, 'E'))//, 'Mon'))
// console.log(format(landing, 'EEEE'))//, 'Sunday'))
// console.log(format(returning, 'EEEE'))//, 'Monday'))

// // time
// console.log(format(landing, 'H:m:s'))//, '20:17:40'))
// console.log(format(landing, 'HH:mm:ss'))//, '20:17:40'))
// console.log(format(landing, 'h:m:s a'))//, '8:17:40 PM'))
// console.log(format(landing, 'hh:mm:ss a'))//, '08:17:40 PM'))
// console.log(format(returning, 'H:m:s'))//, '17:54:12'))
// console.log(format(returning, 'HH:mm:ss'))//, '17:54:12'))
// console.log(format(returning, 'h:m:s a'))//, '5:54:12 PM'))
// console.log(format(returning, 'hh:mm:ss a'))//, '05:54:12 PM'))
// console.log(format(ending, 'H:m:s'))//, '9:2:14'))
// console.log(format(ending, 'HH:mm:ss'))//, '09:02:14'))
// console.log(format(ending, 'h:m:s a'))//, '9:2:14 AM'))
// console.log(format(ending, 'hh:mm:ss a'))//, '09:02:14 AM'))

// // mix
// console.log(format(ending, 'HH(mm)ss [dd] <MMM>'))//, '09(02)14 [02] <Sep>'))
// console.log(format(ending, 'dd/MM/yyyy'))//, '02/09/1945'))

// function format(date, formatString) {
//     let formattedString = formatString;

//     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     const monthNamesFull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//     // Year
//     if(formatString.includes("y")){
//         formattedString.includes("yyyy") ? formattedString = (FormatNumberLength(formattedString.replace("yyyy", date.getUTCFullYear()), 4)) : formattedString;
//         formattedString = formattedString.replace("yy", date.getUTCFullYear().toString().slice(-2));
//         formattedString = formattedString.replace("y", date.getUTCFullYear().toString());
//     }

//     // Era
//     if(formatString.includes("G")){
//         formattedString = formattedString.replace("GGGG", date.getUTCFullYear() > 0 ? "A" : "B");
//         formattedString = formattedString.replace("GGG", date.getUTCFullYear() > 0 ? "Anno Domini" : "Before Christ");
//         formattedString = formattedString.replace("G", date.getUTCFullYear() > 0 ? "AD" : "BC");
//     }
//     // Month
//     if(formatString.includes("M")){
//         formattedString = formattedString.replace("MMMM", monthNamesFull[date.getUTCMonth()]);
//         formattedString = formattedString.replace("MMM", monthNames[date.getUTCMonth()]);
//         formattedString = formattedString.replace("MM", (date.getUTCMonth() + 1).toString().padStart(2, '0'));
//         formattedString = formattedString.replace("M", (date.getUTCMonth() + 1).toString());
//     }

//     // Day
//     if(formatString.includes("d")){
//         formattedString = formattedString.replace("dd", date.getUTCDate().toString().padStart(2, '0'));
//         formattedString = formattedString.replace("d", date.getUTCDate().toString());
//         formattedString = formattedString.replace("EEEE", dayNames[date.getUTCDay()]);
//         formattedString = formattedString.replace("E", dayNames[date.getUTCDay()]);
//     }

//     // Time
//     if(formatString.includes("h") || formatString.includes("H") || formatString.includes("m") || formatString.includes("s")){
//         let hours = date.getUTCHours();
//         let minutes = date.getUTCMinutes();
//         let seconds = date.getUTCSeconds();
//         let ampm = hours >= 12 ? "PM" : "AM";
//         hours = hours % 12;
//         hours = hours ? hours : 12;
//         formattedString = formattedString.replace("HH", hours.toString().padStart(2, '0'));
//         formattedString = formattedString.replace("H", hours.toString());
//         formattedString = formattedString.replace("hh", hours.toString().padStart(2, '0'));
//         formattedString = formattedString.replace("h", hours.toString());
//         formattedString = formattedString.replace("mm", minutes.toString().padStart(2, '0'));
//         formattedString = formattedString.replace("m", minutes.toString());
//         formattedString = formattedString.replace("ss", seconds.toString().padStart(2, '0'));
//         formattedString = formattedString.replace("s", seconds.toString());
//         formattedString = formattedString.replace("a", ampm);
//     }
//     if (formattedString[0] === '-') {
//         formattedString = formattedString.slice(1);
//     }
//     return formattedString;
// }

// function FormatNumberLength(number, length) {
//     let numSl = toString(number).split(' ');
//     numSl = numSl.slice(1, numSl.length - 1);
//     let num = numSl[0];
//     if (num[0] === '-') {
//         num = num.slice(1);
//     }
//     var r = "" + num;
//     while (r.length < length) {
//         r = "0" + r;
//     }
//     return (r + numSl.join(' '));
// }

// function bigger(a, b) {
//     let c = false
//    return c => (a > b ? true : false)
// }

// console.log(bigger(1, 2)) // 2


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
