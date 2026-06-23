/* SEO.SERVICE */
window.Asia = window.Asia || {};
Asia.SeoService = {
  loadSettings() {
    return Asia.SeoApi.getSettings();
  },
  saveSettings(payload) {
    return Asia.SeoApi.updateSettings(payload);
  }
};
