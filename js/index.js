const playerOneRow = [
	{ name: "goalTwo", marbles: 0 }, //0
	{ name: "spotZero", marbles: 4 }, //1
	{ name: "spotOne", marbles: 4 }, //6
	{ name: "spotTwo", marbles: 4 }, //6
	{ name: "spotThree", marbles: 4 }, //5
	{ name: "spotFour", marbles: 4 }, //5
	{ name: "spotFive", marbles: 4 } //5
];

const playerTwoRow = [
	{ name: "goalOne", marbles: 0 }, //1
	{ name: "spotZero", marbles: 4 }, //5
	{ name: "spotOne", marbles: 4 }, //5
	{ name: "spotTwo", marbles: 4 }, //5
	{ name: "spotThree", marbles: 4 }, //5
	{ name: "spotFour", marbles: 4 }, //5
	{ name: "spotFive", marbles: 4 } //5
];

var playerOne = true;
var playerTwo = false;

function turnSwitch() {
	playerOne = !playerOne;
	playerTwo = !playerTwo;
}
playerMove = spot => {
	if (playerOne) {
		playerRow = playerOneRow;
	} else {
		playerRow = playerTwoRow;
	}
	if (playerRow[spot].marbles !== 0) {
		s = 1;
		sExtend = 0;
		superExtend = 1;
		ultraExtend = 0;
		reflow = 0;
		for (i = 0; i < playerRow[spot].marbles; i++) {
			if (s <= 7 - (spot + 1)) {
				playerRow[spot + s].marbles++;
			} else if (s > 7 - (spot + 1) && s <= 7 - (spot + 1) + 7) {
				if (playerOne) {
					playerTwoRow[sExtend].marbles++;
					sExtend++;
				} else if (playerTwo) {
					playerOneRow[sExtend].marbles++;
					sExtend++;
				}
			} else if (s > 7 - (spot + 1) + 7 && s < 7 - (spot + 1) + 14) {
				if (playerOne) {
					console.log(superExtend);
					playerOneRow[superExtend].marbles++;
					superExtend++;
					reflow = 1;
				} else if (playerTwo) {
					playerTwoRow[superExtend].marbles++;
					superExtend++;
					reflow = 1;
				}
			} else if (s > 7 - (spot + 1) + 14 && s <= 7 - (spot + 1) + 21) {
				if (playerOne) {
					playerTwoRow[ultraExtend].marbles++;
					ultraExtend++;
				} else if (playerTwo) {
					playerOneRow[ultraExtend].marbles++;
					ultraExtend++;
				}
			} else {
				console.log("too many .(-.-).");
			}
			s++;
		}

		playerRow[spot].marbles = reflow;
		turnSwitch();
		displayStart();
	} else {
		/*make players choose again*/
	}
};

displayStart = () => {
	document.getElementById("p2goal").innerHTML = playerOneRow[0].marbles;
	document.getElementById("p1spot1").innerHTML = playerOneRow[1].marbles;
	document.getElementById("p1spot2").innerHTML = playerOneRow[2].marbles;
	document.getElementById("p1spot3").innerHTML = playerOneRow[3].marbles;
	document.getElementById("p1spot4").innerHTML = playerOneRow[4].marbles;
	document.getElementById("p1spot5").innerHTML = playerOneRow[5].marbles;
	document.getElementById("p1spot6").innerHTML = playerOneRow[6].marbles;
	document.getElementById("p1goal").innerHTML = playerTwoRow[0].marbles;
	document.getElementById("p2spot1").innerHTML = playerTwoRow[1].marbles;
	document.getElementById("p2spot2").innerHTML = playerTwoRow[2].marbles;
	document.getElementById("p2spot3").innerHTML = playerTwoRow[3].marbles;
	document.getElementById("p2spot4").innerHTML = playerTwoRow[4].marbles;
	document.getElementById("p2spot5").innerHTML = playerTwoRow[5].marbles;
	document.getElementById("p2spot6").innerHTML = playerTwoRow[6].marbles;
};

displayStart();