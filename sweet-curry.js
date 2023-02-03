// Currying is when you break down a function that takes multiple arguments into a series of functions that each take only one argument. Here's an example in JavaScript:

// function add (a, b) {
//   return a + b;
// }

// add(3, 4); // returns 7
// This is a function that takes two arguments, a and b, and returns their sum. We will now curry this function:

// function add (a) {
//   return function (b) {
//     return a + b;
//   }
// }
// This is a function that takes one argument, a, and returns a function that takes another argument, b, and that function returns their sum.

// add(3)(4); // returns 7

// var add3 = add(3); // returns a function

// add3(4); // returns 7
// The first statement returns 7, like the add(3, 4) statement.
// The second statement defines a new function called add3 that will add 3 to its argument. (This is what some may call a closure.)
// The third statement uses the add3 operation to add 3 to 4, again producing 7 as a result.


// Create the following functions with the "currying" process. Those functions should accept only one argument each.

// mult2: that multiplies two numbers.
// add3: that adds three numbers.
// sub4: that subtracts four numbers.

function mult2(num1) {
    return function(num2) {
        return num1 * num2;
    }
}

function add3(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        }
    }
}

function sub4(num1) {
    return function(num2){
        return function(num3){
            return function(num4){
                return num1-num2-num3-num4
            }
        }
    }
}