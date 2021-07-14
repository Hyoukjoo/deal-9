const clearChild = (parent) => {
  while (parent.lastChild) {
    parent.lastChild.remove();
  }
};

export const render = (target, ...components) => {
  clearChild(target);
  console.log(components);
  target.append(...components);
};
