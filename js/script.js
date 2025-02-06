// Toggle Aside Navigation
const navToggler = document.getElementById("nav-toggler");
const aside = document.querySelector(".aside");

navToggler.addEventListener("click", () => {
  aside.classList.toggle("open");
  navToggler.classList.toggle("open");
});

// Close Aside When Clicking Outside
document.addEventListener("click", (event) => {
  if (!aside.contains(event.target) && !navToggler.contains(event.target)) {
    aside.classList.remove("open");
    navToggler.classList.remove("open");
  }
});


// Typing Animation 


var typed = new Typed(".typing",{
  strings:["","Software Engineer","Web Developer","Web Designer","Full-Stack Developer with AI Expertise"],
  typeSpeed:100,
  BackSpeed:60,
  loop: true 
})