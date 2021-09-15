import bundlerVideoOne from "./1.mp4";
import bundlerVideoTwo from "./2.mp4";
let arrVideo = [
  { name: "Watch Me Now", video: bundlerVideoOne },
  { name: "Watch Me Next", video: bundlerVideoTwo },
];
function toDisplayVideo() {
  let video = document.querySelector(".galleryVideo");
  let videoBar = `<ul class="videoList">`;
  for (let i = 0; i < arrVideo.length; i++) {
    videoBar += `<li class="videoElement">
        <h1 class="headingVideo">${arrVideo[i].name}</h1>
        <video width="300px" height="300px" src="${arrVideo[i].video}" controls></video>
      </li>`;
  }
  videoBar += `</ul>`;
  video.innerHTML = videoBar;
}

export { toDisplayVideo };
