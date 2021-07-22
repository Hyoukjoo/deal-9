import "./style.scss";
import { createDropdownMolecule, createIconButtonMolecule } from "@molecules";
import { createLinkAtom, createButtonAtom, createIconAtom } from "@atoms";

const createMenuButtonMolecule = ({
  onClickModify = () => {},
  onClickDelete = () => {},
  color,
}) => {
  const $modifyButton = createButtonAtom({ onClick: onClickModify });
  const $modifyText = createLinkAtom({
    type: "span",
    size: "small",
    text: "수정하기",
  });
  $modifyButton.append($modifyText);

  const $deleteButton = createButtonAtom({ onClick: onClickDelete });
  const $deleteText = createLinkAtom({
    type: "span",
    size: "small",
    text: "삭제하기",
  });
  $deleteButton.append($deleteText);

  const $dropper = createIconAtom({
    type: "more-vertical",
    color,
  });
  const $dropdown = createDropdownMolecule({
    dropper: $dropper,
    items: [$modifyButton, $deleteButton],
    left: "-140px",
  });
  $dropdown.classList.add("menu-dropdown");

  return $dropdown;
};

export default createMenuButtonMolecule;
