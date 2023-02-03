// Create 3 functions which accept an array to be searched, and a value to be matched.

// indexOf: which returns the index of the first occurrence. It also accepts an optional index from where the search should begin. If the value was not found, -1 is returned.
// lastIndexOf: which works just like your indexOf function, but returns the index of the last occurrence.
// includes: which returns true if the value was found in the array, and false otherwise.
// Of course you must not use any of Array.indexOf(), Array.lastIndexOf() or Array.includes().

function includes(arr, elem) {
    let flag = false
    for (const letter of arr) {
        if (letter === elem) {
            return true
        }
    }
    return false
}
function indexOf(arr, elem, start = 0) {
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === elem) {
            return i
        }
    }
    return -1
}
function lastIndexOf(arr, elem, start = arr.length - 1) {
    let x = -1
    for (let i = start; i >= 0; i--) {
        if (arr[i] === elem) {
            return i
        }
    }
    return -1
}