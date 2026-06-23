/* CONTACT.PAGE */
window.Asia = window.Asia || {};
Asia.ContactPage = {
  init() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const payload = {
        full_name: form.full_name?.value.trim(),
        phone: form.phone?.value.trim(),
        email: form.email?.value.trim(),
        message: form.message?.value.trim()
      };
      if (!payload.full_name || !Asia.Validator.isPhone(payload.phone)) {
        Asia.Toast.error('Vui lòng nhập họ tên và số điện thoại hợp lệ');
        return;
      }
      Asia.ContactApi.submit(payload)
        .then(() => Asia.Toast.success('Liên hệ đã được gửi'))
        .catch(() => Asia.Toast.error('Gửi không thành công'));
    });
  }
};
document.addEventListener('DOMContentLoaded', Asia.ContactPage.init);
