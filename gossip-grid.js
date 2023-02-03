// Create the function grid which displays all the gossips, provided in the data file below, as cards on a grid (in the same order).

// They will each be represented as a div with the gossip class.

// The first gossip card must be a form. It will need a textarea, and a submit button with the text "Share gossip!". It will add new gossip to the list.

// Create 3 type="range" inputs with the class range, all wrapped in a div with the class ranges.

// id="width": that controls the width of cards from 200 to 800 pixels.
// id="fontSize": that controls the font size from 20 to 40 pixels.
// id="background": that control the background lightness from 20% to 75%.
// Use hsl for colors

import { gossips } from './gossip-grid.data.js'

export const grid = () => {
    console.log('grid')
    //ranges
    let ranges = document.createElement("div");
    ranges.className= 'ranges'
    document.body.append(ranges)

    const rangeIDs = ['width', 'fontSize', 'background']
    const defaultVal = ['250', '20', '60']

    for (let i = 0; i < rangeIDs.length; i++) {
        //label 1
        let label1 = document.createElement("label")
        label1.setAttribute('for', rangeIDs[i])
        label1.className = 'range'
        label1.innerHTML = rangeIDs[i]
        label1.style.marginLeft = '15px'
        //label 2
        let label2 = document.createElement("label")
        label2.id = 'label2-' + rangeIDs[i]
        label2.className = 'range'
        label2.innerHTML = defaultVal[i]
        //range
        let range = document.createElement("input")
        range.id = rangeIDs[i]
        range.className = 'range'
        range.setAttribute('type', 'range')
 
        ranges.appendChild(label1)
        ranges.appendChild(range)
        ranges.appendChild(label2)
    }

    
    //width
    const widthElement = document.getElementById("width")
    widthElement.setAttribute('min', '200')
    widthElement.setAttribute('max', '800')
    widthElement.setAttribute('value', '')
    widthElement.addEventListener("input",() => {
        widthElement.setAttribute('value', widthElement.value)
        document.getElementById("label2-width").innerHTML = widthElement.value
        let allGossips = document.querySelectorAll('.gossip')
        allGossips.forEach(element => {
            element.style["width"] = widthElement.value + 'px'
        })
    })
    //font size
    const fontSizeElement = document.getElementById("fontSize")
    fontSizeElement.setAttribute('min', '20')
    fontSizeElement.setAttribute('max', '40')
    fontSizeElement.setAttribute('value', '')
    fontSizeElement.addEventListener("input",() => {
        fontSizeElement.setAttribute('value', fontSizeElement.value)
        document.getElementById("label2-fontSize").innerHTML = fontSizeElement.value
        let allGossips = document.querySelectorAll('.gossip')
        allGossips.forEach(element => {
            element.style["font-size"] = fontSizeElement.value + 'px'
        })
    })
    //background
    const backgroundElement = document.getElementById("background")
    backgroundElement.setAttribute('min', '20')
    backgroundElement.setAttribute('max', '75')
    backgroundElement.setAttribute('value', '')
    backgroundElement.addEventListener("input",() => {
        backgroundElement.setAttribute('value', backgroundElement.value)
        document.getElementById("label2-background").innerHTML = backgroundElement.value
        let allGossips = document.querySelectorAll('.gossip')
        allGossips.forEach(element => {
            element.style["background-color"] = `hsl(280, 50%, ${backgroundElement.value}%)`
        })
    })
    //form
    let specialBlock = document.createElement("form");
    specialBlock.id = "form"
    specialBlock.className= "gossip"
    document.body.append(specialBlock)
    //text area
    let textArea = document.createElement("textarea")
    textArea.className= 'textarea'
    textArea.placeholder = 'Got a gossip to share?'
    form.appendChild(textArea)
    //submit button
    let submitButton = document.createElement("button")
    submitButton.id = 'submitBtt'
    submitButton.className = 'button'
    submitButton.innerHTML = "Share gossip!";
    submitButton.style["background-color"] = "transparent";
    submitButton.style["color"] = "white";
    submitButton.style["font-size"] = "20px";
    form.appendChild(submitButton)

    // submit the new gossip 
    document.getElementById("submitBtt").addEventListener("click",() => {
        let value = textArea.value
        let newGossip = document.createElement('div')
        newGossip.className = 'gossip'
        for (let i = 0; i < rangeIDs.length; i++) {
            if (document.getElementById(rangeIDs[i]).getAttribute("value") != '') {
                if (rangeIDs[i] == 'background') {
                    newGossip.style[rangeIDs[i]] = `hsl(280, 50%, ${document.getElementById(rangeIDs[i]).getAttribute("value")}%)`
                } else {
                    newGossip.style[rangeIDs[i]] = `${document.getElementById(rangeIDs[i]).getAttribute("value")}px`
                }
            } else {
                continue
            }
        }
        newGossip.textContent = value
        document.body.insertBefore(newGossip, document.querySelectorAll('.gossip')[1])
        textArea.value = ""
        event.preventDefault()
    })

    //cards
    for (let i = 0; i < gossips.length; i++) {
        let block = document.createElement("div");
            block.className= 'gossip'
            block.innerHTML = gossips[i]
            document.body.append(block)
    }
}
