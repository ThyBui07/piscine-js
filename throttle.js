// Create two functions that will work like _.throttle from lodash.

// throttle: don't worry about the options.
// opThrottle: implement the trailing and leading options.

// function throttle(func, delay) {
//     let shouldWait = false
//     let waitingArgs
//     const timeOutFunc = () => {
//         if (waitingArgs == null) {
//             shouldWait = true
//         } else {
//             func(...waitingArgs)
//             waitingArgs = null
//             setTimeout(timeOutFunc,delay)
//         } 
//     }
// return (...args) => {
//     if (shouldWait) {
//         waitingArgs = args
//         return
//      } 
//     func(...args)
//     shouldWait = true
//     setTimeout(timeOutFunc,delay)
// }
// }

// throttle: Guaranteeing a constant flow of executions every X milliseconds. 
// Like checking every 200ms your scroll position to trigger a CSS animation.
function throttle(cb, delay) {
    let shouldWait = false
    return (...args) => {
        //by default shoudlwait is false => not return => run the func
        if (shouldWait) {
            return
        } else {
            cb(...args)
            shouldWait = true
            setTimeout(()=> {shouldWait = false}, delay)
        }
    }
}

// opThrottle: implement the trailing and leading options.
function opThrottle(func, delay, options = {leading: false, trailing: true}) {
    let timer, savedArgs, savedThis
    return function () {
        if (timer) { // if there is a timer
            savedThis = this // save the context
            savedArgs = arguments 
            return
        }
        const timeup = () => {
            if (options.trailing && savedArgs) { // if trailing is true and there are saved arguments
                func.apply(savedThis, savedArgs) // apply the saved arguments
                savedThis = savedArgs = null // clear the saved arguments
                timer = setTimeout(timeup, delay) // reset the timer
            } else {
                timer = null 
            }
        }
        if (options.leading) { // if leading is true
            func.apply(this, arguments) // apply the arguments
        } else {
            savedThis = this // save the context
            savedArgs = arguments
        }
        timer = setTimeout(timeup, delay) // set the timer
    }
}