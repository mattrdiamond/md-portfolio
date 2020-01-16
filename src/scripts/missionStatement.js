import { missionSection, missionTitle } from "./domElements";
import TypeWriter from "./TypeWriter";

const missionTypewriter = new TypeWriter(
  missionTitle,
  ["Mission Statement"],
  3000,
  130
);

let loaded = false;

const lazyLoad = () => {
  loaded = true;

  // 1) create image which will be held in browser cache
  const img = document.createElement("img");
  img.src = "src/img/mission_bkd.jpg";

  // 2) when image loaded, update CSS custom properties which are linked
  // to the background image (used to animate opacity)
  img.onload = () => {
    let root = document.documentElement;
    root.style.setProperty("--mission-bkd", `url("src/img/mission_bkd.jpg")`);
    root.style.setProperty("--mission-opacity", 1);
  };
};

const missionAnimation = (entries, observer) => {
  const entry = entries[0];
  console.log("ratio", entry.intersectionRatio);
  // debugger;

  if (!entry.isIntersecting) {
    return;
  } else if (!loaded) {
    lazyLoad();
  }
  if (entry.intersectionRatio === 1) {
    missionTypewriter.type();
    observer.disconnect();
  }
};

// extend observer's top bounds to start preloading early
const topBounds = window.innerWidth < 901 ? "170px" : "130px";

const missionOptions = {
  threshold: [0, 1],
  rootMargin: `0px 0px ${topBounds} 0px`
};

const observer = new IntersectionObserver(missionAnimation, missionOptions);

window.addEventListener("load", () => {
  observer.observe(missionSection);
});

//***********************************defer test */

// const deferImg = () => {
//   // 1) create image which will be held in browser cache
//   const img = document.createElement("img");
//   img.src = "src/img/mission_bkd.jpg";

//   // 2) when image loaded, update CSS custom properties which are linked
//   // to the background image (pseudo elements can't be edited directly)
//   img.onload = () => {
//     let root = document.documentElement;
//     root.style.setProperty("--mission-bkd", `url("src/img/mission_bkd.jpg")`);
//     root.style.setProperty("--mission-opacity", 1);
//   };
// };

// window.addEventListener("load", deferImg());
