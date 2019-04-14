
/**
* The core GettingStarted game file.
* 
* This file is only used to initalise (start-up) the main Kiwi Game 
* and add all of the relevant states to that Game.
*
*/

//Initialise the Kiwi Game. 

var gameOptions = {
	renderer: Kiwi.RENDERER_WEBGL, 
	width: 800,
	height: 600
}

var game = new Kiwi.Game('content', 'GettingStarted', null, gameOptions);

//Add all the States we are going to use.
game.states.addState(GettingStarted.Loading);
game.states.addState(GettingStarted.Intro);
game.states.addState(GettingStarted.Play);

game.states.switchState("Loading");