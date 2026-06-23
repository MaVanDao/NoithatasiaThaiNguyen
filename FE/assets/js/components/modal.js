/* MODAL */
window.Asia = window.Asia || {};
Asia.Modal = {
  open(selector) {
    const modal = document.querySelector(selector);
    if (!modal) return;
    modal.classList.add('is-open');
    document.body.classList.add('modal-open');
  },
  close(selector) {
    const modal = document.querySelector(selector);
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
  },
  init() {
    Asia.Helpers.qsa('[data-modal-open]').forEach((button) => {
      button.addEventListener('click', () => {
        const target = button.dataset.modalOpen;
        this.open(target);
      });
    });
    Asia.Helpers.qsa('[data-modal-close]').forEach((button) => {
      button.addEventListener('click', () => {
        const target = button.dataset.modalClose;
        this.close(target);
      });
    });
  }
};
document.addEventListener('DOMContentLoaded', () => Asia.Modal.init());
