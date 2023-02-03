// Create the function named flow that will act like the _.flow([funcs]) from lodash.

// Example
// const square = (nbr) => nbr * nbr
// const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2

// const flowedFunctions = flow([add2Numbers, square])
// flowedFunctions(2, 3) // -> 25

const flow = (functions) => {
    return (...args) => { // returns a new function tt takes in any number of arguements using (...) spread operator
      let result = functions[0](...args) // result 
      for (let i = 1; i < functions.length; i++) {
        result = functions[i](result);
      }
      return result;
    }
  }