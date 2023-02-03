// Instructions
// Today, your mission is to build a 3-column brick tower, maintain it and finally break it.

// Create a function build which will create and display the amount of bricks passed as argument:

// each brick has to be created as a div and added to the page at a regular interval of 100ms.
// each brick will receive a unique id property, like the following:
// <div id="brick-1"></div>
// each brick in the middle column has to be set with the custom data attribute foundation, receiving the value true.
// Each one of the two emojis in the top-right corner fires a function on click:

// 🔨: triggers the function repair. Write the body of that function. It receives any number of ids. For each id, it retrieves the HTML element, and sets the repaired custom attribute to in progress if it is a brick situated in the middle column, and true if not.
// 🧨: triggers the destroy function. Write the body of that function. It removes the current last brick in the tower.

export const build = (x) => {
    let i = 1;
    let counterFoundation = 1
    
    let nIntervalNum =  setInterval(() => {
        let block = document.createElement("div");
        document.body.append(block)
        block.innerHTML = i
        block.id = 'brick-'+ i
        // console.log('this is i: ',i)
        // console.log('counter:', counterFoundation)
        if (counterFoundation === 2) {
            block.dataset.foundation = true
        }
        if (counterFoundation === 3) {
            counterFoundation = 0
        }
        i++
        counterFoundation++
        if (i == x+1) {
            clearInterval(nIntervalNum)
        }
    }, 100);
    // return block
}

export const destroy = () => {
    let bricks =  document.querySelectorAll('div[id^="brick-"]')
    console.log(bricks)
    bricks[bricks.length-1].remove()
}

export const repair = (...reparations) => {
    console.log(reparations)
    // let bricks =  document.querySelectorAll('div[id^="brick-"]')
    for (let i = 0; i < reparations.length; i++) {
        let brick = document.getElementById(reparations[i])
        // console.log(brick)
        if (brick.hasAttribute("data-foundation")) {
            brick.setAttribute("data-repaired","in progress")
        } else {
            brick.setAttribute("data-repaired","true")
        }
    }
}
