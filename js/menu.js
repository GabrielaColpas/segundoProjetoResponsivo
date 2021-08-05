var box = document.querySelector(".box");
var ham = document.querySelector(".ham");
var xIcon = document.querySelector(".xIcon");
var menuIcon = document.querySelector(".menuIcon");

ham.addEventListener("click", toggleMenu);
box.classList.contains("showBox");
xIcon.style.display = "none";
function toggleMenu() {
    if (box.classList.contains("showBox")) {
      box.classList.remove("showBox");
      ham.classList.remove("showHam");
      xIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      box.classList.add("showBox");
      ham.classList.add("showHam");
      xIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
}

var menuLinks = document.querySelectorAll(".menuLink");

menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleMenu);
  }
)