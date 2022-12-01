"use strict";
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");
const alternateStyles = document.querySelectorAll(".alternate-style");
const dayNight = document.querySelector(".day-night");
styleSwitcherToggle === null || styleSwitcherToggle === void 0 ? void 0 : styleSwitcherToggle.addEventListener("click", () => {
    styleSwitcher === null || styleSwitcher === void 0 ? void 0 : styleSwitcher.classList.toggle("open");
});
window.addEventListener("scroll", () => {
    if (styleSwitcher === null || styleSwitcher === void 0 ? void 0 : styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    });
}
dayNight === null || dayNight === void 0 ? void 0 : dayNight.addEventListener("click", () => {
    var _a, _b;
    (_a = dayNight === null || dayNight === void 0 ? void 0 : dayNight.querySelector("i")) === null || _a === void 0 ? void 0 : _a.classList.toggle("fa-sun");
    (_b = dayNight === null || dayNight === void 0 ? void 0 : dayNight.querySelector("i")) === null || _b === void 0 ? void 0 : _b.classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
    var _a, _b;
    if (document.body.classList.contains("dark")) {
        (_a = dayNight === null || dayNight === void 0 ? void 0 : dayNight.querySelector("i")) === null || _a === void 0 ? void 0 : _a.classList.add("fa-sun");
    }
    else {
        (_b = dayNight === null || dayNight === void 0 ? void 0 : dayNight.querySelector("i")) === null || _b === void 0 ? void 0 : _b.classList.add("fa-moon");
    }
});
//# sourceMappingURL=style-switcher.js.map