import "./style.scss";
import { createTextAtom } from "@atoms";

const createChatBadgeMolecule = ({ text }) => {
  const $chatBadge = createTextAtom({
    type: "span",
    size: "x-small",
    text,
  });
  $chatBadge.classList.add("chat-badge");

  return $chatBadge;
};

export default createChatBadgeMolecule;
