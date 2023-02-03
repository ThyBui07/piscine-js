// Create a function named series that takes an array of async functions. It must execute them in series and return the results in order.

async function series(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) { // loop through array of functions
        result.push(await arr[i]()) // add the result of each function to the result array
    }
    return result
}