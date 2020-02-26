var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter final HW points (0-30):"));

floatMidPts = parseFloat(prompt("Please enter final Midterm points (0-35):"));

floatFinPts = parseFloat(prompt("Please enter final exam points (0-35):"));

floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts);

intGradeOption = parseInt(prompt("Enter 1 if you want pass/fail. Enter 2 if you want letter grade"));

if (intGradeOption===1)
{
    if(floatTotalPts >= 80)
    {
    stringFinalGrade= "Pass";
    }
    else
    {
    stringFinalGrade= "Fail";
    }
}
else
{

    if(floatTotalPts >= 90)
    {
    stringFinalGrade= "A";
    }

else
{
        if(floatTotalPts >=80 && floatTotalPts <90)
        {
        stringFinalGrade= "B";
        }

else
{
             if(floatTotalPts >=70 && floatTotalPts <80)
             {
             stringFinalGrade= "C";
             }

else
{
                if(floatTotalPts >=60 && floatTotalPts <70)
                {
                stringFinalGrade= "D";
                }
                
else
                {
                stringFinalGrade= "F";
}
               
}
}
}
}





alert("Your final grade is: " +stringFinalGrade);