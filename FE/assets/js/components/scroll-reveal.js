/* ============================================================
   SCROLL-REVEAL — Làm cho các phần tử có class "reveal" tự HIỆN
   DẦN LÊN. CSS đã có sẵn style (mờ + lệch xuống), file này thêm
   class "is-visible" đúng lúc cần (khi cuộn tới, hoặc ngay từ đầu
   nếu phần tử đó đã nằm trong khung hình lúc tải trang — ví dụ
   chữ trong Hero ở đầu trang).
   ============================================================ */
window.Asia = window.Asia || {};

Asia.ScrollReveal = {
  init() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    // Trình duyệt quá cũ không hỗ trợ IntersectionObserver → hiện luôn
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach((el) => observer.observe(el));
  }
};

document.addEventListener("DOMContentLoaded", Asia.ScrollReveal.init);