/* USER.API */
window.Asia = window.Asia || {};
Asia.UserApi = {
  me() {
    return Asia.apiClient.get(Asia.Api.USER_ME);
  },
  updateProfile(payload) {
    return Asia.apiClient.put(Asia.Api.USER_ME, payload);
  },
  changePassword(payload) {
    return Asia.apiClient.put(Asia.Api.USER_ME_PASSWORD, payload);
  },
  list() {
    return Asia.apiClient.get(`${Asia.Api.BASE}/admin/users`);
  },
  delete(id) {
    return Asia.apiClient.del(`${Asia.Api.BASE}/admin/users/${id}`);
  }
};
