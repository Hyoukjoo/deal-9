import BaseApiService from "./BaseApiService.js";

class ProductApiService extends BaseApiService {
  addPost(formData) {
    return this.post("", formData, {});
  }
}

export default new ProductApiService("products");
