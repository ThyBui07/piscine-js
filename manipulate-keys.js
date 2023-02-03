// // I do not want onions. I want oranges.

// // Create 3 functions that works like the .filter, .map and .reduce array methods, but for the keys of your grocery cart. You can see their names and how they work in the examples.


// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

// console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// // output: { protein: 20 }

// console.log(mapKeys(nutrients, (k) => `-${k}`))
// // output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

// console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
// // output: carbohydrates, protein, fat


function filterKeys(obj,f) {
    let result = {}
    for(let [key,value] of Object.entries(obj)){
        if (f(key)){
            result[key] = value
        }
    }
    return result

}

function mapKeys(obj,f){
    let result = {}
    for(let [key,value] of Object.entries(obj)){
        result[f(key)] = value
    }
    return result
}

const reduceKeys = (el, fn, accumValue="") => {

    for (const [key, value] of Object.entries(el)) {        
      if (accumValue===''){
        accumValue=key
        continue
      }  
      accumValue =  fn(accumValue, key)        
    }  
    return accumValue
  }