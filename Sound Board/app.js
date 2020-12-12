const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const colors = [
  "#f1c40f",
  "#2ecc71",
  "#4834d4",
  "rebeccapurple",
  "#3498db",
  "#e74c3c",
];

count = 0;

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.style.opacity = 0;
  btn.style.backgroundColor = colors[count];
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound).play();
    btn.style.opacity = 1;
  });

  document.getElementById("buttons").appendChild(btn);
  count++;
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
