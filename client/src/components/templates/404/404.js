import { createTextAtom } from "../../atoms/text/text.js";

export const create404Template = () => {
  const $template = document.createElement("div");
  const $title = createTextAtom({
    type: "h1",
    size: "large",
    text: "404 Not Found",
  });

  $template.append($title);

  return $template;
};
