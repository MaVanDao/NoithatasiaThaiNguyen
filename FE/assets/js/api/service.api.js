/* SERVICE.API */
window.Asia = window.Asia || {};
Asia.ServiceApi = {
  list(params) {
    const query = params ? '?' + new URLSearchParams(params).toString() : '';
    return Asia.apiClient.get(Asia.Api.SERVICES + query);
  },
  detail(slug) {
    return Asia.apiClient.get(Asia.Api.serviceDetail(slug));
  },
  create(payload) {
    return Asia.apiClient.post(Asia.Api.SERVICES, payload);
  },
  update(id, payload) {
    return Asia.apiClient.put(`${Asia.Api.SERVICES}/${id}`, payload);
  },
  delete(id) {
    return Asia.apiClient.del(`${Asia.Api.SERVICES}/${id}`);
  }
};
