const percent = document.querySelector(".loading-text");
let count = 0;
const img = document.querySelector(".bg");

let int = setInterval(add, 30);

function add() {
  count - count++;
  if (count > 99) {
    clearInterval(int);
  }
  percent.innerHTML = `${count}%`;
  percent.style.opacity = scale(count, 0, 100, 1, 0);
  img.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
