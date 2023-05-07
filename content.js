(() => {
  let youtubeControls, youtubePlayer;

  let currentVideo = "";
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, videoId } = obj;

    if (type === "NEW") {
      currentVideo = videoId;
      newVideoLoaded();
    }
  });

  const newVideoLoaded = async () => {
    const buttonExists = document.getElementsByClassName("speed-btn")[0];
    if (!buttonExists) {
      const speedButton = document.createElement("img");

      speedButton.src = chrome.runtime.getURL("assets/speed.png");
      speedButton.className = "speed-btn " + "ytp-btn ytp-button";
      speedButton.title = "click for 3x speed";

      youtubeControls = document.getElementsByClassName("ytp-right-controls")[0];
      youtubePlayer = document.getElementsByClassName("video-stream")[0];

      youtubeControls.prepend(speedButton);
      speedButton.addEventListener("click",speedUp)
    }
  };

  const speedUp = () => {
    console.log("speed")
    const speeder =document.querySelector('video');
    if (speeder.playbackRate==3)
    {
        speeder.playbackRate=1;
    }
    else{
    speeder.playbackRate = 3.0;
    }
  }
  newVideoLoaded();
})();
