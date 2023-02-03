async function isWinner(country) {
    let obj = await db
    let boolTest = false
    let ifWinner =  await obj["getWinner"](country).catch((err) => { 
        boolTest = true    
    })
    if(boolTest == true) {
        return country + ' never was a winner'
    } else {
        let countryData = await obj["getWinner"](country)
        if(countryData.continent != 'Europe') return country + ' is not what we are looking for because of the continent'
        let nbVictory = 0
        let date = []
        let score = await obj["getResults"](countryData.id).catch(err => {return country + ' is not what we are looking for because of the number of times it was champion'})
        if (score.length < 3) {
            return country + ' is not what we are looking for because of the number of times it was champion'
        } else { 
            let result = country + ' won the FIFA World Cup in '
            score.forEach(element => { result += element.year+", " })
            result = result.substring(0, result.length - 2) + ' winning by '
            score.forEach(element => { result += element.score+", " })
            return result.substring(0, result.length - 2)
        }
    }
}