function domReady () {
  document.body.className += " javascript";

  var bannerVideo = document.getElementById("bannerVideo");
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click",playPause); 
  // won't work in IE 8

  function playPause(){
    if(bannerVideo.paused){
      bannerVideo.play();
      playButton.innerHTML = "pause";
    }else{
      bannerVideo.pause();
      playButton.innerHTML = "play";
    }
  }
}

// Mozilla, Opera, Webkit 
if ( document.addEventListener ) {
  document.addEventListener( "DOMContentLoaded", function(){
    document.removeEventListener( "DOMContentLoaded", arguments.callee, false);
    domReady();
  }, false );

// If IE event model is used
} else if ( document.attachEvent ) {
  // ensure firing before onload
  document.attachEvent("onreadystatechange", function(){
    if ( document.readyState === "complete" ) {
      document.detachEvent( "onreadystatechange", arguments.callee );
      domReady();
    }
  });
}