/* ============================================================
   WISHLIST.STORE — Danh sách ID sản phẩm yêu thích, lưu tạm ở máy
   để icon ♥ tô đỏ ngay khi bấm, không phải chờ gọi API xong mới
   đổi màu. Khi đăng nhập, có thể đồng bộ lại với Backend sau.
   ============================================================ */
window.Asia = window.Asia || {};

Asia.WishlistStore = {
  getAll() {
    return Asia.Storage.get("wishlist_ids") || [];
  },
  has(productId) {
    return Asia.WishlistStore.getAll().includes(productId);
  },
  toggle(productId) {
    let list = Asia.WishlistStore.getAll();
    const isIn = list.includes(productId);
    list = isIn ? list.filter((id) => id !== productId) : list.concat([productId]);
    Asia.Storage.set("wishlist_ids", list);
    document.dispatchEvent(new CustomEvent("wishlist:changed"));
    return !isIn; // trả về true nếu vừa THÊM vào, false nếu vừa BỎ ra
  },
  count() {
    return Asia.WishlistStore.getAll().length;
  }
};