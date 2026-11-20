// JavaScript Document hamburger menu
console.log("javascript is connected");

const button = document.querySelector (".hamburger");
const menu = document.querySelector (".ham");


button.addEventListener ("click", openMenu);

function openMenu() {
  menu.classList.toggle("toonMenu");
}





// JavaScript Document Pop up email 


const emailinput = document.querySelector("#email");
const buttonemail = document.querySelector("#newsletter-submit");
const zipcodeinput = document.querySelector("#zipcode");

console.log("Email:", emailinput);
console.log("ZIP:", zipcodeinput);
console.log("Submit button:", buttonemail);

buttonemail.addEventListener("click", function() {

    console.log("Submit button clicked!");

    if (emailinput.checkValidity() && zipcodeinput.checkValidity()) {

        alert("Thank you for subscribing!");

        emailinput.value = "";
        zipcodeinput.value = "";

    } else {

        alert("Please enter your email and ZIP code!");
        emailinput.focus();

    }

});




