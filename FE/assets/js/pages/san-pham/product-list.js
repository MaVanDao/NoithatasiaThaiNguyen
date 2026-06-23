/* ============================================================
   PRODUCT-LIST — Logic DÙNG CHUNG cho cả 5 trang catalog sản phẩm
   (tu-nhua.html, sofa.html, ban-an.html, giuong.html,
   ban-trang-diem.html). Mỗi trang chỉ khác đúng 1 chỗ:
     <div class="product-grid" id="product-grid" data-category="sofa">
   File này tự đọc data-category đó để biết đang ở trang nào.
   ============================================================ */
window.Asia = window.Asia || {};

Asia.ProductListPage = {

  state: {
    category: null,
    sort: "newest",
    page: 1,
    perPage: 12,
    priceMax: 30000000
  },

  init() {
    const grid = document.getElementById("product-grid");
    if (!grid) return;
    Asia.ProductListPage.state.category = grid.dataset.category;

    Asia.ProductListPage._renderTitleAndBreadcrumb();
    Asia.ProductListPage._wireSort();
    Asia.ProductListPage._wireFilter();
    Asia.ProductListPage._render();

    document.addEventListener("wishlist:changed", Asia.ProductListPage._refreshWishlistIcons);
  },

  _categoryInfo() {
    return Asia.ProductCategories.find((c) => c.slug === Asia.ProductListPage.state.category);
  },

  _renderTitleAndBreadcrumb() {
    const info = Asia.ProductListPage._categoryInfo();
    const name = info ? info.name : "";
    const bc = document.getElementById("breadcrumb-current");
    if (bc) bc.textContent = name;
    const titleEl = document.getElementById("page-title");
    if (titleEl) titleEl.textContent = name;
    document.title = name + " — Nội Thất Asia Thái Nguyên";
  },

  _wireSort() {
    const select = document.getElementById("sort-select");
    if (!select) return;
    select.addEventListener("change", () => {
      Asia.ProductListPage.state.sort = select.value;
      Asia.ProductListPage.state.page = 1;
      Asia.ProductListPage._render();
    });
  },

  _wireFilter() {
    const range = document.getElementById("filter-price");
    const valueEl = document.getElementById("filter-price-value");
    if (!range) return;
    // Kéo thanh trượt: chỉ cập nhật số hiển thị, CHƯA lọc ngay (đỡ giật)
    range.addEventListener("input", () => {
      if (valueEl) valueEl.textContent = Asia.Formatter.currency(Number(range.value));
    });
    // Thả tay ra: mới thực sự lọc lại danh sách
    range.addEventListener("change", () => {
      Asia.ProductListPage.state.priceMax = Number(range.value);
      Asia.ProductListPage.state.page = 1;
      Asia.ProductListPage._render();
    });
  },

  _getFilteredSorted() {
    const { category, sort, priceMax } = Asia.ProductListPage.state;
    let items = Asia.ProductService.getByCategory(category).slice();
    items = items.filter((p) => p.price <= priceMax);

    if (sort === "price_asc") items.sort((a, b) => a.price - b.price);
    else if (sort === "price_desc") items.sort((a, b) => b.price - a.price);
    else items.sort((a, b) => b.id - a.id); // "Mới nhất" — giả lập bằng id lớn hơn

    return items;
  },

  _render() {
    const grid = document.getElementById("product-grid");
    if (!grid) return;

    const all = Asia.ProductListPage._getFilteredSorted();
    const { page, perPage } = Asia.ProductListPage.state;
    const totalPages = Math.max(1, Math.ceil(all.length / perPage));
    const safePage = Math.min(page, totalPages);
    const start = (safePage - 1) * perPage;
    const pageItems = all.slice(start, start + perPage);

    const countEl = document.getElementById("result-count");
    if (countEl) {
      countEl.textContent = all.length
        ? `Hiển thị ${start + 1}–${start + pageItems.length} trong ${all.length} sản phẩm`
        : "Không có sản phẩm phù hợp";
    }

    if (!pageItems.length) {
      grid.innerHTML = `
        <div class="state-box span-full">
          <div class="state-title">Chưa có sản phẩm phù hợp</div>
          <p>Hãy thử kéo thanh giá rộng hơn.</p>
        </div>`;
    } else {
      grid.innerHTML = pageItems.map(Asia.ProductListPage._cardHtml).join("");
      Asia.ProductListPage._wireCardButtons(grid);
    }

    Asia.ProductListPage._renderPagination(totalPages, safePage);
  },

  // Đúng PRODUCT CARD RULES: không hover, không nhãn, không gạch giá
  // Ảnh + tên SP bấm vào → mở trang chi tiết; nút CTA mở pop-up tư vấn
  _cardHtml(p) {
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

  _wireCardButtons(scope) {
    // Bấm vào ảnh sản phẩm → mở trang chi tiết (trừ khi bấm đúng icon ♥)
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
    Asia.Helpers.qsa("[data-order-id]", scope).forEach((btn) => {
      btn.addEventListener("click", () => {
        Asia.ConsultForm.open("order", { id: Number(btn.dataset.orderId), name: btn.dataset.orderName });
      });
    });
  },

  _refreshWishlistIcons() {
    Asia.Helpers.qsa("[data-wishlist-id]").forEach((btn) => {
      const id = Number(btn.dataset.wishlistId);
      btn.classList.toggle("is-active", Asia.WishlistStore.has(id));
    });
  },

  _renderPagination(totalPages, currentPage) {
    const wrap = document.getElementById("pagination");
    if (!wrap) return;
    if (totalPages <= 1) { wrap.innerHTML = ""; return; }

    let html = `<button type="button" class="page-btn" data-page="${currentPage - 1}"${currentPage === 1 ? " disabled" : ""}>←</button>`;
    for (let i = 1; i <= totalPages; i++) {
      html += `<button type="button" class="page-btn${i === currentPage ? " is-active" : ""}" data-page="${i}">${i}</button>`;
    }
    html += `<button type="button" class="page-btn" data-page="${currentPage + 1}"${currentPage === totalPages ? " disabled" : ""}>→</button>`;
    wrap.innerHTML = html;

    Asia.Helpers.qsa(".page-btn", wrap).forEach((btn) => {
      btn.addEventListener("click", () => {
        const p = Number(btn.dataset.page);
        if (p < 1 || p > totalPages || btn.disabled) return;
        Asia.ProductListPage.state.page = p;
        Asia.ProductListPage._render();
        const grid = document.getElementById("product-grid");
        if (grid) window.scrollTo({ top: grid.offsetTop - 100, behavior: "smooth" });
      });
    });
  }
};

document.addEventListener("DOMContentLoaded", Asia.ProductListPage.init);