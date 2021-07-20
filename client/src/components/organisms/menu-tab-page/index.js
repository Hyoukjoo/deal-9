import "./style.scss";
import {
  createProductListItemOrganism,
  createChatItemOrganism,
} from "@organisms";
import { createTextAtom } from "@atoms";

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

const getTabPage = (tab, list) => {
  const $ul = document.createElement("ul");
  if (tab === 0) {
    list.forEach((product) => {
      const $salesItem = createProductListItemOrganism({
        ...product,
        leftUpMenu: "",
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
      const $bookmarkItem = createProductListItemOrganism({
        ...product,
        leftUpMenu: "",
      });
      const $li = document.createElement("li");
      $ul.append($li);
      $li.append($bookmarkItem);
    });
  }
  $ul.classList.add("tab-page");
  return $ul;
};

const createMenuTabPageOrganism = ({ tab, list }) => {
  if (list?.length) {
    return getTabPage(tab, list);
  } else {
    return getEmptyTabPage(tab);
  }
};

export default createMenuTabPageOrganism;
