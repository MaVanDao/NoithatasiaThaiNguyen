# 📋 MASTER PROMPT TEMPLATES
## Nội Thất Asia Thái Nguyên — v2.0 (Brand Đỏ/Đen, đồng bộ kiến trúc hệ thống)

---

# PHẦN 1 — FRONTEND PROMPT TEMPLATE

---

## 🖥️ [FRONTEND] Form Prompt Chung

```
═══════════════════════════════════════════════════════════
                   THÔNG TIN DỰ ÁN (CỐ ĐỊNH)
═══════════════════════════════════════════════════════════

Dự án     : Website Nội Thất Asia Thái Nguyên
Công nghệ : HTML5 / CSS3 / Vanilla JS (không dùng framework)
Phong cách: Bold, Strong, Modern Minimalist — sắc nét, dứt khoát
Slogan    : "Trung thực · Tiên phong · Trách nhiệm"

─── Design System (áp dụng cho toàn bộ dự án) ─────────────

Màu sắc:
  --red:        #CC0000   (chủ đạo: nút, giá, viền nhấn)
  --red-dark:   #A30000   (hover của nút đỏ)
  --black:      #1A1A1A   (chữ chính, nền footer, overlay đen)
  --white:      #FFFFFF   (nền chính)
  --amber:      #F5A623   (CHỈ dùng cho dấu chấm "·" trong slogan)
  --gray-50:    #F7F7F7   (nền section phụ, nền form)
  --gray-200:   #E0E0E0   (placeholder ảnh, viền input)
  --gray-400:   #B0B0B0   (chữ phụ trên nền tối)
  --gray-600:   #666666   (chữ phụ trên nền sáng)
  --color-zalo:       #0068FF   (chỉ dùng cho icon/nút widget Zalo)
  --color-messenger:  #0084FF   (chỉ dùng cho icon/nút widget Messenger)

Typography:
  Tiêu đề : Montserrat — weight 700–800 (Google Fonts)
  Nội dung: Inter — weight 400–600 (Google Fonts)

Spacing: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96px
Border radius: 6px (input/button) / 8px (card)
Button height: tối thiểu 44px (chuẩn tap mobile)
Box shadow: nhẹ — 0 2px 12px rgba(0,0,0,.08)
Transition: 0.18s–0.25s ease

─── ⚠️ QUY TẮC PRODUCT CARD (bắt buộc — không vi phạm) ─────

❌ KHÔNG hiệu ứng hover trên product-card / project-card
❌ KHÔNG badge / nhãn (Mới, Sale, Hot...)
❌ KHÔNG giá gạch ngang (strikethrough)
✅ Ảnh vuông 1:1 (product) hoặc 4:3 (project), nền xám placeholder #E0E0E0
✅ Giá: màu đỏ --red, bold, không gạch — ví dụ "2.500.000đ"
✅ Đúng 1 nút CTA full-width:
   - Product card → "Liên hệ đặt hàng" (nền đỏ đặc)
   - Project card → "Tư vấn ngay" (viền đỏ, nền trong suốt)
✅ Có thể thêm icon ♥ wishlist nhỏ góc ảnh (không tính là badge)
(Hover effect VẪN dùng bình thường cho: nút, link nav, social icon — chỉ card sản phẩm/dự án là NGOẠI LỆ không hover)

─── Cấu trúc file chung ─────────────────────────────────────

File này import từ:
  /assets/css/variables.css    → Token màu/font đỏ-đen ở trên
  /assets/css/reset.css
  /assets/css/typography.css
  /assets/css/components.css   → Button, Card, Tab-pill, Form
  /assets/css/layout.css       → Grid, Flexbox
  /assets/css/animations.css   → Keyframes, scroll reveal (dùng vừa phải)
  /assets/js/components/navbar.js        → Mega dropdown + icon tài khoản
  /assets/js/components/mobile-menu.js   → Full-screen overlay NỀN ĐEN
  /assets/js/components/footer.js
  /assets/js/components/toast.js
  /assets/js/components/zalo-widget.js       → link tĩnh, KHÔNG gọi API
  /assets/js/components/messenger-widget.js  → link tĩnh, KHÔNG gọi API
  /assets/js/components/hotline-button.js    → tel: link
  /assets/js/api/client.js     → Fetch wrapper + JWT (Bearer token)

─── Quy tắc bắt buộc ───────────────────────────────────────

✅ Responsive hoàn toàn (mobile-first, breakpoint: 768px / 1024px / 1280px)
✅ Mobile (<768px): grid 2 cột, tab-pill cuộn ngang, hamburger → overlay đen toàn màn hình
✅ Tablet (768–1279px): grid 3 cột
✅ Desktop (≥1280px): grid 4 cột sản phẩm / 3 cột dự án, mega dropdown khi hover
✅ Scroll reveal: dùng IntersectionObserver + class "is-visible" (dùng vừa phải, không lạm dụng)
✅ Gọi API qua client.js (không fetch thẳng), luôn gắn Bearer token nếu đã đăng nhập
✅ Hiển thị toast khi thành công / lỗi
✅ Luôn có Hotline + Zalo + Messenger widget nổi góc phải (ẩn hiện sau 10s không tương tác)
✅ Tối ưu SEO: thẻ meta, alt ảnh, semantic HTML, breadcrumb schema
✅ Không dùng thư viện ngoài trừ Google Fonts
✅ Comment code rõ ràng bằng Tiếng Việt
✅ Không tràn ngang (overflow-x) ở bất kỳ kích thước màn hình

═══════════════════════════════════════════════════════════
                   THÔNG TIN TRANG CẦN TẠO (THAY ĐỔI)
═══════════════════════════════════════════════════════════

Tên file  : [VD: pages/san-pham/sofa.html]
Tên trang : [VD: Sofa]
Route     : [VD: /san-pham/sofa]
Mục đích  : [VD: Hiển thị catalog Sofa, cho phép sắp xếp + lọc giá]

─── Sections cần có (theo thứ tự từ trên xuống) ────────────

1. [Tên section]
   - Mô tả: [...]
   - Dữ liệu hiển thị: [...]
   - Tương tác: [...]

2. [Tên section]
   - Mô tả: [...]
   - Dữ liệu hiển thị: [...]
   - Tương tác: [...]

(thêm section nếu cần...)

─── API cần gọi ─────────────────────────────────────────────

| Sự kiện           | Method | Endpoint                  | Ghi chú         |
|-------------------|--------|---------------------------|-----------------|
| [VD: Load trang]  | GET    | /api/v1/[endpoint]        | [...]           |
| [VD: Submit form] | POST   | /api/v1/[endpoint]        | [...]           |

─── Trạng thái cần xử lý ────────────────────────────────────

☐ Loading skeleton khi chờ API (ảnh xám placeholder, không spinner che hết khung)
☐ Empty state khi không có dữ liệu
☐ Error state khi API lỗi
☐ [Trạng thái đặc thù của trang này nếu có]

─── Lưu ý đặc biệt cho trang này ───────────────────────────

[VD: Bộ lọc phải sync với URL params để share được link]
[VD: Form phải validate trước khi gọi API]
[VD: ...]

═══════════════════════════════════════════════════════════
                        ĐẦU RA MONG MUỐN
═══════════════════════════════════════════════════════════

Hãy tạo file [tên file] hoàn chỉnh gồm:
1. HTML: cấu trúc semantic, đầy đủ thẻ meta SEO
2. CSS: viết trong thẻ <style> hoặc file .css riêng
3. JS:  viết trong thẻ <script> hoặc file .js riêng

Code phải chạy được ngay, có dữ liệu mock để test UI.
```

---

## 📝 Ví Dụ Điền Prompt 1 — Trang Catalog Sản Phẩm (Sofa)

```
═══════════════════════════════════════════════════════════
                   THÔNG TIN DỰ ÁN (CỐ ĐỊNH)
═══════════════════════════════════════════════════════════
[... giữ nguyên phần trên ...]

═══════════════════════════════════════════════════════════
                   THÔNG TIN TRANG CẦN TẠO
═══════════════════════════════════════════════════════════

Tên file  : pages/san-pham/sofa.html
Tên trang : Sofa
Route     : /san-pham/sofa
Mục đích  : Catalog sản phẩm Sofa — đúng PRODUCT CARD RULES

─── Sections ───────────────────────────────────────────────

1. Breadcrumb
   - "Trang Chủ › Sản Phẩm › Sofa" (chữ xám, dấu › đỏ)

2. Page title
   - "Sofa" — bold đen, gạch chân đỏ 4px

3. Sort bar
   - Dropdown phải màn hình: "Sắp xếp: Giá tăng dần ▾"
   - Các lựa chọn: Mới nhất / Giá tăng dần / Giá giảm dần

4. (Desktop) Sidebar lọc giá — optional, có thể ẩn ở v1

5. Grid sản phẩm
   - 4 cột desktop / 3 cột tablet / 2 cột mobile
   - Card: đúng PRODUCT CARD RULES ở trên
     (ảnh vuông xám, tên, giá đỏ, 1 nút "Liên hệ đặt hàng", icon ♥)
   - KHÔNG hover, KHÔNG badge, KHÔNG giá gạch

6. Pagination
   - [← 1 2 3 →] số trang active nền đỏ

─── API cần gọi ─────────────────────────────────────────────

| Sự kiện         | Method | Endpoint                                  | Ghi chú            |
|-----------------|--------|--------------------------------------------|--------------------|
| Load trang      | GET    | /api/v1/products?category=sofa&page=1     | category cố định "sofa" |
| Đổi sắp xếp     | GET    | /api/v1/products?category=sofa&sort=price_asc | Không reload trang |
| Bấm "Liên hệ đặt hàng" | POST | /api/v1/consultations              | request_type="order", product_id=... |
| Toggle ♥        | POST/DELETE | /api/v1/wishlist/{product_id}        | Cần đăng nhập, nếu chưa → mở login.html |

─── Trạng thái ──────────────────────────────────────────────

☐ Skeleton 12 card khi đang load (ô xám nhấp nháy nhẹ)
☐ Empty state: "Chưa có sản phẩm Sofa nào" + nút "Xem sản phẩm khác"
☐ Bấm "Liên hệ đặt hàng" → mở MODAL mini-form (họ tên*, SĐT*, ghi chú)
   thay vì chuyển trang — submit xong hiện toast thành công

─── Lưu ý đặc biệt ──────────────────────────────────────────

- CATEGORY_SLUG = "sofa" khai báo hằng số đầu file JS, để file
  tu-nhua.html / ban-an.html / giuong.html / ban-trang-diem.html
  dùng chung product-list.js chỉ khác hằng số này
- Modal mini-form tự điền sẵn product_id + tên SP đang xem
```

---

## 📝 Ví Dụ Điền Prompt 2 — Trang Thiết Kế & Thi Công (Phòng Ngủ)

```
═══════════════════════════════════════════════════════════
                   THÔNG TIN DỰ ÁN (CỐ ĐỊNH)
═══════════════════════════════════════════════════════════
[... giữ nguyên phần trên ...]

═══════════════════════════════════════════════════════════
                   THÔNG TIN TRANG CẦN TẠO
═══════════════════════════════════════════════════════════

Tên file  : pages/thiet-ke-thi-cong/phong-ngu.html
Tên trang : Thiết Kế Phòng Ngủ
Route     : /thiet-ke-thi-cong/phong-ngu
Mục đích  : Showcase dự án thi công Phòng Ngủ + thu lead tư vấn

─── Sections ───────────────────────────────────────────────

1. Breadcrumb
   - "Trang Chủ › Thiết Kế & Thi Công › Phòng Ngủ"

2. Page title + intro
   - "Thiết Kế Phòng Ngủ" — bold đen, gạch chân đỏ
   - Đoạn giới thiệu màu xám: "Chúng tôi thiết kế và thi công theo
     yêu cầu của bạn — từ tủ âm tường, đầu giường bọc da đến toàn
     bộ không gian phòng ngủ."

3. Masonry gallery
   - 3 cột desktop / 2 cột mobile
   - Mỗi card: ảnh 4:3 placeholder xám + mô tả ngắn +
     nút "Tư vấn ngay" (viền đỏ, full-width) — ĐÚNG PROJECT CARD RULES

4. CTA banner cuối trang
   - Nền đen toàn chiều ngang
   - Chữ trắng: "Bắt đầu thiết kế không gian của bạn"
   - Nút đỏ đặc "Liên Hệ Ngay" — căn giữa

─── API cần gọi ─────────────────────────────────────────────

| Sự kiện            | Method | Endpoint                                   | Ghi chú                  |
|--------------------|--------|----------------------------------------------|--------------------------|
| Load trang         | GET    | /api/v1/services?category=phong-ngu          | category cố định "phong-ngu" |
| Bấm "Tư vấn ngay"  | POST   | /api/v1/consultations                        | request_type="design", service_id=... |
| Bấm "Liên Hệ Ngay" (banner) | — | điều hướng tới /lien-he hoặc mở modal tư vấn nhanh | |

─── Trạng thái ──────────────────────────────────────────────

☐ Skeleton ảnh xám khi đang load gallery
☐ Empty state: "Chưa có dự án nào trong danh mục này"
☐ Modal tư vấn tự điền sẵn service_id + tên phòng

─── Lưu ý đặc biệt ──────────────────────────────────────────

- CATEGORY_SLUG = "phong-ngu" — file phong-khach.html / phong-bep.html /
  phong-tho.html / phong-lam-viec.html dùng chung service-list.js,
  chỉ khác hằng số này
- Ảnh dùng aspect-ratio: 4/3 + object-fit: cover, lazy-load
```

---

## 📝 Ví Dụ Điền Prompt 3 — Trang Liên Hệ

```
═══════════════════════════════════════════════════════════
                   THÔNG TIN DỰ ÁN (CỐ ĐỊNH)
═══════════════════════════════════════════════════════════
[... giữ nguyên phần trên ...]

═══════════════════════════════════════════════════════════
                   THÔNG TIN TRANG CẦN TẠO
═══════════════════════════════════════════════════════════

Tên file  : pages/lien-he.html
Tên trang : Liên Hệ
Route     : /lien-he
Mục đích  : Thông tin liên hệ + form liên hệ tổng quát (không gắn SP/dự án)

─── Sections ───────────────────────────────────────────────

1. Page title
   - "Liên Hệ" — bold đen, gạch chân đỏ

2. Layout 2 cột (desktop) / xếp dọc (mobile)

   Cột trái:
   - 📍 Địa chỉ: Thành phố Thái Nguyên, Tỉnh Thái Nguyên
   - 📞 Hotline: [số] — chữ đỏ, href="tel:..."
   - ✉️ Email: noithatasia@gmail.com
   - Icon Zalo + Facebook (vòng tròn viền đỏ, href tĩnh)

   Cột phải:
   - Google Maps embed (iframe, bo góc 8px)

3. Form liên hệ (full-width, dưới 2 cột)
   - Họ tên (*), Số điện thoại (*), Nội dung (*)
   - Nút "Gửi Yêu Cầu" (nền đỏ đặc, full-width mobile)

─── API cần gọi ─────────────────────────────────────────────

| Sự kiện      | Method | Endpoint           | Ghi chú                          |
|--------------|--------|----------------------|----------------------------------|
| Submit form  | POST   | /api/v1/contacts    | KHÔNG gắn product_id/service_id |

─── Trạng thái ──────────────────────────────────────────────

☐ Validate: họ tên ≥2 ký tự, SĐT đúng định dạng 0xxxxxxxxx, nội dung không rỗng
☐ Submit: disable nút + spinner
☐ Success: toast "Đã gửi! Chúng tôi sẽ liên hệ sớm" + reset form
☐ Error: toast đỏ "Có lỗi xảy ra, vui lòng thử lại"

─── Lưu ý đặc biệt ──────────────────────────────────────────

- Thông tin Hotline/Zalo/Messenger nên load từ GET /api/v1/admin/settings
  (public-readable subset) để Admin đổi số mà không cần sửa code
- KHÔNG nhầm với /api/v1/consultations (dùng cho nút trên card SP/dự án)
```

---
---

# PHẦN 2 — BACKEND PROMPT TEMPLATE

---

## ⚙️ [BACKEND] Form Prompt Chung

```
═══════════════════════════════════════════════════════════
                   THÔNG TIN DỰ ÁN (CỐ ĐỊNH)
═══════════════════════════════════════════════════════════

Dự án    : Backend API — Nội Thất Asia Thái Nguyên
Framework: Python 3.11 + FastAPI
Database : MySQL 8.0 (async với aiomysql)
ORM      : SQLAlchemy 2.0 (async)
Migration: Alembic
Auth     : JWT (python-jose) + Bcrypt
           - Customer: xác thực bằng SĐT + OTP (Redis lưu OTP, TTL 5 phút)
           - Admin: xác thực riêng bằng Email + Mật khẩu, route /admin/auth/login
Cache    : Redis
Notify   : Telegram Bot API — KÊNH DUY NHẤT báo Admin có lead mới
           (Zalo/Messenger/Hotline là link tĩnh phía Frontend, KHÔNG
            tích hợp backend)

─── Cấu trúc thư mục chuẩn ─────────────────────────────────

app/
├── api/v1/[module].py            → Router & endpoints công khai/customer
├── api/v1/admin/[module].py      → Router & endpoints riêng cho Admin
├── models/[module].py            → SQLAlchemy model
├── schemas/[module].py           → Pydantic schema (in/out)
├── services/[module]_service.py  → Business logic
├── services/telegram_service.py  → Gửi thông báo Telegram (dùng chung)
├── core/
│   ├── config.py                 → Settings từ .env
│   ├── security.py               → JWT helpers (2 loại claim: customer/admin)
│   └── dependencies.py           → get_current_user, require_admin

─── Quy ước đặt tên ────────────────────────────────────────

Models   : PascalCase (VD: ConsultationRequest)
Schemas  : PascalCase + hậu tố (VD: ConsultationCreate, ConsultationOut)
Endpoints: snake_case (VD: get_consultations, create_consultation)
Biến     : snake_case
Hằng số  : UPPER_SNAKE_CASE

─── Quy tắc bắt buộc ───────────────────────────────────────

✅ Async hoàn toàn (async def, await)
✅ Dependency Injection cho DB session & current_user
✅ Pydantic validation cho request body
✅ HTTP status code đúng chuẩn (200/201/400/401/403/404/422)
✅ Response format nhất quán:
   Success: { "data": ..., "message": "..." }
   Error:   { "detail": "...", "code": "ERROR_CODE" }
✅ Phân quyền rõ ràng: customer / admin — 2 JWT claim KHÁC NHAU,
   token customer KHÔNG được dùng cho /admin/* và ngược lại
✅ Logging lỗi ra console (không lộ stack trace ra client)
✅ Docstring mô tả endpoint bằng Tiếng Việt
✅ Index DB trên các cột thường query (FK, status, slug, created_at)
✅ Nếu module liên quan lead (consultations/contacts): bắt buộc gọi
   telegram_service.notify_admin() bằng BackgroundTasks (không block response)

─── Dependencies có sẵn ────────────────────────────────────

from app.database.session   import get_db        # AsyncSession
from app.core.dependencies  import get_current_user, require_admin
from app.core.security      import create_access_token, verify_password
from app.core.config        import settings
from app.services.telegram_service import notify_admin

═══════════════════════════════════════════════════════════
                   MODULE CẦN TẠO (THAY ĐỔI)
═══════════════════════════════════════════════════════════

Tên module : [VD: consultations]
Mục đích   : [VD: Tiếp nhận yêu cầu đặt hàng/tư vấn, lưu DB và notify admin]

─── Model (models/[module].py) ──────────────────────────────

Tên bảng: [VD: consultation_requests]

Các cột:
| Tên cột       | Kiểu dữ liệu    | Ràng buộc          | Mô tả               |
|---------------|-----------------|--------------------|---------------------|
| id            | Integer         | PK, auto increment |                     |
| [tên cột]     | [String/Integer/…]| [nullable/index/…] | [mô tả]             |
| created_at    | DateTime        | default=now        |                     |
| updated_at    | DateTime        | onupdate=now       |                     |

Quan hệ:
- [VD: user_id → FK → users.id, nullable]
- [VD: product_id → FK → products.id, nullable]
- [VD: service_id → FK → services.id, nullable]

─── Schema (schemas/[module].py) ────────────────────────────

[TênModule]Create (Request body):
  [field]: [type] — [bắt buộc/optional, validation rules]

[TênModule]Out (Response):
  [field]: [type]

[TênModule]Update (nếu có PATCH, Admin):
  [field]: [type, Optional]

─── Endpoints (api/v1/[module].py) ──────────────────────────

| Method | Path                              | Auth          | Mô tả              |
|--------|-----------------------------------|---------------|--------------------|
| [GET]  | /api/v1/[module]                  | [Public/User] | [Mô tả]            |
| [POST] | /api/v1/[module]                  | [Public/User] | [Mô tả]            |
| [GET]  | /api/v1/admin/[module]             | Admin only    | [Mô tả]            |
| [PUT]  | /api/v1/admin/[module]/{id}        | Admin only    | [Mô tả]            |

─── Service Logic (services/[module]_service.py) ────────────

Hàm cần viết:
1. [tên_hàm](params) → [return type]
   Mô tả: [...]
   Bước thực hiện:
   - [bước 1]
   - [bước 2]
   - [...]

2. [tên_hàm](params) → [return type]
   Mô tả: [...]

─── Tích hợp bên ngoài (nếu có) ────────────────────────────

[VD: Sau khi lưu DB, gọi telegram_service.notify_admin(record) bằng BackgroundTasks]
[VD: KHÔNG gọi Zalo/Messenger API — các kênh này chỉ là link tĩnh ở Frontend]

─── Query đặc biệt (nếu có) ─────────────────────────────────

[VD: Lọc theo status và request_type, sắp xếp theo created_at DESC]
[VD: Join với bảng products/services để lấy tên]
[VD: Đếm số lượng theo từng status cho dashboard]

─── Test cases cần viết ─────────────────────────────────────

☐ [VD: Test tạo thành công → 201]
☐ [VD: Test thiếu field bắt buộc → 422]
☐ [VD: Test phone sai định dạng → 422]
☐ [VD: Test admin lấy danh sách không có token → 401]
☐ [VD: Test token customer gọi endpoint admin → 403]

═══════════════════════════════════════════════════════════
                        ĐẦU RA MONG MUỐN
═══════════════════════════════════════════════════════════

Hãy tạo đầy đủ 4 file:
1. app/models/[module].py
2. app/schemas/[module].py
3. app/services/[module]_service.py
4. app/api/v1/[module].py  (+ app/api/v1/admin/[module].py nếu có phần Admin)

Kèm theo:
- Script Alembic migration cho bảng mới
- Ví dụ request/response JSON cho từng endpoint
- Hướng dẫn đăng ký router vào main.py
```

---

## 📝 Ví Dụ Điền Prompt 1 — Module Consultations (Đặt hàng + Tư vấn)

```
═══════════════════════════════════════════════════════════
                   THÔNG TIN DỰ ÁN (CỐ ĐỊNH)
═══════════════════════════════════════════════════════════
[... giữ nguyên phần trên ...]

═══════════════════════════════════════════════════════════
                   MODULE CẦN TẠO
═══════════════════════════════════════════════════════════

Tên module : consultations
Mục đích   : Tiếp nhận yêu cầu "Liên hệ đặt hàng" (từ thẻ sản phẩm) và
             "Tư vấn ngay" (từ thẻ dự án thi công), lưu DB, notify Admin
             qua Telegram

─── Model ───────────────────────────────────────────────────

Tên bảng: consultation_requests

Các cột:
| Tên cột        | Kiểu         | Ràng buộc                  | Mô tả                          |
|----------------|--------------|-----------------------------|---------------------------------|
| id             | Integer      | PK, autoincrement           |                                 |
| user_id        | Integer      | FK users.id, nullable       | Nếu khách đã đăng nhập         |
| full_name      | String(100)  | NOT NULL                    |                                 |
| phone          | String(15)   | NOT NULL, index             |                                 |
| address        | String(255)  | nullable                    |                                 |
| request_type   | Enum         | order / design, NOT NULL    | order=đặt hàng SP, design=tư vấn thiết kế |
| product_id     | Integer      | FK products.id, nullable    | Bắt buộc nếu request_type=order |
| service_id     | Integer      | FK services.id, nullable    | Bắt buộc nếu request_type=design |
| note           | Text         | nullable                    |                                 |
| status         | Enum         | new/contacted/done/cancelled, default=new, index |             |
| admin_note     | Text         | nullable                    | Ghi chú nội bộ                  |
| created_at     | DateTime     | default=now, index          |                                 |
| updated_at     | DateTime     | onupdate=now                |                                 |

─── Schema ───────────────────────────────────────────────────

ConsultationCreate:
  full_name: str — bắt buộc, min_length=2
  phone: str — bắt buộc, regex=^0[0-9]{9}$
  address: str — optional
  request_type: Enum[order, design] — bắt buộc
  product_id: int — optional (validate: bắt buộc nếu request_type=order)
  service_id: int — optional (validate: bắt buộc nếu request_type=design)
  note: str — optional, max_length=500

ConsultationOut:
  id, full_name, phone, address, request_type,
  status, created_at, product_name (join), service_name (join)

ConsultationStatusUpdate (Admin):
  status: Enum[new, contacted, done, cancelled]
  admin_note: str — optional

─── Endpoints ────────────────────────────────────────────────

| Method | Path                               | Auth       | Mô tả                       |
|--------|-------------------------------------|------------|------------------------------|
| POST   | /api/v1/consultations               | Public     | Gửi yêu cầu đặt hàng/tư vấn  |
| GET    | /api/v1/consultations/my            | Customer   | Lịch sử của tôi              |
| GET    | /api/v1/admin/consultations         | Admin      | Danh sách (lọc request_type + status, phân trang) |
| GET    | /api/v1/admin/consultations/{id}    | Admin      | Chi tiết                     |
| PUT    | /api/v1/admin/consultations/{id}    | Admin      | Cập nhật status + ghi chú nội bộ |

─── Service Logic ────────────────────────────────────────────

1. create_consultation(data: ConsultationCreate, db, background_tasks, user_id=None)
   Bước:
   - Validate: nếu request_type=order → product_id bắt buộc;
               nếu request_type=design → service_id bắt buộc
   - Lưu vào DB (status=new)
   - background_tasks.add_task(notify_admin, consultation)  ← Telegram, không block
   - Return ConsultationOut

2. get_consultations_admin(db, status=None, request_type=None, page=1, limit=20)
   Bước:
   - Query có filter theo status/request_type nếu truyền vào
   - LEFT JOIN products, services để lấy tên hiển thị
   - Sắp xếp: created_at DESC
   - Return list + total_count

─── Tích hợp bên ngoài ──────────────────────────────────────

services/telegram_service.py — gọi sau khi lưu DB thành công:
  POST https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage
  {
    "chat_id": "{TELEGRAM_ADMIN_CHAT_ID}",
    "text": "🔔 Yêu cầu mới ({order|Tư vấn thiết kế})!
             👤 {full_name} | 📞 {phone}
             🛋️/🎨 {product_name hoặc service_name}
             📝 {note}"
  }

⚠️ KHÔNG gọi Zalo API hoặc Facebook Graph API ở bước này — Zalo/Messenger
chỉ là link tĩnh hiển thị cho khách bấm chat trực tiếp, không liên quan
tới luồng backend này.

─── Test cases ───────────────────────────────────────────────

☑ POST /consultations request_type=order, có product_id → 201
☑ POST /consultations request_type=order, THIẾU product_id → 422
☑ POST /consultations request_type=design, có service_id → 201
☑ Thiếu phone → 422
☑ Phone sai format → 422
☑ Admin GET danh sách không có token → 401
☑ Token customer gọi /admin/consultations → 403
☑ Admin filter status=new&request_type=order → chỉ trả đúng tập đó
☑ Admin cập nhật status=done → 200
```

---

## 📝 Ví Dụ Điền Prompt 2 — Module Contacts (Form /lien-he)

```
═══════════════════════════════════════════════════════════
                   THÔNG TIN DỰ ÁN (CỐ ĐỊNH)
═══════════════════════════════════════════════════════════
[... giữ nguyên phần trên ...]

═══════════════════════════════════════════════════════════
                   MODULE CẦN TẠO
═══════════════════════════════════════════════════════════

Tên module : contacts
Mục đích   : Tiếp nhận form liên hệ tổng quát từ trang /lien-he
             (KHÔNG gắn với sản phẩm/dự án cụ thể nào)

─── Model ───────────────────────────────────────────────────

Tên bảng: contacts

| Tên cột     | Kiểu        | Ràng buộc                   | Mô tả        |
|-------------|-------------|------------------------------|--------------|
| id          | Integer     | PK, autoincrement            |              |
| full_name   | String(100) | NOT NULL                     |              |
| phone       | String(15)  | NOT NULL, index               |              |
| content     | Text        | NOT NULL                     | Nội dung khách gửi |
| status      | Enum        | new/replied, default=new      |              |
| created_at  | DateTime    | default=now, index            |              |

─── Schema ───────────────────────────────────────────────────

ContactCreate:
  full_name: str — bắt buộc, min_length=2
  phone: str — bắt buộc, regex=^0[0-9]{9}$
  content: str — bắt buộc, min_length=5, max_length=1000

ContactOut: id, full_name, phone, content, status, created_at

─── Endpoints ────────────────────────────────────────────────

| Method | Path                       | Auth   | Mô tả                  |
|--------|----------------------------|--------|------------------------|
| POST   | /api/v1/contacts           | Public | Gửi liên hệ             |
| GET    | /api/v1/admin/contacts     | Admin  | Danh sách (phân trang)  |
| PUT    | /api/v1/admin/contacts/{id}| Admin  | Đổi status → replied    |

─── Service Logic ────────────────────────────────────────────

1. create_contact(data: ContactCreate, db, background_tasks)
   - Lưu DB (status=new)
   - background_tasks.add_task(notify_admin, contact)  ← Telegram
     Nội dung: "📞 Liên hệ mới! 👤 {full_name} | {phone}\n📝 {content}"
   - Return ContactOut

─── Test cases ───────────────────────────────────────────────

☑ POST /contacts hợp lệ → 201
☑ Thiếu content → 422
☑ Admin GET danh sách không token → 401
```

---

# PHẦN 3 — BẢNG THAM CHIẾU NHANH

## Mapping Module → File

| Module | Frontend file | Backend files |
|---|---|---|
| Trang chủ | `index.html` + `home.js` | `products.py` (featured), `services.py` (featured) |
| Catalog SP (5 trang) | `san-pham/{tu-nhua,sofa,ban-an,giuong,ban-trang-diem}.html` + `product-list.js` | `products.py`, `product_categories.py` |
| Chi tiết SP | `san-pham/detail.html` + `product-detail.js` | `products.py` |
| Catalog Thi công (5 trang) | `thiet-ke-thi-cong/{phong-ngu,...}.html` + `service-list.js` | `services.py`, `service_categories.py` |
| Chi tiết dự án | `thiet-ke-thi-cong/detail.html` + `service-detail.js` | `services.py` |
| Đặt hàng / Tư vấn nhanh | Modal mini-form trên card + `consult-form.js` | `consultations.py`, `telegram_service.py` |
| Trang tư vấn đầy đủ | `tu-van.html` + `consultation.js` | `consultations.py` |
| Liên hệ | `lien-he.html` + `contact-form.js` | `contacts.py`, `telegram_service.py` |
| Đăng nhập/Đăng ký KH | `auth/login.html`, `register.html`, `verify-otp.html` | `auth.py`, `otp_service.py` |
| Tài khoản | `tai-khoan/profile.html`, `wishlist.html` | `users.py`, `wishlist.py` |
| Đăng nhập Admin | `admin/login.html` | `admin/auth.py` |
| Admin quản trị | `admin/*.html` | `admin/dashboard.py`, `admin/products.py`, `admin/services.py`, `admin/consultations.py`, `admin/contacts.py`, `admin/settings.py` |
| Widget Zalo/Messenger/Hotline | `zalo-widget.js`, `messenger-widget.js`, `hotline-button.js` | *(không gọi backend — link tĩnh)* |

---

## Thứ Tự Build Khuyến Nghị

```
FRONTEND                                BACKEND
────────                                ───────
1. variables.css (Đỏ/Đen/Trắng/Amber)   1. Setup project + Docker + seed categories
2. navbar.js (mega dropdown)            2. DB models + migrations
   + mobile-menu.js (overlay đen)       3. Auth Customer (OTP) + Auth Admin (riêng)
3. index.html (Trang chủ)               4. Products + Product Categories API
4. san-pham/sofa.html (mẫu catalog SP)  5. Services + Service Categories API
   → nhân bản 4 file còn lại            6. Consultations API (order + design)
5. thiet-ke-thi-cong/phong-ngu.html        + telegram_service.py
   (mẫu masonry) → nhân bản 4 file còn lại 7. Contacts API
6. san-pham/detail.html                 8. Wishlist + Users API
7. tu-van.html + lien-he.html           9. Admin APIs (dashboard, settings...)
8. auth/* (login, register, OTP)        10. Tests + Deploy
9. tai-khoan/* (profile, wishlist)
10. admin/* (dashboard, products...)
```

---

*Master Prompt Templates — Nội Thất Asia Thái Nguyên v2.0*
