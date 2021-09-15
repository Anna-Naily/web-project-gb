import bundlerAudioOne from "./Architects – Cracks In The Earth.mp3";
import bundlerAudioTwo from "./Architects – Devil's Island.mp3";
import bundlerAudioThree from "./Architects – Truth, Be Told.mp3";
let arrAudio = [
  { name: "Architects – Cracks In The Earth", audio: bundlerAudioOne },
  { name: "Architects – Devil's Island", audio: bundlerAudioTwo },
  { name: "Architects – Truth, Be Told", audio: bundlerAudioThree },
];
function toDisplayAudio() {
  let audio = document.querySelector(".galleryAudio");
  let audioBar = `<ul class="audioList">`;
  for (let i = 0; i < arrAudio.length; i++) {
    audioBar += `<li class="audioElement">
        <h1 class="headingAudio">${arrAudio[i].name}</h1>
        <audio src="${arrAudio[i].audio}" controls></audio>
      </li>`;
  }
  audioBar += `</ul>`;
  audio.innerHTML = audioBar;
}

export { toDisplayAudio };
