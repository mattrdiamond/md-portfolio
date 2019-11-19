import { missionSection, missionTitle } from "./domElements";
import TypeWriter from "./TypeWriter";

const missionTypewriter = new TypeWriter(
  missionTitle,
  ["Mission Statement"],
  3000,
  150
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
