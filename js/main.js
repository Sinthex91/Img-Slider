const images = ["./pics/first.png", "./pics/second.png", "./pics/third.png"];
const slider = document.getElementById("slider");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let num = images.length - 1;
let pic = 0;
next.onclick = function nextFunc() {
  pic++;
  if (pic > num) {
    pic = 0;
    slider.src = images[pic];
  } else {
    slider.src = images[pic];
  }
};
prev.onclick = function prevFunc() {
  pic--;
  if (pic < 0) {
    pic = num;
    slider.src = images[pic];
  } else {
    slider.src = images[pic];
  }
};
