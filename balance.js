// Let's make it functional!

//Declare Variables:


$("#month-button").click(function() {
	console.log(month);
});

// Calculate with inputs

function int() {
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



	// Step Two: Display It!


	//get the value of monthvalue 
	var monthInput = document.getElementById("month").value;


	//append to table 

	var newRow = "<tr><td>" + monthInput + "</td><td>" + NB + "</td></tr>";
	$("#myTable").append(newRow);

};





// Put it all together

$("#button").click(function() {
	int();
});


// Next step - Auto generate on the "next" button 

var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];


$("#next").click(function() {

	// auto populate the next month: 

	var monthInput = document.getElementById("month").value;


	for (let i = 0; i < months.length; i++ ) {
		if (monthInput.toLowerCase() === months[i]) {
			nextMonth = months[i+1];
			document.getElementById("month").value = nextMonth;

		}
	}





});






