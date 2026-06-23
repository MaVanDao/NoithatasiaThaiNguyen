/* AUTH.SERVICE */
window.Asia = window.Asia || {};
Asia.AuthService = {
  login(credentials) {
    return Asia.AuthApi.login(credentials).then((data) => {
      if (data && data.access_token) {
        Asia.AuthStore.setToken(data.access_token, data.role);
      }
      return data;
    });
  },
  register(payload) {
    return Asia.AuthApi.register(payload);
  },
  sendOtp(phone) {
    return Asia.AuthApi.sendOtp(phone);
  },
  verifyOtp(code) {
    return Asia.AuthApi.verifyOtp(code);
  },
  forgotPassword(phone) {
    return Asia.AuthApi.forgotPassword(phone);
  },
  resetPassword(payload) {
    return Asia.AuthApi.resetPassword(payload);
  },
  logout() {
    Asia.AuthStore.clearToken();
  }
};
