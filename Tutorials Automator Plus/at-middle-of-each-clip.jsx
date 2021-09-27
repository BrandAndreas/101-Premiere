app.enableQE(); //Enable Quality Engineering API - not supported by Adobe and a deep rabbit hole
var sqe = qe.project.getActiveSequence(); //Get the QE active sequence object

var seq = app.project.activeSequence; //Get the "normal" active Sequence

var trackNr = 0;
var videoTrack = seq.videoTracks[trackNr];
var nrClips = videoTrack.clips.numItems; //Get the number of clips

// alert(videoTrack.clips[0].duration.ticks)


// Loop through all the clips
    // Set the playhead to the start of each clip
    // Export a screenshot
for(var clipNr = 0; clipNr < nrClips; clipNr++){
    var clip = videoTrack.clips[clipNr]; //Get a grip on the current clip
    var clipStartTicks = clip.start.ticks; //Get the start ticks
    var clipDuration = clip.duration.ticks;

    seq.setPlayerPosition( (Number(clipStartTicks) + Number(clipDuration)/2).toString() ); //Set the playhead to the clip`s middle position

    var playheadTime = sqe.CTI.timecode; // CTI = Current time indicator of playhead

    var outputPath = new File("C:\\Arbeit\\Scripting"); //Get the full filepath

    var outputFileName = outputPath.fsName + '\\file_' + clipNr + '.png'; //Add the filename to the filepath

    sqe.exportFramePNG(playheadTime, outputFileName); //Export the frame at the playhead
}