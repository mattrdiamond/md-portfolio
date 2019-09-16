import { navLinks, headerArrow, navButton } from "./domElements";
import { toggleNav } from "./navButton";

navLinks.forEach(elem => elem.addEventListener("click", navLinkClick));
headerArrow.addEventListener("click", navLinkClick);

function navLinkClick(e) {
  smoothScroll(e);
  setTimeout(function() {}, 800);
  if (navButton.classList.contains("active")) {
    toggleNav();
  }
}

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
