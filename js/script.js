import { typeWriter } from "./typewriter.js";
import { navActiveLink } from "./navactivelinks.js";

setTimeout(() => {
    const navAnimation = document.querySelectorAll (".nav_link")
    navAnimation.forEach(l => l.classList.remove('nav_link-off')) 
  }, 2200)
  
setTimeout(typeWriter(document.querySelector(".h-description")), 1000);

navActiveLink()