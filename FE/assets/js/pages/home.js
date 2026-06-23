/* ============================================================
   HOME — Logic riêng cho trang chủ (index.html):
     - Vẽ tab lọc + lưới Sản Phẩm Nổi Bật
     - Vẽ tab lọc + lưới Thiết Kế & Thi Công
     - Gắn nút yêu thích (♥) và nút mở form đặt hàng/tư vấn

   Dữ liệu sản phẩm/dự án lấy từ Asia.ProductService và
   Asia.ServiceService (xem file js/services/) — KHÔNG tự chứa
   dữ liệu riêng ở đây nữa, để trang chủ và trang catalog luôn
   đồng bộ cùng 1 nguồn dữ liệu.
   ============================================================ */
window.Asia = window.Asia || {};

Asia.HomePage = {

  init() {
    Asia.HomePage._renderTabs("product-tabs", Asia.ProductCategories, Asia.HomePage._renderProducts);
    Asia.HomePage._renderTabs("service-tabs", Asia.ServiceCategories, Asia.HomePage._renderServices);

    Asia.HomePage._renderProducts(Asia.ProductCategories[0].slug);
    Asia.HomePage._renderServices(Asia.ServiceCategories[0].slug);
    Asia.HomePage._syncViewAllLinks();

    document.addEventListener("wishlist:changed", Asia.HomePage._refreshWishlistIcons);
  },

  // Vẽ hàng tab lọc (dùng chung cho cả Sản Phẩm và Thiết Kế & Thi Công)
  _renderTabs(wrapId, categories, onSelect) {
    const wrap = document.getElementById(wrapId);
    if (!wrap) return;
    wrap.innerHTML = categories.map((c, i) =>
      `<button type="button" class="tab-pill${i === 0 ? " is-active" : ""}" data-cat="${c.slug}">${c.name}</button>`
    ).join("");

    wrap.querySelectorAll(".tab-pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        wrap.querySelectorAll(".tab-pill").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        onSelect(btn.dataset.cat);
        Asia.HomePage._syncViewAllLinks();
      });
    });
  },

  _syncViewAllLinks() {
    const productLink = document.querySelector('[data-view-all="products"]');
    const serviceLink = document.querySelector('[data-view-all="services"]');

    const activeProduct = document.querySelector('#product-tabs .tab-pill.is-active')?.dataset.cat;
    const activeService = document.querySelector('#service-tabs .tab-pill.is-active')?.dataset.cat;

    if (productLink && activeProduct) {
      productLink.href = Asia.HomePage._productPageUrl(activeProduct);
    }

    if (serviceLink && activeService) {
      serviceLink.href = Asia.HomePage._servicePageUrl(activeService);
    }
  },

  _productPageUrl(slug) {
    const map = {
      "tu-nhua": Asia.Routes.PRODUCTS.TU_NHUA,
      "sofa": Asia.Routes.PRODUCTS.SOFA,
      "ban-an": Asia.Routes.PRODUCTS.BAN_AN,
      "giuong": Asia.Routes.PRODUCTS.GIUONG,
      "ban-trang-diem": Asia.Routes.PRODUCTS.BAN_TRANG_DIEM
    };
    return map[slug] || Asia.Routes.PRODUCTS.SOFA;
  },

  _servicePageUrl(slug) {
    const map = {
      "phong-ngu": Asia.Routes.SERVICES.PHONG_NGU,
      "phong-khach": Asia.Routes.SERVICES.PHONG_KHACH,
      "phong-bep": Asia.Routes.SERVICES.PHONG_BEP,
      "phong-tho": Asia.Routes.SERVICES.PHONG_THO,
      "phong-lam-viec": Asia.Routes.SERVICES.PHONG_LAM_VIEC
    };
    return map[slug] || Asia.Routes.SERVICES.PHONG_NGU;
  },

  _renderProducts(slug) {
    const grid = document.getElementById("product-grid");
    if (!grid) return;
    const items = Asia.ProductService.getByCategory(slug).slice(0, 4); // trang chủ chỉ hiện 4 SP/danh mục
    grid.innerHTML = items.map(Asia.HomePage._productCardHtml).join("");
    Asia.HomePage._wireWishlistButtons(grid);
    Asia.HomePage._wireOrderButtons(grid);
  },

  _renderServices(slug) {
    const grid = document.getElementById("service-grid");
    if (!grid) return;
    const items = Asia.ServiceService.getByCategory(slug);
    grid.innerHTML = items.map(Asia.HomePage._serviceCardHtml).join("");
    Asia.HomePage._wireConsultButtons(grid);
  },

  // Đúng PRODUCT CARD RULES: không hover, không nhãn, không gạch giá,
  // 1 nút CTA duy nhất + icon ♥ nhỏ góc ảnh (không tính là nhãn)
  _productCardHtml(p) {
    const isFav = Asia.WishlistStore.has(p.id);
    const detailUrl = Asia.Routes.PRODUCTS.DETAIL + "?slug=" + p.slug;
    return `
      <div class="product-card">
        <div class="product-card-img" data-detail-link="${detailUrl}">
          Ảnh sản phẩm
          <button type="button" class="wishlist-btn${isFav ? " is-active" : ""}" data-wishlist-id="${p.id}" aria-label="Yêu thích">♥</button>
        </div>
        <div class="product-card-body">
          <a href="${detailUrl}" class="product-card-name">${Asia.Helpers.escapeHtml(p.name)}</a>
          <div class="product-card-price">${Asia.Formatter.currency(p.price)}</div>
          <button type="button" class="btn btn-solid btn-block"
                  data-order-id="${p.id}" data-order-name="${Asia.Helpers.escapeHtml(p.name)}">
            Liên Hệ Đặt Hàng
          </button>
        </div>
      </div>
    `;
  },

  // Đúng PROJECT CARD RULES: ảnh + tên + 1 nút đỏ "Tư vấn ngay"
  // (đổi sang nút đặc đỏ, đồng đều với nút "Liên Hệ Đặt Hàng" bên SP)
  _serviceCardHtml(s) {
    const detailUrl = Asia.Routes.SERVICES.DETAIL + "?slug=" + s.slug;
    const imageStyle = s.image
      ? `background-image:url('${s.image}'); background-size:cover; background-position:center;`
      : "";

    return `
      <div class="project-card">
        <div class="project-card-img" data-detail-link="${detailUrl}" style="${imageStyle}"></div>
        <div class="project-card-body">
          <a href="${detailUrl}" class="project-card-name">${Asia.Helpers.escapeHtml(s.name)}</a>
          <button type="button" class="btn btn-solid btn-block"
                  data-consult-id="${s.id}" data-consult-name="${Asia.Helpers.escapeHtml(s.name)}">
            Tư Vấn Ngay
          </button>
        </div>
      </div>
    `;
  },

  _wireWishlistButtons(scope) {
    Asia.Helpers.qsa("[data-detail-link]", scope).forEach((img) => {
      img.addEventListener("click", (e) => {
        if (e.target.closest("[data-wishlist-id]")) return;
        window.location.href = img.dataset.detailLink;
      });
    });

    Asia.Helpers.qsa("[data-wishlist-id]", scope).forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.dataset.wishlistId);
        const added = Asia.WishlistStore.toggle(id);
        btn.classList.toggle("is-active", added);
        Asia.Toast.success(added ? "Đã thêm vào yêu thích" : "Đã bỏ yêu thích");
      });
    });
  },

  _wireOrderButtons(scope) {
    Asia.Helpers.qsa("[data-order-id]", scope).forEach((btn) => {
      btn.addEventListener("click", () => {
        Asia.ConsultForm.open("order", { id: Number(btn.dataset.orderId), name: btn.dataset.orderName });
      });
    });
  },

  _wireConsultButtons(scope) {
    Asia.Helpers.qsa("[data-detail-link]", scope).forEach((el) => {
      el.addEventListener("click", () => {
        window.location.href = el.dataset.detailLink;
      });
    });

    Asia.Helpers.qsa("[data-consult-id]", scope).forEach((btn) => {
      btn.addEventListener("click", () => {
        Asia.ConsultForm.open("design", { id: Number(btn.dataset.consultId), name: btn.dataset.consultName });
      });
    });
  },

  _refreshWishlistIcons() {
    Asia.Helpers.qsa("[data-wishlist-id]").forEach((btn) => {
      const id = Number(btn.dataset.wishlistId);
      btn.classList.toggle("is-active", Asia.WishlistStore.has(id));
    });
  }
};

document.addEventListener("DOMContentLoaded", Asia.HomePage.init);