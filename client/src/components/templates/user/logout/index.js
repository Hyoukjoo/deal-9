import "./style.scss";

import { createLinkAtom, createTextAtom } from "@atoms";
import {
  createIconButtonMolecule,
  createNormalButtonMolecule,
} from "@molecules";
import { createHeaderOrganism } from "@organisms";

const createLogoutTemplate = ({
  onClickBackButton,
  onClickLogoutButton,
  username = "",
}) => {
  const $template = document.createElement("section");
  const $backButton = createIconButtonMolecule({
    type: "short-arrow-left",
    onClick: onClickBackButton,
  });
  const $title = createTextAtom({
    type: "h1",
    size: "medium",
    text: "내 계정",
  });
  const $header = createHeaderOrganism({
    type: "off-white",
    left: $backButton,
    middle: $title,
  });

  const $body = document.createElement("div");
  const $username = createLinkAtom({
    type: "p",
    size: "small",
    text: username,
  });
  const $logoutButton = createNormalButtonMolecule({
    size: "large",
    label: "로그아웃",
    onClick: onClickLogoutButton,
  });

  $body.classList.add("body");
  $body.append($username, $logoutButton);

  $template.setAttribute("id", "logout-template");
  $template.append($header, $body);

  return $template;
};

export default createLogoutTemplate;
