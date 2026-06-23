/* SEO.API */
window.Asia = window.Asia || {};
Asia.SeoApi = {
  getSettings() {
    return Asia.apiClient.get(Asia.Api.SETTINGS_PUBLIC);
  },
  updateSettings(payload) {
    return Asia.apiClient.put(Asia.Api.ADMIN.SETTINGS, payload);
  }
};
