let currentTime;

const sendReplyBtn = document.getElementById("sendReplyBtn");

const time = document.getElementById("time");
const time1 = document.getElementById("time1");
const time2 = document.getElementById("time2");
const time3 = document.getElementById("time3");

const typingDiv = document.getElementById("typingDiv");
const textDiv = document.getElementById("textDiv");

const user1Typing = document.getElementById("user1Typing");
const user1Text = document.getElementById("user1Text");

const user2Typing = document.getElementById("user2Typing");
const user2Text = document.getElementById("user2Text");

const user3Typing = document.getElementById("user3Typing");
const user3Text = document.getElementById("user3Text");

const typingDiv2 = document.getElementById("typingDiv2");
const textDiv2 = document.getElementById("textDiv2");

const typingDiv3 = document.getElementById("typingDiv3");
const textDiv3 = document.getElementById("textDiv3");

typingDiv.style.display = "none";
textDiv.style.display = "none";

user1Typing.style.display = "none";
user1Text.style.display = "none";

user2Typing.style.display = "none";
user2Text.style.display = "none";

user3Typing.style.display = "none";
user3Text.style.display = "none";

typingDiv2.style.display = "none";
textDiv2.style.display = "none";

typingDiv3.style.display = "none";
textDiv3.style.display = "none";

const timeDiv2 = document.getElementById("timeDiv2");

const timeDiv3 = document.getElementById("timeDiv3");

setTimeout(function () {
  typingDiv.style.display = "flex";
}, 1000);

setTimeout(function () {
  currentTime = new Date();
  let futureTime = new Date(currentTime.getTime());
  let hour = futureTime.getHours();
  let minutes = futureTime.getMinutes();
  let amPm = hour >= 12 ? " PM " : " AM ";
  hour = hour % 12;
  hour = hour ? hour : 12;

  time.textContent =
    hour + ":" + (minutes < 10 ? "0" : "") + minutes + "" + amPm;

  typingDiv.style.display = "none";
  textDiv.style.display = "flex";
}, 10000);

setTimeout(function () {
  user1Typing.style.display = "flex";
}, 18000);

setTimeout(function () {
  currentTime = new Date();
  let futureTime = new Date(currentTime.getTime());
  let hour = futureTime.getHours();
  let minutes = futureTime.getMinutes();
  let amPm = hour >= 12 ? " PM " : " AM ";
  hour = hour % 12;
  hour = hour ? hour : 12;

  time1.textContent =
    hour + ":" + (minutes < 10 ? "0" : "") + minutes + "" + amPm;

  user1Typing.style.display = "none";
  user1Text.style.display = "flex";
}, 26000);

setTimeout(function () {
  user2Typing.style.display = "flex";
}, 35000);

setTimeout(function () {
  currentTime = new Date();
  let futureTime = new Date(currentTime.getTime());
  let hour = futureTime.getHours();
  let minutes = futureTime.getMinutes();
  let amPm = hour >= 12 ? " PM " : " AM ";
  hour = hour % 12;
  hour = hour ? hour : 12;

  time2.textContent =
    hour + ":" + (minutes < 10 ? "0" : "") + minutes + "" + amPm;

  user2Typing.style.display = "none";
  user2Text.style.display = "flex";
}, 41000);

setTimeout(function () {
  user3Typing.style.display = "flex";
}, 49000);

setTimeout(function () {
  currentTime = new Date();
  let futureTime = new Date(currentTime.getTime());
  let hour = futureTime.getHours();
  let minutes = futureTime.getMinutes();
  let amPm = hour >= 12 ? " PM " : " AM ";
  hour = hour % 12;
  hour = hour ? hour : 12;

  time3.textContent =
    hour + ":" + (minutes < 10 ? "0" : "") + minutes + "" + amPm;

  user3Typing.style.display = "none";
  user3Text.style.display = "flex";
}, 55000);

setTimeout(function () {
  typingDiv2.style.display = "flex";
}, 61000);

setTimeout(function () {
  currentTime = new Date();
  let futureTime = new Date(currentTime.getTime());
  let hour = futureTime.getHours();
  let minutes = futureTime.getMinutes();
  let amPm = hour >= 12 ? " PM " : " AM ";
  hour = hour % 12;
  hour = hour ? hour : 12;

  timeDiv2.textContent =
    hour + ":" + (minutes < 10 ? "0" : "") + minutes + "" + amPm;

  typingDiv2.style.display = "none";
  textDiv2.style.display = "flex";
}, 66000);

setTimeout(function () {
  typingDiv3.style.display = "flex";
}, 72000);

setTimeout(function () {
  currentTime = new Date();
  let futureTime = new Date(currentTime.getTime());
  let hour = futureTime.getHours();
  let minutes = futureTime.getMinutes();
  let amPm = hour >= 12 ? " PM " : " AM ";
  hour = hour % 12;
  hour = hour ? hour : 12;

  timeDiv3.textContent =
    hour + ":" + (minutes < 10 ? "0" : "") + minutes + "" + amPm;

  typingDiv3.style.display = "none";
  textDiv3.style.display = "flex";
  sendReplyBtn.disabled = false;
  // inputValue.placeholder = "Write something...";
}, 76000);

function scrollToBottom() {
  const chatContainer = document.getElementById("chat-container");
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

const myReply = document.getElementById("myReply");
myReply.style.display = "none";
const myTime = document.getElementById("myTime");

const typingDivReply = document.getElementById("typingDivReply");
const textDivReply = document.getElementById("textDivReply");
const timeReply = document.getElementById("timeReply");

typingDivReply.style.display = "none";
textDivReply.style.display = "none";

function sendReply() {
  // input value

  const input = document.querySelector(".inputValue");
  const inputValue = input.value;

  const myTextValue = document.getElementById("myTextValue");
  myTextValue.innerText = inputValue;

  console.log(myTextValue.innerText);

  input.value = "";

  myReply.style.display = "block";
  currentTime = new Date();
  let futureTime = new Date(currentTime.getTime());
  let hour = futureTime.getHours();
  let minutes = futureTime.getMinutes();
  let amPm = hour >= 12 ? " PM " : " AM ";
  hour = hour % 12;
  hour = hour ? hour : 12;

  myTime.textContent =
    hour + ":" + (minutes < 10 ? "0" : "") + minutes + "" + amPm;

  setTimeout(function () {
    typingDivReply.style.display = "flex";
  }, 5000);

  setTimeout(function () {
    currentTime = new Date();
    let futureTime = new Date(currentTime.getTime());
    let hour = futureTime.getHours();
    let minutes = futureTime.getMinutes();
    let amPm = hour >= 12 ? " PM " : " AM ";
    hour = hour % 12;
    hour = hour ? hour : 12;

    timeReply.textContent =
      hour + ":" + (minutes < 10 ? "0" : "") + minutes + "" + amPm;

    typingDivReply.style.display = "none";
    textDivReply.style.display = "flex";
  }, 10000);
}

const videoChatMessage = document.getElementById("videoChatMessage");

videoChatMessage.style.opacity = "0";

const videoChatBtn = document.getElementById("videoChatBtn");

videoChatBtn.addEventListener("click", function () {
  videoChatMessage.style.opacity = "100%";
  setTimeout(function () {
    videoChatMessage.style.opacity = "0";
  }, 9300);
});

const moreMessage = document.getElementById("moreMessage");
moreMessage.style.display = "none";

const moreMessageBtn = document.getElementById("moreMessageBtn");

moreMessageBtn.addEventListener("click", function () {
  if (moreMessage.style.display === "none") {
    moreMessage.style.display = "block";
  } else {
    moreMessage.style.display = "none";
  }
});

window.onresize = scrollToBottom;
//order arrival time
