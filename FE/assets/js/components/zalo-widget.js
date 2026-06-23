/* ============================================================
   ZALO-WIDGET — Nút nổi góc phải để chat Zalo trực tiếp với Admin
   (link tĩnh zalo.me/..., KHÔNG gọi API nào cả)
   ============================================================ */
window.Asia = window.Asia || {};

Asia.ZaloWidget = {
  init() {
    const wrap = Asia.ZaloWidget._ensureWrap();
    const cfg = Asia.AppStore.getSettings();

    const btn = document.createElement("a");
    btn.href = cfg.ZALO_LINK;
    btn.target = "_blank";
    btn.rel = "noopener";
    btn.className = "float-btn zalo";
    btn.setAttribute("aria-label", "Chat Zalo");
    btn.textContent = "Z";
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

document.addEventListener("DOMContentLoaded", Asia.ZaloWidget.init);