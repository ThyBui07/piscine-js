// The objective of this exercise is to merge objects into a new object depending on the values type.

// Create a function named fusion that:

// For array types, you will concatenate them.
// fusion({ arr: [1, "2"] }, { arr: [2] }); // -> { arr: [ 1, '2', 2 ] }
// fusion({ arr: [], arr1: [5] },{ arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }); // ->{ arr: [ 10, 3 ], arr1: [ 5, 15, 3 ], arr2: [ '7', '1' ] }
// For strings, you must concatenate them with a space.
// fusion({ str: "salem" }, { str: "alem" }); // -> { str: 'salem alem' }
// fusion({ str: "salem" }, { str: "" }); // -> { str: 'salem ' }
// If they are numbers, you must add them.
// fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }); // -> { a: 20, b: 10, c: 1 }
// If it is an object, you must join them recursively.
// fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }); // -> { a: 11, x: [], b: { c: 'Salem alem' } }
// fusion( { a: { b: [3, 2], c: { d: 8 } } },{ a: { b: [0, 3, 1], c: { d: 3 } } }); // -> { a: { b: [ 3, 2, 0, 3, 1 ], c: { d: 11 } } }
// In case of type mismatch you must replace it with the value of the second object (if it exists).
// fusion({ a: "hello", b: [] }, { a: 4 }); // -> { a: 4, b: [] }


const superTypeOf = (arg) => toString.call(arg).slice(8, -1) === 'Null' ? 'Null' : toString.call(arg).slice(8, -1) === 'Undefined' ? 'Undefined' : toString.call(arg).slice(8, -1)

function fusion(a,b) {
    if (superTypeOf(a) == 'Array' && superTypeOf(b) == 'Array') {
        return a.concat(b)
    } else if (superTypeOf(a) == 'String' && superTypeOf(b) == 'String') {
        return a+' '+b
    } else if (superTypeOf(a) == 'Number' && superTypeOf(b) == 'Number') {
        return a+b
    } else if (superTypeOf(a) !== superTypeOf(b)) {
        if (superTypeOf(b) == 'Undefined') {
            return a
        }
        return b
    } else if (superTypeOf(a) == 'Object' && superTypeOf(b) == 'Object') {
        let res = {}
        if (Object.keys(a).length > Object.keys(b).length) {
            Object.keys(a).forEach((key)=> res[key] = fusion(a[key],b[key]))
        } else {
            Object.keys(b).forEach((key)=> res[key] = fusion(a[key],b[key]))
        }
        return res
    } else {
        return b
    }
}