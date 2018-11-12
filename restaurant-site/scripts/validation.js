/*
	Name: Anthony Plows
	Date Created: 4 Nov 2018
	Most recent revision:
*/

function validateItems() {

    var field1 = document.forms["contact"]["name"].value;
    var field2 = document.forms["contact"]["email"].value;
	var field3 = document.forms["contact"]["phone"].value;
	var field4 = document.forms["contact"]["additional"].value;
	var finalCheck = true;
	
    if (field1 == "") {
        alert("Name must be filled in.");
		finalCheck = false;
        return false;
    }
	
	if (field2 == "") {
        alert("Email must be filled in.");
		finalCheck = false;
        return false;
    }
	
	if (field3 == "") {
        alert("Phone must be filled in.");
		finalCheck = false;
        return false;
    }
	
	if (field4 == "") {
        alert("Additional Information must be filled in.");
		finalCheck = false;
        return false;
    }
	
	if (document.getElementById("choicesM").checked == false &&
		document.getElementById("choicesT").checked == false &&
		document.getElementById("choicesW").checked == false &&
		document.getElementById("choicesTh").checked == false &&
		document.getElementById("choicesF").checked == false) {
		alert("Please pick a day to be reached.");
		finalCheck = false;
        return false;
	}
	
if (Boolean(finalCheck)) {
		document.getElementById("results").style.display = "block";
	}
   
   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
}