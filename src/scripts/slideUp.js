import { slideUpImg } from "./domElements";

const preloadImage = (img, slideContainer) => {
  img.src = img.dataset.src;
  img.srcset = img.dataset.srcset;

  img.onload = () => {
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
        // debugger;
        slideContainer.classList.add("active");

        // add overflow hidden after animation (work section only) because hidden elements won't trigger intersection observer
        if (slideContainer.parentElement.classList.contains("work-item")) {
          slideContainer.classList.add("overflow");
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
