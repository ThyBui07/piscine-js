// Instructions
// Create two functions that will work like _.debounce from lodash.

// debounce: don't worry about the options.
// opDebounce: implement the leading options.

function debounce(func, timeout) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

function opDebounce(cb, delay = 1000, options = {leading: false}){
    let timer 
    let firstCall = true
    return (...args) => {
        clearTimeout(timer)
        if (options.leading && firstCall) {
            cb(...args)
            firstCall = false
        }
        timer = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}