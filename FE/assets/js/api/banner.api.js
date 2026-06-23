/* BANNER.API */
window.Asia = window.Asia || {};
Asia.BannerApi = {
  list() {
    return Asia.apiClient.get(`${Asia.Api.BASE}/admin/banners`);
  },
  create(payload) {
    return Asia.apiClient.post(`${Asia.Api.BASE}/admin/banners`, payload);
  },
  update(id, payload) {
    return Asia.apiClient.put(`${Asia.Api.BASE}/admin/banners/${id}`, payload);
  },
  delete(id) {
    return Asia.apiClient.del(`${Asia.Api.BASE}/admin/banners/${id}`);
  }
};
