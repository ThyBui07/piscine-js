// Create a function named chunk which accepts an array and an integer representing a size.

// Your function will chunk the array into sub-arrays, and return an array with each sub-array as its elements. The length of each sub-array is denoted by the size argument.

// If the array cannot be split evenly, the last sub-array will contain the remaining elements.

function chunk(arr,int){
    let res = []
    for(let i =0;i<arr.length;i++){
        res.push(arr.slice(0,int))
        arr = arr.slice(int)
        if(arr.length<int && arr.length != 0){
            res.push(arr)
            return res
        }
    }
    return res
}