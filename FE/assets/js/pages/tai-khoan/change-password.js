window.Asia = window.Asia || {};
Asia.ChangePasswordPage = {
  init() {
    const form = document.getElementById('change-password-form');
    if (!form) return;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const currentPassword = form.current_password?.value;
      const newPassword = form.new_password?.value;
      const confirmPassword = form.confirm_password?.value;
      if (!currentPassword || !newPassword || newPassword !== confirmPassword) {
        Asia.Toast.error('Vui lòng kiểm tra lại mật khẩu');
        return;
      }
      Asia.UserApi.changePassword({ current_password: currentPassword, new_password: newPassword })
        .then(() => Asia.Toast.success('Đổi mật khẩu thành công'))
        .catch(() => Asia.Toast.error('Đổi mật khẩu thất bại'));
    });
  }
};
document.addEventListener('DOMContentLoaded', Asia.ChangePasswordPage.init);
