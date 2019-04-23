"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 2

   Author: Austin Inmon
   Date:   4.22.19
   
   Filename: dl_expenses.js
   
   Function List
   =============
   
   validateSummary()
      Validates the data entry in the summary field.
   
   calcClass(sumClass)
      Sums up all of the data values for elements of the sumClass class.
      
   calcExp()
      Calculates the travel expenses from all categories and dates.
      
   formatNumber(val, decimals)
      Formats the value, "val" to the number of decimals indicated 
      by "decimals", adding thousands separators.
      
   formatUSCurrency(val)
      Formats the value, "val", as U.S. currency.
      
*/
//Loading an anonymous When the page is fully laoded. 
window.addEventListener("load", function () {
    //Getting all the content that is in the id of travelExp thats inside of the input nested in the class of sum.
    var changingCells = document.querySelectorAll("#travelExp input.sum");
    //Looping through chaging cells and changing to CalcExp function.
    for (var i = 0; i < changingCells.length; i++) {
        changingCells[i].addEventListener("change", calcExp);
    }
    //Every time the button with the id of submit button is clicked the validateSummary function will be ran. 
    document.getElementById("submitButton").addEventListener("click", validateSummary);
});
//The purpose of the function is display a custom message to the user. 
function validateSummary() {
    // if the input with the id of summary is missing a value then the messge "You must include a summary of the trip in your report." will show up.
    if (document.getElementById("summary").validity.valueMissing) {
        document.getElementById("summary").setCustomValidity("You must include a summary of the trip in your report.");
        //if not missing any values, then there will not have any message and the message will not appear. 
    } else {
        document.getElementById("summary").setCustomValidity("")
    }
}
// purpose of the function is to sum the values of input elements belonging to the sumClass. 
function calcClass(sumClass) {
    //all elements that have the class of sumClass are in the sumField.
    var sumFields = document.getElementsByClassName(sumClass);
    //The initail value of sumtotal is 0;
    var sumTotal = 0;

    for (var i = 0; i < sumFields.length; i++) {
        var itemValue = parseFloat(sumFields[i])
        //If itemValue is not a number than its false
        if (isNaN(itemValue) === false) {
            sumTotal + itemValue;
        }
    }
    //returning the value of sumTotal 
    return sumTotal;
}
//Calculates the travel expenses from all categories and dates. 
function calcExp() {
    var expTable = document.querySelectorAll("#travelExp tbody tr");
    for (var i = 0; i < expTable.length; i++) {
        expTable[i].querySelector("input#index" + i).values = formatNumber(calcClass("date" + i), 2)
    }
}





function formatNumber(val, decimals) {
    return val.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}

function formatUSCurrency(val) {
    return val.toLocaleString('en-US', {
        style: "currency",
        currency: "USD"
    });
}