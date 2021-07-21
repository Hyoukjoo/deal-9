import create404Page from "@pages/404";

export const clearChild = (parent) => {
  while (parent.lastChild) {
    parent.lastChild.remove();
  }
};

export const render = ({ target, getPage, props }) => {
  try {
    clearChild(target);

    if (typeof getPage === "function") {
      props = { ...props, $app: target };
      const component = getPage(props);

      if (component instanceof Promise) {
        component.then((page) => {
          target.append(page);
        });
      } else {
        target.append(component);
      }
    } else {
      const $404Page = create404Page();

      target.append($404Page);
    }
  } catch (e) {
    throw e;
  }
};

export const _render = (target, ...components) => {
  clearChild(target);

  components = components.filter(Boolean);

  if (components.length > 0) {
    target.append(...components);
  } else {
    const $404Page = create404Page();

    target.append($404Page);
  }
};

export const replaceDomElement = ($newDomEl) => {
  const classNames = [...$newDomEl.classList].map(
    (className) => `.${className}`
  );
  const $oldEl = document.querySelector(...classNames);
  $oldEl.replaceWith($newDomEl);
};
