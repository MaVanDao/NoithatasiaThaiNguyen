/* ============================================================
   ROLES — 2 vai trò trong hệ thống, dùng để kiểm tra quyền ở
   Frontend trước khi gọi API (Backend vẫn sẽ kiểm tra lại lần nữa)
   ============================================================ */
window.Asia = window.Asia || {};

Asia.Roles = {
  CUSTOMER: "customer",
  ADMIN: "admin"
};