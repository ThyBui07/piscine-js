// Create 3 functions which each take (a, b) as arguments:

// multiply that acts like the * operator, without using it.
// divide that acts like the integer division operator /, without using it.
// modulo that acts like the % operator, without using it.



function multiply(a, b) {
    let flag = false;
    if (b < 0) {
        b = -b
        flag = true
    }

    let result = 0 ;
    while (b > 0) {
        result += a
        b--
    }
    if (flag == true) {
        result = -result
    }
    return result
}

function divide(dividend_num, divisor_num) {
    let sign = 1;
    let output = 0;
    if (dividend_num < 0) {
        sign = -sign;

    } else {
        dividend_num = -dividend_num;
    }
    if (divisor_num < 0) {
        sign = -sign;

    } else {
        divisor_num = -divisor_num;
    }

    dividend_num = Math.abs(dividend_num);
    divisor_num = Math.abs(divisor_num);
   let quotient = 0;
while (dividend_num >= divisor_num) {
    dividend_num -= divisor_num;
    ++quotient;
}
//if the sign value computed earlier is -1 then negate the value of quotient
if(sign==-1) {
    quotient=-quotient
};
return quotient;
}

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