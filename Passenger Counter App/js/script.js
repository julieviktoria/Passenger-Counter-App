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

let welcomeEl = document.getElementById('welcome-el')

let name = "Julie Viktoria Bull "
let greeting = "Welcome back, "

welcomeEl.innerText = greeting + name + "👋"

let count = 0 
let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el')

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}