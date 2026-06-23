/* ============================================================
   DEBOUNCE — Trì hoãn 1 hành động cho tới khi người dùng NGỪNG
   gõ/thao tác trong khoảng thời gian nhất định. Dùng cho ô tìm
   kiếm, để không gọi API liên tục mỗi lần gõ 1 chữ
   ============================================================ */
window.Asia = window.Asia || {};

Asia.debounce = function (fn, delay) {
  delay = delay || 300;
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
};