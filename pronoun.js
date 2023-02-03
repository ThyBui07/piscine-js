//  Create a function named pronoun that accepts a string parameter. This function returns an object that will have all the personal pronouns, present in the string, as keys. Each key will have a sub object with the first word after each of the personal pronouns found in the string.

//  You must also a count property to the sub object, with the amount of occurrences of the pronoun.

// Pronouns:

// i
// you
// he
// she
// it
// they
// we

let pronouns = ['i', 'you', 'he', 'she', 'it', 'we', 'they']

const pronoun = (str = '') => {
    let words = str.replace(/,/gm, ' ').split(/\s/gm)
    let res = {}
    words.forEach((v, i) => {
        let next = words[i+1]
        v = v.toLowerCase()
        if (pronouns.includes(v)) {
            if (res[v] === undefined) {
                res[v] = { word: [], count: 0 }
            }

            if (!pronouns.includes(next) && next != undefined) {
                res[v].word.push(next)
            }

            res[v].count++
        }
    })
    return res
}