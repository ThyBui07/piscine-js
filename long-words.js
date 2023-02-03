// Create three functions, which each accept an array as an argument.

// longWords: returns true if every element of the array is a string with at least 5 characters.

// oneLongWord: returns true if at least one element of the array is a string with 10 or more characters.

// noLongWords: returns true if there are no elements in the array which is a string with at least 7 characters.

function longWords(arr){
    let res = arr.every((value) => {
        return value.length > 5
    })
    return res
}
function oneLongWord(arr){
    let res = arr.some((value) => {
        return value.length >=10
    })
    return res
}
function noLongWords(arr){
    let res = arr.every((value) => {
        return value.length < 7
    })
    return res
}