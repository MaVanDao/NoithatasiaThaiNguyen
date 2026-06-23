/* ============================================================
   USER.STORE — Lưu tạm thông tin cá nhân khách hàng (họ tên, SĐT...)
   để navbar/trang hồ sơ hiện ra ngay, không phải gọi API mỗi lần
   chuyển trang. Khi nào có dữ liệu mới từ Backend, gọi setUser() để
   cập nhật lại.
   ============================================================ */
window.Asia = window.Asia || {};

Asia.UserStore = {
  getUser() {
    return Asia.Storage.get("current_user");
  },
  setUser(user) {
    Asia.Storage.set("current_user", user);
    document.dispatchEvent(new CustomEvent("user:changed"));
  },
  clear() {
    Asia.Storage.remove("current_user");
    document.dispatchEvent(new CustomEvent("user:changed"));
  }
};