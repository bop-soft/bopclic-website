let initial;

function initiate() {
  initial = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("load").style.display = "none";
  document.getElementById("late").style.display = "flex";
}

function message() {
    document.querySelector(".hero").style.display = "none";
    document.querySelector("#game").style.display = "none";
    document.querySelector("#info").style.display = "none";
    document.querySelector("#message").style.display = "flex";
}

function home() {
    document.querySelector("#message").style.display = "none";
    document.querySelector("#game").style.display = "none";
    document.querySelector("#info").style.display = "none";
    document.querySelector(".hero").style.display = "flex";
}

function game() {
    document.querySelector("#message").style.display = "none";
    document.querySelector(".hero").style.display = "none";
    document.querySelector("#info").style.display = "none";
    document.querySelector("#game").style.display = "block";
}

function info() {
    document.querySelector("#message").style.display = "none";
    document.querySelector("#game").style.display = "none";
    document.querySelector(".hero").style.display = "none";
    document.querySelector("#info").style.display = "flex";
}

// document.addEventListener("contextmenu", function(event) {
//     event.preventDefault();
//   });
  

let textWrapper = document.querySelector('.loader');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.loader .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.loader .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });