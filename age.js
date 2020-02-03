   var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("Enter Age"));
     floatDays = parseFloat(floatAge*float365.25);
     floatMonths = parseFloat(floatAge*float12);
     intWeeks = parseInt(floatsDays/float7);
     intFortnights = parseInt(floatDays/float14);
     alert("Your age is: " + floatAge);
     alert("Your age is: " + floatDays);
     alert("Your age is: " + floatMonths);
     alert("Your age is: " + intWeeks);
     alert("Your age is: " + intFortnights);
/*This program will calculate foatDays by multipying age x 365.25*/
