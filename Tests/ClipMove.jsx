/* 
#### clip.move() ####
Move the second clip in the first track 2 seconds forward.
*/

var seq = app.project.activeSequence;

var trackNr = 0;
var clipNr = 0;
var moveInSeconds = -2;

var videoTracks = seq.videoTracks;
var videoTrack = videoTracks[trackNr];

var videoClips = videoTrack.clips;
var videoClip = videoClips[clipNr];

var audioTracks = seq.audioTracks;
var audioTrack = audioTracks[trackNr];

var audioClips = audioTrack.clips;
var audioClip = audioClips[clipNr]


videoClip.move(moveInSeconds);
audioClip.move(moveInSeconds);