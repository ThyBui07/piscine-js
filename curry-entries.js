// You're going to create some curry functions, to apply to the object's entries.

// Create defaultCurry, which curries two objects. It mergers the objects together. If the key exists in both objects, the value from the second object override the value from the first object.

// defaultCurry({
//   http: 403,
//   connection: 'close',
//   contentType: 'multipart/form-data',
// })({
//   http: 200,
//   connection: 'open',
//   requestMethod: 'GET'
// })
// // output
// {
//     http: 200,
//     connection: 'open',
//     contentType: 'multipart/form-data',
//     requestMethod: 'GET'
// }

// Create mapCurry, which replicates function .map (but for an object). The first entry is the function, and the second entry is the object.

// mapCurry(([k, v]) => [`${k}_force`, v])(personnel)
// // output
// {
//   lukeSkywalker_force: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
//   sabineWren_force:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//   zebOrellios_force:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//   ezraBridger_force:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
//   calebDume_force:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
// }
// Create reduceCurry, which replicates the .reduce method (but from an object). The first entry is the function, and the second is the object and initial value).

// reduceCurry((acc, [k, v]) => (acc += v))({ a: 1, b: 2, c: 3 }, 0)
// // output
// 6
// Create filterCurry which replicates the .filter method (but for an object). The first entry is the function, and the second is an object.

// filterCurry(([k, v]) => typeof v === 'string' || k === 'arr')({
//   str: 'string',
//   nbr: 1,
//   arr: [1, 2],
// })
// // output
// { str: 'string', arr: [1, 2] }
// Using each curry function create the following functions with a parameter personnel:

// reduceScore: that will return the total value of the scores of the people who use the force. (this function can have one additional parameter).
// filterForce: that will return the force users with shootingScores equal to or higher than 80.
// mapAverage: that will return a new object with the property averageScore, that is the average of the scores for each person.

const defaultCurry = (obj1) => {
    let res = {}
    return function (obj2) {
      for (const [key, value] of Object.entries(obj1)) { if (obj2[key] === undefined) { res[key] = value } else { res[key] = obj2[key] } }
      for (const [key, value] of Object.entries(obj2)) { if (obj1[key] === undefined) { res[key] = value } }; return res
    }
  }
  
  const mapCurry = (fn) => {
    let res = {}
    return function (obj) { for (const [key, value] of Object.entries(obj)) { let temp = fn([key, value]); res[temp[0]] = temp[1] }; return res }
  }
  

  const reduceCurry = (fn) => {
    return function (obj, acc) {
      for (const [key, value] of Object.entries(obj)) { if (acc === undefined) { acc = fn([key, value]) }; acc = fn(acc, [key, value]) }; return acc
    }
  }
  
  const filterCurry = (fn) => {
    let res = {}
    return function (obj) { for (const [key, value] of Object.entries(obj)) { if (fn([key, value])) { res[key] = obj[key] } }; return res }
  }
  
  const reduceScore = (el, initVal) => {
    let totalScore = 0
    if (initVal != undefined) { totalScore = initVal }
    for (const [key, pilot] of Object.entries(el)) { for (const [key1, value1] of Object.entries(pilot)) { if (key1.includes('Score') && pilot.isForceUser === true) { totalScore = totalScore + value1 } } }
    return totalScore
  }
  
  const filterForce = (el) => {
    let res = {}
    for (const [pilot, info] of Object.entries(el)) { if (info.shootingScore >= 80 && info.isForceUser) { res[pilot] = info } }
    return res
  }
  
  const mapAverage = (el) => {
    let res = {}
    for (const [pilot, info] of Object.entries(el)) { res[pilot] = info; res[pilot]['averageScore'] = (res[pilot]['pilotingScore'] + res[pilot]['shootingScore']) / 2 }
    return res
  }
  