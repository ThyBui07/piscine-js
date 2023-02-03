// Create some functions, which each take a string as an argument:

// cutFirst: returns the string with the first 2 characters removed.

// cutLast returns the string with the last 2 characters removed.

// cutFirstLast returns the string with the first 2 characters and the last 2 characters removed.

// keepFirst returns only the first 2 characters.

// keepLast returns only the last 2 characters.

// keepFirstLast returns the first 2 characters, and the last 2 characters.

function cutFirst(str) {
    let res = ''
    for (let i = 2; i < str.length; i++) {
        res += str[i]
    }
    return res
}

function cutLast(str) {
    let res = ''
    for (let i = 0; i < str.length - 2; i++) {
        res += str[i]
    }
    return res
}
function cutFirstLast(str) {
    let res = ''
    for (let i = 2; i < str.length - 2; i++) {
        res += str[i]
    }
    return res
}

function keepFirst(str){
    return str.slice(0,2)
}
function keepLast(str){
    return str.slice(-2)
}
function keepFirstLast(str) {
    let res = ''
    if(str.length>3){
        res += str.slice(0, 2)
        res += str.slice(-2)
    }else{
        return str
    }

    return res
}
