// JavaScript Document
console.log("hi");

const button = document.querySelector (".hamburger");
const menu = document.querySelector (".ham");


button.addEventListener ("click", openMenu);

function openMenu() {
  menu.classList.toggle("toonMenu");
}

const buttons = document.querySelector (" main section:nth-of-type(6) ul");

button.forEach (button => (
 button.addEventListener

