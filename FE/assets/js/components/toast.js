/* ============================================================
   TOAST — Hiện thông báo nhỏ góc phải màn hình (thành công/lỗi),
   tự biến mất sau vài giây. Dùng ở mọi nơi: Asia.Toast.success("..."),
   Asia.Toast.error("...")
   ============================================================ */
window.Asia = window.Asia || {};

Asia.Toast = {
  _ensureWrap() {
    let wrap = document.querySelector(".toast-wrap");
    if (!wrap) {
      wrap = document.createElement("div");
      wrap.className = "toast-wrap";
      document.body.appendChild(wrap);
    }
    return wrap;
  },
  show(message, type) {
    const wrap = Asia.Toast._ensureWrap();
    const el = document.createElement("div");
    el.className = "toast toast-" + (type || "success");
    el.textContent = message;
    wrap.appendChild(el);

    // Đợi 1 nhịp để hiệu ứng trượt vào chạy được (mới thêm vào DOM)
    requestAnimationFrame(() => el.classList.add("is-visible"));

    setTimeout(() => {
      el.classList.remove("is-visible");
      setTimeout(() => el.remove(), 300);
    }, 3200);
  },
  success(message) { Asia.Toast.show(message, "success"); },
  error(message) { Asia.Toast.show(message, "error"); }
};