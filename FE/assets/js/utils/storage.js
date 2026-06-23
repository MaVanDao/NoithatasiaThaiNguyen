/* ============================================================
   STORAGE — Lưu/đọc dữ liệu trong trình duyệt (localStorage),
   tự chuyển đổi qua lại dạng chữ JSON, không cần làm tay mỗi lần
   ============================================================ */
window.Asia = window.Asia || {};

Asia.Storage = {
  get(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  },
  remove(key) {
    localStorage.removeItem(key);
  }
};