"use strict";
var _a;
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const sectionList = document.querySelectorAll(".section");
const totalSectionList = sectionList.length;
const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
function showSection(e) {
    const target = e.getAttribute("href");
    for (let i = 0; i < totalSectionList; i++) {
        sectionList[i].classList.remove("active");
    }
    document.querySelector(target).classList.add("active");
}
function asideSectionTogglerBtn() {
    aside === null || aside === void 0 ? void 0 : aside.classList.toggle("open");
    navTogglerBtn === null || navTogglerBtn === void 0 ? void 0 : navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSectionList; i++) {
        sectionList[i].classList.toggle("open");
    }
}
function updateNav(e) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = e.getAttribute("href");
        if (target === navList[i].querySelector("a").getAttribute("href")) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
function removeBackSection() {
    for (let i = 0; i < totalSectionList; i++) {
        sectionList[i].classList.remove("back-section");
    }
}
function addBackSection(j) {
    sectionList[j].classList.add("back-section");
}
let typed = new Typed(".typing", {
    strings: [
        "",
        "Web Designer",
        "Full Stack Developer",
        "MERN Developer",
        "FrontEnd Developer",
        "BackEnd Developer",
        "Laravel Developer",
    ],
    typeSpeed: 120,
    BackSpeed: 80,
    loop: true,
});
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}
navTogglerBtn === null || navTogglerBtn === void 0 ? void 0 : navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});
(_a = document.querySelector(".hire-me")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});
//# sourceMappingURL=index.js.map