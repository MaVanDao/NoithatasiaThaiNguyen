/* GALLERY */
window.Asia = window.Asia || {};
Asia.Gallery = {
  init() {
    Asia.Helpers.qsa('.gallery-item img').forEach((img) => {
      img.addEventListener('click', () => {
        Asia.Lightbox.open(img.src, img.alt || 'Ảnh');
      });
    });
  }
};
document.addEventListener('DOMContentLoaded', Asia.Gallery.init);
