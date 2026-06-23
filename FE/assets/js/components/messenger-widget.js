/* ============================================================
   MESSENGER-WIDGET — Nút nổi góc phải để chat Messenger trực tiếp
   với Admin (link tĩnh m.me/..., KHÔNG gọi API nào cả)
   ============================================================ */
window.Asia = window.Asia || {};

Asia.MessengerWidget = {
  init() {
    const wrap = Asia.MessengerWidget._ensureWrap();
    const cfg = Asia.AppStore.getSettings();

    const btn = document.createElement("a");
    btn.href = cfg.MESSENGER_LINK;
    btn.target = "_blank";
    btn.rel = "noopener";
    btn.className = "float-btn messenger";
    btn.setAttribute("aria-label", "Chat Messenger");
    btn.textContent = "M";
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

document.addEventListener("DOMContentLoaded", Asia.MessengerWidget.init);