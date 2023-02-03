// Create two functions which taken an object and a string or array of strings. They should return a new object which:

// pick: contains only those keys which appear in the string or array of strings.
// omit: contains only those keys which do not match the string, or do not appear in the array of strings.
// Those functions are pure and must not modify the given object


function pick(obj, args) {
    const obj2 = {}
    if (typeof args == 'string') {
        let keys = Object.keys(obj)
        
       keys.forEach(key => {
        if (key == args) {
            obj2[key] = obj[key]
        }
       })
    }
    if (Array.isArray(args)) {
        let keys = Object.keys(obj)
        for (var i = 0; i < keys.length; i++) {
            for (var j = 0; j < args.length; j++) {
                if (keys[i] == args[j]) {
                    obj2[keys[i]] = obj[keys[i]]
                }
            }
        }
       
    }
    return obj2
}
function omit(obj, args) {
    const obj2 = {}
    if (typeof args == 'string') {
        let keys = Object.keys(obj)
       
       keys.forEach(key => {
        if (key != args) {
            obj2[key] = obj[key]
        }
       })
    }
    if (Array.isArray(args)) {
        let keys = Object.keys(obj)
        let match = true
        for (var i = 0; i < keys.length; i++) {
            for (var j = 0; j < args.length; j++) {
                if (keys[i] != args[j]) {
                    match = false
                } else {
                    match = true
                    break   
                }
            }

            if (match == false) {
                obj2[keys[i]] = obj[keys[i]]
                
            }
        }
       
    }
    return obj2
}

