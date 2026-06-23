/* ============================================================
   AUTH.STORE — Chỉ lo việc "đang đăng nhập hay chưa", lưu/đọc
   token. KHÔNG gọi API ở đây (việc gọi API đăng nhập/đăng ký để
   dành cho services/auth.service.js làm khi build trang đăng nhập).
   Mỗi khi trạng thái đăng nhập đổi, bắn ra 1 sự kiện "auth:changed"
   để navbar.js và các nơi khác tự cập nhật lại icon tài khoản.
   ============================================================ */
window.Asia = window.Asia || {};

Asia.AuthStore = {
  getToken() {
    return Asia.Storage.get("access_token");
  },
  setToken(token, role) {
    Asia.Storage.set("access_token", token);
    if (role) Asia.Storage.set("role", role);
    document.dispatchEvent(new CustomEvent("auth:changed"));
  },
  clearToken() {
    Asia.Storage.remove("access_token");
    Asia.Storage.remove("role");
    Asia.UserStore.clear();
    document.dispatchEvent(new CustomEvent("auth:changed"));
  },
  isLoggedIn() {
    return !!Asia.AuthStore.getToken();
  },
  isAdmin() {
    return Asia.Storage.get("role") === Asia.Roles.ADMIN;
  }
};