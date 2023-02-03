// Create a function named repeat that takes a string and a number as arguments, and returns the string repeated as many times as the number describes. It should function like String.repeat(), but of course you must make your own.

function repeat(str, num) {
let res = '';
while (num > 0) {
    res += str
    num--
}
return res
}