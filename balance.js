// Let's make it functional!


// Declare global variables

var payoffButton = document.getElementById("payoff")

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

var count = 0;


// STEP ONE ==================================================================================== //

// Use the formula to calculate the new balance:

function findNB() {
	var interest1 = document.getElementById("PB").value * document.getElementById("IR").value;
	var int2 = interest1 / 365;
	var int3 = document.getElementById("days").value * int2;

	// interest + principal balance

	var PB = document.getElementById("PB").value;
	var IB = (parseFloat(int3) + parseFloat(PB));

	// let's find the new balance!

	var MP = document.getElementById("MP").value;
	var NB = (parseFloat(IB) - parseFloat(MP));
	return NB;

}


// Append the month and new balance to the table:
function toTable() {

	//get the value of monthvalue 
	var monthInput = document.getElementById("month").value;

	//append to table (left or right, depending on if the index is even or odd)

	$(".year-heading").replaceWith("<h3>" + document.getElementById("year").value + "<h3>");

	if (count % 2 === 0) {
		var leftRow = "<tr><td>" + monthInput + "</td><td id='nbVal'>" + findNB() + "</td></tr>";
		$("#tableLeft").append(leftRow);
	} else {
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
	calculateMonth();
});

function calculateMonth() {
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

	if (monthInput.toLowerCase() === 'december') {
			var year = parseInt(document.getElementById("year").value);
			var nextYear = year + 1;
			document.getElementById("year").value =  nextYear;
	}

	count++; 


	// auto populate the Principal Balance:

	document.getElementById("PB").value = findNB();

}

// On 'Calculate payoff', we essentially want to take a piece of the below function but do all the math inherintely.
$("#payoff").click(function() {
	calculatePayoff();
});


function calculatePayoff() {
	const originalValue = parseInt(document.getElementById("PB").value)
	let principal = parseInt(document.getElementById("PB").value)
	let monthCount = 0

	while (principal >= 0) {

		calculateMonth()
		principal = parseInt(document.getElementById("PB").value)

		monthCount++
	}

	let totalCost = (monthCount * parseInt(document.getElementById("MP").value)) + principal
	console.log('total cost: ', totalCost)
	console.log('total interest: ', totalCost - originalValue)
	
}

//If I want to manually calculate up until a certain month
$("#manual").click(function() {
	calculateManual()
})

function calculateManual() {
	let principal = parseInt(document.getElementById("PB").value)
	const currentMonth = document.getElementById("month").value;
	const currentYear = document.getElementById("year").value;
	const newMonth = document.getElementById("manualMonth").value;
	const newYear = document.getElementById("manualYear").value;

	//Figure out the difference in months 

	let yearDifference = (newYear - currentYear) * 12

	const months = monthOb.map((m => m.month))
	const current = months.findIndex((m) => m == currentMonth)
	const newM = months.findIndex((m) => m == newMonth)
	const monthDifference = newM - current

	const totalMonths = yearDifference + monthDifference

	for (let i = 0; i < totalMonths; i ++) {
		calculateMonth()
		principal = parseInt(document.getElementById("PB").value)
	}
}
