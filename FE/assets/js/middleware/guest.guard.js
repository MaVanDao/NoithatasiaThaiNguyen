/* GUEST.GUARD */
window.Asia = window.Asia || {};
Asia.GuestGuard = {
  ensure() {
    if (Asia.AuthStore.isLoggedIn()) {
      window.location.href = Asia.Routes.HOME;
    }
  }
};
