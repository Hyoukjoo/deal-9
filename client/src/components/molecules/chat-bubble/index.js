import "./style.scss";
import { createLinkAtom } from "@atoms/text/link.js";

const createChatBubbleMolecule = ({ text, direction }) => {
  const $chatBubble = createLinkAtom({
    type: "span",
    size: "small",
    text,
  });
  $chatBubble.classList.add("chat-bubble", `chat-bubble-${direction}`);

  return $chatBubble;
};

export default createChatBubbleMolecule;
