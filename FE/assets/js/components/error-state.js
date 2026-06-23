/* ERROR-STATE */
window.Asia = window.Asia || {};
Asia.ErrorState = {
  html(title, message) {
    return `
      <div class="error-state">
        <div class="state-icon">⚠️</div>
        <h3 class="state-title">${title}</h3>
        <p class="state-text">${message}</p>
      </div>
    `;
  }
};
