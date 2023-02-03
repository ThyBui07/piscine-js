// Create a function named neuron, that enables your AI/bot to learn to mutate data into a more usable shape. You can see how it works from the example.
function neuron(array) {
    let result = {}
    array.forEach(element =>{
        let elementSplit = element.split(/[:?!-]/) // split on : ? ! - to get every word
        let question = elementSplit[1].substring(1).toLowerCase() 
        question = question.replace(/ /g,"_") // replace spaces with _
        if(question[question.length-1] == "_") { // remove _ at the end of the question
            question = question.substring(0, question.length - 1) 
        }
        if(result[elementSplit[0].toLowerCase()] === undefined) { // if the key doesn't exist, create it
            result[elementSplit[0].toLowerCase()] = {}
        }
        if(result[elementSplit[0].toLowerCase()][question] === undefined) { // if the question doesn't exist, create it
            result[elementSplit[0].toLowerCase()][question] = {} 
            result[elementSplit[0].toLowerCase()][question][elementSplit[0].toLowerCase().slice(0,elementSplit[0].length-1)] = element.slice(element.indexOf(":")+2,element.indexOf("-")-1) // add the name of the person
            result[elementSplit[0].toLowerCase()][question]["responses"] = [element.slice(element.indexOf(":",element.indexOf(":")+1)+2,element.length)] // add the response
        } else {
            result[elementSplit[0].toLowerCase()][question]["responses"].push(element.slice(element.indexOf(":",element.indexOf(":")+1)+2,element.length))
        }
    })
    return result
}