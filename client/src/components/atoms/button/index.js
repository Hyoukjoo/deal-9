import "./style.scss";

const createButtonAtom = ({
  onClick = () => {},
  label = "",
  disabled = false,
}) => {
  const $button = document.createElement("button");

  $button.classList.add("atom");
  $button.textContent = label;
  $button.addEventListener("click", onClick);
  $button.disabled = disabled;

  return $button;
};

export default createButtonAtom;
