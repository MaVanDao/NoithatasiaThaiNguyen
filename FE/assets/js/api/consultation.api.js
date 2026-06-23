/* CONSULTATION.API */
window.Asia = window.Asia || {};
Asia.ConsultationApi = {
  create(payload) {
    return Asia.apiClient.post(Asia.Api.CONSULTATIONS, payload);
  },
  list() {
    return Asia.apiClient.get(`${Asia.Api.BASE}/admin/consultations`);
  },
  update(id, payload) {
    return Asia.apiClient.put(`${Asia.Api.BASE}/admin/consultations/${id}`, payload);
  },
  delete(id) {
    return Asia.apiClient.del(`${Asia.Api.BASE}/admin/consultations/${id}`);
  }
};
