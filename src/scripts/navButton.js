import { navButton, navOverlay } from "./domElements";

navButton.addEventListener("click", toggleNav, false);

export function toggleNav() {
  navButton.classList.toggle("active");
  navOverlay.classList.toggle("visible");
}
