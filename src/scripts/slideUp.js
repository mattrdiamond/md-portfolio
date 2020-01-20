import { slideUpImg } from "./domElements";

const preloadImage = (img, slideContainer) => {
  img.src = img.dataset.src;
  img.srcset = img.dataset.srcset;

  img.onload = () => {
    const placeholder = img.previousElementSibling;

    // if image hasn't slid up yet, skip fade-in animation
    if (!slideContainer.classList.contains("active")) {
      placeholder.classList.add("hidden");
      return;
    }
    // fade-in and then hide placeholder
    placeholder.classList.add("loaded");
    setTimeout(() => {
      placeholder.classList.add("hidden");
    }, 500);
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
          parseFloat(getComputedStyle(img).transitionDelay) * 1000 + 500 || 500;

        // change transition timing/overflow hidden after animation (work section only)
        if (slideContainer.parentElement.classList.contains("work-item")) {
          slideContainer.classList.add("overflow");
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
  rootMargin: "0px 0px 60px 0px"
};

const observer = new IntersectionObserver(slideAnimation, options);

window.addEventListener("load", () => {
  slideUpImg.forEach(image => {
    observer.observe(image);
  });
});
