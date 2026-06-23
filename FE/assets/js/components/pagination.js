/* PAGINATION */
window.Asia = window.Asia || {};
Asia.Pagination = {
  render(container, currentPage, totalPages) {
    if (!container) return;
    if (totalPages <= 1) {
      container.innerHTML = '';
      return;
    }
    const buttons = [];
    for (let i = 1; i <= totalPages; i += 1) {
      buttons.push(`<button class="page-btn${i === currentPage ? ' is-active' : ''}" data-page="${i}">${i}</button>`);
    }
    container.innerHTML = `<div class="pagination">${buttons.join('')}</div>`;
    container.querySelectorAll('.page-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        container.dispatchEvent(new CustomEvent('page:change', { detail: Number(btn.dataset.page) }));
      });
    });
  }
};
