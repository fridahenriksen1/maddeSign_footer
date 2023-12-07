// Lyssnare på meny ikon i mobile-view
let openBtn = document.querySelector(".open-btn");
let closeBtn = document.querySelector(".close-btn");
let menuOverlay = document.querySelector(".menu-overlay");
let menuList = document.querySelector(".menu-list");
openBtn.addEventListener("click", () => {
  //Lägger till open klass till menu-overlay
  menuOverlay.classList.add("open");
  // Visa menu-list
  menuList.style.display = "block";
  // Visa close-btn
  closeBtn.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  //tar bort open klassen från menu-overlay
  menuOverlay.classList.remove("open");
  //Gömmer menu-list i mobile-view
  menuList.style.display = "none"; // Hide menu list
  //Gömmer close-btn
  closeBtn.style.display = "none";
});
//Lyssnare på SEARCH BUTTON + SEARCH OVERLAY + CLOSEBUTTON01
let searchButton = document.querySelector("#searchButton");
let searchOverlay = document.querySelector("#searchOverlay");
let closeButton01 = document.querySelector(".close-btn01");
searchButton.addEventListener("click", () => {
  searchOverlay.classList.add("open");
  searchOverlay.style.display = "block";
});
closeButton01.addEventListener("click", () => {
  searchOverlay.classList.remove("open");
  searchOverlay.style.display = "none";
});


// Toggle till footer mobile

const collapsibles = document.querySelectorAll(".collapsible");

//! Funktionen som gör att det laddas varje sekund, ifall användaren drar i footern
let vw = window.innerWidth;
// function refreshVW(x){
//   vw = window.innerWidth;
//   console.log(vw);
// };
// setInterval(refreshVW, 1000);

collapsibles.forEach((collapsible) => {
  const btn = collapsible.querySelector(".collapsible-btn");
  const content = collapsible.querySelector(".collapsible-content");

  btn.addEventListener("click", () => {
    console.log(vw);
    if (vw <= 768){
    content.classList.toggle("active");
  } else{}
  });
});



// Access DOM element object

// const rotated = document.getElementById("rotated");

// function rotateImage() {
//   // Rotate image by 90 degrees clockwise

//   rotated.style.transform = "rotate(180deg)";
// }






// JS till collapsible pilarna så att de roterar upp och ner

const rotated = document.getElementById("rotated");
const rotateSecondBtn = document.getElementById("rotatedTwo");

// Variable to hold the current angle of rotation

let rotation = 0;

// How much to rotate the image at a time

const angle = 180;

function rotateImage() {
  // Ensure angle range of 0 to 359 with "%" operator,

  // e.g., 450 -> 90, 360 -> 0, 540 -> 180, etc.

  rotation = (rotation + angle) % 360;

  rotated.style.transform = `rotate(${rotation}deg)`;

}
function rotateImageTwo() {
  // Ensure angle range of 0 to 359 with "%" operator,

  // e.g., 450 -> 90, 360 -> 0, 540 -> 180, etc.

  rotation = (rotation + angle) % 360;

  rotatedTwo.style.transform = `rotate(${rotation}deg)`;
}

