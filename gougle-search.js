// Description: A simple implementation of a search engine that uses multiple servers to search for results

// queryServers: query a server for results
async function queryServers(serverName, q) {
    const url = `/${serverName}?q=${q}` 
    const backupUrl = `/${serverName}_backup?q=${q}` 
    const p1 = getJSON(url) // try to get the fastest response
    const p2 = getJSON(backupUrl)
    return await Promise.any([p1, p2]).then((result) => { // return the fastest response
        return result
    }).catch((e) => { // if both fail, return the error from the first one
        throw e
    })
}

//timeout handler
function timeout(delay, callback) {
    return Promise.race([callback, new Promise((_, reject) => { // return the fastest response
        setTimeout(() => reject(new Error("timeout")), delay)
    })])
}

// main function, returns the fastest response from each server
async function gougleSearch(query) {
    let result = await Promise.all([ // return the fastest response from each server
        await timeout(80, queryServers('web', query)),
        await timeout(80, queryServers('image', query)),
        await timeout(80, queryServers('video', query))
    ])
    return {'web': result[0], 'image': result[1], 'video': result[2]}
}
