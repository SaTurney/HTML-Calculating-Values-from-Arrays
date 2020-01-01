"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author:  Sabrina Turney
   Date:    09/30/2019
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
var reportHTML = "<h1>" + raceTitle + "</h1>";
var totalVotes;

//Step 6: Create a for loop that loops through the contents of the race array using i.
for (var i = 0; i < race.length; i++) {
    totalVotes = 0;
    votes[i].forEach(calcSum);
    //using variables totalVotes set to 0, and using forEach() and calcSum() as callback.
    reportHTML += "<table><caption>" + race[i] + "</caption><tr><th>Candidate</th><th>Votes</th></tr>";
    //added the HTML text to reportHTML with race[i] to get current race array.
    reportHTML += candidateRows(i, totalVotes);
    //6 part D: Call candidateRows function and add it to reportHTML value.
    reportHTML += "</table>"
    //6 part E: end the table to the end of the reportHTML variable.
}
document.getElementsByTagName()[0].innerHTML = reportHTML;



/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
   return (100*value/sum);
}

/* function to write individual table rows for each candidate 
Shows the candidate’s name, party affiliation, vote total,
and vote percentage. */
function candidateRows(raceNum, totalVotes) {
    var rowHTML = "";
    for (var j = 0; j <= 2; j++) {
        var candidateName = candidate[raceNum][j];
        var candidateParty = party[raceNum][j];
        var candidateVotes = votes [raceNum][j];
        var candidatePercent = calcPercent(candidateVotes , totalVotes);
        rowHTML += "<tr><td>"+candidateName +"("+candidateParty+")</td><td>"+ candidateVotes.toLocaleString() + "(" + candidatePercent.toFixed(1)+")</td></tr>"
        
        return rowHTML
    }

}

