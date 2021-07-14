import { createTextElem } from "../../atoms/typography/typography.js";

export const create404Template = () => {
  const $template = document.createElement("div");
  const $title = createTextElem({
    type: "h1",
    size: "large",
    text: "404 Not Found",
  });

  $template.append($title);

  return $template;
};