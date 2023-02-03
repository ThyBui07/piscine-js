// Create a function named reverse which accepts an array or a string. It should work like Array.reverse(), and of course you cannot use that.

function reverse(str) {

    if (typeof str === 'string') {
        let res = ''
        for (let i = str.length - 1; i >= 0; i--) {
            res += str[i]
        }
        return res

    }
    if (typeof str === 'object') {
        let arr = []
        for (let i = str.length - 1; i >= 0; i--) {
            arr.push(str[i])
        }

        return arr

    }
}