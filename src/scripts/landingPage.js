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

// const getScroll = () => {
//   // if (!prevAmtScrolled) {
//   //   return "reset";
//   // } else {
//   //   return window.pageYOffset >= prevAmtScrolled ? "down" : "up";
//   // }
//   return window.pageYOffset <= prevAmtScrolled ? "up" : "down";
// };

// callback function to do animations
const headerAnimations = (entries, observer) => {
  // debugger;
  const entry = entries[0];
  const ratio = entry.intersectionRatio;
  // let scrollDirection = getScroll();
  let scrollDirection = window.pageYOffset <= prevAmtScrolled ? "up" : "down";

  let state = {
    ratio: ratio,
    offset: window.pageYOffset,
    prev: prevAmtScrolled,
    direction: scrollDirection,
    nav: navHeight,
    landing: landingPage.offsetHeight
  };
  console.log("state", state);

  switch (true) {
    case !entry.isIntersecting:
    // case ratio < 0.3 && scrollDirection === "down": // firefox fallback
    case ratio <= navHeight && scrollDirection === "down": // firefox fallback
      // case !prevAmtScrolled && ratio < navHeight: // firefox fallback
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

/* Note:
 * Chrome/Safari: entry.isIntersecting is FALSE when entry exits viewport (when threshold[0] is triggered)
 * firefox: isIntersecting is TRUE when exiting viewport
 */

// ***********************************************
// Test: Progressive image loading
// ***********************************************

// const landingImage = document.getElementById("landing-img");
// const placeholder = document.getElementById("placeholder");
// const bigImage = document.createElement("img");

// // 1) after 50ms set src and srcset for bigImage ()
// setTimeout(function() {
//   bigImage.src = landingImage.dataset.src;
//   bigImage.srcset = landingImage.dataset.srcset;
// }, 50);

// // 2) swap landingImage with bigImage
// bigImage.onload = function() {
//   landingImage.src = this.src;
//   landingImage.srcset = this.srcset;
//   landingImage.classList.add("loaded");
//   placeholder.classList.add("fade");
// };
