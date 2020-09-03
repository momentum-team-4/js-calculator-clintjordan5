let display = document.querySelector ("#output")

let number0 = document.querySelector (".number0")
number0.addEventListener ("click", function () {
    display.textContent += "0"
    console.log (0)
})

let number1 = document.querySelector(".number1")
number1.addEventListener ("click", function () {
    display.textContent += "1"
    console.log (1)
})

let number2 = document.querySelector(".number2")
number2.addEventListener ("click", function () {
    display.textContent += "2"
    console.log (2)
})

let number3 = document.querySelector(".number3")
number3.addEventListener ("click", function () {
    display.textContent += "3"
    console.log (3)
})

let number4 = document.querySelector(".number4")
number4.addEventListener ("click", function () {
    display.textContent += "4"
    console.log (4)
})

let number5 = document.querySelector(".number5")
number5.addEventListener ("click", function () {
    display.textContent += "5"
    console.log (6)
})

let number6 = document.querySelector (".number6")
number6.addEventListener ("click", function () {
    display.textContent += "6"
    console.log (6)
})

let number7 = document.querySelector (".number7")
number7.addEventListener ("click", function () {
    display.textContent += "7"
    console.log (7)
})

let number8 = document.querySelector (".number8")
number8.addEventListener ("click", function () {
    display.textContent += "8"
    console.log (8)
})

let number9 = document.querySelector (".number9")
number9.addEventListener ("click", function () {
    display.textContent += "9"
    console.log (9)
})

// using querySelector to display numbers in calculator
// when the number is clicked, it will output into "display" which is the area defined in the HTML
// was able to verify numbers with console log, which helped build the remainder of the calculator

const clear = document.querySelector (".letterC")

clear.addEventListener("click", function () {
    display.textContent = ""
})

// made a constant for the clear button. when clicking "C" it will have a blank output in the display

const equal = document.querySelector (".equals")

equal.addEventListener("click", function(){
    let compute = display.textContent
    let total = eval(compute)
    display.textContent = total
})

// made a function for the equal button. when clicked, it will compute what is displayed
// the total will evaluate what is being displayed



let divide = document.querySelector (".division")
divide.addEventListener ("click", function () {
    display.textContent += "/"
})

let multiply = document.querySelector (".multiplication")
multiply.addEventListener ("click", function () {
    display.textContent += "*"
})

let subtract = document.querySelector (".subtraction")
subtract.addEventListener ("click", function () {
    display.textContent += "-"
})

let plus = document.querySelector (".addition")
plus.addEventListener ("click", function () {
    display.textContent += "+"
})

let decimal = document.querySelector (".decimal")
decimal.addEventListener ("click", function () {
    display.textContent += "."
})

// once numbers and clear / equal functions are visible, added buttons for divide, multiply, subtract, add, divide, and decimal