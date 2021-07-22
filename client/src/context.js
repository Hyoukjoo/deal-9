let context = {
  selectedCategory: null,
  selectedLocation: 1,
  // TODO: API로 빼기
  categoryList: [
    {
      id: 1,
      name: "디지털기기",
      src: "https://deal-9.s3.ap-northeast-2.amazonaws.com/categories/digital.svg",
    },
    {
      id: 2,
      name: "생활가전",
      src: "https://deal-9.s3.ap-northeast-2.amazonaws.com/categories/life.svg",
    },
    {
      id: 3,
      name: "가구/인테리어",
      src: "https://deal-9.s3.ap-northeast-2.amazonaws.com/categories/furniture.svg",
    },
    {
      id: 4,
      name: "게임/취미",
      src: "https://deal-9.s3.ap-northeast-2.amazonaws.com/categories/game.svg",
    },
    {
      id: 5,
      name: "생활/가공식품",
      src: "https://deal-9.s3.ap-northeast-2.amazonaws.com/categories/food.svg",
    },
    {
      id: 6,
      name: "스포츠/레저",
      src: "https://deal-9.s3.ap-northeast-2.amazonaws.com/categories/sport.svg",
    },
    {
      id: 7,
      name: "여성패션/잡화",
      src: "https://deal-9.s3.ap-northeast-2.amazonaws.com/categories/skirt.svg",
    },
    {
      id: 8,
      name: "남성패션/잡화",
      src: "https://deal-9.s3.ap-northeast-2.amazonaws.com/categories/clothe.svg",
    },
    {
      id: 9,
      name: "유아동",
      src: "https://deal-9.s3.ap-northeast-2.amazonaws.com/categories/kids.svg",
    },
    {
      id: 10,
      name: "뷰티/미용",
      src: "https://deal-9.s3.ap-northeast-2.amazonaws.com/categories/veauti.svg",
    },
    {
      id: 11,
      name: "반려동물",
      src: "https://deal-9.s3.ap-northeast-2.amazonaws.com/categories/pet.svg",
    },
    {
      id: 12,
      name: "도서/티켓/음반",
      src: "https://deal-9.s3.ap-northeast-2.amazonaws.com/categories/book.svg",
    },
    {
      id: 13,
      name: "식물",
      src: "https://deal-9.s3.ap-northeast-2.amazonaws.com/categories/plant.svg",
    },
    {
      id: 14,
      name: "기타 중고 물품",
      src: "https://deal-9.s3.ap-northeast-2.amazonaws.com/categories/etc.svg",
    },
  ],
};

export const getContext = () => context;
export const setContext = (newContext) => {
  context = {
    ...context,
    ...newContext,
  };
};
