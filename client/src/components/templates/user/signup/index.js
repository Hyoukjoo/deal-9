import "./style.scss";

import { createInputAtom, createTextAtom } from "@atoms";
import {
  createIconButtonMolecule,
  createNormalButtonMolecule,
} from "@molecules";
import { createHeaderOrganism } from "@organisms";

const createSignupTemplate = ({
  onClickBackButton,
  onChangeIDInput,
  onChangeLocationInput,
  onClickSignupButton,
}) => {
  const $template = document.createElement("section");
  const $backButton = createIconButtonMolecule({
    type: "short-arrow-left",
    onClick: onClickBackButton,
  });
  const $title = createTextAtom({
    type: "h1",
    size: "medium",
    text: "회원가입",
  });
  const $header = createHeaderOrganism({
    type: "off-white",
    left: $backButton,
    middle: $title,
  });

  const $body = document.createElement("div");
  const $IDLabel = createTextAtom({
    type: "label",
    size: "small",
    text: "아이디",
  });
  const $locationLabel = createTextAtom({
    type: "label",
    size: "small",
    text: "우리 동네",
  });
  const $IDInput = createInputAtom({
    placeholder: "영문, 숫자 조합 20자 이하",
    onChange: onChangeIDInput,
  });
  const $locationInput = createInputAtom({
    placeholder: "시∙구 제외, 동만 입력",
    onChange: onChangeLocationInput,
  });
  const $signupButton = createNormalButtonMolecule({
    size: "large",
    label: "회원가입",
    onClick: onClickSignupButton,
  });

  $body.classList.add("body");
  $body.append(
    $IDLabel,
    $IDInput,
    $locationLabel,
    $locationInput,
    $signupButton
  );

  $template.id = "signup-template";
  $template.append($header, $body);

  return $template;
};

export default createSignupTemplate;
