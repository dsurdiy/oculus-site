"use strict";

const btnItems = document.querySelectorAll(".tabs__buttons-item");
const contentTabs = document.querySelectorAll(".tabs__content-item");

btnItems.forEach((element) => {
  element.addEventListener("click", openTab);
});

function openTab(evt) {
  const targetBtn = evt.currentTarget;
  const content = targetBtn.dataset.button;
  const activeTab = document.querySelector(`#${content}`);

  btnItems.forEach((item) => {
    item.classList.remove("tabs__buttons-item--active");
  });

  targetBtn.classList.add("tabs__buttons-item--active");

  contentTabs.forEach((item) => {
    item.classList.remove("tabs__content-item--active");
  });

  activeTab.classList.add("tabs__content-item--active");
}
