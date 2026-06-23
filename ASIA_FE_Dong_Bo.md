# 🔗 SỔ TAY ĐỒNG BỘ FRONTEND
## Nội Thất Asia Thái Nguyên

Mục đích của file này: mỗi khi bạn nhờ tạo một trang mới (ví dụ trang Sofa, 
trang Phòng Ngủ, trang Liên Hệ...), bạn đính kèm file này vào. Nhờ vậy, 
trang nào được tạo ra cũng giống nhau về màu sắc, cách đặt tên, cách gọi 
nút bấm — không bị trang này khác trang kia.

Cách dùng: copy nguyên đoạn dưới, dán vào đầu prompt, rồi viết thêm câu 
cuối nói bạn cần trang gì.

---

## 1. Màu sắc và font chữ — dùng giống nhau ở mọi trang

Màu đỏ chủ đạo: #CC0000 — dùng cho giá tiền, nút bấm, viền nhấn  
Màu đen: #1A1A1A — dùng cho chữ chính, nền menu mobile, nền footer  
Màu trắng: #FFFFFF — nền chính  
Màu vàng cam: #F5A623 — chỉ dùng cho dấu chấm nhỏ trong slogan, không 
dùng ở đâu khác  

Chữ tiêu đề: font Montserrat, in đậm  
Chữ nội dung: font Inter  

---

## 2. Những file dùng chung — trang nào cũng phải gọi đúng những file này, 
## không tự đặt tên khác

Mỗi trang đều phải có sẵn:
- Phần đầu trang (header) — có logo, menu "Sản Phẩm" (xổ xuống 2 cột), 
  nút "Liên Hệ", icon tài khoản
- Menu trên điện thoại — bấm vào mở ra toàn màn hình nền đen
- Phần cuối trang (footer) — nền đen, có 3 cột thông tin
- Nút Zalo, nút Messenger và nút Hotline nổi ở góc phải mọi trang
- Khung thông báo nhỏ (toast) hiện ra khi gửi form thành công hoặc lỗi

Những file này CHỈ được viết 1 lần, các trang khác chỉ gọi lại, không 
viết lại từ đầu mỗi lần.

---

## 3. Quy tắc bắt buộc cho ô sản phẩm và ô dự án thi công

Ô sản phẩm (trong các trang Sản Phẩm):
- Không có hiệu ứng gì khi rê chuột vào
- Không gắn nhãn "Mới", "Giảm giá"...
- Không gạch giá cũ
- Có: ảnh vuông, tên sản phẩm, giá màu đỏ, và đúng 1 nút "Liên hệ đặt hàng" 
  (nút tô đỏ đặc)

Ô dự án (trong các trang Thiết Kế & Thi Công):
- Có: ảnh, tên/mô tả ngắn, và đúng 1 nút "Tư vấn ngay" (nút tô đỏ đặc — 
  giống hệt nút "Liên hệ đặt hàng" bên Sản phẩm, không còn viền nữa)

---

## 4. Tên 5 loại sản phẩm — luôn dùng đúng tên và đường dẫn này, không đổi

| Tên hiển thị     | Đường dẫn trang           |
|------------------|----------------------------|
| Tủ Nhựa          | /san-pham/tu-nhua          |
| Sofa             | /san-pham/sofa             |
| Bàn Ăn           | /san-pham/ban-an           |
| Giường           | /san-pham/giuong           |
| Bàn Trang Điểm   | /san-pham/ban-trang-diem   |

---

## 5. Tên 5 loại phòng (Thiết Kế & Thi Công) — luôn dùng đúng tên và 
## đường dẫn này, không đổi

| Tên hiển thị      | Đường dẫn trang                   |
|-------------------|-------------------------------------|
| Phòng Ngủ         | /thiet-ke-thi-cong/phong-ngu       |
| Phòng Khách       | /thiet-ke-thi-cong/phong-khach     |
| Phòng Bếp         | /thiet-ke-thi-cong/phong-bep       |
| Phòng Thờ         | /thiet-ke-thi-cong/phong-tho       |
| Phòng Làm Việc    | /thiet-ke-thi-cong/phong-lam-viec  |

---

## 6. Tên các ô thông tin trong form — luôn dùng đúng tên này, mọi trang 
## có form đều phải đặt tên giống vậy (để sau này nối với Backend không bị lệch)

| Ô thông tin trên form  | Tên gọi cố định (viết y nguyên, không đổi) |
|--------------------------|----------------------------------------------|
| Họ và tên                | full_name                                     |
| Số điện thoại            | phone                                          |
| Địa chỉ                  | address                                        |
| Ghi chú                  | note                                           |
| Sản phẩm đang xem (nếu có)| product_id                                    |
| Dự án/phòng đang xem (nếu có)| service_id                                 |
| Nội dung (form Liên Hệ)  | content                                        |

---

## 7. Mỗi trang sẽ "gửi yêu cầu" gì — ghi cố định trước, để Backend làm 
## đúng theo sau này

| Trang/Hành động                          | Tên việc cần làm (cố định)        |
|--------------------------------------------|-------------------------------------|
| Bấm "Liên hệ đặt hàng" trên ô sản phẩm     | gửi-yêu-cầu-đặt-hàng                |
| Bấm "Tư vấn ngay" trên ô dự án thi công     | gửi-yêu-cầu-tư-vấn                  |
| Gửi form ở trang Liên Hệ                   | gửi-liên-hệ-tổng-quát               |
| Đăng ký / Đăng nhập                        | đăng-ký-tài-khoản / đăng-nhập       |
| Bấm tim yêu thích trên ô sản phẩm           | thêm-bớt-yêu-thích                   |

(Khi nào làm Backend, mỗi "tên việc cần làm" ở trên sẽ ứng với đúng 1 
đường dẫn API — lúc đó mình map lại 1 lần, không cần đổi gì ở Frontend)

---

## CÁCH DÙNG FILE NÀY

Mỗi lần muốn tạo 1 trang mới, bạn viết:

"Đính kèm theo sổ tay đồng bộ Frontend ở trên. Giờ hãy tạo cho tôi 
trang [tên trang], dùng để [mục đích], có những phần sau: [kể các phần 
từ trên xuống dưới]. Nhớ dùng đúng tên gọi và đường dẫn đã quy định 
trong sổ tay."

---

*Sổ tay đồng bộ Frontend — Nội Thất Asia Thái Nguyên*
