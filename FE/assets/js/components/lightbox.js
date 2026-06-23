/* LIGHTBOX */
window.Asia = window.Asia || {};
Asia.Lightbox = {
  open(src, alt) {
    let overlay = document.querySelector('.lightbox-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'lightbox-overlay';
      overlay.innerHTML = `
        <div class="lightbox-content">
          <button class="lightbox-close" type="button">×</button>
          <img class="lightbox-image" alt="${alt}">
          <p class="lightbox-caption"></p>
        </div>
      `;
      document.body.appendChild(overlay);
      overlay.querySelector('.lightbox-close').addEventListener('click', () => Asia.Lightbox.close());
      overlay.addEventListener('click', (event) => {
        if (event.target === overlay) Asia.Lightbox.close();
      });
    }
    overlay.querySelector('.lightbox-image').src = src;
    overlay.querySelector('.lightbox-image').alt = alt;
    overlay.querySelector('.lightbox-caption').textContent = alt;
    overlay.classList.add('is-open');
  },
  close() {
    const overlay = document.querySelector('.lightbox-overlay');
    if (overlay) overlay.classList.remove('is-open');
  }
};
