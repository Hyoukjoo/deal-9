import "./style.scss";

import {
  createInputAtom,
  createShadowBoxAtom,
  createTextAtom,
  createButtonAtom,
} from "@atoms";

const createPopupInputMolecule = ({
  placeholder,
  onChange,
  message,
  cancelLabel = "취소",
  performLabel = "확인",
  onClickCancelButton,
  onClickPerformButton,
}) => {
  const $shadowBox = createShadowBoxAtom();
  const $message = createTextAtom({ type: "p", size: "small", text: message });
  const $input = createInputAtom({ placeholder, onChange, size: "medium" });
  const $cancelButton = createButtonAtom({
    label: cancelLabel,
    onClick: onClickCancelButton,
  });
  const $performButton = createButtonAtom({
    label: performLabel,
    onClick: onClickPerformButton,
  });

  $shadowBox.classList.add("popup-input");
  $shadowBox.append($message, $input, $cancelButton, $performButton);

  return $shadowBox;
};

export default createPopupInputMolecule;
