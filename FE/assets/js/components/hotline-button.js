/* ============================================================
   HOTLINE-BUTTON — Nút nổi góc phải để gọi điện ngay (link tĩnh
   tel:..., KHÔNG gọi API nào cả)
   ============================================================ */
window.Asia = window.Asia || {};

Asia.HotlineButton = {
  init() {
    const wrap = Asia.HotlineButton._ensureWrap();
    const cfg = Asia.AppStore.getSettings();

    const btn = document.createElement("a");
    btn.href = Asia.Phone.toTelLink(cfg.HOTLINE);
    btn.className = "float-btn hotline";
    btn.setAttribute("aria-label", "Gọi Hotline " + cfg.HOTLINE);
    btn.textContent = "📞";
    wrap.appendChild(btn);

    setTimeout(() => btn.classList.add("bounce"), cfg.WIDGET_BOUNCE_DELAY_MS || 10000);
  },
  _ensureWrap() {
    let wrap = document.querySelector(".float-widgets");
    if (!wrap) {
      wrap = document.createElement("div");
      wrap.className = "float-widgets";
      document.body.appendChild(wrap);
    }
    return wrap;
  }
};

document.addEventListener("DOMContentLoaded", Asia.HotlineButton.init);