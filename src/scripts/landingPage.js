import TypeWriter from "./TypeWriter";
import {
  landingPage,
  landingText,
  landingAttributes,
  words,
  wait
} from "./domElements";

const typewriter = new TypeWriter(landingAttributes, words, wait, 250);

const navHeight = 70 / window.innerHeight;
let prevAmtScrolled = window.pageYOffset;

// callback function to do animations
const headerAnimations = (entries, observer) => {
  const navBar = document.querySelector(".nav-background");
  let scrollDirection = window.pageYOffset >= prevAmtScrolled ? "down" : "up";
  prevAmtScrolled = window.pageYOffset;

  if (entries[0].isIntersecting) {
    // console.log("ratio", entries[0].intersectionRatio);
    navBar.classList.add("hidden");
    if (entries[0].intersectionRatio < 0.8 && scrollDirection === "down") {
      landingText.classList.add("out");
      if (typewriter.isAnimating) {
        typewriter.stopAnimation();
      }
    }
    if (
      (entries[0].intersectionRatio > 0.3 && scrollDirection === "up") ||
      entries[0].intersectionRatio > 0.8
    ) {
      landingText.classList.remove("out");
      if (!typewriter.isAnimating) {
        typewriter.stopAnimation();
        typewriter.resetAnimation();
        typewriter.type();
      }
    }
  } else if (!entries[0].isIntersecting) {
    landingText.classList.add("out");
    if (typewriter.isAnimating) {
      typewriter.stopAnimation();
      typewriter.resetAnimation();
    }
    navBar.classList.remove("hidden");
  }
};

// observer trigger points
const landingOptions = {
  threshold: [navHeight, 0.8, 1]
};

const observer = new IntersectionObserver(headerAnimations, landingOptions);

window.addEventListener("load", () => {
  landingText.classList.add("loaded");
  observer.observe(landingPage);
});
