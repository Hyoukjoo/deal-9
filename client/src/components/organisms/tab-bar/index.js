import "./style.scss";
import { createTabButtonMolecule } from "@molecules";

function tabButtonClickHandler(setState, idx) {
  return function (e) {
    const $activeButton = document.querySelector(".tab-button.active");
    $activeButton && $activeButton.classList.remove("active");
    e.target.closest("button").classList.add("active");
    setState({ selectedTab: idx });
  };
}

const createTabBarOrganism = ({ selectedTab, setState }) => {
  const $tabBar = document.createElement("div");
  $tabBar.classList.add("tab-bar");

  ["판매목록", "채팅", "관심목록"].forEach((tab, idx) => {
    const $tabWrapper = document.createElement("div");
    const $tabButton = createTabButtonMolecule({
      onClick: tabButtonClickHandler(setState, idx),
      label: tab,
    });
    if (idx === selectedTab) {
      $tabButton.classList.add("active");
    }
    $tabBar.append($tabWrapper);
    $tabWrapper.append($tabButton);
  });

  return $tabBar;
};

export default createTabBarOrganism;
