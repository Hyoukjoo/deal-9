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
