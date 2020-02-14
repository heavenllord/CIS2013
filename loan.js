var $ = function (id) 
{
    return document.getElementById(id);
};


/*
 *start
   var floatMonthlyPayment, intLoanTerm, floatTotalCost;
   loanMonthlyPayment = parseFloat(prompt( "Enter Monthly Payment"));
   intLoanTerm = parseInt(prompt("Enter Loan"));
   floatTotalCost = parseFloat(floatMonthlyPayment * intLoanTerm);
   alert("Your Total Payment is: " + floatTotalCost);
  end
*/
 var calculate = function()
 {  var floatMonthlyPayment, intLoanTerm, floatTotalCost;
    floatMonthlyPayment = parseFloat($("monthly_payment").value);
    intLoanTerm = parseInt($("loan_length").value);
    floatTotalCost = parseFloat(floatMonthlyPayment * intLoanTerm);
    $("total_cost").value = floatTotalCost;
};
 
 window.onload = function () 
{
    $("loan_length").value = "";
    $("total_cost").value = "";
    $("calc").onclick = calculate;
    $("monthly_payment").focus();
};