/* ============================================================
   APP.STORE — Lưu thông tin chung của site (Hotline, link Zalo,
   link Messenger...). Mặc định lấy từ Asia.Config (constants), nếu
   Backend đã có trang /admin/settings thì Admin đổi số ở đó, trang
   chủ gọi API 1 lần lúc tải trang rồi ghi đè lại bằng setSettings().
   Nhờ vậy đổi Hotline/Zalo không cần sửa code.
   ============================================================ */
window.Asia = window.Asia || {};

Asia.AppStore = {
  getSettings() {
    const saved = Asia.Storage.get("site_settings");
    // Chưa có gì lưu thì dùng giá trị mặc định trong constants/app-config.js
    return Object.assign({}, Asia.Config, saved || {});
  },
  setSettings(settings) {
    Asia.Storage.set("site_settings", settings);
    document.dispatchEvent(new CustomEvent("settings:changed"));
  }
};