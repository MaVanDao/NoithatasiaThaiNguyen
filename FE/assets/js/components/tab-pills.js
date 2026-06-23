/* TAB-PILLS */
window.Asia = window.Asia || {};
Asia.TabPills = {
  init() {
    Asia.Helpers.qsa('.tab-pills').forEach((wrapper) => {
      wrapper.querySelectorAll('[data-tab-target]').forEach((button) => {
        button.addEventListener('click', () => {
          wrapper.querySelectorAll('[data-tab-target]').forEach((btn) => btn.classList.remove('is-active'));
          wrapper.querySelectorAll('[data-tab-panel]').forEach((panel) => panel.classList.add('hidden'));
          button.classList.add('is-active');
          const target = document.querySelector(button.dataset.tabTarget);
          if (target) target.classList.remove('hidden');
        });
      });
    });
  }
};
document.addEventListener('DOMContentLoaded', Asia.TabPills.init);
