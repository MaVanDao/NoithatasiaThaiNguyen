/* AUTH.GUARD */
window.Asia = window.Asia || {};
Asia.AuthGuard = {
  ensure() {
    if (!Asia.AuthStore.isLoggedIn()) {
      window.location.href = Asia.Routes.AUTH.LOGIN;
    }
  }
};
