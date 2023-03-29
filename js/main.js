import { typeWriter } from "./typeWriter.js";
import { navActiveLink } from "./navActiveLinks.js";
import { navChangePosition } from "./navbarChanges.js";
import { animationOnScreen } from "./animationsWhenOnScreen.js";

setTimeout(() => {
    const navAnimation = document.querySelectorAll (".nav_link");
    navAnimation.forEach(l => l.classList.remove('nav_link-off'));
  }, 2200);
  
setTimeout(typeWriter(document.querySelector(".h-description")), 3000);

navActiveLink();

navChangePosition();

const objects = document.querySelectorAll('.animate');
setTimeout(() => {
  objects.forEach(object => {
    object.classList.remove('animate');
  });
  animationOnScreen(objects);
}, 3000);
