/* MEDIA.API */
window.Asia = window.Asia || {};
Asia.MediaApi = {
  list() {
    return Asia.apiClient.get(`${Asia.Api.BASE}/admin/media`);
  },
  upload(formData) {
    return fetch(`${Asia.Api.BASE}/admin/media`, {
      method: 'POST',
      body: formData,
      credentials: 'include'
    }).then((res) => res.json());
  },
  delete(id) {
    return Asia.apiClient.del(`${Asia.Api.BASE}/admin/media/${id}`);
  }
};
