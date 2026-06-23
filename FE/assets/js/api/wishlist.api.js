/* WISHLIST.API */
window.Asia = window.Asia || {};
Asia.WishlistApi = {
  toggle(productId) {
    return Asia.apiClient.post(Asia.Api.wishlistToggle(productId));
  },
  list() {
    return Asia.apiClient.get(Asia.Api.WISHLIST);
  }
};
