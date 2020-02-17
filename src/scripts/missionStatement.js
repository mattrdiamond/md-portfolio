import { missionSection, missionTitle } from "./domElements";
import TypeWriter from "./TypeWriter";

const missionTypewriter = new TypeWriter(
  missionTitle,
  ["Mission Statement"],
  3000,
  130
);

const preloadImage = img => {
  img.src = img.dataset.missionSrc;
  img.srcset = img.dataset.missionSrcset;

  const placeholder = missionSection.getElementsByClassName("placeholder")[0];

  img.onload = () => {
    placeholder.classList.add("hidden");
  };
};

const missionAnimation = (entries, observer) => {
  const entry = entries[0];
  const img = entry.target.getElementsByClassName("mission-large")[0];

  if (!entry.isIntersecting) {
    return;
  } else if (!img.src) {
    preloadImage(img);
  }
  if (entry.intersectionRatio === 1) {
    missionTypewriter.type();
    observer.disconnect();
  }
};

// extend observer's top bounds to start preloading img early (amount based on screen size)
const topBounds = window.innerWidth < 901 ? "170px" : "130px";

const missionOptions = {
  threshold: [0, 1],
  rootMargin: `0px 0px ${topBounds} 0px`
};

const observer = new IntersectionObserver(missionAnimation, missionOptions);

window.addEventListener("load", () => {
  observer.observe(missionSection);
});
