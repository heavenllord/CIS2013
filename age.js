   var floatAge, floatDays, intWeeks, floattMonths, intFortnights;
     floatAge = parseFloat(prompt("Enter Age"));
     floatDays = parseFloat(floatAge*365.25);
     floatMonths = parseFloat(floatAge*12);
     intWeeks = parseInt(floatsDays/7);
     intFortnights = parseInt(floatDays/14);
     alert("Your age is: " + floatAge);
     alert("Your age is: " + floatDays);
     alert("Your age is: " + floatMonths);
     alert("Your age is: " + intWeeks);
     alert("Your age is: " + intFortnights);