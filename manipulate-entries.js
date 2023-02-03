
//Create 3 functions which work like the .filter, .map and .reduce array methods, but for the entries in the grocery cart.
// const nutritionDB = {
//     tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//     vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//     oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//     onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//     garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//     sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//     orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
//   }
// const groceriesCart = { oil: 500, onion: 230, garlic: 220, paprika: 480 }

//filterEntries: filters using both key and value.
function filterEntries(obj, fn) {
    let res = {} 
    Object.entries(obj).forEach((key) => {
        if (fn(key)){ // key is an array with 2 elements: [key, value]
            return res[key[0]] = key[1] //key[0] is the key (onion), key[1] is the value (230)
        } else {
            return undefined
        }
    })
    return res
}
//mapEntries: changes the key, the value or both.
function mapEntries(obj, fn) {
    let res = {}
    Object.entries(obj).forEach((key)=> {
        let [newKey, newValue] = fn(key, obj[key])
        res[newKey] = newValue
    })
   
    return res
}

function reduceEntries(obj, fn, start) {
    if (start === undefined){
        return Object.entries(obj).reduce((acc, key) => fn(acc, [key, obj[key]]))
    }
    return Object.keys(obj).reduce((acc, key) => fn(acc, [key, obj[key]]), start)
}

//Create 3 additional functions that use your previously created functions and take an object as input:
// totalCalories: that will return the total calories of a cart.
function totalCalories (obj){
    return +(reduceEntries(obj, (acc, key) => acc + (nutritionDB[key[0]].calories / 100) * key[1], 0).toFixed(1))
    //  + sign is used to convert returned value to a number
    // toFixed(1) method is used to format the number to 1 decimal place.
}  

//lowCarbs: that leaves only those items which have lower than 50 grams of carbs
function lowCarbs(obj) {
    return filterEntries(obj, (key) => (nutritionDB[key[0]].carbs /100 ) * key[1] < 50)
}

//cartTotal: that will give you the right amount of calories, proteins... and all the other items in your grocery cart.
function cartTotal(obj) {
  return mapEntries(obj, set => {
    let total = {}
    Object.keys(nutritionDB[set[0]]).forEach(key => {
        total[key] = +(((nutritionDB[set[0]][key] / 100) * set[1]).toFixed(3))
    })
    let result = [];
    result[0] = set[0]
    result[1] = total
    return result
  });
}
