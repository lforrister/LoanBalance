// Let's make it functional!

//Take input
function monthValue() {
	var input = document.getElementById("month").value;
	console.log(input);
}

function princBal() {
	var input = document.getElementById("PB").value;
	console.log(input);
}

function intRate() {
	var input = document.getElementById("IR").value;
	console.log(input);
}

function monthPay() {
	var input = document.getElementById("MP").value;
	console.log(input);
}

function days() {
	var input = document.getElementById("days").value;
	console.log(input);
}



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
	toTable();
});







