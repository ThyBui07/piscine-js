// Create the following functions:

// Your solutions must use map.

// Cities Only
// citiesOnly: accepts an array of objects and returns an array of strings from the city key.

// citiesOnly([
//   {
//     city: 'Los Angeles',
//     temperature: '  101 °F   ',
//   },
//   {
//     city: 'San Francisco',
//     temperature: ' 84 ° F   ',
//   },
// ]) // -> ['Los Angeles', 'San Francisco']
// Upper Casing States
// upperCasingStates: accepts an array of strings, and returns a new array of strings. The returned array will be the same as the argument, except the first letter of every word must be capitalized.

// upperCasingStates(['alabama', 'new jersey']) // -> ['Alabama', 'New Jersey']
// Fahrenheit to Celsius
// fahrenheitToCelsius: accepts an array of fahrenheit temperatures as strings, and returns an array of strings converted to celsius. Round down the result.

// fahrenheitToCelsius(['68°F', '59°F', '25°F']) // -> ['20°C', '15°C', '-4°C']
// Trim Temp
// trimTemp: accepts an array of objects, and returns a new array of objects with the same structure. The temperature strings must have their spaces removed in the new array.

// trimTemp([
//   { city: 'Los Angeles', temperature: '  101 °F   ' },
//   { city: 'San Francisco', temperature: ' 84 ° F   ' },
// ]) /* -> [
//   { city: 'Los Angeles', temperature: '101°F' },
//   { city: 'San Francisco', temperature: '84°F' },
// ] */
// Temp Forecasts
// tempForecasts: accepts an array of objects, and returns an array of formatted strings. See the example below:

// tempForecasts([
//   {
//     city: 'Pasadena',
//     temperature: ' 101 °F',
//     state: 'california',
//     region: 'West',
//   },
// ]) // -> ['38°Celsius in Pasadena, California']

function citiesOnly(arr) {
    let res = arr.map(ele => { return ele.city})
    //console.log(res)
    return res
}

function upperCasingStates(arr) {
    let res = arr.map(ele => { return CapitalizeFirstLetter(ele)})
    //console.log(res)
    return res

}

function CapitalizeFirstLetter(str) {
//split the above string into an array of strings 
//whenever a blank space is encountered
const arr = str.toString().split(" ");
//loop through each element of the array and capitalize the first letter.
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}
//Join all the elements of the array back into a string 
//using a blankspace as a separator 
const str2 = arr.join(" ");
return str2
}

function fahrenheitToCelsius(arr) {
    let res = arr.map(ele => {
        //°C = [(°F-32)×5]/9
        // let Celcius = Math.floor([(parseInt(ele) -32) * 5]/9)
        // let str = Celcius.toString() + "°C"
        let str = Math.floor([(parseInt(ele) -32) * 5]/9).toString() + "°C"
        return str
    })
    return res
}

function trimTemp(arr) {
    let res = arr.map(ele => {
        ele.temperature = ele.temperature.replace(/ /g,'')
        return ele
    })
    return res
}

function tempForecasts(arr) {
    //['38°Celsius in Pasadena, California']
    let res = arr.map(ele => {
        let CapState = CapitalizeFirstLetter(ele.state)
        let str = Math.floor([(parseInt(ele.temperature) -32) * 5]/9).toString().replace(/ /g,'') + "°Celsius" + " in " + ele.city + ", " + CapState 
        return str
    })
    return res
}