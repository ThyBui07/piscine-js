function groupPrice(input) {
    let regex = /(\$|USD)([0-9]+)(\.)([0-9]+)/g;  
    let result = []
    let match;
    while (match = regex.exec(input)) {
        result.push([match[0], match[2], match[4]]);
    }
    return result;
}