import "./main.scss";

const items = [].slice.call(document.querySelectorAll(".exp-panel__item"));
items.forEach(item => item.querySelector("button").addEventListener("click", () => {
  item.classList.toggle("exp-panel__item--active");
  items.filter(i => i !== item).forEach(i => i.classList.remove("exp-panel__item--active"));
}));

const navItems = [].slice.call(document.querySelectorAll(".page__nav__item"));
navItems.forEach(navItem => navItem.addEventListener("click", () => {
  navItems.forEach(i => i.classList.remove("page__nav__item--active"));
  navItem.classList.add("page__nav__item--active");
}));

const popupTriggers = [].slice.call(document.querySelectorAll(".open-popup"));
popupTriggers.forEach(popupTrigger => {
  const popup = popupTrigger.nextElementSibling;

  document.addEventListener("click", e => {
    if (!popupTriggers.includes(e.target)) {
      popupTriggers.forEach(pt => pt.nextElementSibling.classList.remove("popup--active"));
    }
  });

  popupTrigger.addEventListener("click", () => {
    popup.classList.toggle("popup--active");
    popupTriggers.filter(pt => pt.nextElementSibling !== popup).forEach(pt => pt.nextElementSibling.classList.remove("popup--active"));
  });
});

document.querySelector(".toggle-button").addEventListener("click", e => e.target.classList.toggle("active"))