// Create a function named interpolation that takes an object with 5 properties: step, start, end, callback and duration.

// This function must interpolate points from the start position to the end position (not including the end position). The number of points depends on the number of steps.

// For each interpolation point, you must call the callback function with an array of the two points [x, y]:

// x: distance
// y: point
// There should be a delay between each callback invocation of duration / step, so that the final call happens after duration.


// We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.

// There are two methods for it:

// setTimeout allows us to run a function once after the interval of time.
// setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.



function interpolation ({ step, start, end, callback, duration }) {
    let x = start
    let y

    let t = y = duration / step

    let timerId = setInterval(() => {

        callback([x, y])
        x += (end - start) / step
        y += t

        if (x.toFixed(1) == end) clearInterval(timerId)

    }, t)
}

