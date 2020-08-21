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

// note - wrote out queryselector and event listener for 1-9. 
// looking at console for index.html the error is 
// Uncaught TypeError: Cannot read property 'addEventListener' of null at main.js:2