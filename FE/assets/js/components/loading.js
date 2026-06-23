/* LOADING */
window.Asia = window.Asia || {};
Asia.Loading = {
  show() {
    let overlay = document.querySelector('.loading-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'loading-overlay';
      overlay.innerHTML = '<div class="loading-spinner"></div>';
      document.body.appendChild(overlay);
    }
    overlay.classList.add('is-active');
  },
  hide() {
    const overlay = document.querySelector('.loading-overlay');
    if (overlay) overlay.classList.remove('is-active');
  }
};
