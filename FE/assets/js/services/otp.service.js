/* OTP.SERVICE */
window.Asia = window.Asia || {};
Asia.OtpService = {
  send(phone) {
    return Asia.AuthApi.sendOtp(phone);
  },
  verify(code) {
    return Asia.AuthApi.verifyOtp(code);
  }
};
