// ou've been attributed the task to find the main architect of the Tower of Pisa before he achieves his plans, avoiding us nowadays all those lame pictures of people pretending to stop it from falling.

// You arrive at the architects' chamber to find him, but all you have in front of you is a bunch of unknown people. Step by step, with the little information you have, gather information and figure out by elimination who he is.

// Launch the provided HTML file in the browser to begin your investigation.
// On top of the webpage, each of the four buttons fires a function:

// Write the body of the getArchitects function, which returns an array containing 2 arrays of HTML elements:

// the first array contains the architects, all corresponding to a <a> tag
// the second array contains all the non-architects people
// Write the body of the getClassical function, which returns an array containing 2 arrays of HTML elements:

// the first array contains the architects belonging to the classical class
// the second array contains the non-classical architects
// Write the body of the getActive function, which returns an array containing 2 arrays of HTML elements:

// the first array contains the classical architects who are active in their class
// the second array contains the non-active classical architects
// Write the body of the getBonannoPisano function, which returns an array containing:

// the HTML element of the architect you're looking for, whose id is BonannoPisano
// an array which contains all the remaining HTML elements of active classical architects
// From now on, don't forget to export all the expected functions, so that they can be imported to be tested
// > export const getArchitects = () => {...}



export const getBonannoPisano = () => {
    let arr = []
    let bonannoPisano = document.getElementById("BonannoPisano")
    let notBonannoPisano = Array.from(document.querySelectorAll('a:not(#BonannoPisano)'))
    arr.push(bonannoPisano)
    arr.push(notBonannoPisano)
    return arr
}

export const getActive = () => {
    let arr = []
    let active = Array.from(document.getElementsByClassName('classical active'))
    console.log(active)
    let nonActive = Array.from(document.querySelectorAll('a.classical:not(.active)'))
    

    arr.push(active)
    arr.push(nonActive)
    return arr
}

export const getArchitects = () => {
    let arr = []
    // let architects = Array.from(document.getElementsByTagName('a'))
    let architects = Array.from(document.querySelectorAll('a'))
    let nonArchitects = Array.from(document.querySelectorAll('span'))

    //let nonArchitects = Array.from(document.getElementsByTagName('span'))

    console.log(architects)
    console.log(nonArchitects)

    arr.push(architects)
    arr.push(nonArchitects)
    return arr
}

export const getClassical = () => {
    let arr = []
    let classical = Array.from(document.getElementsByClassName('classical'))
    //console.log(classical)
    let modern = Array.from(document.getElementsByClassName('modern'))
    let baroque = Array.from(document.getElementsByClassName('baroque'))
    let notClassical = modern.concat(baroque)
    console.log(notClassical)

    arr.push(classical)
    arr.push(notClassical)
    return arr
}

