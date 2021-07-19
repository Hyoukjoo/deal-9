import "./style.scss";
import { createInputAtom } from "@atoms";
import { createIconButtonMolecule } from "@molecules";
import { GRAY1 } from "@common/styles/color.js";

const createChatBarOrganism = ({ sendMessage }) => {
  const $div = document.createElement("div");
  const $input = createInputAtom({
    size: "medium",
  });
  const $sendIcon = createIconButtonMolecule({
    type: "send",
    color: GRAY1,
  });

  $sendIcon.addEventListener("click", (_) => {
    sendMessage($input.value);
  });

  $div.classList.add("chat-bar");
  $div.append($input, $sendIcon);

  return $div;
};

export default createChatBarOrganism;
