// Create the following functions:

// Your solutions must use reduce.

// adder: accepts an array of numbers, and returns the sum as a number.

// sumOrMul: accepts an array of numbers and adds or multiplies its elements depending on whether the element is odd or even. Even = multiply. Odd = add.

// funcExec: accepts an array of functions and executes them using reduce, returning the result.

// Each function may accept an optional argument, which should be the initial value for the function's execution.

// Example:
// sumOrMul([1, 2, 3, 5, 8], 5) // (((((5 + 1) * 2) + 3) + 5) * 8) -> 160

function adder(arr,x =0){
    //sum = x; current = arr[0]
    let result = arr.reduce(function(sum, current) {
        // console.log('this is sum:',sum)
        // console.log('this is current:',current)
        return sum + current;
      }, x)
      return result
    }  
function sumOrMul(arr,x=0){
    var result = arr.reduce(function(sum, current) {
        let res = 0
        if(current%2==0){
            res = sum*current
        }else{
            res = sum+current
        }
        return res
      }, x)
      return result
    }

function funcExec(func,x){
    let result = func.reduce(function(sum, current) {
        return current(sum);
      }, x)
      return result
}