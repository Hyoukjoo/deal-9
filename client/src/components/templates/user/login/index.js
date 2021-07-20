import "./style.scss";

import { createInputAtom, createAnchorAtom, createTextAtom } from "@atoms";
import {
  createIconButtonMolecule,
  createNormalButtonMolecule,
} from "@molecules";
import { createHeaderOrganism } from "@organisms";
import { USER, SIGNUP } from "@common/path.js";

const createLoginTemplate = ({
  onClickBackButton,
  onChangeInput,
  onClickLoginButton,
}) => {
  const $template = document.createElement("section");
  const $backButton = createIconButtonMolecule({
    type: "short-arrow-left",
    onClick: onClickBackButton,
  });
  const $title = createTextAtom({
    type: "h1",
    size: "medium",
    text: "로그인",
  });
  const $header = createHeaderOrganism({
    type: "off-white",
    left: $backButton,
    middle: $title,
  });

  const $body = document.createElement("div");
  const $input = createInputAtom({
    size: "large",
    placeholder: "아이디를 입력하세요",
    onChange: onChangeInput,
  });
  const $loginButton = createNormalButtonMolecule({
    size: "large",
    label: "로그인",
    onClick: onClickLoginButton,
  });
  const $singupAnchor = createAnchorAtom({
    size: "small",
    href: USER + SIGNUP,
    label: "회원가입",
  });

  $body.classList.add("body");
  $body.append($input, $loginButton, $singupAnchor);

  $template.append($header, $body);
  $template.setAttribute("id", "login-template");

  return $template;
};

export default createLoginTemplate;
