// Create some functions which behave like JavaScript's Math rounding functions:

// round: which behaves similar to Math.round().
// ceil: which behaves similar to Math.ceil().
// floor: which behaves similar to Math.floor().
// trunc: which behaves similar to Math.trunc().
function modulo(a, b) {
    let flag = false
    if (a < 0) {
        a = -a
        flag = true
    }
    if (b < 0) {
        b = -b
    }
    let result = a
    let c = b
    let count = 1
    while (b < result) {
        result = result - c
        count++
    }
    if (flag) {
        result = -result
    }
    return result
}

function round(n) {
    let ost
    let res
    let flag = false
    if (n < 0) {
        n = -n
        flag = true
    }
    ost = modulo(n,1)
    if (ost > 0.5) {
        res = n + 1 - ost
    } else {
        res = n - ost
    }
    if (flag) {
        res = -res
    }
    return res
}

function ceil(n) {
    let ost
    let res
    ost = modulo(n,1)
    if (n > 0 && ost != 0) {
        return res = n + 1 - ost
    } else {
        return res = n - ost
    }
}

function floor(n) {
    let ost
    let res
    ost = modulo(n,1)
    if (n > 0 && ost != 0) {
   

        return res = n - ost
    } else if (ost === 0) {
        return n
    } else {
        let x
        x = 1 + ost
        return res = n - x
    }

}
function trunc(num){
    let res = num
    let i = 0
    let neg = false
    if (res < 0){
        neg = true
    }
    if (neg) {
        while (res <= i - 10000){
            i -= 10000
        }
        while (res < i-1){
            i--
        }
        return i
    }
    while (res > i + 10000){
        i += 10000
    }
    while (res > i+1){
        i++
    }
    return i
}