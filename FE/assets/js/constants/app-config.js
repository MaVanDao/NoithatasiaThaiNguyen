/* ============================================================
   APP-CONFIG — Thông tin chung của website (giá trị mặc định)
   Khi có Backend, trang chủ sẽ gọi /api/v1/admin/settings để LẤY GIÁ
   TRỊ MỚI NHẤT do Admin cập nhật, rồi ghi đè lên các giá trị mặc định
   này. Trước khi có Backend, các trang cứ dùng giá trị mặc định ở đây.
   ============================================================ */
window.Asia = window.Asia || {};

Asia.Config = {
  SITE_NAME: "Nội Thất Asia Thái Nguyên",
  SLOGAN: "Trung thực · Tiên phong · Trách nhiệm",

  HOTLINE: "0900000000",
  ZALO_LINK: "https://zalo.me/0900000000",
  MESSENGER_LINK: "https://m.me/asianoithatthainguyen",

  EMAIL: "noithatasia@gmail.com",
  ADDRESS: "Thành phố Thái Nguyên, Tỉnh Thái Nguyên",

  // Sau bao nhiêu giây không tương tác thì nhấp nhô gợi ý widget Zalo/Messenger
  WIDGET_BOUNCE_DELAY_MS: 10000
};