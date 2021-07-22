import ProductApiService from "../api/ProductApiService.js";

export const addProductRequest = (
  title,
  content,
  price,
  userId = 1,
  locationId = 1,
  categories,
  images
) => {
  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("price", price);
    formData.append("userId", userId);
    formData.append("locationId", locationId);
    formData.append("category", categories);
    for (const category of categories) {
      formData.append("categories", category);
    }
    for (const image of images) {
      formData.append("images", image);
    }
    return ProductApiService.addProduct(formData).then((result) => {
      if (result.ok) {
        return true;
      }
    });
  } catch (e) {
    throw e;
  }
};

export const getProductsRequest = (locationId, categoryId) => {
  try {
    return ProductApiService.getProducts(locationId, categoryId).then(
      (result) => {
        if (result.ok) {
          return result.json();
        }
      }
    );
  } catch (e) {
    throw e;
  }
};

export const getProductRequest = (id) => {
  try {
    return ProductApiService.getProduct(id).then((result) => {
      if (result.ok) {
        return result.json();
      }
    });
  } catch (e) {
    throw e;
  }
};
