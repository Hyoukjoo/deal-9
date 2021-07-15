import "./style.scss";
import { createLinkAtom } from "@atoms/Text/link.js";

export const createAnchorAtom = ({ href, label, size = "medium" }) => {
  const $anchor = createLinkAtom({ type: "a", size, text: label });

  $anchor.classList.add("atom");
  $anchor.setAttribute("href", href);

  return $anchor;
};
