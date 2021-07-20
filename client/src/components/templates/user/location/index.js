import "./style.scss";

import { createTextAtom } from "@atoms";
import {
  createIconButtonMolecule,
  createLocationButtonMolecule,
} from "@molecules";
import { createHeaderOrganism } from "@organisms";

const createLocationTemplate = ({
  locations = [],
  removeLocation,
  addLocation,
  onClickBackButton,
}) => {
  const $template = document.createElement("section");
  const $backButton = createIconButtonMolecule({
    type: "short-arrow-left",
    onClick: onClickBackButton,
  });
  const $title = createTextAtom({
    type: "h1",
    size: "medium",
    text: "내 동네 설정하기",
  });
  const $header = createHeaderOrganism({
    type: "off-white",
    left: $backButton,
    middle: $title,
  });
  const $body = document.createElement("div");
  const $description1 = createTextAtom({
    type: "p",
    size: "small",
    text: "지역은 최소 1개 이상",
  });
  const $description2 = createTextAtom({
    type: "p",
    size: "small",
    text: "최대 2개까지 설정 가능해요.",
  });

  const $locationButtonWrapper = document.createElement("div");

  const $locationButtons = locations.map((location) => {
    const $locationButton = createLocationButtonMolecule({
      location,
      removeLocation,
    });
    return $locationButton;
  });

  if ($locationButtons.length < 2) {
    const $addLocationButton = createLocationButtonMolecule({ addLocation });

    $locationButtons.push($addLocationButton);
  }

  $locationButtonWrapper.classList.add("location-button-wrapper");
  $locationButtonWrapper.append(...$locationButtons);

  $body.classList.add("location-template-body");
  $body.append($description1, $description2, $locationButtonWrapper);

  $template.classList.add("location-template");
  $template.append($header, $body);

  return $template;
};

export default createLocationTemplate;
