function openWindow(event) {
  let blocks = document.querySelectorAll(".tabcontent");
  blocks.forEach(function (block) {
    if (block.classList[0] === event.target.id) {
      block.style.display = "block";
    } else {
      block.style.display = "none";
    }
  });
}

function loadButtons() {
  let btns = document.querySelectorAll(".tablinks");
  btns.forEach(function (btn) {
    btn.addEventListener("click", openWindow);
  });
}
export { loadButtons };
