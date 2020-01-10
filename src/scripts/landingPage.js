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

const getScroll = () => {
  if (!prevAmtScrolled) {
    return "match";
  } else {
    let test = window.pageYOffset > prevAmtScrolled ? "down" : "up";
    return test;
  }
};

// callback function to do animations
const headerAnimations = (entries, observer) => {
  // debugger;
  const entry = entries[0];
  const ratio = entry.intersectionRatio;
  let scrollDirection = getScroll();

  let state = {
    ratio: ratio,
    offset: window.pageYOffset,
    prev: prevAmtScrolled,
    direction: scrollDirection,
    nav: navHeight
  };

  console.log("state", state);

  // chrome & safari: isIntersecting is FALSE when exiting viewport (when threshold[0] is triggered)
  // firefox: isIntersecting is TRUE when exiting viewport
  if (
    !entry.isIntersecting ||
    (ratio < 0.3 && scrollDirection === "down") ||
    (!prevAmtScrolled && ratio < navHeight)
  ) {
    navBar.classList.remove("hidden");
    // reset prevAmtScrolled when no longer intersecting
    prevAmtScrolled = null;
    return;
  }
  // else if (entry.isIntersecting) {
  navBar.classList.add("hidden");

  // 2) second threshold (0.8)
  if (ratio <= 0.8 && scrollDirection === "down") {
    landingText.classList.add("out");
    if (typewriter.isAnimating) {
      typewriter.stopAnimation();
    }
  }
  if ((ratio > 0.3 && scrollDirection === "up") || ratio > 0.8) {
    landingText.classList.remove("out");
    if (!typewriter.isAnimating) {
      typewriter.stopAnimation();
      typewriter.resetAnimation();
      typewriter.type();
    }
  }

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
  console.log("loaded");
});

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
