window.Asia = window.Asia || {};
Asia.VerifyOtpPage = {
  init() {
    const form = document.querySelector('.auth-card form');
    if (!form) return;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const code = Array.from(form.querySelectorAll('input')).map((input) => input.value).join('');
      if (code.length !== 6) {
        Asia.Toast.error('Vui lòng nhập đủ 6 chữ số');
        return;
      }
      Asia.OtpService.verify(code)
        .then(() => {
          Asia.Toast.success('Xác thực thành công');
          window.location.href = Asia.Routes.AUTH.RESET_PASSWORD;
        })
        .catch(() => Asia.Toast.error('Mã OTP không đúng'));
    });
  }
};
document.addEventListener('DOMContentLoaded', Asia.VerifyOtpPage.init);
