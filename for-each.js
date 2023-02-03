// Create a function named forEach which takes an array as the first argument, a function as the second argument, and that works like the Array.prototype.forEach method.


function forEach(arr, func) {
    let res = []
	for (let i = 0; i < arr.length; i++){
		res.push(func(arr[i], i, arr))
	}
	return res
}