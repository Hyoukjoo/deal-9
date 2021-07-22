import "./style.scss";
import { createHeaderOrganism } from "@organisms";
import {
  createMenuButtonMolecule,
  createIconButtonMolecule,
  createProductImgMolecule,
  createTextWithMiddotMolecule,
  createInfoSalerMolecule,
  createProductBarMolecule,
} from "@molecules";
import { createTextAtom } from "@atoms";
import { WHITE } from "@common/styles/color.js";
import { timeAgo } from "@utils/helper.js";

const createProductTemplate = ({
  onClickBackButton,
  onClickModify,
  onClickDelete,
  title,
  categories,
  timestamp,
  content,
  price,
  buttonText,
  onClickFooterButton,
  thumbnail,
  location,
  username,
}) => {
  const $productTemplate = document.createElement("div");

  const $backButton = createIconButtonMolecule({
    onClick: onClickBackButton,
    type: "short-arrow-left",
    color: WHITE,
  });
  const $menuButton = createMenuButtonMolecule({
    onClickModify,
    onClickDelete,
    color: WHITE,
  });

  const $header = createHeaderOrganism({
    type: "invisible",
    left: $backButton,
    right: $menuButton,
  });
  const $productImg = createProductImgMolecule({
    type: "gradient",
    src: thumbnail,
  });

  const $main = document.createElement("main");
  const $title = createTextAtom({
    type: "h1",
    size: "large",
    text: title,
  });
  const $subtitle = createTextWithMiddotMolecule([
    ...categories.map((c) => c.name),
    timeAgo(timestamp),
  ]);
  const $contentWrapper = document.createElement("div");
  const $content = createTextAtom({ type: "p", size: "medium", text: content });
  $contentWrapper.append($content);

  const $interestings = createTextWithMiddotMolecule([
    "채팅 0",
    "관심 0",
    "조회 0",
  ]);

  const $infoSaler = createInfoSalerMolecule({
    username,
    location,
  });

  const $productBar = createProductBarMolecule({
    price,
    buttonText: "공사중",
    onClick: onClickFooterButton,
  });
  $main.append(
    $title,
    $subtitle,
    $contentWrapper,
    $interestings,
    $infoSaler,
    $productBar
  );

  $productTemplate.append($productImg, $header, $main);
  $productTemplate.classList.add("product-template");

  return $productTemplate;
};

export default createProductTemplate;
