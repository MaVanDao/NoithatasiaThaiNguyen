/* CAROUSEL */
window.Asia = window.Asia || {};
Asia.Carousel = {
  init() {
    Asia.Helpers.qsa('.carousel').forEach((carousel) => {
      const track = carousel.querySelector('.carousel-track');
      const items = carousel.querySelectorAll('.carousel-item');
      if (!track || items.length < 2) return;
      let index = 0;
      setInterval(() => {
        index = (index + 1) % items.length;
        track.style.transform = `translateX(-${index * 100}%)`;
      }, 4500);
    });
  }
};
document.addEventListener('DOMContentLoaded', Asia.Carousel.init);
