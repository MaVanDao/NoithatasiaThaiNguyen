window.Asia = window.Asia || {};
Asia.RegisterPage = {
  init() {
    const form = document.getElementById('register-form');
    if (!form) return;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const payload = {
        name: form.name?.value.trim(),
        phone: form.phone?.value.trim(),
        password: form.password?.value
      };
      if (!payload.name || !Asia.Validator.isPhone(payload.phone) || !payload.password) {
        Asia.Toast.error('Vui lòng điền đầy đủ thông tin');
        return;
      }
      Asia.AuthService.register(payload)
        .then(() => {
          Asia.Toast.success('Đăng ký thành công');
          window.location.href = Asia.Routes.AUTH.LOGIN;
        })
        .catch(() => Asia.Toast.error('Đăng ký thất bại'));
    });
  }
};
document.addEventListener('DOMContentLoaded', Asia.RegisterPage.init);
