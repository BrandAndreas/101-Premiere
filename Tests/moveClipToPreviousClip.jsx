


var seq = app.project.activeSequence;

var trackNr = 0;
var clipNr = 1;
// var moveInSeconds = -2;

var videoTracks = seq.videoTracks;
var videoTrack = videoTracks[trackNr];

var videoClips = videoTrack.clips;
var videoClip = videoClips[clipNr];
var previousVideoClip = videoClips[clipNr-1];

var audioTracks = seq.audioTracks;
var audioTrack = audioTracks[trackNr];

var audioClips = audioTrack.clips;
var audioClip = audioClips[clipNr]
var previousAudioClip = audioClips[clipNr-1];

var moveInSeconds = previousVideoClip.end.seconds - videoClip.start.seconds;

videoClip.move(moveInSeconds);
audioClip.move(moveInSeconds);