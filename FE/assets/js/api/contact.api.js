/* CONTACT.API */
window.Asia = window.Asia || {};
Asia.ContactApi = {
  submit(payload) {
    return Asia.apiClient.post(Asia.Api.CONTACTS, payload);
  },
  list() {
    return Asia.apiClient.get(`${Asia.Api.BASE}/admin/contacts`);
  }
};
