/*-------------------------------- Constants --------------------------------*/
/*-------------------------------- Variables --------------------------------*/

let currentDisplay
let numberEntered = ''
let firstValue = '0'

/*------------------------ Cached Element References ------------------------*/

const display = document.querySelector('.display')
const calculator = document.querySelector('.calculator')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('#equals')
const clear = document.querySelector('#clear')
// const add = document.querySelector('#add')
// const multiply = document.querySelector('#multiply')
// const subtract = document.querySelector('#subtract')
// const divide = document.querySelector('#divide')

/*----------------------------- Event Listeners -----------------------------*/

numbers.forEach(number => {
    number.addEventListener("click", (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target)
    //   currentDisplay = event.target.innerText
    //   display.innerText = currentDisplay
      display.innerText = display.innerText + event.target.innerText
      console.log(event.target.innerText);
      console.log(display)
      // Future logic to capture the button's value goes here...
    });
  });
  
  operators.forEach(operator => {
   operator.addEventListener("click", (event) => {
      
    // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target)
    
      display.innerText = display.innerText + event.target.innerText
      console.log(event.target.innerText);
      console.log(display)
      // Future logic to capture the button's value goes here...
    });
  });
  equals.addEventListener('click',result)
  clear.addEventListener('click', reset)

/*-------------------------------- Functions --------------------------------*/
function result(){
   display.innerText = eval(display.innerText)
}

function reset(){
    display.innerText = "";
}
// get buttons to click so user can select
// things that happen when using a calculator: a number key, operator key, decimal key, equal key, and clear key

// i want the numbers to display in the diplay box 
// display is a div




// Assisted by Will and Tom