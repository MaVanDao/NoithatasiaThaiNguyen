/* ============================================================
   PRODUCT-DETAIL — Logic cho trang xem chi tiết 1 sản phẩm
   (san-pham/detail.html?slug=...). Đọc "slug" trên đường dẫn,
   tìm đúng sản phẩm trong Asia.ProductService, rồi vẽ ra toàn bộ
   thông tin + sản phẩm liên quan.
   ============================================================ */
window.Asia = window.Asia || {};

Asia.ProductDetailPage = {

  product: null,

  init() {
    const slug = Asia.Helpers.getQueryParam("slug");
    const product = Asia.ProductService.getBySlug(slug);

    if (!product) {
      Asia.ProductDetailPage._renderNotFound();
      return;
    }

    Asia.ProductDetailPage.product = product;
    Asia.ProductDetailPage._renderBreadcrumb(product);
    Asia.ProductDetailPage._renderInfo(product);
    Asia.ProductDetailPage._renderRelated(product);
    Asia.ProductDetailPage._wireButtons(product);

    document.addEventListener("wishlist:changed", () => {
      Asia.ProductDetailPage._refreshWishlistIcon(product);
    });
  },

  _key(slug) {
    return slug.toUpperCase().replace(/-/g, "_");
  },

  _renderNotFound() {
    const main = document.getElementById("detail-main");
    if (main) {
      main.innerHTML = `
        <div class="state-box">
          <div class="state-title">Không tìm thấy sản phẩm</div>
          <p>Sản phẩm này có thể đã ngừng kinh doanh hoặc đường dẫn không đúng.</p>
          <a href="${Asia.Routes.HOME}" class="btn btn-solid">Về Trang Chủ</a>
        </div>
      `;
    }
    document.title = "Không tìm thấy sản phẩm — Nội Thất Asia Thái Nguyên";
  },

  _renderBreadcrumb(product) {
    const catInfo = Asia.ProductCategories.find((c) => c.slug === product.category);
    const catUrl = Asia.Routes.PRODUCTS[Asia.ProductDetailPage._key(product.category)];
    const wrap = document.getElementById("breadcrumb-extra");
    if (wrap && catInfo) {
      wrap.innerHTML = `
        <span class="sep">›</span>
        <a href="${catUrl}">${catInfo.name}</a>
        <span class="sep">›</span>
        <span class="current">${Asia.Helpers.escapeHtml(product.name)}</span>
      `;
    }
    document.title = product.name + " — Nội Thất Asia Thái Nguyên";
  },

  _renderInfo(product) {
    document.getElementById("detail-name").textContent = product.name;
    document.getElementById("detail-price").textContent = Asia.Formatter.currency(product.price);
    document.getElementById("detail-material").textContent = product.material;
    document.getElementById("detail-description").textContent = product.description;

    const wishBtn = document.getElementById("detail-wishlist-btn");
    if (wishBtn) wishBtn.classList.toggle("is-active", Asia.WishlistStore.has(product.id));

    Asia.ProductDetailPage._renderGallery(product);
  },

  // Nếu sản phẩm có video (product.video), thêm 1 ô video vào dãy thumbnail
  // và gắn sự kiện bấm để chuyển khung lớn giữa ảnh ↔ video
  _renderGallery(product) {
    const thumbsWrap = document.getElementById("gallery-thumbs");
    const mainImage = document.getElementById("gallery-main-image");
    const mainVideo = document.getElementById("gallery-main-video");
    const hasVideo = !!product.video && String(product.video).trim() !== "";

    if (hasVideo) {
      const videoThumb = document.createElement("div");
      videoThumb.className = "detail-gallery-thumb has-video";
      videoThumb.setAttribute("data-media-type", "video");
      videoThumb.setAttribute("role", "button");
      videoThumb.setAttribute("tabindex", "0");
      videoThumb.textContent = "Video";
      thumbsWrap.appendChild(videoThumb);

      mainVideo.controls = true;
      mainVideo.muted = true;
      mainVideo.playsInline = true;
      mainVideo.preload = "metadata";
      mainVideo.src = product.video;
      mainVideo.load();
    }

    Asia.Helpers.qsa(".detail-gallery-thumb", thumbsWrap).forEach((thumb) => {
      thumb.addEventListener("click", () => {
        Asia.Helpers.qsa(".detail-gallery-thumb", thumbsWrap).forEach((t) => t.classList.remove("is-active"));
        thumb.classList.add("is-active");

        if (thumb.dataset.mediaType === "video" && hasVideo) {
          mainVideo.style.display = "block";
          mainImage.style.display = "none";
          mainVideo.currentTime = 0;
          mainVideo.play().catch(() => {});
        } else {
          if (!mainVideo.paused) {
            mainVideo.pause();
          }
          mainVideo.currentTime = 0;
          mainVideo.style.display = "none";
          mainImage.style.display = "flex";
        }
      });
    });

    // Mặc định: nếu có video thì mở video đầu tiên giống kiểu Shopee
    if (hasVideo) {
      const firstVideoThumb = thumbsWrap.querySelector('[data-media-type="video"]');
      if (firstVideoThumb) {
        firstVideoThumb.classList.add("is-active");
        mainVideo.style.display = "block";
        mainImage.style.display = "none";
        mainVideo.currentTime = 0;
        mainVideo.play().catch(() => {});
      }
    }
  },

  _refreshWishlistIcon(product) {
    const wishBtn = document.getElementById("detail-wishlist-btn");
    if (wishBtn) wishBtn.classList.toggle("is-active", Asia.WishlistStore.has(product.id));
  },

  _renderRelated(product) {
    const grid = document.getElementById("related-grid");
    if (!grid) return;
    const related = Asia.ProductService.getRelated(product, 4);

    if (!related.length) {
      const section = grid.closest(".related-section");
      if (section) section.style.display = "none";
      return;
    }

    grid.innerHTML = related.map(Asia.ProductDetailPage._relatedCardHtml).join("");
    Asia.Helpers.qsa("[data-detail-link]", grid).forEach((img) => {
      img.addEventListener("click", () => { window.location.href = img.dataset.detailLink; });
    });
  },

  _relatedCardHtml(p) {
    const detailUrl = Asia.Routes.PRODUCTS.DETAIL + "?slug=" + p.slug;
    return `
      <div class="product-card">
        <div class="product-card-img" data-detail-link="${detailUrl}" style="cursor:pointer;">Ảnh sản phẩm</div>
        <div class="product-card-body">
          <a href="${detailUrl}" class="product-card-name">${Asia.Helpers.escapeHtml(p.name)}</a>
          <div class="product-card-price">${Asia.Formatter.currency(p.price)}</div>
        </div>
      </div>
    `;
  },

  _wireButtons(product) {
    const orderBtn = document.getElementById("detail-order-btn");
    if (orderBtn) {
      orderBtn.addEventListener("click", () => {
        Asia.ConsultForm.open("order", { id: product.id, name: product.name });
      });
    }

    const wishBtn = document.getElementById("detail-wishlist-btn");
    if (wishBtn) {
      wishBtn.addEventListener("click", () => {
        const added = Asia.WishlistStore.toggle(product.id);
        wishBtn.classList.toggle("is-active", added);
        Asia.Toast.success(added ? "Đã thêm vào yêu thích" : "Đã bỏ yêu thích");
      });
    }
  }
};

document.addEventListener("DOMContentLoaded", Asia.ProductDetailPage.init);