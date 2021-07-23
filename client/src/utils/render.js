import create404Page from "@pages/404";
import { getMyInfoRequest } from "../remotes/UserRemote.js";

export const clearChild = (parent) => {
  while (parent.lastChild) {
    parent.lastChild.remove();
  }
};

export const renderPage = ({ target, getPage, props }) => {
  try {
    clearChild(target);

    if (typeof getPage === "function") {
      props = { ...props, $app: target };

      getMyInfoRequest().then(({ user }) => {
        const isLogin = user !== undefined;
        props.isLogin = isLogin;
        props.user = user;

        const component = getPage(props);

        if (component instanceof Promise) {
          component.then((page) => {
            target.append(page);
          });
        } else {
          if (component !== undefined) {
            target.append(component);
          }
        }
      });
    } else {
      const $404Page = create404Page();

      target.append($404Page);
    }
  } catch (e) {
    throw e;
  }
};

export const renderComponent = (target, ...components) => {
  clearChild(target);

  components = components.filter(Boolean);

  if (components.length > 0) {
    target.append(...components);
  } else {
    const $404Page = create404Page();

    target.append($404Page);
  }
};

export const replaceDomElement = ($newDomEl, $oldEl) => {
  if ($oldEl) {
    $oldEl.replaceWith($newDomEl);
  } else {
    const classNames = [...$newDomEl.classList].map(
      (className) => `.${className}`
    );
    const $oldEl = document.querySelector(...classNames);
    $oldEl.replaceWith($newDomEl);
  }
};
