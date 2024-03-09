import { menuData } from "./menuData.js";
import { handleItemClick, handleKeyPressEvent } from "./eventHandler.js";
import { appState } from "./store.js";

const headerItem = document.getElementById("app__header");

const generateMenuItems = (data = [], isSubMenu = false, nextItemCount = 0) => {
  const menuFrag = document.createDocumentFragment();
  const ulItem = document.createElement("ul");
  ulItem.classList.add("app__ulitem");
  ulItem.setAttribute("role", "menu-item-list");
  if (isSubMenu) {
    ulItem.classList.add("app__ulitem-submenu");
  }
  data.forEach((menuItem, index) => {
    const liItem = document.createElement("li");
    liItem.classList.add("app__liitem");

    liItem.setAttribute("aria-expanded", menuItem.expanded || false);
    liItem.setAttribute("aria-label", menuItem.title);

    liItem.setAttribute("data-isexpanded", menuItem.expanded || false);
    liItem.setAttribute("data-id", menuItem.title);
    liItem.setAttribute("data-level", nextItemCount);
    liItem.setAttribute("data-submenu", Boolean(menuItem.subMenu));
    liItem.setAttribute("data-id-number", `${nextItemCount}-${index}`);

    const anchorTitle = document.createElement("a");
    anchorTitle.setAttribute("class", "app__anchor");
    anchorTitle.setAttribute("href", menuItem.linkUrl || "#");

    const toggleIcon = document.createElement("span");
    toggleIcon.classList.add("app__toggle-icon");
    const titleSpan = document.createElement("span");
    titleSpan.classList.add("app__anchor-title");
    titleSpan.innerText = menuItem.title;
    anchorTitle.appendChild(titleSpan);
    anchorTitle.appendChild(toggleIcon);

    liItem.appendChild(anchorTitle);
    if (menuItem.subMenu) {
      const innerData = generateMenuItems(
        menuItem.subMenu,
        true,
        `${nextItemCount}-${index}`
      );
      liItem.appendChild(innerData);
    }
    ulItem.appendChild(liItem);
  });
  menuFrag.appendChild(ulItem);
  return menuFrag;
};

const attachClickHandler = () => {
  headerItem.addEventListener("click", (e) => {
    handleItemClick(e, {});
  });
  headerItem.addEventListener("keydown", handleKeyPressEvent);
};

export const populateHeader = () => {
  const items = generateMenuItems(menuData);
  const navTag = headerItem.querySelector("nav");
  navTag.appendChild(items);
  attachClickHandler();

  appState.initializeStore(menuData);
  console.log("normalised data -", appState.getState());
};
