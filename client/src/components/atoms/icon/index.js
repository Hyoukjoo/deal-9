import ICON from "./constant.js";

const createIconAtom = ({
  width = 24,
  height = 24,
  color = "#222222",
  fill = "none",
  type,
}) => {
  const $icon = ICON[type]({ color, fill });

  const isNotSupported = $icon === undefined;

  if (isNotSupported) {
    throw Error(`This ${type} icon is not supported `);
  }

  const $svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  $svg.setAttribute("width", width);
  $svg.setAttribute("height", height);
  $svg.setAttribute("fill", fill);
  $svg.setAttribute("viewBox", `0 0 24 24`);

  $svg.innerHTML = $icon;

  return $svg;
};

export default createIconAtom;
