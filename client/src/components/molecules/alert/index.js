import "./style.scss";
import { createShadowBoxAtom, createTextAtom, createButtonAtom } from "@atoms";

const createAlertMolecule = ({
  message,
  cancelLabel = "취소",
  performLabel = "확인",
  onClickCancel,
  onClickPerform,
}) => {
  const $shadowBox = createShadowBoxAtom();
  const $message = createTextAtom({ type: "p", size: "small", text: message });
  const $cancelButton = createButtonAtom({
    label: cancelLabel,
    onClick: onClickCancel,
  });
  const $performButton = createButtonAtom({
    label: performLabel,
    onClick: onClickPerform,
  });

  $shadowBox.classList.add("alert");
  $shadowBox.append($message, $cancelButton, $performButton);

  return $shadowBox;
};

export default createAlertMolecule;
