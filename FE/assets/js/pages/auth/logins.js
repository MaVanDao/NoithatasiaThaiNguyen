window.Asia = window.Asia || {};
Asia.LoginPage = {
  init() {
    const form = document.getElementById('login-form');
    if (!form) return;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const credentials = {
        phone: form.phone?.value.trim(),
        password: form.password?.value
      };
      if (!Asia.Validator.isPhone(credentials.phone) || !credentials.password) {
        Asia.Toast.error('Số điện thoại hoặc mật khẩu không đúng');
        return;
      }
      Asia.AuthService.login(credentials)
        .then(() => {
          Asia.Toast.success('Đăng nhập thành công');
          window.location.href = Asia.Routes.HOME;
        })
        .catch(() => Asia.Toast.error('Đăng nhập thất bại'));
    });
  }
};
document.addEventListener('DOMContentLoaded', Asia.LoginPage.init);
