console.log("mochi is a dog");
let selectedPlayer = document.getElementById("p1LifePoints");
function addLife() {
	let addTo = parseInt(selectedPlayer.value);
	let addThis = parseInt(document.getElementById("addThis").value);
	selectedPlayer.value = addTo + addThis;
}
function subLife() {
	let subFrom = parseInt(selectedPlayer.value);
	let addThis = parseInt(document.getElementById("addThis").value);
	selectedPlayer.value = subFrom - addThis;
}
function selectPlayer(playerNum) {
	let elment = "p" + playerNum + "LifePoints";
	selectedPlayer = document.getElementById(elment);
	console.log(elment);
	console.log(selectedPlayer);
	document.getElementById("playerIndicator").innerText = "Player " + playerNum + " selected";
}
function resetLife() {
	document.getElementById("p1LifePoints").value = "8000";
	document.getElementById("p2LifePoints").value = "8000";
}
function roll() {
	numberOfDice = document.getElementById("numberOfDice").value;
	numberOfSides = document.getElementById("numberOfSides").value;
	let result = Math.floor(Math.random() * numberOfSides) + 1;
	if (numberOfDice === "1") {
		document.getElementById("rollResult").innerText = "Roll Result: " + result;
	}
	else if (parseInt(numberOfDice) > 1) {
		let num;
		let process = "";
		let sum = 0;
		for (let i = 0; i < numberOfDice; i++) {
			num = Math.floor(Math.random() * numberOfSides) + 1;
			process += num + " + ";
			sum += num;
		}
		process = process.slice(0,-3) + " = ";
		document.getElementById("rollResult").innerText = "Roll Result: " + process + sum;
	}
}