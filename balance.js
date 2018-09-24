// Let's make it functional!

$(document).ready(function() {
	console.log("TEST");
});

var monthOb = [
	{month: 'january', days:31},
	{month: 'february', days:28},
	{month: 'march', days: 31},
	{month: 'april', days:30},
	{month: 'may', days:31},
	{month: 'june', days:30},
	{month: 'july', days:31},
	{month: 'august', days:31},
	{month: 'september', days:30},
	{month: 'october', days:31},
	{month: 'november', days:30},
	{month: 'december', days:31}
];

	var monthArray = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

// STEP ONE ==================================================================================== //

// Use the formula to calculate the new balance:

function findNB() {
	var interest1 = document.getElementById("PB").value * document.getElementById("IR").value;
	console.log(interest1);
	var int2 = interest1 / 365;
	console.log(int2);
	var int3 = document.getElementById("days").value * int2;
	console.log(int3);

	// interest + principal balance

	var PB = document.getElementById("PB").value;
	var IB = (parseFloat(int3) + parseFloat(PB));
	console.log(IB);

	// let's find the new balance!

	var MP = document.getElementById("MP").value;
	var NB = (parseFloat(IB) - parseFloat(MP));
	console.log(NB);
	return NB;

}


// Append the month and new balance to the table:
function toTable() {

	//get the value of monthvalue 
	var monthInput = document.getElementById("month").value;
	console.log("The monthInput is: " + monthInput);


	//append to table (left or right, depending on if the index is even or odd)

	var even = monthArray.indexOf(monthInput.toLowerCase());
	console.log("The index is: " + even);

	if (even % 2 === 0) {
		console.log("It's a left month!");
		var leftRow = "<tr><td>" + monthInput + "</td><td id='nbVal'>" + findNB() + "</td></tr>";
		$("#tableLeft").append(leftRow);
	} else {
		console.log("It's a right month!");
		var rightRow = "<tr><td>" + monthInput + "</td><td id='nbVal'>" + findNB() + "</td></tr>";
		$("#tableRight").append(rightRow);
	}


};


// On "submit" button, trigger earlier functions to append new row to table

$("#button").click(function() {
	toTable();
});


// STEP TWO ==================================================================================== //


// Next step: auto populate appropriate fields when the "next" button is clicked


// When you click "next", do the following: 
$("#next").click(function() {

	// auto populate the next month and days in month from monthOb object:

	var monthInput = document.getElementById("month").value; 

	for (let i = 0; i < 11; i ++) {
		if (monthInput.toLowerCase() === monthOb[i].month) {
			nextMonth = monthOb[i+1].month;
			document.getElementById("month").value = nextMonth;
			nextDays = monthOb[i+1].days;
			document.getElementById("days").value = nextDays;
		} else if (monthInput.toLowerCase() === 'december') {
			document.getElementById("month").value = 'january';
			document.getElementById("days").value = 31;
		}
	}	


	// auto populate the Principal Balance:

	document.getElementById("PB").value = findNB();



});






