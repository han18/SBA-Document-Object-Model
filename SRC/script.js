// SBA 316: The Document Object Model Project
console.log("YEA hello there");

let menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "gallery", href: "/ gallery" },
  { text: "account", href: "/account" },
];

const navMenu = document.getElementById("menu");
navMenu.style.backgroundColor = "#008000";
navMenu.style.height = "100%";
navMenu.textContent = "this is the nav bar";
navMenu.classList.add("flex-box");
