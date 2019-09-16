import { landingPage, landingText } from "./domElements";
import { typewriter } from "./TypeWriter";

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
        typewriter.isAnimating = true;
        typewriter.type();
      }
    }
  } else if (!entries[0].isIntersecting) {
    landingText.classList.add("out");
    // console.log("not instersecting", entries[0].intersectionRatio);
    if (typewriter.isAnimating) {
      typewriter.stopAnimation();
      typewriter.resetAnimation();
    }
    navBar.classList.remove("hidden");
  }
};

// observer trigger points
const landingOptions = {
  threshold: [0.15, 0.8, 1]
};

const observer = new IntersectionObserver(headerAnimations, landingOptions);
observer.observe(landingPage);

window.addEventListener("load", () => {
  landingText.classList.add("loaded");
});
