const array = [
  "DISNEY PREMIER ACCESS & 1-DAY TICKET COMBO, STARTING FROM HK $798",
  "DISNEY PREMIER ACCESS & 8-ATTRACTIONS WITH 1 SHOW, STARTING FROM HK $379",
  "DISNEY PREMIER ACCESS - 1-ATTRACTION, STARTING FROM HK $79",
];

let message = document.getElementById("messagee");

// line 1-13: display a message randomly after page onload
const item = array[Math.floor(Math.random() * array.length)];

window.onload = function () {
  message.innerHTML = item;
  setInterval(change, 3000);
};
let index = 0;
//line 15-24 :display different message after every 3s
const change = function () {
  message.innerHTML = array[index];
  index > 1 ? (index = 0) : index++;
};

// //////////////////////////////////// video
const videoSource = [
  "https://personal.cs.cityu.edu.hk/~cs2204/video/Castle.mp4",
  "https://personal.cs.cityu.edu.hk/~cs2204/video/Musical_Journey.mp4",
];

let key = 0;
const count = videoSource.length;
const element = document.getElementById("Video1");

const playVideo = function (vid) {
  element.setAttribute("src", videoSource[vid]);
  element.setAttribute("type", "video/mp4", "video/mp4");
  element.autoplay = true;
  element.load();
  element.play();
};
element.addEventListener("ended", handler, false);

function handler() {
  key++;
  if (key == count) {
    key = 0;
    playVideo(key);
  } else playVideo(key);
}
////////////////////////////submit form
const reserve = function (date, time, noOfVisitors) {
  alert("Reservation done. Thank you. ");
};
const inputFields = document.querySelectorAll(".formInput");
const date = document.getElementById("date");
const select = document.getElementById("select");
const number = document.getElementById("number");

document.querySelector(".submit").addEventListener("click", function (element) {
  element.preventDefault();

  if (date.value === "" || select.value === "" || number.value === "") {
    document.querySelector(".submit-message").innerHTML =
      "Data not completed, please re-enter";
  } else {
    reserve();
    document.querySelector(".submit-message").innerHTML = "";
    date.value = "";
    select.value = "";
    number.value = "";
  }
});
