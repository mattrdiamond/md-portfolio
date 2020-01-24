import { slideUpImg } from "./domElements";

// const slideUp = (entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       const img = entry.target; // image that has intersected w/ viewport
//       const src = img.getAttribute("data-lazy");
//       const parent = entry.target.parentElement;
//       const grandparent = parent.parentElement;

//       if (src) {
//         img.setAttribute("src", src);
//       }

//       // animate image up
//       img.classList.add("active");

//       // Total slideUp animation time (ms) = transition delay + .5s slide-up animation || Default = 500
//       const delay =
//         parseFloat(getComputedStyle(img).transitionDelay) * 1000 + 500 || 500;

//       // change transition timing/overflow hidden after animation (work section only)
//       if (parent.className === "work-img") {
//         setTimeout(() => {
//           img.classList.add("finished");
//           grandparent.classList.add("overflow");
//         }, delay);
//       }

//       // stop observing image
//       observer.unobserve(img);
//     }
//   });
// };

// const options = {
//   threshold: 0.5
// };

// const observer = new IntersectionObserver(slideUp, options);

// const observe = () => {
//   slideUpImg.forEach(image => {
//     observer.observe(image);
//   });
// };

// window.addEventListener("load", observe);

// ****************************************

const getMeasurements = () => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const density = window.devicePixelRatio;
  document.getElementById("vWidth").textContent = vw + "px";
  document.getElementById("vHeight").textContent = vh + "px";
  document.getElementById("pDensity").textContent = density;
  document.getElementById("totalW").textContent = vw * density + "px";
  document.getElementById("totalH").textContent = vh * density + "px";
};

document.addEventListener("DOMContentLoaded", function() {
  getMeasurements();
});

window.onresize = getMeasurements;
// ****************************************

const preloadImage = (img, slideContainer) => {
  img.src = img.dataset.src;
  img.srcset = img.dataset.srcset;

  img.onload = () => {
    // const placeholder = img.previousElementSibling;

    // if image hasn't slid up yet, skip fade-in animation
    if (!slideContainer.classList.contains("active")) {
      img.classList.add("visible");
      return;
    }

    img.classList.add("loaded");
  };
};

const slideAnimation = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const slideContainer = entry.target;
      const img = slideContainer.getElementsByClassName("slide-img")[0];
      const lazyImg = img.getAttribute("data-src");

      if (lazyImg && !img.src) {
        preloadImage(img, slideContainer);
      }

      if (entry.intersectionRatio > 0.5) {
        slideContainer.classList.add("active");

        // Total slideUp animation time (ms) = transition delay + .5s slide-up animation || Default = 500
        const delay =
          parseFloat(getComputedStyle(slideContainer).transitionDelay) * 1000 +
            500 || 500;

        // change transition timing/overflow hidden after animation (work section only)
        if (slideContainer.parentElement.classList.contains("work-item")) {
          slideContainer.classList.add("overflow");
          // *******************change to css transition??
          setTimeout(() => {
            slideContainer.classList.add("finished");
          }, delay);
        }

        // stop observing image
        observer.unobserve(slideContainer);
      }
    }
  });
};

// rootMargin: extend observer's top bounds (trigger early to start preloading)
const options = {
  threshold: [0, 1],
  rootMargin: "0px 0px 75px 0px"
};

const observer = new IntersectionObserver(slideAnimation, options);

window.addEventListener("load", () => {
  slideUpImg.forEach(image => {
    observer.observe(image);
  });
});
