# 📍 TRẠNG THÁI DỰ ÁN — NỘI THẤT ASIA THÁI NGUYÊN
> File này dùng để mở cuộc chat MỚI với Claude mà không mất ngữ cảnh.
> Dán link file này (qua GitHub) đầu tiên mỗi khi bắt đầu chat mới.
> Cập nhật lần cuối: xem ngày commit gần nhất trên GitHub.

---

## 1. TỔNG QUAN DỰ ÁN

- **Thương hiệu:** Nội Thất Asia Thái Nguyên
- **Slogan:** "Trung thực · Tiên phong · Trách nhiệm"
- **Loại site:** Catalog sản phẩm + Thiết kế & Thi công + Thu lead tư vấn (KHÔNG có giỏ hàng/thanh toán)
- **Frontend:** HTML/CSS/JS thuần (không framework, không build tool)
- **Backend:** Python + FastAPI + MySQL (CHƯA code, mới có tài liệu thiết kế)
- **Brand:** Đỏ `#CC0000` / Đen `#1A1A1A` / Trắng / Vàng cam `#F5A623` (chỉ dùng cho dấu chấm slogan)
- **Font:** Montserrat (tiêu đề) + Inter (nội dung)

## 2. TÀI LIỆU THAM CHIẾU (đọc trước khi code bất cứ gì)

Trong repo có các file tài liệu sau — LUÔN ưu tiên các quy tắc trong đây hơn là suy đoán:
- `ASIA_THAINGUYEN_System_Architecture.md` — kiến trúc tổng thể FE+BE, sơ đồ DB, API
- `ASIA_FE_Dong_Bo.md` — quy tắc bắt buộc để các trang Frontend đồng bộ (màu, tên field, route...)
- `ASIA_Prompts.md` — mẫu prompt soạn sẵn để tạo trang FE / module BE mới

## 3. CẤU TRÚC THƯ MỤC THỰC TẾ (đã thống nhất — "Kiểu B")

```
FE/
├── assets/
│   ├── css/        (10 file: variables, reset, typography, layout,
│   │                components, animations, utilities, responsive,
│   │                account, admin)
│   └── js/
│       ├── constants/   (app-config, roles, routes, product-categories,
│       │                 service-categories, api-endpoints)
│       ├── utils/        (storage, phone, validator, formatter, debounce, helpers)
│       ├── api/          (client.js)
│       ├── store/        (auth, user, app, wishlist).store.js
│       ├── services/     (product.service.js, service.service.js — DỮ LIỆU MẪU)
│       ├── components/   (navbar, mobile-menu, footer, toast, modal,
│       │                 consult-form, scroll-reveal, hotline-button,
│       │                 zalo-widget, messenger-widget)
│       └── pages/
│           ├── home.js
│           ├── consultation.js        (cho tu-van.html)
│           └── san-pham/ (product-list.js, product-detail.js)
├── pages/
│   ├── index.html
│   ├── tu-van.html
│   ├── lien-he.html                  ← User tự code
│   ├── san-pham/ (tu-nhua, sofa, ban-an, giuong, ban-trang-diem, detail).html
│   ├── thiet-ke-thi-cong/*.html      ← User tự code
│   ├── auth/        ← CHƯA LÀM
│   └── tai-khoan/   ← CHƯA LÀM
└── admin/           ← CHƯA LÀM (KHÔNG nằm trong pages/)
```

## 4. QUY TẮC BẮT BUỘC — KHÔNG VI PHẠM

1. **Đường dẫn tuyệt đối, luôn có `/FE/` ở đầu:**
   `/FE/assets/css/...`, `/FE/assets/js/...`, `/FE/pages/...`, `/FE/admin/...`
   (Không dùng `../` tương đối — đây là quy ước riêng của dự án này.)

2. **Không dùng `import`/`export` ES Module.** Mọi JS gắn vào 1 object toàn cục
   `window.Asia`. Mỗi trang nhúng nhiều `<script src="...">` theo ĐÚNG thứ tự:
   constants → utils → api/client.js → store → components → services → pages/*.js

3. **PRODUCT CARD RULES:** ô sản phẩm KHÔNG hover, KHÔNG nhãn (badge), KHÔNG
   giá gạch ngang. 1 nút CTA đặc đỏ "Liên Hệ Đặt Hàng". Ô dự án thi công cũng
   dùng nút **đặc đỏ** "Tư Vấn Ngay" (đã đổi từ viền đỏ → đặc đỏ, đồng bộ với SP).

4. **Trước khi sửa `components.css` hoặc thêm class CSS mới → LUÔN hỏi ý kiến
   user trước, không tự thêm.**

5. **Lead/Tư vấn dùng field `address` (1 ô địa chỉ chung)** — KHÔNG dùng
   `email`/`province`/`district`/`preferred_time` (đã bỏ các field này).
   `request_type` chỉ có 2 giá trị: `order` (đặt hàng SP) hoặc `design` (tư vấn thiết kế).

6. **3 nút nổi góc phải:** Hotline (đỏ) + Zalo (xanh Zalo) + Messenger (xanh
   Messenger) — đều là LINK TĨNH, không gọi API. Tự động ẩn khi kéo tới
   footer (nếu đã làm — kiểm tra lại, có thể chưa xong).

7. **Backend chưa tồn tại.** Mọi dữ liệu sản phẩm/dự án đang là MOCK trong
   `product.service.js`/`service.service.js`. Code đã chuẩn bị sẵn đoạn gọi
   API thật (dạng comment) — chỉ cần bỏ comment khi Backend xong.

## 5. ĐÃ XONG

- ✅ Toàn bộ 10 file CSS
- ✅ Toàn bộ JS nền tảng (constants/utils/api/store)
- ✅ Toàn bộ components dùng chung (navbar, footer, mobile menu drawer 40% bề
     ngang trượt từ phải, toast, modal, 3 widget nổi)
- ✅ Trang chủ `index.html`
- ✅ 5 trang catalog sản phẩm + trang chi tiết SP (có gallery + video tùy chọn)
- ✅ Trang `tu-van.html` (form tư vấn đầy đủ)
- ✅ User tự code: `lien-he.html`, các trang `thiet-ke-thi-cong/*.html`

## 6. ĐANG LÀM / CHƯA XONG (việc tiếp theo)

- ⏳ Trang chi tiết SP: sửa lỗi responsive mobile (dãy thumbnail tràn ngang —
     đang sửa, có thể chưa xong hẳn — kiểm tra `.detail-gallery-thumbs` cần
     `overflow-x:auto`)
- ⏳ Footer Fanpage Facebook: khung chưa lấp đầy hết cột (do `width=240` cố
     định trong link nhúng) — đang chờ quyết định tăng width
- ⏳ Logo: vẫn đang dùng hình tam giác SVG vẽ tạm, CHƯA có ảnh logo thật
- ⏳ Khu vực Đăng nhập/Đăng ký (`auth/*.html`) — CHƯA BẮT ĐẦU
- ⏳ Khu vực Tài khoản (`tai-khoan/*.html`) — CHƯA BẮT ĐẦU
- ⏳ Khu vực Admin (`admin/*`) — CHƯA BẮT ĐẦU
- ⏳ Toàn bộ Backend — CHƯA BẮT ĐẦU

## 7. GHI CHÚ KHÁC

- User có 3 AI agent riêng (`backend-only.agent.md`, `frontend-only.agent.md`,
  `fullstack-site-maintainer.agent.md`) cũng đang chỉnh sửa code trong cùng
  repo — một số file (CSS footer, footer.js) đã được các agent đó sửa và dán
  lại cho Claude để đồng bộ. Khi mở chat mới, nên **đọc lại các file thực tế
  trên GitHub** thay vì tin tưởng 100% nội dung trong các đoạn code cũ ở chat
  trước, vì có thể đã bị sửa thêm bởi agent khác.
