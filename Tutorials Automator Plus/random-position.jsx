/* 
1. Random clip start on track 1
*/

var seq = app.project.activeSequence;

// var trackNr = 0;
// var videoTrack = seq.videoTracks[trackNr];
// var nrClips = videoTrack.clips.numItems;
// var startTicks = []; //declare array to hold all of the start ticks
// // Loop through all the clips to get the start ticks of each clip
// for(var clipNr = 0; clipNr < nrClips; clipNr++) {
//     var clip = videoTrack.clips[clipNr];
//     var clipStartTicks = clip.start.ticks;
//     startTicks.push(clipStartTicks);
// }

// var rand = Math.random(); //We can use Math.random to generate a random number between 0 and 1

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// var randClipIndx = getRandomNumberBetween(0, startTicks.length - 1);

// seq.setPlayerPosition(startTicks[randClipIndx]);

/*  
2. Random clip start on multiple tracks
*/

var startTicks = []; // declare array to hold all of the start ticks
var nrTracks = seq.videoTracks.numTracks;

for (var trackNr = 0; trackNr < nrTracks; trackNr++){
    var videoTrack = seq.videoTracks[trackNr];
    var nrClips = videoTrack.clips.numItems;

    // Loop through all the clips to get the start ticks of each clip
    for(var clipNr = 0; clipNr < nrClips; clipNr++) {
        var clip = videoTrack.clips[clipNr];
        var clipStartTicks = clip.start.ticks;
        startTicks.push(clipStartTicks);
    }
}

var randClipIndx = getRandomNumberBetween(0, startTicks.length - 1);

seq.setPlayerPosition(startTicks[randClipIndx]);