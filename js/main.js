function activeNavLink(section) {
  const targetLine = scrollY + innerHeight / 2;
  const sectionId = section.getAttribute("id");
  const navElement = document.querySelector(`.nav-items a[href*=${sectionId}]`);
  const sectionRange =
    targetLine >= section.offsetTop &&
    !(section.offsetTop + section.offsetHeight <= targetLine);
  navElement.classList.remove("active");

  if (sectionRange) {
    navElement.classList.add("active");
  }
}

window.addEventListener("load", () => {
  [home, about, projects, knowledge].forEach((section) => {
    activeNavLink(section);
  });
});

window.addEventListener("scroll", () => {
  [home, about, projects, knowledge].forEach((section) => {
    activeNavLink(section);
  });
});

ScrollReveal({
  origin: "bottom",
  distance: "50px",
  duration: 1250,
}).reveal(
  `#home, 
    #about,
    #projects,
    #knowledge`
);
