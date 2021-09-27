/* 
1. Saving and setting player position
 */

var seq = app.project.activeSequence;
var savedPosition = seq.getPlayerPosition();
// seq.setPlayerPosition(savedPosition.ticks);

/* 
2. Saving and setting player position using function
 */

function savePos(){
    $.savedPosition = seq.getPlayerPosition();
}

function setPos(){
    seq.setPlayerPosition($.savedPosition.ticks);
}