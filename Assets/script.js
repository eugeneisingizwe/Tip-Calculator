var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var submitEl = document.querySelector("#submit");

function calculateTip(total, tipPercentage){
    var roundedResults = (total * tipPercentage).toFixed(2);
    return roundedResults;
}

function caluateTotal(total, tipAmount){
    return parseFloat(total) + parseFloat(tipAmount);
}

function addTip(event){
    event.preventDefault()
    var tipPercentage = tipEl.value * .01;
    var total = totalEl.value;
    var tipAmount = calculateTip(total, tipPercentage);
    var newTotal = caluateTotal(tipAmount, total);
    document.querySelector("#tip-amount").textContent = tipAmount;
    document.querySelector("#new-total").textContent = newTotal.toFixed(2);
}

submitEl.addEventListener("click", addTip);