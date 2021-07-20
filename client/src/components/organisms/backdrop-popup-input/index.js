import "./style.scss";

import { createBackdropAtom } from "@atoms";
import { createPopupInputMolecule } from "@molecules";

const createBackdropPopupInputOrganism = ({
  placeholder,
  onChange,
  message,
  cancelLabel,
  performLabel,
  onClickCancelButton,
  onClickPerformButton,
}) => {
  const $backdrop = createBackdropAtom();
  const $popupInput = createPopupInputMolecule({
    placeholder,
    onChange,
    message,
    cancelLabel,
    performLabel,
    onClickCancelButton,
    onClickPerformButton,
  });

  $backdrop.append($popupInput);

  return $backdrop;
};

export default createBackdropPopupInputOrganism;
