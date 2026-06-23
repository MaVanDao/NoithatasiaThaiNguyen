/* ============================================================
   PHONE — Kiểm tra và định dạng số điện thoại Việt Nam
   ============================================================ */
window.Asia = window.Asia || {};

Asia.Phone = {
  // Đúng định dạng: bắt đầu bằng 0, theo sau 9 số (VD: 0912345678)
  isValid(phone) {
    return /^0[0-9]{9}$/.test(String(phone || "").trim());
  },
  // Hiện đẹp hơn khi xem: 0912 345 678
  format(phone) {
    const p = String(phone || "").replace(/\s/g, "");
    if (!Asia.Phone.isValid(p)) return phone;
    return p.slice(0, 4) + " " + p.slice(4, 7) + " " + p.slice(7);
  },
  toTelLink(phone) {
    return "tel:" + String(phone || "").replace(/\s/g, "");
  }
};