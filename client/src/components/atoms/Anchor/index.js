import "./style.scss";
import createLinkAtom from "@atoms/text/link.js";

const createAnchorAtom = ({ href, label, size = "medium" }) => {
  const $anchor = createLinkAtom({ type: "a", size, text: label });

  $anchor.classList.add("atom");
  $anchor.setAttribute("href", href);

  return $anchor;
};

export default createLinkAtom;
