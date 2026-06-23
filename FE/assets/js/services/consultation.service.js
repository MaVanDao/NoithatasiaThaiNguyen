/* CONSULTATION.SERVICE */
window.Asia = window.Asia || {};
Asia.ConsultationService = {
  submit(payload) {
    return Asia.ConsultationApi.create(payload);
  },
  list() {
    return Asia.ConsultationApi.list();
  }
};
