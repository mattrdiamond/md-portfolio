import test from "./Test";
test();
// ------------------------------ hero slideshow

// const slides = document.querySelectorAll("#slides .slide");
// let currentSlide = 0;
// const slideInterval = setInterval(nextSlide, 3000);

// function nextSlide() {
//   slides[currentSlide].className = "slide";
//   currentSlide = (currentSlide + 1) % slides.length;
//   slides[currentSlide].className = "slide showing";
// }

// ------------------------------ menu toggle

const navButton = document.getElementById("nav-button");
const navOverlay = document.getElementById("nav-overlay");
const navLinks = document.querySelectorAll(".nav-bar a");
const headerArrow = document.querySelector(".header-arrow");

navButton.addEventListener("click", toggleNav, false);
navLinks.forEach(elem => elem.addEventListener("click", navLinkClick));
headerArrow.addEventListener("click", navLinkClick);

function toggleNav() {
  navButton.classList.toggle("active");
  navOverlay.classList.toggle("visible");
}

function navLinkClick(e) {
  smoothScroll(e);
  // call checkSlide just before scrolling completes
  setTimeout(function() {
    // checkSlide();
  }, 800);
  if (navButton.classList.contains("active")) {
    toggleNav();
  }
}

// ------------------------------ fade slideshow on scroll

// window.addEventListener("scroll", fade);

// function fade() {
//   const pos = document.documentElement.scrollTop;
//   const landingPage = document.getElementById("landing-page");
//   const windowHeight = landingPage.clientHeight;

//   if (pos < windowHeight) {
//     // const slideshow = document.getElementById("slides");
//     landingPage.style.opacity = 1 - pos / (windowHeight - 100); // opacity will be zero when hero section has 100px left in viewport
//   }
// }

// ------------------------------ slide up animation

// const sliderImages = document.querySelectorAll(".slide-up");

// window.addEventListener("scroll", debounce(checkSlide));

// function checkSlide(e) {
//   sliderImages.forEach(function(sliderImage) {
//     const slideInAt =
//       window.scrollY + window.innerHeight - sliderImage.height / 4;
//     const imageBottom = sliderImage.offsetTop + sliderImage.height;
//     const isQuarterShown = slideInAt > sliderImage.offsetTop;
//     const isNotScrolledPast = window.scrollY < imageBottom;

//     if (isQuarterShown && isNotScrolledPast) {
//       sliderImage.classList.add("active");
//     }
//     // else {
//     //   sliderImage.classList.remove("active");
//     // }
//   });
// }

// func: function executed after debounce time
// wait: time before next execution
// immediate: determines if func called on leading edge rather than trailing
function debounce(func, wait = 20, immediate = true) {
  let timeout;

  // This is the function that is actually executed when the DOM event is triggered.
  return function executedFunction() {
    // Store the context of this and any parameters passed to executedFunction
    const context = this,
      args = arguments;

    // The function to be called after the debounce time has elapsed
    const later = function() {
      // null timeout to indicate debounce ended
      timeout = null;

      // Call function now if you did not on the leading end
      if (!immediate) func.apply(context, args);
    };

    // Determine if you should call the function on the leading or trail end
    const callNow = immediate && !timeout;

    // This will reset the waiting every function execution.
    // prevents the function from being executed because it will never reach the inside of the previous setTimeout
    clearTimeout(timeout);

    // Restart the debounce waiting period.
    // if full wait elapses before another event, execute later
    timeout = setTimeout(later, wait);

    // Call immediately if you're dong a leading end execution
    if (callNow) func.apply(context, args);
  };
}

// ------------------------------ smooth scroll

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const targetPosition = document.querySelector(targetId).offsetTop - 70;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start = null;

  window.requestAnimationFrame(step); // call requestAnimationFrame w/ step callback - step will execute 60 times per second

  function step(timestamp) {
    if (!start) start = timestamp; // only executed once - set start = starting point of animation
    const progress = timestamp - start;
    window.scrollTo(
      0,
      easeInOutCubic(progress, startPosition, distance, duration)
    );
    if (progress < duration) window.requestAnimationFrame(step); //continue to animate until duration expires
  }
}

// easing animation
function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

// ------------------------------ typing logo
// List of sentences
var _CONTENT = ["Developer", "Designer", "Dreamer"];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Holds the handle returned from setTimeout
var _TIMEOUT_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#header-attributes");

// Cursor element
var _CURSOR = document.querySelector("#cursor");

// Keep track of animation
let isAnimating = false;

// ------------------------------ intersection observers
/*
 * slide-up images
 */
const targets = document.querySelectorAll(".slide-up");

// entries: actual observations on element
// observer: interface that we can use to manage instance of this observer
const slideUp = (entries, observer) => {
  entries.forEach(entry => {
    // console.log(entry.intersectionRatio);
    if (entry.isIntersecting) {
      const img = entry.target; // image that has intersected w/ viewport
      const src = img.getAttribute("data-lazy");

      // set image src to match custom data-lazy attribute
      if (src) {
        img.setAttribute("src", src);
      }

      img.classList.add("active");
      observer.disconnect(); // dispose of observer once loaded
    }
  });
};

const options = {
  threshold: 0.5
};

// IntersectionObserver calls slideUp callback when intersectionRatio meets threshold
const lazyLoad = target => {
  const observer = new IntersectionObserver(slideUp, options);
  observer.observe(target);
};

targets.forEach(lazyLoad);

/*
 * landing page
 */

// target the elements to be observed
const landingPage = document.getElementById("home");
const navBar = document.querySelector(".nav-background");
const landingText = document.getElementById("landing-text");
let prevAmtScrolled = window.pageYOffset;
// let intersectRatio = 0;

// callback function to do animations
const headerAnimations = (entries, observer) => {
  console.log("YOffset", window.pageYOffset);
  console.log("prev", prevAmtScrolled);
  let scrollDirection = window.pageYOffset >= prevAmtScrolled ? "down" : "up";
  prevAmtScrolled = window.pageYOffset;

  if (entries[0].isIntersecting) {
    // intersectRatio = entries[0].intersectionRatio;
    console.log("ratio", entries[0].intersectionRatio);

    if (entries[0].intersectionRatio <= 1) {
      navBar.classList.add("hidden");

      if (entries[0].intersectionRatio < 0.8 && scrollDirection === "down") {
        landingText.classList.add("out");
        if (isAnimating) {
          typewriter.stopAnimation();
        }
      }
    }

    if (
      (entries[0].intersectionRatio > 0.3 && scrollDirection === "up") ||
      entries[0].intersectionRatio > 0.8
    ) {
      landingText.classList.remove("out");

      if (!isAnimating) {
        typewriter.stopAnimation();
        typewriter.resetAnimation();
        isAnimating = true;
        typewriter.type();
      }
    }
  } else if (!entries[0].isIntersecting) {
    // When refreshing mid-page, make sure "out" is applied
    landingText.classList.add("out");
    console.log("not instersecting", entries[0].intersectionRatio);
    // intersectRatio = entries[0].intersectionRatio;
    if (isAnimating) {
      typewriter.stopAnimation();
      typewriter.resetAnimation();
    }
    navBar.classList.remove("hidden");
  }
};

// create the observer
const landingOptions = {
  threshold: [0.15, 0.8, 1]
};

const observer = new IntersectionObserver(headerAnimations, landingOptions);
observer.observe(landingPage);

// ------------------------------ footer year

document.getElementById("year").innerHTML = new Date().getFullYear();

// ------------------------------ loader
window.addEventListener("load", () => {
  // const loadScreen = document.getElementById("load-screen");
  // loadScreen.classList.add("loaded");
  landingText.classList.add("loaded");
});

// ------------------------------ new typewriter
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
    this.isAnimating = false;
    // Holds the handle returned from setTimeout
    this.timeoutVal;
  }

  type() {
    if (!isAnimating) {
      this.stopAnimation();
      this.resetAnimation();
    } else {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];

      // Check if deleting
      if (this.isDeleting) {
        // Hide the cursor
        // _CURSOR.style.visibility = "hidden";
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Show the cursor
        _CURSOR.style.visibility = "visible";
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

      // Initial Type Speed
      let typeSpeed = 300;

      if (this.isDeleting) {
        typeSpeed /= 2;
      }

      // If word is complete
      if (!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }

      this.timeoutVal = setTimeout(() => this.type(), typeSpeed);
    }
  }

  resetAnimation() {
    this.wordIndex = 0;
    this.txt = "";
    this.isDeleting = false;
  }

  stopAnimation() {
    isAnimating = false;
    _CURSOR.style.visibility = "hidden";
    clearTimeout(this.timeoutVal);
  }
}

const txtElement = document.getElementById("header-attributes");
const words = JSON.parse(txtElement.getAttribute("data-words"));
const wait = txtElement.getAttribute("data-wait");
const typewriter = new TypeWriter(txtElement, words, wait);
