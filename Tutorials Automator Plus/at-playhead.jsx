app.enableQE; //Enable Quality Engineering API - not supported by Adobe
var sqe = qe.project.getActiveSequence(); // Get the QE active sequence object

var playheadTime = sqe.CTI.timecode; // CTI = Current Time Indicator of playhead

var outputPath = new File("D:\\Screenshots"); // Get the full filepath of a folder on Windows

var outputFileName = outputPath.fsName + '\\file.png'; // Add the filename to the filepath on Windows

sqe.exportFramePNG(playheadTime, outputFileName); // Export the frame at the playhead