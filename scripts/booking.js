/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let cost = document.getElementById("calculated-cost");
let clearButton = document.getElementById('clear-button');
let unclicked = document.querySelectorAll('.unclicked');
const fullDay = document.getElementById("full");
const halfDay = document.getElementById("half");
let rate = 0;







/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

for (let i = 0; i < unclicked.length; i++) {
    unclicked[i].addEventListener("click", function() {
        unclicked[i].classList.add("clicked");
        calculate();
    });
}



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

for (let i = 0; i < unclicked.length; i++) {
    clearButton.addEventListener("click", function() {
        unclicked[i].classList.remove("clicked");
        cost.innerHTML = 0;
    });
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfDay.addEventListener('click', halfDayToggle)

function halfDayToggle(){
    if (fullDay.classList.contains("clicked")) {
        fullDay.classList.remove("clicked");
    }
    if (halfDay.classList.contains("clicked")){
        rate = 20;
    }
    calculate()
}




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDay.addEventListener('click', fullDayToggle)

function fullDayToggle(){
    if (halfDay.classList.contains("clicked")) {
        halfDay.classList.remove("clicked");
    }
    if (fullDay.classList.contains("clicked")){
        rate = 35;
    }
    calculate()
}





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    let numDays = document.querySelectorAll('.clicked').length;
    calculatedCost = (numDays - 1) * rate;
    cost.innerHTML = calculatedCost;
}
