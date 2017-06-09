$(document).ready(function(){

// Create Game Properties Object.
var gameProps = {
	init: {
		targetPoints:  Math.floor(Math.random() * (120 - 19 + 1) + 19), 
		currentPoints: 0,
		wins:0,
		losses:0,
	},// Assign Random values to each Crystal img.
	crystals: {
		c1: {
			img:$("#c1"),
			val: Math.floor(Math.random() * (12 - 1 + 1) + 1)
		},
		c2: {
			img:$("#c2"),
			val: Math.floor(Math.random() * (12 - 1 + 1) + 1) 
		},
		c3: {
			img:$("#c3"),
			val: Math.floor(Math.random() * (12 - 1 + 1) + 1) 
		},
		c4: {
			img:$("#c4"),
			val: Math.floor(Math.random() * (12 - 1 + 1) + 1) 
		},
	},
	render: {
		uiTargetPoints: $("#targetPoints"),
		uiCurrentPoints: $("#currentPoints"),
		uiWins: $("#wins"),
		uiLosses: $("#losses"),
	}
};

$("#targetPoints").html("Target Points: " + gameProps.init.targetPoints);

// FUNCTION: Get value of the crystal clicked and update current points.
$(".crystal").on("click", function(){
	$("#status").html("");
	var g = "gameProps.crystals."+$(this).attr("id")+".val";
	gameProps.init.currentPoints += eval(g); // Ask about not using eval later.
	gameProps.render.uiCurrentPoints.html("Current Points: " + gameProps.init.currentPoints);

		if (gameProps.init.currentPoints === gameProps.init.targetPoints){
			gameProps.init.wins++;
			$("#status").html("You Won!");
			gameReset();
		} else if (gameProps.init.currentPoints > gameProps.init.targetPoints){
			gameProps.init.losses++;
			$("#status").html("You Lost!");
			gameReset();
		}
		
	getProgress();
		
});

//FUNCTION: Restarts Game.
function gameReset(){
	gameProps.init.targetPoints = Math.floor(Math.random() * (75 - 25 + 1) + 25);
	$("#targetPoints").html("Target Points: " + gameProps.init.targetPoints);
	gameProps.init.currentPoints = 0;
	gameProps.render.uiCurrentPoints.html("Current Points: " + gameProps.init.currentPoints);
	gameProps.render.uiWins.html("Wins: " + gameProps.init.wins);
	gameProps.render.uiLosses.html("Losses: " + gameProps.init.losses);
	getProgress();
}
// FUNCTION: Updates Progress Bar with each click and game restart.
function getProgress(){
	var progressMarker = $(".progressMarker");
	var currentProgress = $(".currentBar");
	var progressBarWidth = $(".progressBar").width();
	var currentCalc = (gameProps.init.currentPoints/100) * progressBarWidth;
	var targetCalc = (gameProps.init.targetPoints/100) * progressBarWidth;
	progressMarker.animate({left:targetCalc});
	currentProgress.animate({width:currentCalc});
}

getProgress();


});