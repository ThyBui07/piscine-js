// Create a function named flat that works like Array.flat(), except its first argument is the array.

function flat(arr, depth = 1) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth > 0) {
        newArr = newArr.concat(flat(arr[i], depth - 1));
      } else {
        newArr.push(arr[i]);
      }
    }

    return newArr;
  }