// Create a function named replica that allows you to deep assign the values of all properties from one or more objects to a target object.

const replica = (...args) => {
    let res = {}
    args.forEach(obj => {
        for (const [key, value] of Object.entries(obj)) {

            if(isObject(value) && isObject(res[key])) {
                res[key] = replica(res[key], value)
                continue
            }
            
            res[key] = value
        }
    })
    return res
}

const isObject = (foo) => Object.prototype.toString.call(foo) === '[object Object]'