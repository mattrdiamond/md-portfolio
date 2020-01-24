import { missionSection, missionTitle } from "./domElements";
import TypeWriter from "./TypeWriter";

const missionTypewriter = new TypeWriter(
  missionTitle,
  ["Mission Statement"],
  3000,
  130
);

// let loaded = false;

// const lazyLoad = () => {
//   loaded = true;

//   // 1) create image which will be held in browser cache
//   const img = document.createElement("img");
//   img.src = "src/img/mission_bkd.jpg";

//   // 2) when image loaded, update CSS custom properties which are linked
//   // to the background image (appears in :after element)
//   img.onload = () => {
//     const root = document.documentElement;
//     const placeholder = missionSection.querySelector(".placeholder");

//     root.style.setProperty("--mission-bkd", `url("src/img/mission_bkd.jpg")`);
//     placeholder.classList.add("hidden");
//   };
// };

// ****taken from slide-up. make this reusable and import it
// const preloadImage = () => {
//   // img.src = img.dataset.src;
//   // img.srcset = img.dataset.srcset;

//   // const placeholder = img.previousElementSibling,
//   const placeholder = missionSection.getElementsByClassName("placeholder")[0],
//     fragment = document.createDocumentFragment(),
//     img = document.createElement("img");

//   img.src = missionSection.dataset.missionSrc;
//   /// need srcset
//   img.classList.add("mission-large"); // need to add css class w/ fixed pos
//   fragment.appendChild(img);

//   img.onload = () => {
//     placeholder.classList.add("hidden"); //opacity 0
//   };

//   setTimeout(() => {
//     missionSection.appendChild(fragment);
//   }, 3000);
// };

const preloadImage = img => {
  img.src = img.dataset.missionSrc;
  img.srcset = img.dataset.missionSrcset;

  // const placeholder = img.previousElementSibling,
  const placeholder = missionSection.getElementsByClassName("placeholder")[0];
  // , fragment = document.createDocumentFragment(),
  //   img = document.createElement("img");

  // img.src = missionSection.dataset.missionSrc;
  /// need srcset
  // img.classList.add("mission-large"); // need to add css class w/ fixed pos
  // fragment.appendChild(img);

  img.onload = () => {
    placeholder.classList.add("hidden"); //opacity 0
  };

  // setTimeout(() => {
  //   missionSection.appendChild(fragment);
  // }, 3000);
};

const missionAnimation = (entries, observer) => {
  const entry = entries[0];
  // const mission = entry.target;
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

// extend observer's top bounds to start preloading early (amount based on screen size)
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
