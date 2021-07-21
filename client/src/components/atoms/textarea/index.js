import "./style.scss";

const createTextareaAtom = ({ placeholder = "", onChange = () => {} }) => {
  const $textarea = document.createElement("textarea");

  $textarea.classList.add("atom");
  $textarea.placeholder = placeholder;
  $textarea.addEventListener("input", onChange);
  $textarea.rows = 3;

  return $textarea;
};

export default createTextareaAtom;
