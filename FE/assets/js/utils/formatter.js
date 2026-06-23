/* ============================================================
   FORMATTER — Định dạng số tiền, ngày giờ cho đẹp khi hiển thị
   ============================================================ */
window.Asia = window.Asia || {};

Asia.Formatter = {
  // 2500000 → "2.500.000đ"
  currency(number) {
    const n = Number(number) || 0;
    return n.toLocaleString("vi-VN") + "đ";
  },
  // "2026-06-20T10:00:00" → "20/06/2026"
  date(isoString) {
    if (!isoString) return "";
    const d = new Date(isoString);
    const pad = (x) => String(x).padStart(2, "0");
    return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
  }
};