export const priceFormat = (price, unit) => {
  const _price = (+price).toLocaleString();
  if (unit === "원") {
    return `${_price}${unit}`;
  } else if (unit === "₩") {
    return `${unit}${_price}`;
  } else {
    return _price;
  }
};

export const timeAgo = (time) => {
  const date = new Date(time);
  const seconds = Math.floor((new Date() - date) / 1000);
  let interval = seconds / (60 * 60 * 24 * 30 * 12);
  if (interval > 1) {
    return Math.floor(interval) + "년 전";
  }
  interval = seconds / (60 * 60 * 24 * 30);
  if (interval > 1) {
    return Math.floor(interval) + "달 전";
  }
  interval = seconds / (60 * 60 * 24);
  if (interval > 1) {
    return Math.floor(interval) + "일 전";
  }
  interval = seconds / (60 * 60);
  if (interval > 1) {
    return Math.floor(interval) + "시간 전";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + "분 전";
  }
  return "방금 전";
};
