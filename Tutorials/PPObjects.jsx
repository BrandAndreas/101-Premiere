seq = app.project.activeSequence;

audioTracks = seq.audioTracks;
videoTracks = seq.videoTracks;

audioTrack = audioTracks[0];
audioClips = audioTrack.clips;

audioClip = audioClips[0];

$.writeln("Done");