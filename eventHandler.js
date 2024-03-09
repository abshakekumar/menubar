import { appState } from "./store.js";

const handleSubMenuItemClick = (e) => {
  const closestLi = e.target.closest(".app__liitem");
  if (closestLi) {
    const isSubMenuItemsExist = closestLi.querySelector(".app__ulitem");
    if (!isSubMenuItemsExist) {
      const id = closestLi.dataset.id;
      const currStateItem = appState.getById(id);
      if (currStateItem) {
        alert(`Clicked Item -${currStateItem.title}`);
        appState.updateState(id, { expanded: true });
        return;
      }
    }
  }
};

export const handleItemClick = (e, { hideItems, useNodeItem, showItems }) => {
  const isMenuButtonClicked = e.target.classList.contains("app__toggle-header");
  if (isMenuButtonClicked) {
    const navTag = document.querySelector("nav");
    navTag.classList.toggle("app__menu-show");
    return;
  }

  const isAnchorItemClicked =
    e.target.classList.contains("app__anchor") ||
    e.target.classList.contains("app__toggle-icon") ||
    e.target.classList.contains("app__anchor-title");
  if (isAnchorItemClicked) {
    if (!hideItems) {
      handleSubMenuItemClick(e);
    }
    const closestLiItem = useNodeItem || e.target.closest(".app__liitem");
    if (closestLiItem) {
      const id = closestLiItem.dataset.id;
      const getCurrentIdData = appState.getById(id);
      if (getCurrentIdData.subMenu) {
        const currExpandedState = closestLiItem.dataset.isexpanded;
        const newExpandedState = hideItems
          ? false
          : showItems
          ? true
          : currExpandedState === "false"
          ? true
          : false;
        closestLiItem.setAttribute("data-isexpanded", newExpandedState);

        appState.updateState(id, { expanded: newExpandedState });
        console.log("Updated State -", appState.getState());
      }
    }
  }
};

const handleKeyboardNavigationUsingArrowKeys = (e, logic) => {
  const closestLi = e.target.closest(".app__liitem");
  if (closestLi) {
    const currLiItemId = closestLi.dataset.idNumber;
    if (currLiItemId) {
      const idsArr = currLiItemId.split("-");
      const lastElementOfId = idsArr.pop();
      idsArr.push(logic(Number(lastElementOfId)));
      const nextElemetId = idsArr.join("-");
      const nextElemetLiItem = document.querySelector(
        `[data-id-number="${nextElemetId}"]`
      );
      if (nextElemetLiItem) {
        const anchorItemInsideCurrLiItem = nextElemetLiItem.querySelector("a");
        anchorItemInsideCurrLiItem.focus();
      }
    }
  }
};

const handleArrowUp = (e) => {
  handleKeyboardNavigationUsingArrowKeys(e, (curr) => curr - 1);
};

const handleArrowDown = (e) => {
  handleKeyboardNavigationUsingArrowKeys(e, (curr) => curr + 1);
};

const handleArrowRight = (e) => {
  const closestLi = e.target.closest(".app__liitem");
  if (closestLi) {
    const innerMenuItems = closestLi.querySelector(".app__ulitem");
    if (innerMenuItems) {
      const closestParentLiItem = innerMenuItems.closest(".app__liitem");
      handleItemClick(e, { showItems: true, useNodeItem: closestParentLiItem });
      const firstInnerItem = innerMenuItems.querySelector(".app__liitem");
      if (firstInnerItem) {
        firstInnerItem.querySelector("a").focus();
      }
    }
  }
};

const handleArrowLeft = (e) => {
  const closestLi = e.target.closest(".app__liitem");
  if (closestLi) {
    const closestUl = closestLi.closest(".app__ulitem");
    const closestParentLi = closestUl.closest(".app__liitem");
    if (closestParentLi) {
      const anchorItemInsideCurrLiItem = closestParentLi.querySelector("a");
      anchorItemInsideCurrLiItem.focus();
    }
  }
};

export const handleKeyPressEvent = (e) => {
  switch (e.key) {
    case "Escape":
      handleItemClick(e, { hideItems: true });
      break;
    case " ":
      e.preventDefault();
      handleItemClick(e, {});
      break;
    case "Enter": {
      e.preventDefault();
      handleItemClick(e, {});
      break;
    }
    case "ArrowUp": {
      handleArrowUp(e);
      break;
    }
    case "ArrowDown": {
      handleArrowDown(e);
      break;
    }
    case "ArrowRight": {
      handleArrowRight(e);
      break;
    }
    case "ArrowLeft": {
      handleArrowLeft(e);
      break;
    }
    default:
      return;
  }
};
