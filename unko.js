let Name = document.getElementById("Name");
let pass = document.getElementById("pass");
let Btn = document.getElementById("btn");

Btn.addEventListener("click", function () {
  if (Name.value == "yamaguchi" || pass.value == "0123") {
    alert("enter");
    mordal.classList.remove("isOpen");
    mordalBg.classList.remove("isOpen");
    location.href = "../ルーレット/RRR.html";
  } else {
    alert("get out");
    location.href = "https://www.xvideos.com/lang/japanese";
  }
});

window.addEventListener("DOMContentLoaded", function () {
  console.log("ページが読み込まれました！");
});

var now = new Date();
console.log(now);

const mordalBtn = document.getElementById("mordalBtn");
const mordalBg = document.getElementById("mordalBg");
const mordal = document.getElementById("mordal");

mordalBtn.addEventListener("click", () => {
  mordalBg.classList.add("isOpen");
  mordal.classList.add("isOpen");
});

const closeBtn = document.getElementById("close");

closeBtn.addEventListener("click", () => {
  mordalBg.classList.remove("isOpen");
  mordal.classList.remove("isOpen");
});

mordalBg.addEventListener("click", () => {
  mordal.classList.remove("isOpen");
  mordalBg.classList.remove("isOpen");
});
