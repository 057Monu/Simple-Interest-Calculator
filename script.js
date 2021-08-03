function compute() {

  var principal = document.getElementById("principal").value;

  var rate = document.getElementById("rate").value;

  var years = document.getElementById("years").value;

  var interest = principal * years * rate / 100;

  var year = new Date().getFullYear() + parseInt(years);

  var valid = validate(principal, rate, years);

  if(valid){
    changeSpan(principal, rate, year, interest);
  }
}

function validate(principal, rate, years){
  if(principal <= 0){
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return false;
  }
  return true;
}

function updateRate() {
  var rateval = document.getElementById('rate').value;
  document.getElementById('rate_val').innerHTML = rateval + "%";
}

function changeSpan(principal, rate, years, interest) {
//  var compute = document.getElementById("result");
  document.getElementById("result").innerHTML = "<br/><br/>If you deposit "+ "<span id='color'>"+ principal  +
     "</span> " + ",<br/>at an interest rate of "+ "<span id='color'>"+ rate + "%" +"</span> " +
      ".<br/>You will receive an amount of " + "<span id='color'>"+ interest  + "</span> " + ",<br/>in the year " +
       "<span id='color'>"+ years  +"</span> ";
}
