const videoEl = document.getElementById("video");
const btn = document.getElementById("btn");

// Prompt user to select a media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEl.srcObject = mediaStream;
    videoEl.onloadedmetadata = () => {
      videoEl.play();
    };
  } catch (err) {
    console.error(err);
  }
}

//On Load
selectMediaStream();

btn.addEventListener("click", async () => {
  btn.disabled = true;
  await videoEl.requestPictureInPicture();
  btn.disabled = false;
  // videoEl.hidden = true;
});
