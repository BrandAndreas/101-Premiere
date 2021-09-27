/* 
1. Moving to defined seconds
*/

// Get the active sequence
var seq = app.project.activeSequence;

// Get the current player position in seconds
var curPlayerPosSeconds = seq.getPlayerPosition().seconds;

// Set the seconds we want to move, negative if we want to move backwards
var secondsToMove = 4;

// Calculate the new player position in seconds
var newPlayerPosSeconds = curPlayerPosSeconds + secondsToMove;

// Calculate a new Time object so that we can vonvert our seconds to ticks
var newPlayerPos = new Time();

// Set the seconds attribute of our Time object
newPlayerPos.seconds = newPlayerPosSeconds;
// Use the Time obejct*s .ticks attribute to set the new player position
seq.setPlayerPosition(newPlayerPos.ticks);