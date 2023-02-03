// Create a function named getJSON with two parameters:

// path: a URL called by your function.
// params: optional query parameters that will be appended to the path.
// getJSON must construct a valid url with the path and stringified params, and use fetch to fulfil the request.

// If the response is not OK, getJSON must throw an error using the response status text.

// The response body must then be read and parsed from JSON.

// The parsed object contains one of those 2 properties:

// "data": the actual data to return.
// "error": the error message to throw.

async function getJSON(path,params) {
    let url = path+"?"
    for (let entries of Object.entries(params)){
        url += entries[0] + "="
        if(typeof entries[1] == "string") {
            entries[1].split(" ").forEach(element => url += element +"+")
            url = url.substring(0, url.length - 1) + "&"
        } else {
            url += entries[1] + "&"
        }
    }
    try {
        let result = await fetch(url.substring(0, url.length - 1))
        let json = await result.json()

        if (!result.ok) {
            throw Error(result.statusText)
        }
        if (json.error) {
            throw Error(json.error) 
        }
    
        return json.data; 

    } catch (err) {
        throw err
    }
}