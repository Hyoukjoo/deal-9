export const createImgAtom = ({ src, width, height }) => {
  const $img = document.createElement("img");
  $img.src = src;
  $img.width = width;
  $img.height = height;
};
