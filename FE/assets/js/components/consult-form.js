/* CONSULT-FORM */
window.Asia = window.Asia || {};
Asia.ConsultForm = {
  init() {
    Asia.Helpers.qsa('.consult-form').forEach((form) => {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const payload = {
          full_name: form.full_name?.value.trim(),
          phone: form.phone?.value.trim(),
          note: form.note?.value.trim()
        };
        if (!payload.full_name || !Asia.Validator.isPhone(payload.phone)) {
          Asia.Toast.error('Vui lòng nhập họ tên và số điện thoại hợp lệ');
          return;
        }
        Asia.ConsultationApi.create(payload)
          .then(() => Asia.Toast.success('Yêu cầu tư vấn đã được gửi'))
          .catch(() => Asia.Toast.error('Không gửi được, thử lại sau'));
      });
    });
  }
};
document.addEventListener('DOMContentLoaded', Asia.ConsultForm.init);
