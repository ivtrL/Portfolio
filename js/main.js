// Navbar links toggle

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
  // header background color
  const header = document.querySelector("header");
  document.querySelector(".text").style.marginTop = window.scrollY * 1 + "px";
  if (
    window.scrollY >=
    +document.querySelector(".home-container").offsetTop - 80
  ) {
    header.style.backgroundColor = "var(--header-color)";
    header.style.boxShadow = "var(--box-shadow-color) 0px 5px 15px";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
  }

  // navbar links toggle
  [home, about, projects, knowledge].forEach((section) => {
    activeNavLink(section);
  });
});

// ScrollReveal

ScrollReveal({
  origin: "bottom",
  distance: "50px",
  duration: 3000,
}).reveal(
  ` .home-container,
  #about,
  #projects,
  #knowledge`
);

// Start Animation and Home Background

const main = document.querySelector("main");
const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
  yValue = 0;

let rotateDegree = 0;

function parallax(mousePosition) {
  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    let speedz = el.dataset.speedz;
    let rotateSpeed = el.dataset.rotation;

    let isInLeft =
      parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
    let zValue =
      (mousePosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

    el.style.transform = `perspective(2300px) translateX(calc(-50% + ${
      -xValue * speedx
    }px)) translateY(calc(-50% + ${yValue * speedy}px)) rotateY(${
      rotateDegree * rotateSpeed
    }deg) translateZ(calc(${zValue * speedz}px))`;
  });
}

parallax(0);

window.addEventListener("mousemove", (e) => {
  if (timeline.isActive()) return;

  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

  parallax(e.clientX);
});

function handleResize() {
  if (
    window.innerWidth >= 725 &&
    window.innerWidth / window.innerHeight <= 16 / 9
  ) {
    main.style.maxHeight = `${window.innerWidth * 0.6}px`;
  } else if (
    window.innerWidth < 725 &&
    window.innerWidth / window.innerHeight <= 16 / 9
  ) {
    main.style.maxHeight = `${window.innerWidth * 1.6}px`;
  } else {
    main.style.maxHeight = `1000px`;
  }
}

handleResize();

window.addEventListener("resize", handleResize);

// GSAP Animation

let timeline = gsap.timeline();

Array.from(parallax_el)
  .filter((el) => !el.classList.contains("text"))
  .forEach((el) => {
    timeline.from(
      el,
      {
        top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
        duration: 3.5,
        ease: "power3.out",
      },
      "1"
    );
  });

timeline
  .from(
    ".text h1",
    {
      y:
        window.innerHeight -
        document.querySelector(".text h1").getBoundingClientRect().top +
        200,
      duration: 2,
    },
    "2.5"
  )
  .from(
    ".text h2",
    {
      y: -150,
      opacity: 0,
      duration: 1.5,
    },
    "3"
  )
  .from(
    ".hide",
    {
      opacity: 0,
      duration: 1.5,
    },
    "3"
  );
