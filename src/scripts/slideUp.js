import { slideUpImg } from "./domElements";

const getTransitionDelay = img => {
  const tDelay = getComputedStyle(img).transitionDelay;

  switch (tDelay) {
    case "0s":
      return 500;
    case "0.25s":
      return 750;
    case "0.5s":
      return 1000;
    default:
      return 500;
  }
};

// entries: describes intersection between target and root container
// observer: interface used to manage instance of this observer
const slideUp = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target; // image that has intersected w/ viewport
      const src = img.getAttribute("data-lazy");
      const parent = entry.target.parentElement;
      const grandparent = parent.parentElement;

      if (src) {
        img.setAttribute("src", src);
      }

      // animate image up
      img.classList.add("active");

      // Calculate total animation time = transition delay + .5s slide-up animation
      const delay = getTransitionDelay(img);

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
  });
};

const options = {
  threshold: 0.5
};

const observer = new IntersectionObserver(slideUp, options);

window.addEventListener("load", () => {
  slideUpImg.forEach(image => {
    observer.observe(image);
  });
});
