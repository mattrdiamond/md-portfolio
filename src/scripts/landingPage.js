import TypeWriter from "./TypeWriter";
import {
  landingPage,
  landingText,
  landingAttributes,
  navBar,
  words,
  wait
} from "./domElements";

const typewriter = new TypeWriter(landingAttributes, words, wait, 250);
const navHeight = 70 / window.innerHeight;
let prevAmtScrolled;

// callback function to do animations
const headerAnimations = (entries, observer) => {
  const entry = entries[0];
  const ratio = entry.intersectionRatio;
  let scrollDirection = window.pageYOffset <= prevAmtScrolled ? "up" : "down";

  /* Note:
   * Chrome/Safari: entry.isIntersecting is FALSE when entry exits viewport
   * firefox: isIntersecting is TRUE when exiting viewport
   */

  switch (true) {
    case ratio <= navHeight && scrollDirection === "down": // firefox fallback
      navBar.classList.remove("hidden");
      prevAmtScrolled = landingPage.offsetHeight; // ensure scrollDirection = up for next intersection
      return;

    case ratio <= 0.8 && scrollDirection === "down":
      if (typewriter.isAnimating) {
        typewriter.stopAnimation();
      }
      landingText.classList.add("out");
      break;

    case ratio >= 0.3 && scrollDirection === "up":
    case ratio > 0.8:
      landingText.classList.remove("out");
      if (!typewriter.isAnimating) {
        typewriter.resetAnimation();
        typewriter.type();
      }
      break;
  }
  navBar.classList.add("hidden");
  prevAmtScrolled = window.pageYOffset;
};

// observer trigger points
const landingOptions = {
  threshold: [navHeight, 0.8]
};

const observer = new IntersectionObserver(headerAnimations, landingOptions);

window.addEventListener("load", () => {
  landingText.classList.add("loaded");
  observer.observe(landingPage);
});
