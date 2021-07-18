import "./style.scss";

const createButtonAtom = ({ onClick = () => {}, label = "" }) => {
  const $button = document.createElement("button");

  $button.classList.add("atom");
  $button.textContent = label;
  $button.addEventListener("click", onClick);

  return $button;
};

export default createButtonAtom;
