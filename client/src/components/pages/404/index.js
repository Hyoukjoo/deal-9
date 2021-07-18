import create404Template from "@templates/404/index.js";

const create404Page = () => {
  const $404template = create404Template();

  return $404template;
};

export default create404Page;
