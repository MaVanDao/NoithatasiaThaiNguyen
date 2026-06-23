window.Asia = window.Asia || {};
Asia.ResetPasswordPage = {
  init() {
    const form = document.getElementById('reset-form');
    if (!form) return;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const password = form.password?.value;
      const password2 = form.password2?.value;
      if (!password || password !== password2) {
        Asia.Toast.error('Mật khẩu nhập lại không khớp');
        return;
      }
      Asia.AuthService.resetPassword({ password })
        .then(() => {
          Asia.Toast.success('Mật khẩu đã được cập nhật');
          window.location.href = Asia.Routes.AUTH.LOGIN;
        })
        .catch(() => Asia.Toast.error('Cập nhật thất bại'));
    });
  }
};
document.addEventListener('DOMContentLoaded', Asia.ResetPasswordPage.init);
