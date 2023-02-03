// Create a function named all that works like Promise.all but with objects (instead of arrays).

async function all(obj) {
    let result = {}
    if (Object.keys(obj).length === 0) return result // if obj is empty return empty object
    // get all promises from obj
    let promises = Object.keys(obj).map(key => obj[key]) 
    
    for (let i = 0; i < promises.length; i++) { // loop through promises
        result[Object.keys(obj)[i]] = await promises[i] // add the result of each promise to the result object
    }
    return result
}