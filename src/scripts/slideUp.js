import { slideUpImg } from "./domElements";

const slideUp = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target; // image that has intersected w/ viewport
      const src = img.getAttribute("data-lazy");
      const parent = entry.target.parentElement;

      console.log(entry.target.dataset.lazy, entry.intersectionRatio);

      if (src) {
        img.setAttribute("src", src);
        img.srcset = img.dataset.srcset;
      }

      img.classList.add("active");

      if (parent.className === "work-img") {
        setTimeout(() => img.classList.add("finished"), 500);
      }
      observer.disconnect(); // dispose of observer once loaded
    }
  });
};

const options = {
  threshold: 0.5
};

// Call slideUp callback when intersectionRatio meets threshold
const lazyLoad = target => {
  const observer = new IntersectionObserver(slideUp, options);
  observer.observe(target);
};

slideUpImg.forEach(lazyLoad);
