import "./style.scss";
import { createTextAtom } from "@atoms";
import { createCategoryButtonMolecule } from "@molecules";

const createCategoryListOrganism = ({ categoryList }) => {
  const $createCategoryList = document.createElement("div");
  const $text = createTextAtom({
    type: "span",
    size: "small",
    text: "(필수)카테고리를 선택해주세요.",
  });
  const $ul = document.createElement("ul");
  categoryList.forEach((category) => {
    const $li = document.createElement("li");
    const $category = createCategoryButtonMolecule({
      onClick: () => {},
      label: category.name,
    });
    $ul.append($li);
    $li.append($category);
  });

  $createCategoryList.append($text, $ul);
  $createCategoryList.classList.add("category-list");

  return $createCategoryList;
};

export default createCategoryListOrganism;
