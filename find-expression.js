// Create a function named findExpression that takes a number as parameter and returns a string.

// 2 constant variables will be made available to your function: add4 and mul2.
// Your goal is to try to find a sequence, starting from the number 1, and repeatedly either adding 4 or multiplying by 2, to produce the number given as a parameter.
// If the number can not be reached you should return undefined
// For example, for the number 8, you must first multiply by 2 twice, and then add 4. Your function should return something like: 1 *2 *2 +4.



function findExpression(num) {
    let i = num;
    let arr = [];
    while (i > 1) {
        if(isPowerOfTwo(i)) {
            while (i > 1) {
                arr.unshift(mul2);
                i /= 2;
            }    
        } else {
            arr.unshift(add4);
            i -= 4;
        }
    }
    let sum = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === add4){
        sum += 4;
        } else if (arr[i] === mul2) {
            sum *= 2;
        } else if (arr[i] === "1") {
            sum += 1;
        }
    }
    if (sum !== num) {
        return undefined;
    }
    return "1 " + arr.join(" ");
}
function isPowerOfTwo(num) {
    return(num > 0 && (num & (num - 1)) == 0)
}