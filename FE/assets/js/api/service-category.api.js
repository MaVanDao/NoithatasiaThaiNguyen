/* SERVICE-CATEGORY.API */
window.Asia = window.Asia || {};
Asia.ServiceCategoryApi = {
  list() {
    return Asia.apiClient.get(Asia.Api.SERVICE_CATEGORIES);
  },
  create(payload) {
    return Asia.apiClient.post(Asia.Api.SERVICE_CATEGORIES, payload);
  },
  update(id, payload) {
    return Asia.apiClient.put(`${Asia.Api.SERVICE_CATEGORIES}/${id}`, payload);
  },
  delete(id) {
    return Asia.apiClient.del(`${Asia.Api.SERVICE_CATEGORIES}/${id}`);
  }
};
