

var seq = app.project.activeSequence;
var audioTracks = seq.audioTracks;

var audioTrack = audioTracks[0];

var audioClip = audioTrack.clips[0];

alert(audioClip.name);