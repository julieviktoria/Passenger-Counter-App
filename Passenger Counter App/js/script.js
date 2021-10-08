// build a counter app

// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch

// console.log(count)

// let myAge = 35
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

// let bonusPoints = 50

// bonusPoints = bonusPoints + 50

//bonusPoints = bonusPoints - 75

// bonusPoints = bonusPoints + 45

//console.log(bonusPoints)

let countEl = document.getElementById('count-el')

console.log(countEl)

let count = 0 

function increment() {
    count = count + 1
    countEl.innerText = count
    
}