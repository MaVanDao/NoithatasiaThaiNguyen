/* ============================================================
   MOBILE-MENU — Mở/đóng khung menu trượt (drawer) từ bên phải,
   cùng lúc với lớp nền mờ đen phía sau. Markup do navbar.js tạo
   sẵn, file này chỉ thêm hành vi:
     - Bấm nút X → đóng
     - Bấm vào 1 link trong menu → tự đóng
     - Bấm vào lớp nền mờ (ngoài khung menu) → tự đóng
   ============================================================ */
window.Asia = window.Asia || {};

Asia.MobileMenu = {
  open() {
    const menu = document.querySelector("[data-mobile-menu]");
    const backdrop = document.querySelector("[data-mobile-backdrop]");
    if (menu) menu.classList.add("is-open");
    if (backdrop) backdrop.classList.add("is-open");
    document.body.classList.add("menu-open");
  },
  close() {
    const menu = document.querySelector("[data-mobile-menu]");
    const backdrop = document.querySelector("[data-mobile-backdrop]");
    if (menu) menu.classList.remove("is-open");
    if (backdrop) backdrop.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  },
  init() {
    // Dùng "event delegation": lắng nghe click trên cả trang, để dù
    // menu/nền mờ được navbar.js tạo ra SAU thời điểm này, vẫn bắt được click
    document.addEventListener("click", (e) => {
      if (e.target.closest("[data-menu-close]")) {
        Asia.MobileMenu.close();
        return;
      }
      if (e.target.closest("[data-mobile-backdrop]")) {
        Asia.MobileMenu.close();
        return;
      }
      if (e.target.closest(".mobile-menu-item") || e.target.closest(".mobile-menu-cta")) {
        Asia.MobileMenu.close();
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", Asia.MobileMenu.init);