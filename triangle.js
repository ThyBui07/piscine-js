// Create a function named triangle that takes a string and a number as arguments. Your function will return a string representing a triangle.

// The string will denote the characters which construct the triangle, and the number denotes its height.

// Example
// * character and depth of 5:
// *
// **
// ***
// ****
// *****





function triangle(str,int){
    let res = ''
    for(let i = 1;i<=int;i++){
        for(let j = 0;j<i;j++){
            res += str
        }
        if(i === int){
            return res
        }
        res += '\n'
    }
    return res
}
