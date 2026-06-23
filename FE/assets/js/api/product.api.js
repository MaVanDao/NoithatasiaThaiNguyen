/* PRODUCT.API */
window.Asia = window.Asia || {};
Asia.ProductApi = {
  list(params) {
    const query = params ? '?' + new URLSearchParams(params).toString() : '';
    return Asia.apiClient.get(Asia.Api.PRODUCTS + query);
  },
  detail(slug) {
    return Asia.apiClient.get(Asia.Api.productDetail(slug));
  },
  create(payload) {
    return Asia.apiClient.post(Asia.Api.PRODUCTS, payload);
  },
  update(id, payload) {
    return Asia.apiClient.put(`${Asia.Api.PRODUCTS}/${id}`, payload);
  },
  delete(id) {
    return Asia.apiClient.del(`${Asia.Api.PRODUCTS}/${id}`);
  }
};
