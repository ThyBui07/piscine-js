// Like an inspired Beethoven who's about to write his Moonlight Sonata, you're about to compose a colorful symphony of letters with your keyboard.

// Write the function compose:

// Make it fire every time a key is pressed.
// Create a new div with the class note when a letter of the lowercase alphabet is pressed. It should have a unique background color generated using the key of the event. It should also display the corresponding pressed character.
// When Backspace is pressed, delete the last note.
// When Escape is pressed, clear all the notes.

export const compose = () => {
    const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
    
    document.addEventListener("keydown", (event)=> {
        if (lowerLetters.includes(event.key)) {
            let block = document.createElement("div");
            block.className= 'note'
            let color = getRandomColor(event.key)
            block.style.background = color
            block.innerHTML = event.key
            document.body.append(block)
        }
        if (event.key == 'Backspace') {
            let removeLastChar = document.querySelectorAll("div")
            removeLastChar[removeLastChar.length-1].remove()
        }
        if (event.key == 'Escape') {
            document.querySelectorAll("div").forEach((item) => {
                item.remove()
            })
        }
    })
}

function getRandomColor(name) {
    // get the ASCII code of the character
    const asciiCode = name.charCodeAt(0);
    // number that contains 3 times ASCII value of character -- unique for every alphabet
    const colorNum = asciiCode.toString() + asciiCode.toString() + asciiCode.toString();
   
    var num = Math.round(0xffffff * parseInt(colorNum));
    var r = num >> 16 & 255;
    var g = num >> 8 & 255;
    var b = num & 255;

    let color = 'rgb(' + r + ', ' + g + ', ' + b + ', 0.3)'
    return color
  }