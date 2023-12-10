// SBA 316: The Document Object Model Project
"use strict";
console.log("YEA hello there people");

let menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "gallery", href: "/ gallery" },
  { text: "account", href: "/account" },
];

// creating the menu bar.. id in the html
const navMenu = document.getElementById("menu");
navMenu.style.backgroundColor = "#CD5C5C";
navMenu.style.height = "100%";
navMenu.classList.add("flex-around");
// creating a logo but I'll fix it later
// const logo = document.createElement("h2");
// logo.innerHTML = "This is a LoGO";
// navMenu.appendChild(logo);

// creating an anchor element for the navbar
for (let x = 0; x < menuLinks.length; x++) {
  // creating new element a tag into the nav menu
  const aLink = document.createElement("a");
  aLink.setAttribute("href", menuLinks[x].href);
  aLink.innerHTML = menuLinks[x].text;
  navMenu.appendChild(aLink);
}
// =============== here is the form validation part
// validating the form
// const formVal = document.getElementById("form-validation");

// formVal.addEventListener("submit", (e) => {
//   e.preventDefault();
//   alert("The form has been submitted successfully");
// });

// validating the form and clearing the input fields
let output = document.querySelector(".message-output");
const formReset = document.getElementById("form-validation");
formReset.addEventListener("submit", (e) => {
  e.preventDefault();
  formReset.reset();
  output.innerHTML += "The Form is submitted successfully!";
});

//  const clickButton = document.getElementById("button-submit");
//   //////// I stopped here... the form didn't display a message
// clickButton.addEventListener("click", () => {
//   clickButton.textContent = "HHHHHHHHHHHH";
//
//   output.textContent = "GGGGGGGGGGGGGG";
// showing a message to the user
// const buttonInput = document.getElementById("button-submit");
// let output = document.querySelector(".message-output");

// output.addEventListener("click", () => {
//   output.style.backgroundColor = "pink";
//   output.style.color = "red";
//   buttonInput.textContent = "WE ARE SO REAL";
// });

// const clickButton = document.getElementById("button-submit");
// clickButton.addEventListener("submit", () => {
//   // clickButton.textContent = "HHHHHHHHHHHH";
//   // let output = document.querySelector(".message-output");
//   // output.textContent = "GGGGGGGGGGGGGG";
// });

// outputs.innerHTML += "Yes Your Form has been submitted";
// function clearInputs(event) {
//   const allInputs = document.querySelectorAll("input");
//   allInputs.forEach((input) => (input.value = ""));
//   outputs.textContent = "Yes Your Form has been submitted";
// }
