window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  document.getElementById("navbar").style.background = "#fff";
}

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");



$(function(){
  $("#header").load("header.html"); 
  $("#footer").load("footer.html"); 
  });

