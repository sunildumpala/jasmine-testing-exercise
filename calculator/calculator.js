window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues();
  console.log(values);
  let monthly = calculateMonthlyPayment(values);
  updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  console.log("in the calculateMonthlyPayment function");
  let monthly;
  let monthlyraw;
  let principal = values.amount;
  let term = values.years*12;
  let interest = values.rate/1200;
  console.log("in the calculateMonthlyPayment function: ", principal, term, interest);
  //monthly = Math.round((((principal * interest)/(1-((1+interest)**(-term))))*100)/100) ;
  monthlyraw = (principal * interest)/(1-((1+interest)**(-term)));
  console.log("Monthly raw comes out to: ", monthlyraw);
  //monthly = (Math.round(monthlyraw * 100))/100;
  monthly = parseFloat(monthlyraw).toFixed(2);
  console.log("Monthly comes out to: ", monthly);
  
  return monthly;

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlydiv = document.getElementById("monthly-payment");
  console.log(monthlydiv);
  monthlydiv.textContent = monthly;
}
