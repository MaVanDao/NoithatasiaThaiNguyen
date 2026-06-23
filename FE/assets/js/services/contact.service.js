/* CONTACT.SERVICE */
window.Asia = window.Asia || {};
Asia.ContactService = {
  send(payload) {
    return Asia.ContactApi.submit(payload);
  }
};
