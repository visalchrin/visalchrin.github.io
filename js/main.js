let overlay = document.getElementById("overlay");
let overlayFull = document.getElementById("overlay-full");
let openBtn = document.getElementById("open");
let closeBtn = document.getElementById('close');
let mobile_menu = document.getElementById("menuMobile");
let projectBtn = document.getElementById("project-Btn");
let modal = document.getElementById("modal");
let closeModalBtn = document.getElementById("close-modal");
let ContinueBtn = document.querySelectorAll(".continue");
let complete = document.querySelector(".complete");
let gotItBtn = document.querySelector(".got-it");
let selectBtn = document.querySelectorAll(".select");
let bookmarkBtn = document.getElementById("bookmarkBtn");

// bookmark mobile button
bookmarkBtn.addEventListener("click", () => {
  console.log("Bookmark button is clicked");
  bookmarkBtn.setAttribute("fill", "hsl(176, 72%, 28%)");
});

openBtn.addEventListener("click", ()=>{
  console.log("open button is clicked");
  mobile_menu.style.opacity = 1;
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
  overlay.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  openBtn.style.display = "block";
  closeBtn.style.display = "none";
  mobile_menu.style.opacity = 0;
  overlay.style.display = "none";
});

// project button clicked
projectBtn.addEventListener("click", () => {
  console.log("PorjBtn clicked");
  overlayFull.style.display = "block";
  modal.style.display = "block";
});

// select reward button
selectBtn.forEach((button) => {

  button.addEventListener("click",() => {

    console.log("selected button clicked");
    overlayFull.style.display = "block";
    modal.style.display = "block";

    const id = button.dataset.id;
    
    // change border of project item
    document.querySelector(`#item-${id}`).style.border = "2px solid hsl(176, 50%, 47%)";

    // show cta button of selected item
    document.querySelector(`#cta-${id}`).style.display = "grid";
  });
});

// close modal button
closeModalBtn.addEventListener("click", () => {
  overlayFull.style.display = "none";
  modal.style.display = "none";

  // change border color back to normal 
  document.querySelectorAll(".modal__item").forEach((item) => {
    item.style.border = "1px solid hsl(0, 0%, 48%)";
  });

  // hide all cta button
  document.querySelectorAll(".modal__item-cta").forEach((cta) => {
    cta.style.display = "none";
  });
});

// input radio event 
document.querySelectorAll(".radio").forEach((elm) =>{
  elm.addEventListener("change", (event) =>{

    // change border color back to normal 
    document.querySelectorAll(".modal__item").forEach((item) => {
      item.style.border = "1px solid hsl(0, 0%, 48%)";
    });
    // get the id of an item 
    var id = event.target.value;
    document.querySelector(`#item-${id}`).style.border = "2px solid hsl(176, 50%, 47%)";

    // hide all cta button
    document.querySelectorAll(".modal__item-cta").forEach((cta) => {
      cta.style.display = "none";
    });

    // show cta button of selected item
    document.querySelector(`#cta-${id}`).style.display = "grid";

  });
});

// continue button
ContinueBtn.forEach((button) => {
  button.addEventListener("click", ()=>{
    console.log("continue clicked");
    modal.style.display = "none";
    complete.style.display = "block";
  });
});

// get it button
gotItBtn.addEventListener("click", () =>{
  console.log("got it clicked.");
  overlayFull.style.display = "none";
  complete.style.display = "none";

  // change border color back to normal 
  document.querySelectorAll(".modal__item").forEach((item) => {
    item.style.border = "1px solid hsl(0, 0%, 48%)";
  });

  // hide all cta button
  document.querySelectorAll(".modal__item-cta").forEach((cta) => {
    cta.style.display = "none";
  });

  // unchecked cta button
  document.querySelectorAll(".radio").forEach((radio) => {
    radio.checked = false;
  });

});