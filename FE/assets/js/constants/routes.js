/* ============================================================
   ROUTES — Toàn bộ đường dẫn trang trong website, viết 1 lần ở
   đây. Khi viết link trong navbar/footer/nút bấm, LUÔN lấy từ
   Asia.Routes.xxx, không gõ tay chuỗi "/san-pham/..." lặp lại
   nhiều nơi (sau này đổi đường dẫn chỉ cần sửa đúng 1 chỗ).

   Toàn bộ trang khách hàng nằm trong thư mục pages/, nên đường
   dẫn bắt đầu bằng "/FE/pages/...". Riêng khu Admin nằm RIÊNG ở
   thư mục admin/ (không nằm trong pages/), nên bắt đầu bằng
   "/FE/admin/...".
   ============================================================ */
window.Asia = window.Asia || {};

Asia.Routes = {
  HOME: "/FE/pages/index.html",

  PRODUCTS: {
    TU_NHUA:          "/FE/pages/san-pham/tu-nhua.html",
    SOFA:              "/FE/pages/san-pham/sofa.html",
    BAN_AN:            "/FE/pages/san-pham/ban-an.html",
    GIUONG:            "/FE/pages/san-pham/giuong.html",
    BAN_TRANG_DIEM:    "/FE/pages/san-pham/ban-trang-diem.html",
    DETAIL:            "/FE/pages/san-pham/detail.html"   // dùng kèm ?slug=...
  },

  SERVICES: {
    PHONG_NGU:        "/FE/pages/thiet-ke-thi-cong/phong-ngu.html",
    PHONG_KHACH:       "/FE/pages/thiet-ke-thi-cong/phong-khach.html",
    PHONG_BEP:         "/FE/pages/thiet-ke-thi-cong/phong-bep.html",
    PHONG_THO:         "/FE/pages/thiet-ke-thi-cong/phong-tho.html",
    PHONG_LAM_VIEC:    "/FE/pages/thiet-ke-thi-cong/phong-lam-viec.html",
    DETAIL:            "/FE/pages/thiet-ke-thi-cong/detail.html"   // dùng kèm ?slug=...
  },

  CONSULTATION: "/FE/pages/tu-van.html",
  CONTACT:      "/FE/pages/lien-he.html",

  AUTH: {
    LOGIN:            "/FE/pages/auth/login.html",
    REGISTER:          "/FE/pages/auth/register.html",
    VERIFY_OTP:        "/FE/pages/auth/verify-otp.html",
    FORGOT_PASSWORD:   "/FE/pages/auth/forgot-password.html",
    RESET_PASSWORD:    "/FE/pages/auth/reset-password.html"
  },

  ACCOUNT: {
    PROFILE:           "/FE/pages/tai-khoan/profile.html",
    CHANGE_PASSWORD:   "/FE/pages/tai-khoan/change-password.html",
    CONSULTATIONS:     "/FE/pages/tai-khoan/consultations.html",
    WISHLIST:          "/FE/pages/tai-khoan/wishlist.html"
  },

  // Khu Admin nằm RIÊNG ở FE/admin/ — KHÔNG nằm trong FE/pages/
  ADMIN: {
    LOGIN:             "/FE/admin/login.html",
    DASHBOARD:         "/FE/admin/dashboard.html",
    PRODUCTS:          "/FE/admin/products.html",
    SERVICES:          "/FE/admin/services.html",
    CONSULTATIONS:     "/FE/admin/consultations.html",
    CONTACTS:          "/FE/admin/contacts.html",
    SETTINGS:          "/FE/admin/settings.html"
  }
};