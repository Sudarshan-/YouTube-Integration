

function mute() {
  if(playerMode == "normal") {
		if(player.isMuted()) {
			player.unMute();
		} else {
			player.mute()
		} 
	} else if(playerMode == "advanced") {
		player.muted = !player.muted;
	}
}
	
if(document.getElementById("movie_player")) {
	player = document.getElementById("movie_player");
	playerMode = "normal";
	nextWork();
} else if(document.getElementsByClassName("video-stream")[0]) {
	player = document.getElementsByClassName("video-stream")[0];
	playerMode = "advanced";
	nextWork();
} 




function nextWork() {
//console.log(player+" PLayer");
try{
	player.setVolume(100);
	
	var qualityValues = player.getAvailableQualityLevels();
	if(qualityValues.indexOf("highres") != -1){
		player.setPlaybackQuality("highres");
	}else if(qualityValues.indexOf("hd1080") != -1){
		player.setPlaybackQuality("hd1080");
	}else if(qualityValues.indexOf("hd720") != -1){
		player.setPlaybackQuality("hd720");
	}else if(qualityValues.indexOf("large") != -1){
		player.setPlaybackQuality("large");
	}else if(qualityValues.indexOf("medium") != -1){
		player.setPlaybackQuality("medium");
	}


	document.addEventListener("keydown", function(event) {
		if(event.target.nodeName != "TEXTAREA" && event.target.nodeName != "INPUT") { 
			console.log(event);
			if(event.which == 106) {
				mute();
			}
		}
	}, true);
	}catch(e){
		console.log("Exception is "+e);
	}
}
