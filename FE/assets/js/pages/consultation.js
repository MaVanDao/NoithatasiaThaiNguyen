/* ============================================================
   CONSULTATION — Logic cho trang đăng ký tư vấn đầy đủ (tu-van.html).
   Khác với consult-form.js (form nhanh trong pop-up), trang này
   có đầy đủ thông tin hơn: địa chỉ, chọn loại yêu cầu + danh mục...

   Có thể mở trang với sẵn thông tin, ví dụ từ nút "Liên hệ đặt hàng"
   trên trang chi tiết SP:
     tu-van.html?product_id=201&product_name=Sofa%20Góc%20Chữ%20L
   hoặc từ dự án thi công:
     tu-van.html?service_id=601&service_name=Phòng%20Ngủ%20...

   ⚠️ Backend /api/v1/consultations CHƯA có — đang GIẢ LẬP gửi
   thành công, xem ghi chú trong _handleSubmit().
   ============================================================ */
window.Asia = window.Asia || {};

Asia.ConsultationPage = {

  init() {
    Asia.ConsultationPage._renderCategoryOptions();
    Asia.ConsultationPage._wireTypeToggle();
    Asia.ConsultationPage._prefillFromQuery();
    Asia.ConsultationPage._wireSubmit();
  },

  // Nếu khách bấm "Liên hệ đặt hàng/Tư vấn ngay" từ nơi khác và được
  // chuyển tới đây kèm thông tin trên URL, tự điền sẵn cho khách
  _prefillFromQuery() {
    const productId = Asia.Helpers.getQueryParam("product_id");
    const productName = Asia.Helpers.getQueryParam("product_name");
    const serviceId = Asia.Helpers.getQueryParam("service_id");
    const serviceName = Asia.Helpers.getQueryParam("service_name");

    if (productId) {
      const radio = document.querySelector('input[name="request_type"][value="order"]');
      if (radio) radio.checked = true;
      Asia.ConsultationPage._toggleCategoryRow("order");
      const noteEl = document.getElementById("field-note");
      if (noteEl && productName) noteEl.value = "Sản phẩm quan tâm: " + productName;
    } else if (serviceId) {
      const radio = document.querySelector('input[name="request_type"][value="design"]');
      if (radio) radio.checked = true;
      Asia.ConsultationPage._toggleCategoryRow("design");
      const noteEl = document.getElementById("field-note");
      if (noteEl && serviceName) noteEl.value = "Dự án quan tâm: " + serviceName;
    }
  },

  _renderCategoryOptions() {
    const productSelect = document.getElementById("field-product-category");
    const serviceSelect = document.getElementById("field-service-category");

    if (productSelect) {
      productSelect.innerHTML = '<option value="">— Chọn loại sản phẩm —</option>' +
        Asia.ProductCategories.map((c) => `<option value="${c.slug}">${c.name}</option>`).join("");
    }
    if (serviceSelect) {
      serviceSelect.innerHTML = '<option value="">— Chọn loại phòng —</option>' +
        Asia.ServiceCategories.map((c) => `<option value="${c.slug}">${c.name}</option>`).join("");
    }
  },

  // Bấm chọn "Đặt hàng sản phẩm" hay "Tư vấn thiết kế" thì đổi dropdown
  // danh mục tương ứng hiện ra, cái còn lại tự ẩn đi
  _wireTypeToggle() {
    Asia.Helpers.qsa('input[name="request_type"]').forEach((radio) => {
      radio.addEventListener("change", () => Asia.ConsultationPage._toggleCategoryRow(radio.value));
    });
  },

  _toggleCategoryRow(type) {
    const productRow = document.getElementById("product-category-row");
    const serviceRow = document.getElementById("service-category-row");
    if (productRow) productRow.style.display = type === "order" ? "block" : "none";
    if (serviceRow) serviceRow.style.display = type === "design" ? "block" : "none";
  },

  _wireSubmit() {
    const form = document.getElementById("tu-van-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      Asia.ConsultationPage._handleSubmit(form);
    });
  },

  _handleSubmit(form) {
    const fullName = form.full_name.value.trim();
    const phone = form.phone.value.trim();
    const requestTypeEl = form.querySelector('input[name="request_type"]:checked');

    if (!Asia.Validator.isRequired(fullName) || !Asia.Validator.minLength(fullName, 2)) {
      Asia.Toast.error("Vui lòng nhập họ tên (ít nhất 2 ký tự)");
      return;
    }
    if (!Asia.Validator.isPhone(phone)) {
      Asia.Toast.error("Số điện thoại không hợp lệ (VD: 0912345678)");
      return;
    }
    if (!requestTypeEl) {
      Asia.Toast.error("Vui lòng chọn loại yêu cầu");
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = "Đang gửi...";

    // ----- GIẢ LẬP gửi thành công (xem ghi chú đầu file) -----
    setTimeout(() => {
      Asia.ConsultationPage._showSuccess(fullName);
    }, 700);

    /* ----- Đoạn THẬT sẽ dùng khi Backend đã có /api/v1/consultations:
    const payload = {
      full_name: fullName,
      phone: phone,
      address: form.address.value.trim(),
      request_type: requestTypeEl.value,
      note: form.note.value.trim()
    };
    Asia.apiClient.post(Asia.Api.CONSULTATIONS, payload)
      .then(() => Asia.ConsultationPage._showSuccess(fullName))
      .catch(() => {
        Asia.Toast.error("Có lỗi xảy ra, vui lòng thử lại");
        submitBtn.disabled = false;
        submitBtn.textContent = "Đăng Ký Tư Vấn Ngay";
      });
    */
  },

  _showSuccess(fullName) {
    const formWrap = document.getElementById("tu-van-form-wrap");
    const successWrap = document.getElementById("tu-van-success");
    if (formWrap) formWrap.style.display = "none";
    if (!successWrap) return;

    successWrap.style.display = "block";
    const nameEl = successWrap.querySelector("[data-success-name]");
    if (nameEl) nameEl.textContent = fullName;

    let seconds = 10;
    const counterEl = successWrap.querySelector("[data-countdown]");
    const timer = setInterval(() => {
      seconds--;
      if (counterEl) counterEl.textContent = seconds;
      if (seconds <= 0) {
        clearInterval(timer);
        window.location.href = Asia.Routes.HOME;
      }
    }, 1000);
  }
};

document.addEventListener("DOMContentLoaded", Asia.ConsultationPage.init);