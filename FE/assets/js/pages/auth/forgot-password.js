window.Asia = window.Asia || {};
Asia.ForgotPasswordPage = {
  init() {
    const form = document.getElementById('forgot-form');
    if (!form) return;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const phone = form.phone?.value.trim();
      if (!Asia.Validator.isPhone(phone)) {
        Asia.Toast.error('Số điện thoại không hợp lệ');
        return;
      }
      Asia.OtpService.send(phone)
        .then(() => Asia.Toast.success('Mã OTP đã được gửi'))
        .catch(() => Asia.Toast.error('Gửi mã thất bại'));
    });
  }
};
document.addEventListener('DOMContentLoaded', Asia.ForgotPasswordPage.init);
