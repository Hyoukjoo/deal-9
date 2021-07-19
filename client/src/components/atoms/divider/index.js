import "./style.scss";

const createDividerAtom = ({ height, width }) => {
  const $divider = document.createElement("div");
  $divider.classList.add("divider");

  if (height) {
    $divider.style.height = height;
  }
  if (width) {
    $divider.style.width = width;
  }

  return $divider;
};

export default createDividerAtom;
