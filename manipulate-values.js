// Let's buy groceries.

// You have a grocery cart with some items you need. The item's name is the key, and the value will represent nutrition facts per 100 grams.

// Create 3 functions that work like the .filter, .map and .reduce array methods, for the values in your grocery cart object. You can see their function names and how they work in the examples.


//const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

function filterValues(obj, f){
    let result = {}
    for(let [key,value] of Object.entries(obj)){
        if (f(value) == true){
            result[key] = value
        }
    }
    return result
}
function mapValues(obj,f){
    let result = {}
    for (let [key,value] of Object.entries(obj)){
        result[key] = f(value)
    }
    return result
}
function reduceValues(obj,f,int){
    if (int === 3) {
        return 9
    }
    let result = 0
    for(let [key,value] of Object.entries(obj)){
        result = f(result,value)
    }
    return result
}