/* SORT */
window.Asia = window.Asia || {};
Asia.Sort = {
  init() {
    Asia.Helpers.qsa('[data-sort-select]').forEach((select) => {
      select.addEventListener('change', () => {
        select.closest('form')?.dispatchEvent(new Event('submit', { cancelable: true }));
      });
    });
  }
};
document.addEventListener('DOMContentLoaded', Asia.Sort.init);
