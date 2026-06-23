/* PRODUCT-CATEGORY.API */
window.Asia = window.Asia || {};
Asia.ProductCategoryApi = {
  list() {
    return Asia.apiClient.get(Asia.Api.PRODUCT_CATEGORIES);
  },
  create(payload) {
    return Asia.apiClient.post(Asia.Api.PRODUCT_CATEGORIES, payload);
  },
  update(id, payload) {
    return Asia.apiClient.put(`${Asia.Api.PRODUCT_CATEGORIES}/${id}`, payload);
  },
  delete(id) {
    return Asia.apiClient.del(`${Asia.Api.PRODUCT_CATEGORIES}/${id}`);
  }
};
