import ProductApiService from "../api/ProductApiService.js";

export const addProductRequest = (
  title,
  content,
  userId = 1,
  locationId = 1,
  categories,
  images
) => {
  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("userId", userId);
    formData.append("locationId", locationId);
    formData.append("category", categories);
    for (const category of categories) {
      formData.append("categories", category);
    }
    for (const image of images) {
      formData.append("images", image);
    }
    return ProductApiService.addPost(formData).then((result) => result.json());
  } catch (e) {
    throw e;
  }
};
