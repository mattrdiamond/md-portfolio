// Set landing page 100vh on mobile (not including browser UI)
const mobileHeightMinusNav = () => {
  if (window.innerWidth <= 450) {
    // Get value for 1 vh unit
    const vh = window.innerHeight * 0.01;
    // Set the value in the --vh custom property
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
};
mobileHeightMinusNav();
