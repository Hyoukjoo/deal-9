import create404Page from "@pages/404";

const clearChild = (parent) => {
  while (parent.lastChild) {
    parent.lastChild.remove();
  }
};

export const render = (target, ...components) => {
  clearChild(target);

  components = components.filter(Boolean);

  if (components.length > 0) {
    target.append(...components);
  } else {
    const $404Page = create404Page();

    target.append($404Page);
  }
};
