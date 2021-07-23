import BaseApiService from "./BaseApiService.js";

class ProductApiService extends BaseApiService {
  addProduct(formData) {
    return this.post("", formData, { contentType: "formData" });
  }
  getProducts(locationId, categoryId) {
    const params = {};
    if (locationId) {
      params.locationId = locationId;
    }
    if (categoryId) {
      params.categoryId = categoryId;
    }
    const qureyString = this.qureyString(params);

    return this.get(qureyString ? "?" + qureyString : "", {});
  }

  count = 0;
  getProduct(id) {
    this.count += 1;
    console.log(this.count, "#");
    return this.get(id, {});
  }
}

export default new ProductApiService("products");
