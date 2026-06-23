/* ============================================================
   API-ENDPOINTS — Toàn bộ đường dẫn API Backend, viết 1 lần ở đây.
   Bản code hóa của Mục 7 trong "Sổ tay đồng bộ Frontend".
   Khi nào làm Backend xong, KHÔNG cần sửa lại Frontend — chỉ cần
   Backend tạo đúng các đường dẫn được liệt kê dưới đây.
   ============================================================ */
window.Asia = window.Asia || {};

const API_BASE = "/api/v1";

Asia.Api = {
  BASE: API_BASE,

  AUTH: {
    REGISTER:          `${API_BASE}/auth/register`,
    SEND_OTP:           `${API_BASE}/auth/send-otp`,
    VERIFY_OTP:         `${API_BASE}/auth/verify-otp`,
    LOGIN:              `${API_BASE}/auth/login`,
    FORGOT_PASSWORD:    `${API_BASE}/auth/forgot-password`,
    RESET_PASSWORD:     `${API_BASE}/auth/reset-password`,
    REFRESH:            `${API_BASE}/auth/refresh`,
    LOGOUT:             `${API_BASE}/auth/logout`
  },

  ADMIN_AUTH_LOGIN:     `${API_BASE}/admin/auth/login`,

  USER_ME:              `${API_BASE}/users/me`,
  USER_ME_PASSWORD:     `${API_BASE}/users/me/password`,

  PRODUCT_CATEGORIES:   `${API_BASE}/product-categories`,
  PRODUCTS:             `${API_BASE}/products`,
  PRODUCTS_FEATURED:    `${API_BASE}/products/featured`,
  productDetail:  (slug) => `${API_BASE}/products/${slug}`,

  SERVICE_CATEGORIES:   `${API_BASE}/service-categories`,
  SERVICES:             `${API_BASE}/services`,
  SERVICES_FEATURED:    `${API_BASE}/services/featured`,
  serviceDetail:  (slug) => `${API_BASE}/services/${slug}`,

  CONSULTATIONS:        `${API_BASE}/consultations`,
  CONSULTATIONS_MY:     `${API_BASE}/consultations/my`,

  CONTACTS:             `${API_BASE}/contacts`,

  WISHLIST:             `${API_BASE}/wishlist`,
  wishlistToggle: (productId) => `${API_BASE}/wishlist/${productId}`,

  UPLOAD_IMAGE:         `${API_BASE}/upload/image`,
  SETTINGS_PUBLIC:      `${API_BASE}/admin/settings`,

  ADMIN: {
    DASHBOARD_STATS:    `${API_BASE}/admin/dashboard/stats`,
    DASHBOARD_CHARTS:   `${API_BASE}/admin/dashboard/charts`,
    PRODUCTS:           `${API_BASE}/admin/products`,
    SERVICES:           `${API_BASE}/admin/services`,
    CONSULTATIONS:      `${API_BASE}/admin/consultations`,
    CONTACTS:           `${API_BASE}/admin/contacts`,
    SETTINGS:           `${API_BASE}/admin/settings`
  }
};