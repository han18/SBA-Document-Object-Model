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

// validating the form
const formVal = document.getElementById("form-validation");
// const buttonSub = document.getElementById("button-submit");

formVal.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("the form has been submitted successfully");
});
