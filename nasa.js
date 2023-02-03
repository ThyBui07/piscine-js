// Create a function named nasa that takes a number N as an argument and returns a string with all numbers from 1 to N separated by spaces. There are three exceptions:

// Convert numbers which are divisible by 3 to "NA".
// Convert numbers which are divisible by 5 to "SA".
// Convert numbers which are divisible by 3 and 5 to "NASA".

function nasa(x){
    let res = ''
    for(let i = 1;i<=x;i++){
        if(i%3 ===0 && i%5 ===0){
            res += 'NASA' + ' '
        }else if(i%3 === 0 && i%5 != 0){
            res += 'NA'+' '
        }else if(i%3 != 0 && i%5 === 0){
            res += 'SA'+ ' '
        }else{
            res += String(i)+' '
        }   
    }
    res = res.slice(0,res.length-1)
    return res
}