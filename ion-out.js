// function ionOut(str){
//     const regex = /tion/g
//     let result = []
//     let match 
//     str = str.replace(/,/g, '')
//     let strArr = str.split(' ') //[attention, direction]
//     for(let i= 0; i<=strArr.length; i++){
//         while (match = regex.exec(strArr[i])){
//             result.push(strArr[i].replace('tion', 't'))
//         }
//     }
//     return result
// }

function ionOut(str) {
    return str.replace(/,/g, '')
        .split(' ')
        .filter(s => s.includes('tion'))
        .map(s => s.replace(/tion/g, 't'))
}