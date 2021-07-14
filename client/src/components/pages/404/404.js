import { create404Template } from "../../templates/404/404.js";

export const create404Page = () => {
  const $404template = create404Template();

  return $404template;
};
