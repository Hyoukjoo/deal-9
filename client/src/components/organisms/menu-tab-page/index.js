import "./style.scss";
import {
  createProductListItemOrganism,
  createChatItemOrganism,
} from "@organisms";

import { createTextAtom } from "@atoms";
import { createIconButtonMolecule, createMenuButtonMolecule } from "@molecules";
import { GRAY1, PRIMARY1 } from "@common/styles/color.js";

const getEmptyTabPage = (tab) => {
  const $wrapper = document.createElement("div");
  let $text;
  if (tab === 0) {
    $text = createTextAtom({
      type: "span",
      size: "small",
      text: "등록한 상품이 없습니다.",
    });
  } else if (tab === 1) {
    $text = createTextAtom({
      type: "span",
      size: "small",
      text: "채팅 기록이 없습니다.",
    });
  } else if (tab === 2) {
    $text = createTextAtom({
      type: "span",
      size: "small",
      text: "관심을 표시한 상품이 없습니다.",
    });
  }

  $wrapper.classList.add("empty-tab-page");
  $wrapper.append($text);

  return $wrapper;
};

const getTabPage = ({
  tab,
  list,
  onClickHeart,
  onClickModify,
  onClickDelete,
}) => {
  const $ul = document.createElement("ul");
  if (tab === 0) {
    list.forEach((product) => {
      const $menu = createMenuButtonMolecule({
        onClickModify,
        onClickDelete,
        color: GRAY1,
      });
      const $salesItem = createProductListItemOrganism({
        ...product,
        productHeaderButton: $menu,
      });
      const $li = document.createElement("li");
      $ul.append($li);
      $li.append($salesItem);
    });
  } else if (tab === 1) {
    list.forEach((chat) => {
      const $chatItem = createChatItemOrganism(chat);
      $ul.append($chatItem);
    });
  } else if (tab === 2) {
    list.forEach((product) => {
      const $heart = createIconButtonMolecule({
        type: "heart",
        with: "20px",
        height: "20px",
        color: PRIMARY1,
        fill: PRIMARY1,
        onClick: onClickHeart,
      });
      const $bookmarkItem = createProductListItemOrganism({
        ...product,
        productHeaderButton: $heart,
      });
      const $li = document.createElement("li");
      $ul.append($li);
      $li.append($bookmarkItem);
    });
  }
  $ul.classList.add("tab-page");
  return $ul;
};

const createMenuTabPageOrganism = ({
  tab,
  list,
  onClickHeart,
  onClickModify,
  onClickDelete,
}) => {
  if (list?.length) {
    return getTabPage({
      tab,
      list,
      onClickHeart,
      onClickModify,
      onClickDelete,
    });
  } else {
    return getEmptyTabPage(tab);
  }
};

export default createMenuTabPageOrganism;
