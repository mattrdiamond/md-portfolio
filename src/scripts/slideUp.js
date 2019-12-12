import { slideUpImg } from "./domElements";

// entries: describes intersection between target and root container
// observer: interface used to manage instance of this observer
const slideUp = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("entry", entry.target.parentElement.parentElement.nodeName);
      const img = entry.target; // image that has intersected w/ viewport
      const src = img.getAttribute("data-lazy");
      const parent = entry.target.parentElement;

      if (src) {
        img.setAttribute("src", src);
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
