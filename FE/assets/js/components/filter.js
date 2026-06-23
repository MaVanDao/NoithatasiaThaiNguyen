/* FILTER */
window.Asia = window.Asia || {};
Asia.Filter = {
  init() {
    Asia.Helpers.qsa('[data-filter-toggle]').forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const panel = document.querySelector(toggle.dataset.filterToggle);
        if (panel) panel.classList.toggle('is-open');
      });
    });
  }
};
document.addEventListener('DOMContentLoaded', Asia.Filter.init);
