// Instructions
// Create the following functions:

// Your solutions must use filter.

// filterShortStateName: accepts an array of strings, and returns only those strings which contain less than 7 characters.

// filterStartVowel: accepts an array of strings, and returns only those that start with any vowel (a,e,i,o,u).

// filter5Vowels: accepts an array of strings, and returns only those which contain at least 5 of any vowels (a,e,i,o,u).

// filter1DistinctVowel: accepts an array of strings, and returns only those which contain distinct vowels (a,e,i,o,u). For example, "Alabama" contains only 1 distinct vowel "a".

// multiFilter: accepts an array of objects, and returns only those which:

// the key capital contains at least 8 characters.
// the key name does not start with a vowel.
// the key tag has at least one vowel.
// the key region is not "South"

function filterShortStateName(arr) {
    const result = arr.filter(word => word.length < 7);
    return result
}

function filterStartVowel(arr) {
    let res = arr.filter(word => { return /[AEIOU]/.test(word[0]);});
    return res
}

function filter5Vowels(arr) {
    const regex = /[aeiouAEIOU]/g
    let res = arr.filter(word => { 
        let str = word.match(regex);
        if(str.length >= 5){
            return word
        }
        return null
    });
    return res
}

function filter1DistinctVowel(arr) {
    const regex = /[aeiouAEIOU]/g
    let res = arr.filter(word => { 
        let match = word.match(regex);
        // console.log(match)
        match[0] = match[0].toLowerCase()
        const allEqual = arr => arr.every( v => v === arr[0])
        if (allEqual(match) == true) {
            return word
        }
        return null
    });
    return res
}

function multiFilter(arr) {
    let res = arr.filter(word => {
        // the key capital contains at least 8 characters.
        let flagCapital = false 
        if( word.capital.length >= 8){
            flagCapital = true
        }
        // the key name does not start with a vowel.
        let flagName = false
        const regexName = /^[aeiouAEIOU]/g
        let flagNameMatch = word.name.match(regexName)
        if(flagNameMatch === null){
            flagName = true
        }
        // the key tag has at least one vowel.
        let flagTag = false
        const regexTag = /[aeiouAEIOU]/g
        let tagMatch = word.tag.match(regexTag)
        if(tagMatch !== null){
            flagTag = true
        }
        // the key region is not "South"
        let flagRegion = false
        if(word.region !== 'South'){
            flagRegion = true
        }
        //combine
        if(flagCapital&&flagName&&flagRegion&&flagTag){
            return word
        }
        return null
    })
    return res
}