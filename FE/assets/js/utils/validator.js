/* ============================================================
   VALIDATOR — Kiểm tra dữ liệu người dùng nhập vào form trước
   khi gửi lên Backend, để báo lỗi ngay tại chỗ, không cần chờ
   server trả lời mới biết sai
   ============================================================ */
window.Asia = window.Asia || {};

Asia.Validator = {
  isRequired(value) {
    return value !== undefined && value !== null && String(value).trim().length > 0;
  },
  minLength(value, n) {
    return String(value || "").trim().length >= n;
  },
  isEmail(value) {
    if (!value) return true; // email thường là optional, để trống vẫn hợp lệ
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  },
  isPhone(value) {
    return Asia.Phone.isValid(value);
  }
};