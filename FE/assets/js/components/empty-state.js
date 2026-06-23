/* EMPTY-STATE */
window.Asia = window.Asia || {};
Asia.EmptyState = {
  html(title, message) {
    return `
      <div class="empty-state">
        <div class="state-icon">📭</div>
        <h3 class="state-title">${title}</h3>
        <p class="state-text">${message}</p>
      </div>
    `;
  }
};
