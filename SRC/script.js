// SBA 316: The Document Object Model Project
console.log("YEA hello there people");

let menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "gallery", href: "/ gallery" },
  { text: "account", href: "/account" },
];

// creating the menu bar
const navMenu = document.getElementById("menu");
navMenu.style.backgroundColor = "#CD5C5C";
navMenu.style.height = "100%";
navMenu.textContent = "this is the nav bar";
