import { slideUpImg } from "./domElements";

const preloadImage = img => {
  const lazyImg = img.getAttribute("data-lazy");

  if (!lazyImg || !img.src.includes("placeholder")) {
    return;
  }
  console.log("lazy load", img.dataset.lazy);
  img.setAttribute("src", lazyImg);
  img.srcset = img.dataset.srcset;
};

const slideUp = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const parent = entry.target.parentElement;
      const grandparent = entry.target.parentElement.parentElement;

      console.log(entry.target.dataset.lazy, entry.intersectionRatio);

      preloadImage(img);

      if (entry.intersectionRatio > 0.5) {
        console.log("activate");

        // slide up image
        img.classList.add("active");

        // Total slideUp animation time (ms) = transition delay + .5s slide-up animation || Default = 500
        const delay =
          parseFloat(getComputedStyle(img).transitionDelay) * 1000 + 500 || 500;

        // change transition timing/overflow hidden after animation (work section only)
        if (parent.className === "work-img") {
          setTimeout(() => {
            img.classList.add("finished");
            grandparent.classList.add("overflow");
          }, delay);
        }

        // stop observing image
        observer.unobserve(img);
      }
    }
  });
};

// const options = {
//   threshold: [0, 0.5]
// };

// rootMargin: extend observer's top bounds by 75px (trigger early to start preloading)
const options = {
  threshold: [0, 1],
  rootMargin: "0px 0px 70px 0px"
};

const observer = new IntersectionObserver(slideUp, options);

window.addEventListener("load", () => {
  slideUpImg.forEach(image => {
    observer.observe(image);
  });
});
