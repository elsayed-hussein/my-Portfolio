// Variables Start
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");
const alternateStyles = document.querySelectorAll(".alternate-style");
const dayNight = document.querySelector(".day-night");
// / Variables End
/* ================================================== */
// Toggle Style Switcher Start
styleSwitcherToggle?.addEventListener("click", () => {
  styleSwitcher?.classList.toggle("open");
});
// / Toggle Style Switcher End
// Hide Style Switcher on Scroll Start
window.addEventListener("scroll", () => {
  if (styleSwitcher?.classList.contains("open")) {
    styleSwitcher.classList.remove("open");
  }
});
// / Hide Style Switcher on Scroll End
// Change Theme Color Start
function setActiveStyle(color: string) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
// / Change Theme Color End
// Change Theme Light and Dark Start
dayNight?.addEventListener("click", () => {
  dayNight?.querySelector("i")?.classList.toggle("fa-sun");
  dayNight?.querySelector("i")?.classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight?.querySelector("i")?.classList.add("fa-sun");
  } else {
    dayNight?.querySelector("i")?.classList.add("fa-moon");
  }
});
// / Change Theme Light and Dark End
