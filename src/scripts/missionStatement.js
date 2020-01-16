import { missionSection, missionTitle } from "./domElements";
import TypeWriter from "./TypeWriter";

const missionTypewriter = new TypeWriter(
  missionTitle,
  ["Mission Statement"],
  3000,
  130
);

const missionAnimation = (entries, observer) => {
  if (entries[0].intersectionRatio > 0) {
    console.log("intersect");
    missionTypewriter.type();
    observer.disconnect();
  }
};

const missionOptions = {
  threshold: 0.65
};

const observer = new IntersectionObserver(missionAnimation, missionOptions);
observer.observe(missionSection);

//***********************************defer test */

const deferImg = () => {
  // 1) create image which will be held in browser cache
  var img = document.createElement("img");
  img.src = "src/img/mission_bkd.jpg";

  // 2) when image loaded, update CSS custom properties which are linked
  // to the background image (pseudo elements can't be edited directly)
  img.onload = () => {
    let root = document.documentElement;
    root.style.setProperty("--mission-bkd", `url("src/img/mission_bkd.jpg")`);
    root.style.setProperty("--mission-opacity", 1);
  };
};

window.addEventListener("load", deferImg());
