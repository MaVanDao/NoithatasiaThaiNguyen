# 🏠 NỘI THẤT ASIA THÁI NGUYÊN — TÀI LIỆU KIẾN TRÚC HỆ THỐNG

> **Dự án:** Website Catalog Sản Phẩm + Thiết Kế & Thi Công Nội Thất — Asia Thái Nguyên
> **Phiên bản:** 2.0 — Đồng bộ theo Brand Identity chính thức (Đỏ — Đen) + cấu trúc trang thực tế
> **Ngày:** 2026

---

## 📌 THAY ĐỔI SO VỚI PHIÊN BẢN 1.1

| Hạng mục | v1.1 (cũ) | v2.0 (mới — theo brief thiết kế chính thức) |
|---|---|---|
| Phong cách UI | Scandinavian Minimalist (xanh rêu, serif Fraunces) | **Bold Minimalist** — Đỏ #CC0000 & Đen #1A1A1A, Montserrat/Inter |
| Cấu trúc trang Sản phẩm | category.html dùng chung 1 query string | **5 route cố định**: tu-nhua / sofa / ban-an / giuong / ban-trang-diem |
| Cấu trúc trang Thi công | service category chung | **5 route cố định**: phong-ngu / phong-khach / phong-bep / phong-tho / phong-lam-viec |
| Header | menu dạng list ngang | **Mega dropdown 2 cột** ("Sản Phẩm" + "Thiết Kế & Thi Công") + nút "Liên Hệ" |
| Menu mobile | slide từ trái, nền trắng | **Full-screen overlay nền đen**, item to, mũi tên đỏ |
| Product card | có badge, có hover, có giá gạch | **KHÔNG** badge, **KHÔNG** hover, **KHÔNG** giá gạch — 1 CTA duy nhất |
| Thông báo Admin | Zalo OA + Messenger (API) | **Telegram Bot** (duy nhất, qua backend) |
| Zalo / Messenger / Hotline | kênh gửi noti qua API | **Link tĩnh** để khách chat trực tiếp với Admin (không qua backend) |
| Tài khoản khách hàng | Có (giữ nguyên) | **Giữ nguyên** — đăng nhập/đăng ký bằng SĐT + OTP, có Wishlist |
| Trang chi tiết sản phẩm | Có (giữ nguyên) | **Giữ nguyên** — `/san-pham/detail.html?slug=...` |
| Tài khoản Admin | Có (giữ nguyên) | **Giữ nguyên** — đăng nhập email/password riêng `/admin` |

---

## 📌 TỔNG QUAN DỰ ÁN

| Hạng mục | Chi tiết |
|---|---|
| Loại hệ thống | Website Catalog + Thiết kế & Thi công nội thất + Lead Generation |
| Thương hiệu | **Nội Thất Asia Thái Nguyên** |
| Slogan | "Trung thực · Tiên phong · Trách nhiệm" |
| Phong cách UI | Bold, Strong, Modern Minimalist — sắc nét, dứt khoát |
| Màu chủ đạo | Đỏ `#CC0000` · Đen `#1A1A1A` · Trắng `#FFFFFF` · Vàng cam `#F5A623` (chỉ dùng cho dấu chấm slogan) |
| Font | Tiêu đề: **Montserrat Bold** — Nội dung: **Inter Regular** |
| Frontend | HTML5 / CSS3 / Vanilla JS |
| Backend | Python 3.11 + FastAPI |
| Database | MySQL 8.0 |
| Cache | Redis (OTP + Cache) |
| Lưu trữ ảnh | Cloudinary |
| Thông báo Admin | **Telegram Bot** (duy nhất) |
| Kênh trao đổi với khách | Hotline (tap-to-call) · Zalo Chat · Facebook Messenger — **link tĩnh, không qua backend** |
| Xác thực Khách hàng | Số điện thoại + OTP + JWT |
| Xác thực Admin | Email + Mật khẩu + JWT (riêng biệt, route `/admin`) |
| Phân quyền | ADMIN / CUSTOMER |
| SEO | URL Slug + Meta SEO + Open Graph + Sitemap |
| Mục tiêu | Giới thiệu sản phẩm & dịch vụ thi công → Thu lead (đặt hàng / tư vấn / liên hệ) → Admin trao đổi qua Zalo/Messenger/Hotline → Chốt đơn |

---

## ⚙️ CHỨC NĂNG CHÍNH

**Khách hàng (Customer)**
- Xem trang chủ: sản phẩm nổi bật + dự án thi công nổi bật
- Xem danh sách sản phẩm theo 5 loại: Tủ Nhựa / Sofa / Bàn Ăn / Giường / Bàn Trang Điểm
- Xem chi tiết 1 sản phẩm (gallery, mô tả, thông số)
- Xem danh sách & chi tiết dự án Thiết Kế & Thi Công theo 5 phòng: Phòng Ngủ / Phòng Khách / Phòng Bếp / Phòng Thờ / Phòng Làm Việc
- Gửi yêu cầu **"Liên hệ đặt hàng"** ngay trên thẻ sản phẩm
- Gửi yêu cầu **"Tư vấn ngay"** ngay trên thẻ dự án thi công
- Gửi form **Liên hệ** tổng quát (trang `/lien-he`)
- Đăng ký / Đăng nhập bằng số điện thoại + OTP
- Quên mật khẩu bằng OTP
- Quản lý hồ sơ cá nhân
- Quản lý Wishlist (sản phẩm yêu thích)
- Xem lại lịch sử các yêu cầu tư vấn/đặt hàng đã gửi
- Chat trực tiếp qua Zalo / Messenger / gọi Hotline (không cần đăng nhập)

**Quản trị viên (Admin)**
- Đăng nhập riêng bằng Email + Mật khẩu tại `/admin`
- Quản lý sản phẩm & 5 danh mục sản phẩm cố định
- Quản lý dự án thi công & 5 danh mục phòng cố định
- Quản lý banner trang chủ
- Quản lý media / thư viện ảnh (Cloudinary)
- Quản lý SEO (meta, slug, sitemap)
- Quản lý người dùng (khách hàng)
- Quản lý yêu cầu đặt hàng / tư vấn (cập nhật trạng thái, ghi chú nội bộ)
- Quản lý liên hệ tổng quát
- Nhận **thông báo tức thời qua Telegram Bot** mỗi khi có yêu cầu mới
- Xem Dashboard thống kê (đơn mới, tỉ lệ chuyển đổi, top sản phẩm xem nhiều)
- Quản lý cài đặt hệ thống (số Hotline, link Zalo, link Messenger, thông tin showroom)

---

## 🗺️ SƠ ĐỒ TỔNG THỂ HỆ THỐNG

```
┌──────────────────────────────────────────────────────────────────┐
│                          CLIENT BROWSER                          │
│            HTML / CSS / Vanilla JS · JWT trong localStorage       │
└───────┬───────────────────────────────────────────────┬──────────┘
        │                                               │
        │ HTTPS REST API                  Link tĩnh, mở trực tiếp
        ▼                                  (không qua backend)
┌──────────────────────────┐              ┌───────────────────────┐
│         NGINX            │              │  zalo.me/0xxxxxxxxx   │
│ Reverse Proxy+SSL+Static │              │  m.me/asianoithat...  │
└───────────┬───────────────┘              │  tel:0xxxxxxxxxx     │
            ▼                              └───────────────────────┘
┌──────────────────────────────────────────────┐
│                   FASTAPI                    │
│ Auth (Customer OTP / Admin email)             │
│ Users · Wishlist                              │
│ Products · Product Categories (5 loại cố định)│
│ Services · Service Categories (5 phòng cố định)│
│ Consultations (đặt hàng + tư vấn)             │
│ Contacts (liên hệ tổng quát)                  │
│ Banner · Media · SEO                          │
│ Admin (toàn bộ module trên)                   │
└───────┬───────────────────────┬───────────────┘
        │                       │
        ▼                       ▼
┌──────────────┐        ┌─────────────────┐
│   MySQL 8    │        │      Redis      │
│   Main DB    │        │   Cache + OTP   │
└──────────────┘        └─────────────────┘
        │
        ├─────────────────────┐
        ▼                     ▼
┌──────────────┐      ┌────────────────────┐
│ Cloudinary   │      │   Telegram Bot     │
│ Ảnh SP/Dự án │      │  Thông báo Admin   │
│ Ảnh Banner   │      │ "🔔 Yêu cầu mới!"  │
└──────────────┘      └────────────────────┘
```

> **Lưu ý quan trọng:** Zalo Chat, Facebook Messenger và Hotline **không** phải API tích hợp backend — chúng chỉ là các **link tĩnh** (`zalo.me/...`, `m.me/...`, `tel:...`) đặt trên Frontend để khách bấm vào và chat/gọi trực tiếp với Admin. Chỉ có **Telegram Bot** mới thực sự nhận thông báo tự động từ Backend khi có lead mới.

---

## 🖥️ PHẦN 1 — FRONTEND

### 1.1 Cấu Trúc Thư Mục

```
📦 frontend/
│
├── 📁 public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.json
│   └── site.webmanifest
│
├── 📁 pages/
│   ├── index.html                       → / (Trang Chủ)
│   │
│   ├── 📁 auth/
│   │   ├── login.html                   → Đăng nhập khách hàng (SĐT)
│   │   ├── register.html                → Đăng ký (SĐT)
│   │   ├── verify-otp.html              → Xác thực OTP
│   │   ├── forgot-password.html         → Quên mật khẩu
│   │   ├── reset-password.html
│   │   └── access-denied.html
│   │
│   ├── 📁 tai-khoan/
│   │   ├── profile.html                 → Hồ sơ cá nhân
│   │   ├── change-password.html
│   │   ├── consultations.html           → Lịch sử yêu cầu đã gửi
│   │   └── wishlist.html                → Sản phẩm yêu thích
│   │
│   ├── 📁 san-pham/                      → Khớp 5 route cố định trong brief
│   │   ├── tu-nhua.html                 → /san-pham/tu-nhua
│   │   ├── sofa.html                    → /san-pham/sofa
│   │   ├── ban-an.html                  → /san-pham/ban-an
│   │   ├── giuong.html                  → /san-pham/giuong
│   │   ├── ban-trang-diem.html          → /san-pham/ban-trang-diem
│   │   └── detail.html                  → Chi tiết 1 SP (?slug=...)
│   │
│   ├── 📁 thiet-ke-thi-cong/             → Khớp 5 route cố định trong brief
│   │   ├── phong-ngu.html               → /thiet-ke-thi-cong/phong-ngu
│   │   ├── phong-khach.html             → /thiet-ke-thi-cong/phong-khach
│   │   ├── phong-bep.html               → /thiet-ke-thi-cong/phong-bep
│   │   ├── phong-tho.html               → /thiet-ke-thi-cong/phong-tho
│   │   ├── phong-lam-viec.html          → /thiet-ke-thi-cong/phong-lam-viec
│   │   └── detail.html                  → Chi tiết 1 dự án (?slug=...)
│   │
│   ├── lien-he.html                      → /lien-he (đúng brief)
│   ├── tu-van.html                       → Trang form tư vấn/đặt hàng đầy đủ
│   │                                       (mở từ nút CTA, không nằm trong nav chính)
│   ├── 404.html
│   └── 500.html
│
├── 📁 admin/                             → Khu vực quản trị riêng /admin
│   ├── login.html                        → Đăng nhập Admin (email/password)
│   ├── dashboard.html
│   ├── products.html
│   ├── product-edit.html
│   ├── product-categories.html
│   ├── services.html
│   ├── service-edit.html
│   ├── service-categories.html
│   ├── consultations.html                → Quản lý lead đặt hàng/tư vấn
│   ├── contacts.html                     → Quản lý liên hệ tổng quát
│   ├── banners.html
│   ├── media.html
│   ├── seo.html
│   ├── users.html
│   └── settings.html                     → Hotline / link Zalo / Messenger / showroom
│
├── 📁 layouts/
│   ├── main-layout.html                  → Header (mega dropdown) + Footer dùng chung
│   ├── product-layout.html
│   ├── service-layout.html
│   ├── account-layout.html
│   └── admin-layout.html
│
├── 📁 templates/
│   ├── product-card.html                 → Theo đúng PRODUCT CARD RULES
│   ├── service-card.html                 → "Tư vấn ngay" outline button
│   ├── breadcrumb.html
│   ├── gallery.html                      → Masonry cho trang thi công
│   ├── pagination.html
│   ├── filter.html                       → Sidebar lọc giá (trang catalog)
│   ├── modal.html                        → Modal "Liên hệ đặt hàng / Tư vấn nhanh"
│   ├── mega-dropdown.html
│   ├── mobile-menu.html                  → Full-screen overlay đen
│   ├── loading.html
│   ├── empty-state.html
│   └── error-state.html
│
├── 📁 assets/
│   ├── 📁 css/
│   │   ├── variables.css                 → Token: Đỏ/Đen/Trắng/Amber + Montserrat/Inter
│   │   ├── reset.css
│   │   ├── typography.css
│   │   ├── layout.css
│   │   ├── components.css                → Button/Card/Tab-pill/Form theo brand mới
│   │   ├── animations.css
│   │   ├── utilities.css
│   │   ├── responsive.css
│   │   ├── account.css
│   │   └── admin.css
│   │
│   ├── 📁 js/
│   │   ├── 📁 api/
│   │   │   ├── client.js
│   │   │   ├── auth.api.js
│   │   │   ├── user.api.js
│   │   │   ├── product.api.js
│   │   │   ├── product-category.api.js
│   │   │   ├── service.api.js
│   │   │   ├── service-category.api.js
│   │   │   ├── banner.api.js
│   │   │   ├── consultation.api.js
│   │   │   ├── contact.api.js
│   │   │   ├── wishlist.api.js
│   │   │   ├── media.api.js
│   │   │   └── seo.api.js
│   │   │
│   │   ├── 📁 services/
│   │   │   ├── auth.service.js
│   │   │   ├── otp.service.js
│   │   │   ├── product.service.js
│   │   │   ├── service.service.js          → Dữ liệu dự án thi công
│   │   │   ├── consultation.service.js
│   │   │   ├── contact.service.js
│   │   │   ├── seo.service.js
│   │   │   └── analytics.service.js
│   │   │
│   │   ├── 📁 components/
│   │   │   ├── navbar.js                   → Mega dropdown + icon tài khoản
│   │   │   ├── mobile-menu.js              → Full-screen overlay đen
│   │   │   ├── footer.js
│   │   │   ├── carousel.js
│   │   │   ├── gallery.js                  → Masonry thi công
│   │   │   ├── lightbox.js
│   │   │   ├── modal.js
│   │   │   ├── toast.js
│   │   │   ├── loading.js / skeleton.js
│   │   │   ├── empty-state.js / error-state.js
│   │   │   ├── tab-pills.js                → Lọc theo danh mục (trang chủ)
│   │   │   ├── filter.js / sort.js / pagination.js
│   │   │   ├── product-card.js
│   │   │   ├── service-card.js
│   │   │   ├── contact-form.js
│   │   │   ├── consult-form.js             → Form "Liên hệ đặt hàng / Tư vấn"
│   │   │   ├── otp-input.js
│   │   │   ├── zalo-widget.js              → Link tĩnh, không gọi API
│   │   │   ├── messenger-widget.js         → Link tĩnh, không gọi API
│   │   │   └── hotline-button.js           → tel: link
│   │   │
│   │   ├── 📁 pages/
│   │   │   ├── home.js
│   │   │   ├── contact.js
│   │   │   ├── consultation.js
│   │   │   ├── 📁 auth/ (login.js, register.js, verify-otp.js, forgot-password.js, reset-password.js)
│   │   │   ├── 📁 tai-khoan/ (profile.js, change-password.js, consultations.js, wishlist.js)
│   │   │   ├── 📁 san-pham/ (product-list.js, product-detail.js)
│   │   │   ├── 📁 thiet-ke-thi-cong/ (service-list.js, service-detail.js)
│   │   │   └── 📁 admin/ (dashboard.js, products.js, services.js, consultations.js,
│   │   │                  contacts.js, users.js, banners.js, media.js, seo.js, settings.js)
│   │   │
│   │   ├── 📁 store/
│   │   │   ├── auth.store.js
│   │   │   ├── user.store.js
│   │   │   ├── app.store.js
│   │   │   └── wishlist.store.js
│   │   │
│   │   ├── 📁 middleware/ (auth.guard.js, guest.guard.js)
│   │   ├── 📁 constants/ (roles.js, routes.js, product-categories.js, service-categories.js, api-endpoints.js, app-config.js)
│   │   ├── 📁 utils/ (formatter.js, validator.js, helpers.js, debounce.js, phone.js, storage.js)
│   │   └── 📁 seo/ (meta.js, schema.js, breadcrumb-schema.js, open-graph.js)
│   │
│   └── 📁 images/ (logo/, icons/, placeholders/, illustrations/, ui/)
│
└── index.html
```

> **Ghi chú route sạch (clean URL):** `/san-pham/sofa`, `/thiet-ke-thi-cong/phong-ngu`... được cấu hình bằng Nginx `try_files`/rewrite trỏ tới đúng file `.html` tương ứng trong `pages/san-pham/` và `pages/thiet-ke-thi-cong/`. Mỗi file dùng chung `product.service.js` / `service.service.js`, chỉ khác **hằng số danh mục** (`CATEGORY_SLUG = "sofa"`) khai báo đầu file.

---

### 1.2 Sơ Đồ Các Trang (Site Map)

```
🌐 KHU VỰC CÔNG KHAI (Public)
│
🏠 Trang chủ — /  (index.html)
│   ├── Hero full-screen: ảnh nội thất + overlay đen + headline + 2 CTA
│   ├── "Sản Phẩm Nổi Bật" — tab pills 5 loại + grid 4 cột
│   ├── "Thiết Kế & Thi Công" — tab pills 5 phòng + grid 3 cột (dự án)
│   └── (Header/Footer dùng chung toàn site)
│
🛋️ SẢN PHẨM — /san-pham/{loai}
│   ├── /san-pham/tu-nhua          → Tủ Nhựa
│   ├── /san-pham/sofa             → Sofa
│   ├── /san-pham/ban-an           → Bàn Ăn
│   ├── /san-pham/giuong           → Giường
│   ├── /san-pham/ban-trang-diem   → Bàn Trang Điểm
│   │       ├── Breadcrumb + Page title (gạch chân đỏ)
│   │       ├── Sort bar: "Giá tăng dần ▾"
│   │       ├── (Desktop) Sidebar lọc giá — optional
│   │       ├── Grid sản phẩm (4 cột desktop / 2 cột mobile)
│   │       │     Card: ảnh vuông xám · tên · giá đỏ ·
│   │       │     nút "Liên hệ đặt hàng" (full-width) · icon ♥ wishlist
│   │       └── Pagination
│   │
│   └── /san-pham/detail.html?slug=...   → Chi tiết 1 sản phẩm
│         ├── Gallery ảnh + thumbnail
│         ├── Tên, mã SP, giá (đỏ, không gạch)
│         ├── Mô tả + thông số kỹ thuật
│         ├── CTA: "Liên hệ đặt hàng" (mở modal nhanh)
│         ├── Hotline / Zalo / Messenger (link tĩnh)
│         └── Sản phẩm liên quan
│
🎨 THIẾT KẾ & THI CÔNG — /thiet-ke-thi-cong/{phong}
│   ├── /thiet-ke-thi-cong/phong-ngu        → Phòng Ngủ
│   ├── /thiet-ke-thi-cong/phong-khach      → Phòng Khách
│   ├── /thiet-ke-thi-cong/phong-bep        → Phòng Bếp
│   ├── /thiet-ke-thi-cong/phong-tho        → Phòng Thờ
│   ├── /thiet-ke-thi-cong/phong-lam-viec   → Phòng Làm Việc
│   │       ├── Breadcrumb + Page title
│   │       ├── Đoạn giới thiệu (gray text)
│   │       ├── Masonry gallery (3 cột desktop / 2 cột mobile)
│   │       │     Card: ảnh 4:3 + mô tả + nút "Tư vấn ngay" (outline đỏ)
│   │       └── CTA banner nền đen: "Bắt đầu thiết kế không gian của bạn"
│   │
│   └── /thiet-ke-thi-cong/detail.html?slug=...  → Chi tiết 1 dự án (case study)
│
📋 Trang Tư Vấn / Đặt Hàng — tu-van.html  (mở từ các nút CTA, không trong menu chính)
│   ├── Form đầy đủ: họ tên*, SĐT*, địa chỉ, sản phẩm/dịch vụ quan tâm,
│   │     loại yêu cầu (đặt hàng / tư vấn thiết kế), ghi chú
│   └── Hoặc bấm trực tiếp: 🟦 Chat Zalo · 🔵 Chat Messenger · 📞 Hotline
│
📞 Liên Hệ — /lien-he  (đúng brief)
│   ├── Cột trái: Địa chỉ · Hotline (tap-to-call) · Email · icon Zalo/Facebook
│   ├── Cột phải: Google Maps embed (rounded corners)
│   └── Form full-width: Họ tên / SĐT / Nội dung → nút "Gửi Yêu Cầu"
│
🔐 TÀI KHOẢN KHÁCH HÀNG (xác thực bằng SĐT + OTP)
│   ├── /auth/login, /auth/register, /auth/verify-otp
│   ├── /auth/forgot-password, /auth/reset-password
│   └── /tai-khoan/profile, /change-password, /consultations (lịch sử), /wishlist
│
🔒 KHU VỰC QUẢN TRỊ — /admin  (xác thực Email + Mật khẩu, riêng biệt hoàn toàn)
│   ├── /admin/login
│   ├── /admin/dashboard
│   ├── /admin/products, /product-edit, /product-categories
│   ├── /admin/services, /service-edit, /service-categories
│   ├── /admin/consultations, /contacts
│   ├── /admin/banners, /media, /seo
│   ├── /admin/users
│   └── /admin/settings  (Hotline / link Zalo / Messenger / địa chỉ showroom)
```

---

### 1.3 Header & Mobile Menu — Hành Vi Chi Tiết

```
🖥️ DESKTOP (≥1024px)
  Trái:  Logo (tam giác đỏ & đen) + "Nội Thất Asia Thái Nguyên"
  Phải:  "Sản Phẩm ▾"  (mega dropdown khi hover, 2 cột)
           Cột 1 "Sản Phẩm":              Cột 2 "Thiết Kế & Thi Công":
           - Tủ Nhựa                       - Phòng Ngủ
           - Sofa                          - Phòng Khách
           - Bàn Ăn                        - Phòng Bếp
           - Giường                        - Phòng Thờ
           - Bàn Trang Điểm                - Phòng Làm Việc
         [icon 👤 Tài khoản]  → chưa đăng nhập: mở login.html
                                → đã đăng nhập: dropdown (Hồ sơ / Yêu thích / Lịch sử / Đăng xuất)
         ["Liên Hệ"]  → nút viền đỏ, dẫn tới /lien-he
  Nền trắng, viền dưới đỏ 1px. Hover menu item → chữ đỏ.

📱 MOBILE (<1024px)
  Trái: Logo  |  Phải: Hamburger (3 gạch đỏ)
  Bấm hamburger → full-screen overlay NỀN ĐEN
    - Nút đóng (X trắng) góc phải trên
    - Danh sách dọc, font to, mỗi item có mũi tên đỏ "→"
      Sản Phẩm (nhóm) → Tủ Nhựa / Sofa / Bàn Ăn / Giường / Bàn Trang Điểm
      Thiết Kế & Thi Công (nhóm) → 5 phòng
      Tài khoản / Đăng nhập
      Liên Hệ (nút đỏ nổi bật cuối menu)
```

---

### 1.4 Tính Năng "Liên Hệ Đặt Hàng" / "Tư Vấn Ngay" — Chi Tiết

Hệ thống dùng **chung một bảng `consultation_requests`** cho cả 2 ngữ cảnh, phân biệt bằng cột `request_type`:

```
request_type = "order"        ← bấm "Liên hệ đặt hàng" trên thẻ Sản phẩm
request_type = "design"       ← bấm "Tư vấn ngay" trên thẻ Thi công
request_type = "general"      ← gửi từ form trang /lien-he (lưu vào bảng contacts riêng)
```

```
┌─────────────────────────────────────────────────────┐
│            LUỒNG TIẾP NHẬN YÊU CẦU KHÁCH            │
└─────────────────────────────────────────────────────┘

KÊNH 1 — Nút trên thẻ sản phẩm/dự án (nhanh nhất)
──────────────────────────────────────────────────
Khách bấm "Liên hệ đặt hàng" / "Tư vấn ngay"
      │
      ▼
Modal mini-form bật lên (đã điền sẵn tên SP/Dự án)
  - Họ tên* · SĐT* · Ghi chú (optional)
      │
      ▼  POST /api/v1/consultations
  ├── Lưu DB (status = "new", request_type tương ứng)
  ├── Gửi thông báo → 🤖 Telegram Bot tới Admin
  └── Hiện toast: "Đã gửi! Chúng tôi liên hệ trong 30 phút"

KÊNH 2 — Trang tư vấn đầy đủ (tu-van.html)
──────────────────────────────────────────
Form đầy đủ thông tin hơn (địa chỉ...)
      │ POST /api/v1/consultations  (giống Kênh 1)

KÊNH 3 — Form Liên Hệ tổng quát (/lien-he)
──────────────────────────────────────────
Họ tên + SĐT + Nội dung tự do
      │ POST /api/v1/contacts
  ├── Lưu DB bảng contacts
  └── Gửi thông báo → 🤖 Telegram Bot

KÊNH 4 — Chat trực tiếp (KHÔNG qua backend)
──────────────────────────────────────────
🟦 Zalo:      href="https://zalo.me/0xxxxxxxxx"
🔵 Messenger: href="https://m.me/asianoithatthainguyen"
📞 Hotline:   href="tel:0xxxxxxxxxx"
→ Mở app/chat trực tiếp, Admin chủ động trả lời tại đó.
  Widget Zalo & Messenger hiển thị nổi góc phải mọi trang,
  animation gợi ý sau 10 giây không tương tác.
```

---

### 1.5 Design System — Brand Identity Chính Thức

```
🎨 MÀU SẮC
  --red:        #CC0000   (chủ đạo: nút, giá, viền nhấn, link active)
  --red-dark:   #A30000   (hover của nút đỏ)
  --black:      #1A1A1A   (chữ chính, nền footer, overlay đen)
  --white:      #FFFFFF   (nền chính)
  --amber:      #F5A623   (CHỈ dùng cho dấu chấm "·" trong slogan)
  --gray-50:    #F7F7F7   (nền section phụ, nền form)
  --gray-200:   #E0E0E0   (placeholder ảnh, viền input)
  --gray-400:   #B0B0B0   (chữ phụ trên nền tối)
  --gray-600:   #666666   (chữ phụ trên nền sáng)

🔤 TYPOGRAPHY
  Tiêu đề:   Montserrat — weight 700–800 (Google Fonts)
  Nội dung:  Inter — weight 400–600 (Google Fonts)
  page-title / section-title: bold đen, có gạch chân hoặc viền trái 4px màu đỏ

📐 SPACING & RADIUS
  Button height: tối thiểu 44px (chuẩn tap mobile)
  Card radius:   8px
  Box shadow:    nhẹ (0 2px 12px rgba(0,0,0,.08))

🔲 QUY TẮC PRODUCT CARD (signature style — bắt buộc)
  ❌ KHÔNG hiệu ứng hover
  ❌ KHÔNG badge / nhãn (Mới, Sale...)
  ❌ KHÔNG giá gạch ngang (strikethrough)
  ✅ Ảnh vuông, nền xám placeholder #E0E0E0
  ✅ Giá: màu đỏ, bold, rõ ràng — ví dụ "2.500.000đ"
  ✅ Đúng 1 nút CTA full-width: "Liên hệ đặt hàng"
  ✅ (Bổ sung theo yêu cầu) icon ♥ wishlist nhỏ góc ảnh — không tính là "badge"

🔳 QUY TẮC PROJECT CARD (Thiết Kế & Thi Công)
  ✅ Ảnh tỉ lệ 4:3, nền xám placeholder
  ✅ Tên phòng/dự án — bold đen
  ✅ 1 nút CTA full-width viền đỏ: "Tư vấn ngay"

📱 RESPONSIVE
  Mobile  (<768px):   grid 2 cột, tab pill cuộn ngang, hamburger, nút ≥44px
  Tablet  (768–1279px): grid 3 cột, header nav đầy đủ
  Desktop (≥1280px):  grid 4 cột sản phẩm / 3 cột dự án, mega dropdown
  Không tràn ngang ở bất kỳ kích thước màn hình. Ảnh lazy-load.
```

---

## ⚙️ PHẦN 2 — BACKEND

### 2.1 Cấu Trúc Thư Mục

```
📦 backend/
│
├── 📁 app/
│ ├── 📁 api/v1/
│ │   ├── auth.py                  → OTP (customer) + login (admin riêng)
│ │   ├── users.py
│ │   ├── products.py
│ │   ├── product_categories.py    → 5 loại cố định
│ │   ├── services.py              → Dự án Thiết Kế & Thi Công
│ │   ├── service_categories.py    → 5 phòng cố định
│ │   ├── consultations.py         → "Liên hệ đặt hàng" + "Tư vấn ngay"
│ │   ├── contacts.py              → Form /lien-he
│ │   ├── wishlist.py
│ │   ├── banners.py
│ │   ├── media.py
│ │   ├── seo.py
│ │   ├── upload.py
│ │   │
│ │   └── 📁 admin/
│ │       ├── auth.py              → Login Admin (email/password riêng)
│ │       ├── dashboard.py
│ │       ├── products.py / product_categories.py
│ │       ├── services.py / service_categories.py
│ │       ├── consultations.py / contacts.py
│ │       ├── banners.py / media.py / seo.py
│ │       ├── users.py
│ │       └── settings.py          → Hotline / Zalo link / Messenger link / showroom
│ │
│ ├── 📁 core/
│ │   ├── config.py
│ │   ├── security.py
│ │   ├── permissions.py
│ │   ├── dependencies.py
│ │   └── exceptions.py
│ │
│ ├── 📁 models/
│ │   ├── user.py                  → role: customer | admin
│ │   ├── otp.py
│ │   ├── product.py / product_category.py / product_image.py
│ │   ├── service.py / service_category.py / service_image.py
│ │   ├── consultation.py          → request_type: order | design
│ │   ├── contact.py
│ │   ├── wishlist.py
│ │   ├── banner.py / media.py / seo.py / site_setting.py
│ │
│ ├── 📁 schemas/        (1 file tương ứng mỗi model + dashboard.py)
│ │
│ ├── 📁 services/
│ │   ├── auth_service.py / otp_service.py
│ │   ├── product_service.py / service_service.py
│ │   ├── consultation_service.py / contact_service.py
│ │   ├── media_service.py / upload_service.py / seo_service.py
│ │   ├── dashboard_service.py
│ │   └── telegram_service.py      → DUY NHẤT kênh notify Admin
│ │
│ ├── 📁 database/ (session.py, base.py, seed_admin.py, seed_categories.py)
│ │
│ └── main.py
│
├── 📁 alembic/
├── 📁 storage/ (products/, services/, banners/, temp/)
├── .env
├── requirements.txt
├── Dockerfile
└── docker-compose.yml
```

---

### 2.2 Thiết Kế Database

**Nhóm Sản phẩm**
```
┌─────────────────────────┐       ┌──────────────────────────────┐
│   product_categories    │──────<│           products           │
├─────────────────────────┤       ├──────────────────────────────┤
│ id, name, slug           │       │ id, name, slug, sku           │
│ (5 dòng cố định seed):   │       │ description, price            │
│  Tủ Nhựa   → tu-nhua     │       │ category_id (FK)              │
│  Sofa      → sofa        │       │ is_featured, is_active        │
│  Bàn Ăn    → ban-an      │       │ view_count, created_at        │
│  Giường    → giuong      │       └──────────┬─────────────────────┘
│  Bàn TĐ    → ban-trang-  │                  │
│             diem         │      ┌────────────┴────────────┐
└─────────────────────────┘      ▼                          ▼
                         ┌────────────────┐        ┌──────────────────┐
                         │ product_images │        │ product_variants │
                         ├────────────────┤        ├──────────────────┤
                         │ product_id FK  │        │ color, size      │
                         │ image_url      │        │ material         │
                         │ is_primary     │        │ stock_qty        │
                         └────────────────┘        └──────────────────┘
```

**Nhóm Thiết Kế & Thi Công**
```
┌─────────────────────────┐       ┌──────────────────────────────┐
│   service_categories    │──────<│           services           │
├─────────────────────────┤       ├──────────────────────────────┤
│ id, name, slug           │       │ id, name, slug                │
│ (5 dòng cố định seed):   │       │ description (mô tả phòng)     │
│  Phòng Ngủ  → phong-ngu  │       │ category_id (FK)               │
│  Phòng Khách→ phong-khach│       │ is_featured, is_active         │
│  Phòng Bếp  → phong-bep  │       │ created_at                     │
│  Phòng Thờ  → phong-tho  │       └──────────┬──────────────────────┘
│  P.Làm Việc → phong-lam- │                  │
│              viec        │                  ▼
└─────────────────────────┘        ┌──────────────────┐
                                   │  service_images  │
                                   ├──────────────────┤
                                   │ service_id FK    │
                                   │ image_url        │
                                   │ caption          │
                                   └──────────────────┘
```

**Nhóm Lead / Khách hàng**
```
┌──────────────┐       ┌──────────────────┐
│    users     │──────<│       otp        │
├──────────────┤       ├──────────────────┤
│ id (PK)      │       │ user phone        │
│ phone (unique)│      │ code, expires_at  │
│ password_hash│       └──────────────────┘
│ full_name    │
│ email        │       ┌──────────────────────────────┐
│ role         │──────<│   consultation_requests      │ ⭐
│ (customer/   │       ├──────────────────────────────┤
│  admin)      │       │ id, user_id (FK, nullable)    │
│ is_active    │       │ full_name*, phone*, address   │
└──────┬───────┘       │ request_type (order | design) │
       │               │ product_id (FK, nullable)      │
       │               │ service_id (FK, nullable)      │
       │               │ note                            │
       │               │ status (new|contacted|done|     │
       │               │         cancelled)               │
       │               │ admin_note, created_at          │
       │               └──────────────────────────────┘
       │
       ├──────────────<┌──────────────────┐
       │               │     contacts      │  ← form /lien-he
       │               ├──────────────────┤
       │               │ full_name, phone │
       │               │ content, status  │
       │               │ created_at       │
       │               └──────────────────┘
       │
       └──────────────<┌──────────────────┐
                       │    wishlists      │
                       ├──────────────────┤
                       │ user_id, product_id│
                       │ added_at           │
                       └──────────────────┘
```

**Hỗ trợ vận hành:** `banners` (ảnh + link), `media` (thư viện ảnh Cloudinary), `seo` (slug → meta title/description/OG image), `site_settings` (key-value: hotline, zalo_link, messenger_link, showroom_address...).

---

### 2.3 API Endpoints

```
🔐 AUTH — Khách hàng (SĐT + OTP)
  POST   /api/v1/auth/register
  POST   /api/v1/auth/send-otp
  POST   /api/v1/auth/verify-otp
  POST   /api/v1/auth/login
  POST   /api/v1/auth/forgot-password
  POST   /api/v1/auth/reset-password
  POST   /api/v1/auth/refresh
  POST   /api/v1/auth/logout

🔐 AUTH — Admin (riêng biệt)
  POST   /api/v1/admin/auth/login        (email + password)
  POST   /api/v1/admin/auth/refresh

👤 USERS
  GET|PUT  /api/v1/users/me
  PUT      /api/v1/users/me/password

❤️ WISHLIST
  GET    /api/v1/wishlist
  POST   /api/v1/wishlist/{product_id}
  DELETE /api/v1/wishlist/{product_id}

🛋️ PRODUCTS
  GET  /api/v1/product-categories
  GET  /api/v1/products?category=sofa&sort=price_asc&page=1
  GET  /api/v1/products/{slug}
  GET  /api/v1/products/featured

🎨 SERVICES (Thiết Kế & Thi Công)
  GET  /api/v1/service-categories
  GET  /api/v1/services?category=phong-ngu
  GET  /api/v1/services/{slug}
  GET  /api/v1/services/featured

📝 CONSULTATIONS (đặt hàng + tư vấn)
  POST /api/v1/consultations             body: { request_type: order|design, ... }
  GET  /api/v1/consultations/my          (cần đăng nhập)

📞 CONTACTS (form /lien-he)
  POST /api/v1/contacts

📤 UPLOAD
  POST /api/v1/upload/image

🔧 ADMIN (role=admin, JWT riêng)
  GET    /api/v1/admin/dashboard/stats
  GET    /api/v1/admin/dashboard/charts

  GET|POST        /api/v1/admin/products
  GET|PUT|DELETE  /api/v1/admin/products/{id}
  GET|POST|PUT|DELETE  /api/v1/admin/product-categories/{id}

  GET|POST        /api/v1/admin/services
  GET|PUT|DELETE  /api/v1/admin/services/{id}
  GET|POST|PUT|DELETE  /api/v1/admin/service-categories/{id}

  GET             /api/v1/admin/consultations?status=&request_type=
  PUT             /api/v1/admin/consultations/{id}      (status, admin_note)

  GET             /api/v1/admin/contacts
  PUT             /api/v1/admin/contacts/{id}

  GET|POST|PUT|DELETE  /api/v1/admin/banners
  GET|POST|DELETE      /api/v1/admin/media
  GET|PUT              /api/v1/admin/seo/{slug}
  GET|PUT              /api/v1/admin/users/{id}
  GET|PUT              /api/v1/admin/settings
```

---

### 2.4 Luồng Tiếp Nhận Lead — Backend

```
POST /api/v1/consultations
{
  "request_type": "order",          // hoặc "design"
  "full_name": "Nguyễn Văn A",
  "phone": "0912345678",
  "product_id": 12,                  // nếu request_type = order
  "service_id": null,                 // nếu request_type = design thì điền service_id
  "note": "Cần tư vấn sofa phòng khách 20m2"
}
      │
      ▼
consultation_service.py
  ├── Lưu DB (status = "new")
  │
  └── telegram_service.notify_admin(consultation)
        → Gọi Telegram Bot API:
          POST https://api.telegram.org/bot<TOKEN>/sendMessage
          {
            chat_id: TELEGRAM_ADMIN_CHAT_ID,
            text: "🔔 Yêu cầu mới (Đặt hàng)!
                   👤 Nguyễn Văn A | 📞 0912345678
                   🛋️ Sofa Góc Chữ L Da Cao Cấp
                   📝 Cần tư vấn sofa phòng khách 20m2"
          }
      │
      ▼
Return 201 → Frontend hiện toast:
  "Đã gửi! Chúng tôi sẽ liên hệ trong 30 phút"

Admin nhận tin Telegram → tự chủ động chat lại khách qua
Zalo / Messenger / gọi Hotline (KHÔNG qua backend) → cập nhật
status trong /admin/consultations sau khi xử lý xong.
```

> Form `/lien-he` hoạt động tương tự nhưng gọi `POST /api/v1/contacts` và lưu vào bảng `contacts` riêng (không gắn `product_id`/`service_id`).

---

### 2.5 Luồng Xác Thực

**Khách hàng — Số điện thoại + OTP**
```
POST /auth/register  (phone, password, full_name)
      │
POST /auth/send-otp   → sinh mã 6 số, lưu Redis (TTL 5 phút), gửi SMS
      │
POST /auth/verify-otp (phone, code) → đúng → tạo user, is_active=true
      │
POST /auth/login (phone, password)
      │ verify bcrypt
      ▼
  Access Token (15 phút) + Refresh Token (7 ngày, httpOnly cookie)
```

**Admin — Email + Mật khẩu (hoàn toàn tách biệt)**
```
POST /admin/auth/login (email, password)
      │ verify bcrypt, role phải = "admin"
      ▼
  Access Token riêng (claim role=admin) → dùng cho mọi /admin/* endpoint
  Không dùng chung luồng OTP với khách hàng.
```

```
Mọi request:  Authorization: Bearer <token>
JWT Middleware → decode → user_id + role
  ├── role=customer → /users/*, /wishlist/*, /consultations/my
  └── role=admin    → /admin/*  (kiểm tra riêng, từ chối nếu token là của customer)
```

---

## 🔗 PHẦN 3 — KẾT NỐI FRONTEND ↔ BACKEND

### 3.1 Mapping Trang → API

| Trang Frontend | API gọi |
|---|---|
| Trang chủ | `GET /products/featured` + `GET /services/featured` |
| `/san-pham/{loai}` | `GET /products?category={loai}&sort=&page=` |
| `/san-pham/detail.html?slug=` | `GET /products/{slug}` |
| `/thiet-ke-thi-cong/{phong}` | `GET /services?category={phong}` |
| `/thiet-ke-thi-cong/detail.html?slug=` | `GET /services/{slug}` |
| Nút "Liên hệ đặt hàng" / "Tư vấn ngay" | `POST /consultations` |
| Trang `tu-van.html` | `POST /consultations` (form đầy đủ) |
| Trang `/lien-he` | `POST /contacts` |
| Wishlist (icon ♥) | `POST/DELETE /wishlist/{product_id}` |
| Đăng nhập/Đăng ký khách | `POST /auth/login`, `/register`, `/send-otp`, `/verify-otp` |
| `/admin/login` | `POST /admin/auth/login` |

### 3.2 Widget Zalo / Messenger / Hotline (KHÔNG gọi API)

```javascript
// zalo-widget.js — chỉ là thẻ <a>, không fetch gì cả
const ZALO_LINK = "https://zalo.me/0xxxxxxxxx";

// messenger-widget.js
const MESSENGER_LINK = "https://m.me/asianoithatthainguyen";

// hotline-button.js
const HOTLINE_LINK = "tel:0xxxxxxxxxx";
```
3 giá trị trên nên lấy từ `GET /api/v1/admin/settings` (qua trang chủ load 1 lần, cache vào `app.store.js`) để Admin có thể đổi số Hotline / link Zalo / Messenger mà không cần sửa code.

---

## 🐳 PHẦN 4 — DEVOPS & TRIỂN KHAI

### 4.1 docker-compose.yml

```yaml
services:
  nginx:    port 80/443 — reverse proxy + serve static + rewrite clean URL
  backend:  FastAPI, port 8000
  mysql:    MySQL 8.0, port 3306
  redis:    Redis 7, port 6379

volumes: mysql_data, redis_data
networks: app_network
```

### 4.2 Biến Môi Trường (.env)

```
# Database
DATABASE_URL=mysql+aiomysql://user:pass@mysql/asia_furniture
REDIS_URL=redis://redis:6379

# Auth
JWT_SECRET_KEY=<secret>
JWT_ACCESS_EXPIRE=900
JWT_REFRESH_EXPIRE=604800

# OTP / SMS Gateway (gửi mã OTP cho khách hàng)
SMS_PROVIDER_API_KEY=<key>
SMS_PROVIDER_SENDER=AsiaThaiNguyen

# Media
CLOUDINARY_URL=cloudinary://...

# Telegram Bot — DUY NHẤT kênh notify Admin
TELEGRAM_BOT_TOKEN=<token>
TELEGRAM_ADMIN_CHAT_ID=<chat_id>

# Thông tin liên hệ tĩnh (đồng bộ với bảng site_settings)
DEFAULT_HOTLINE=0xxxxxxxxx
DEFAULT_ZALO_LINK=https://zalo.me/0xxxxxxxxx
DEFAULT_MESSENGER_LINK=https://m.me/asianoithatthainguyen
```

---

## 📅 LỘ TRÌNH PHÁT TRIỂN

```
Sprint 1 — Tuần 1-2: NỀN TẢNG + BRAND MỚI
  ✅ Setup Docker + MySQL + Redis
  ✅ Models + Migrations + Seed 5 product_categories + 5 service_categories
  ✅ Auth Customer (OTP) + Auth Admin (email/password) riêng biệt
  ✅ Frontend: variables.css (Đỏ/Đen/Trắng) + Header mega dropdown + Mobile menu đen

Sprint 2 — Tuần 3-4: CATALOG SẢN PHẨM & THI CÔNG
  ✅ Products + Product Categories API
  ✅ Services + Service Categories API
  ✅ Frontend: Trang chủ + 5 trang /san-pham/* + 5 trang /thiet-ke-thi-cong/*
  ✅ Trang chi tiết sản phẩm + chi tiết dự án

Sprint 3 — Tuần 5-6: LEAD GENERATION
  ✅ Consultations API (order + design) + Contacts API
  ✅ Tích hợp Telegram Bot notify
  ✅ Frontend: Modal nhanh trên card + trang tu-van.html + trang /lien-he
  ✅ Widget Zalo/Messenger/Hotline (link tĩnh)

Sprint 4 — Tuần 7-8: TÀI KHOẢN & ADMIN
  ✅ Tài khoản khách hàng: login/register/OTP/wishlist/profile
  ✅ Admin Dashboard + quản lý Products/Services/Leads/Settings
  ✅ Tests + Tối ưu SEO + Deploy production
```

---

*Tài liệu kiến trúc hệ thống — Nội Thất Asia Thái Nguyên v2.0*
