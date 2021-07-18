const createImgAtom = ({ src, width, height }) => {
  const $img = document.createElement("img");
  $img.src = src;
  if (width) {
    $img.width = width;
  }
  if (height) {
    $img.height = height;
  }

  return $img;
};

export default createImgAtom;
