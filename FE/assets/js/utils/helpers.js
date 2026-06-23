/* ============================================================
   HELPERS — Mấy hàm lặt vặt dùng hoài, viết 1 lần cho gọn
   ============================================================ */
window.Asia = window.Asia || {};

Asia.Helpers = {
  // Tìm 1 phần tử HTML, viết tắt cho document.querySelector
  qs(selector, parent) {
    return (parent || document).querySelector(selector);
  },
  // Tìm nhiều phần tử HTML, trả về mảng để dùng forEach/map
  qsa(selector, parent) {
    return Array.prototype.slice.call((parent || document).querySelectorAll(selector));
  },
  // Lấy giá trị trên URL, VD trang.html?slug=sofa-goc-l → getQueryParam("slug") = "sofa-goc-l"
  getQueryParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  },
  // Tránh lỗi hiển thị khi chèn chữ người dùng nhập vào HTML
  escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str || "";
    return div.innerHTML;
  }
};