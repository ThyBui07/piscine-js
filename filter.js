// Create the following functions, which each take an array as the first argument, and a function as the second argument.

// filter: that works like the [].filter method.

// reject: that works like the reject function from lodash.

// partition: that works like the partition function from lodash.

function filter(arr, callback){
    let newArr = []
    let res = []
    for (let i=0; i< arr.length; i++) {
        newArr.push(callback(arr[i], i, arr))
   }
    for (let i=0; i< newArr.length; i++) {
       if (newArr[i] === true){
        res.push(arr[i])
       }
    }
   return res
}
// reject: that works like the reject function from lodash.
function reject(arr, callback){
    let newArr = []
    let res = []
    for (let i=0; i< arr.length; i++) {
        newArr.push(callback(arr[i], i, arr))
   }
    for (let i=0; i< newArr.length; i++) {
       if (newArr[i] !== true){
        res.push(arr[i])
       }
    }
   return res
}

// partition: that works like the partition function from lodash.
function partition(arr, callback){
    let newArr = []
    let resTrue = []
    let resFalse = []
    let res = []
    for (let i=0; i< arr.length; i++) {
        newArr.push(callback(arr[i], i, arr))
   }
    for (let i=0; i< newArr.length; i++) {
       if (newArr[i] === true){
        resTrue.push(arr[i])
       } else {
        resFalse.push(arr[i])
       }
    }
    res.push(resTrue, resFalse)
   return res
}