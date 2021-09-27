function settingStartTimeOfClip(trackNr, clipNr, startSeconds) {
    var seq = app.project.activeSequence;
    var videoTracks = seq.videoTracks;
    var audioTracks = seq.audioTracks;

    var videoTrack = videoTracks[trackNr];
    var videoClip = videoTrack.clips[clipNr];
    var audioTrack = audioTracks[trackNr];
    var audioClip = audioTrack.clips[clipNr];

    var time = new Time();
    time.seconds = startSeconds;

    videoClip.start = time;
    audioClip.start = time;
}


function settingEndTimeOfClip(trackNr, clipNr, endSeconds) {
    var seq = app.project.activeSequence;
    var videoTracks = seq.videoTracks;
    var audioTracks = seq.audioTracks;

    var videoTrack = videoTracks[trackNr];
    var videoClip = videoTrack.clips[clipNr];
    var audioTrack = audioTracks[trackNr];
    var audioClip = audioTrack.clips[clipNr];

    var time = new Time();
    time.seconds = endSeconds;

    videoClip.end = time;
    audioClip.end = time;
}

var seq = app.project.activeSequence;
var videoTracks = seq.videoTracks;
var videoTrack = videoTracks[0];
var videoClip = videoTrack.clips[0];
var clipDuration = videoClip.duration;

alert(clipDuration.seconds.toString());

var time = new Time();
time.seconds = 10;

videoClip.duration = time;

// settingStartTimeOfClip(0,0,1)