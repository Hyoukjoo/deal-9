import "./style.scss";
import { createButtonAtom } from "@atoms";

const createDropdownMolecule = ({ dropper, items, top, right, left, down }) => {
  const $dropdown = document.createElement("div");
  const $dropdownList = document.createElement("ul");
  const $dropbutton = createButtonAtom({
    onClick: () => {
      $dropdownList.classList.toggle("dropdown-list-active");
    },
  });

  $dropdown.append($dropbutton, $dropdownList);
  $dropbutton.append(dropper);
  $dropdownList.append(...items);
  $dropdown.classList.add("dropdown");
  $dropdownList.classList.add("dropdown-list");

  if (top !== undefined) {
    $dropdownList.style.top = top;
  }
  if (right !== undefined) {
    $dropdownList.style.right = right;
  }
  if (left !== undefined) {
    $dropdownList.style.left = left;
  }
  if (down !== undefined) {
    $dropdownList.style.down = down;
  }

  return $dropdown;
};

export default createDropdownMolecule;
