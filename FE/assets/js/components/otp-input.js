/* OTP-INPUT */
window.Asia = window.Asia || {};
Asia.OtpInput = {
  init() {
    Asia.Helpers.qsa('.otp-input-row').forEach((wrapper) => {
      const inputs = Array.from(wrapper.querySelectorAll('input'));
      inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
          if (input.value.length === 1 && inputs[index + 1]) {
            inputs[index + 1].focus();
          }
        });
        input.addEventListener('keydown', (event) => {
          if (event.key === 'Backspace' && !input.value && inputs[index - 1]) {
            inputs[index - 1].focus();
          }
        });
      });
    });
  }
};
document.addEventListener('DOMContentLoaded', Asia.OtpInput.init);
