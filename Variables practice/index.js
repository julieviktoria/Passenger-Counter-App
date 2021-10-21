let firstName = "Julie Viktoria"
let lastName = "Bull"
let greeting = "Hi there"

let fullName = firstName + " " + lastName

// console.log(fullName)

function greetJulie() {
    console.log(greeting + ", " + fullName + "!")
}

let myPoints = 3

function add3Points() {
    myPoints = 3
}

function remove1Points() {
    myPoints = -1
}

add3Points()
add3Points()
add3Points()
remove1Points()
remove1Points()

console.log(myPoints)