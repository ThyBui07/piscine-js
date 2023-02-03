// You've been asked to freshen a webpage atmosphere by displaying shades of cold colors.

// Check the colors array provided in the data file below.

// Write the generateClasses function which creates a <style> tag in the <head> tag and generates, for each color of colors, a class setting the background attribute and taking the color as value, like following:
// .blue {
//   background: blue;
// }
// Write the generateColdShades function which creates a <div> for each color of the colors array whose name contains aqua, blue, turquoise, green, cyan, navy or purple.
// Each <div> must have the corresponding generated class and display the name of the color, like following:
// <div class="blue">blue</div>
// The function choseShade is triggered when clicking on a div.
// Write the body of this function, which receives the shade of the clicked element as argument, and replaces all the other elements class by the chosen shade.

import { colors } from './fifty-shades-of-cold.data.js'
colors.sort()
export const generateClasses = () => {
    let style = document.createElement('style')
    style.innerHTML =  ''
    for(let i = 0; i < colors.length;i++){
        style.innerHTML +=  '.' + colors[i] + '{background:' + colors[i] + ';}'
    }
    document.getElementsByTagName('head')[0].appendChild(style);
}

export const generateColdShades = () => {
    for (let i = 0; i < colors.length; i++) {
       if (colors[i].includes("aqua") || colors[i].includes("blue") || colors[i].includes("turquoise") || colors[i].includes("green") || colors[i].includes("cyan") || colors[i].includes("navy") || colors[i].includes("purple")) {
            let block = document.createElement("div");
            block.className= colors[i]
            block.innerHTML = colors[i]
            document.body.append(block)
       }
    }
}

export const choseShade = (textContent) => {
    let elems = document.querySelectorAll('div')
    for(let i = 0; i < elems.length; i++) {
        let currentStyle = elems[i].classList
        let contains = elems[i].classList.contains(textContent)
        if(!contains){
            elems[i].classList.remove(currentStyle)
            elems[i].classList.add(textContent)

        } 
    }
}
