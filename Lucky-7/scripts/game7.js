/*
	Name: Anthony Plows
	Date Created: 4 Nov 2018
	Most recent revision:
*/

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function prompt2play() {
alert("Please enter the amount of dollars you want to bet and enter it in the text field!");}

function playGame() {
	var bet = document.forms["game7"]["bet"].value;
	var loopCounter = bet;
	var rollCounter = 0;
	var highWin = 0;
	var highRolls = 0;
	var sum = 0;
	
	if (bet == "" || bet < 0) {
        alert("Please enter a bet amount higher than 0");
		return false;
    }
		
	while (loopCounter > 0) {
		sum += rollDice();
		sum += rollDice();
		totalRoll = sum;
		
		if (totalRoll == 7) {
			loopCounter += 4;
		} else {
			loopCounter -= 1;}
			
		if (loopCounter > highWin) {
			highWin = loopCounter;
			highRolls = rollCounter;}
			
		rollCounter++;
	}
	
	document.getElementById("results").style.display = "block";
	document.getElementById("starting").innerText = "$" + bet + ".00";
	document.getElementById("broke-rolls").innerText = rollCounter;
	document.getElementById("high-win").innerText = "$" + highWin + ".00";
	document.getElementById("high-rolls").innerText = highRolls;
	
	return false;
}
