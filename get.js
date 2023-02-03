// Create a function named get which takes two arguments:

// src: an object.
// path: a string representing a path.
// Your function will return the value at the given path in the src object.

// Example:
// const src = { nested: { key: 'peekaboo' } }
// const path = 'nested.key'
// get(src, path) // -> 'peekaboo'

const get = (src, path) => {
    let pathArr = path.split('.')
    let cur = src
    pathArr.forEach((element) => {
        if (cur === undefined) return cur
        cur = cur[element]
    })
    return cur
}