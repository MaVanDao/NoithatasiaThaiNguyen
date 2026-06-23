/* AUTH.API */
window.Asia = window.Asia || {};
Asia.AuthApi = {
  login(credentials) {
    return Asia.apiClient.post(Asia.Api.AUTH.LOGIN, credentials);
  },
  register(payload) {
    return Asia.apiClient.post(Asia.Api.AUTH.REGISTER, payload);
  },
  sendOtp(phone) {
    return Asia.apiClient.post(Asia.Api.AUTH.SEND_OTP, { phone });
  },
  verifyOtp(code) {
    return Asia.apiClient.post(Asia.Api.AUTH.VERIFY_OTP, { code });
  },
  forgotPassword(phone) {
    return Asia.apiClient.post(Asia.Api.AUTH.FORGOT_PASSWORD, { phone });
  },
  resetPassword(payload) {
    return Asia.apiClient.post(Asia.Api.AUTH.RESET_PASSWORD, payload);
  },
  logout() {
    return Asia.apiClient.post(Asia.Api.AUTH.LOGOUT);
  }
};
