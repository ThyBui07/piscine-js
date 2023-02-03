// Create a function named flags that receives an object and returns the specific aliases and descriptions from the properties of that object.
function flags(obj) {
    const res = {alias: {h: 'help'}, description: ''} // default values
    Object.keys(obj).forEach(key => { // for each key
        if (!res.alias[key[0]]) { // if key is not already an alias
            res.alias[key[0]] = key // add alias
        }
    })
    // show info about keys from help or all keys if help is undefined
    res.description = (obj.help ? obj.help : Object.keys(obj)).reduce((prev, key) => { // for each key
        return prev + `-${key[0]}, --${key}: ${obj[key]}\n` // add description
    }, res.description).slice(0, -1) // remove last \n

    return res
}