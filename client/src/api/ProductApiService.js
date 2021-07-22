import BaseApiService from "./BaseApiService.js";

class ProductApiService extends BaseApiService {
  addPost(formData) {
    return this.post("", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export default new ProductApiService("products");
