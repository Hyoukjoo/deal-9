import ProductApiService from "../api/ProductApiService.js";

export const addProductRequest = ({
  title,
  content,
  userId,
  locationId,
  categories,
  images,
}) => {
  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("userId", userId);
    formData.append("locationId", locationId);
    formData.append("categories", categories);
    for (const imge of images) {
      formData.append("images", imge);
    }
    return ProductApiService.addPost(formData).then((result) => result.json());
  } catch (e) {
    throw e;
  }
};
