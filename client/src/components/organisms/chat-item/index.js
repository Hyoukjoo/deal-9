import "./style.scss";

import { createLinkAtom, createTextAtom } from "@atoms";
import { createChatBadgeMolecule, createProductImgMolecule } from "@molecules";

const createChatItemOrganism = ({
  username,
  message,
  timestamp,
  count = 0,
  imgSrc,
}) => {
  const hasNewMessage = count > 0;

  const $li = document.createElement("li");
  const $username = createLinkAtom({
    text: username,
  });
  const $message = createTextAtom({ text: message });
  const $timestamp = createTextAtom({ size: "x-small", text: timestamp });
  const $imageBox = createProductImgMolecule({ type: "small", src: imgSrc });

  $li.classList.add("chat-item");
  $username.classList.add("username");
  $message.classList.add("message");
  $timestamp.classList.add("timestamp");

  const $children = [$username, $message, $timestamp, $imageBox];

  if (hasNewMessage) {
    const $count = createChatBadgeMolecule({ text: count });
    $li.classList.add("has-new-message");
    $count.classList.add("count");
    $children.push($count);
  }

  $li.append(...$children);

  return $li;
};

export default createChatItemOrganism;
