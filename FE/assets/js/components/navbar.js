/* ============================================================
   NAVBAR — Tự "vẽ" ra toàn bộ phần đầu trang (logo, menu xổ
   xuống 2 cột, icon tài khoản) và cả menu điện thoại, dựa vào
   dữ liệu có sẵn trong constants/. Mọi trang chỉ cần có sẵn:
     <header id="site-header"></header>
   rồi nhúng file này vào — KHÔNG cần viết tay HTML menu lặp lại.
   ============================================================ */
window.Asia = window.Asia || {};

Asia.Navbar = {

  init() {
    const headerRoot = document.getElementById("site-header");
    if (!headerRoot) return;

    // CSS đang chờ phần tử có class="site-header" (không phải chỉ id),
    // nên phải tự gắn thêm class này vào, nếu không toàn bộ style menu
    // ngang sẽ bị bỏ qua và các phần tử rơi xuống xếp dọc
    headerRoot.classList.add("site-header");

    headerRoot.innerHTML = Asia.Navbar._headerHtml();
    document.body.appendChild(Asia.Navbar._mobileBackdropEl());
    document.body.appendChild(Asia.Navbar._mobileMenuEl());

    Asia.Navbar._renderMegaLists();
    Asia.Navbar._renderMobileMenuLists();
    Asia.Navbar._renderAccountArea();
    Asia.Navbar._wireHamburger();

    // Khi đăng nhập/đăng xuất ở đâu đó, icon tài khoản tự cập nhật lại
    document.addEventListener("auth:changed", Asia.Navbar._renderAccountArea);
    document.addEventListener("auth:changed", Asia.Navbar._renderMobileMenuLists);
  },

  // "tu-nhua" → "TU_NHUA" để khớp đúng tên biến trong constants/routes.js
  _key(slug) {
    return slug.toUpperCase().replace(/-/g, "_");
  },

  _logoSvg() {
    return '<img src="/FE/assets/images/logo/logo.png" alt="Nội Thất Asia Thái Nguyên" class="logo-mark" width="40" height="40" loading="eager">';
  },

  // Icon người dùng tạm thời (style đơn giản giống icon Flaticon).
  // Khi có file icon thật bạn tải từ Flaticon, thay nội dung hàm này
  // bằng <img src="..."> trỏ tới file đó.
  _personIconSvg() {
    return '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'
      + '<path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.4c-3.5 0-9.8 1.7-9.8 5.2v2.2h19.6v-2.2c0-3.5-6.3-5.2-9.8-5.2z"/>'
      + '</svg>';
  },

  _headerHtml() {
    return `
      <div class="container">
        <a href="${Asia.Routes.HOME}" class="logo">
          ${Asia.Navbar._logoSvg()}
          <span class="logo-text">Nội Thất Asia<span>Thái Nguyên</span></span>
        </a>

        <nav class="nav-desktop">
          <div class="nav-item">
            <button class="nav-link" type="button">Sản Phẩm <span class="caret">▾</span></button>
            <div class="mega">
              <div class="mega-col-list" id="mega-products"></div>
            </div>
          </div>

          <div class="nav-item">
            <button class="nav-link" type="button">Thiết Kế &amp; Thi Công <span class="caret">▾</span></button>
            <div class="mega">
              <div class="mega-col-list" id="mega-services"></div>
            </div>
          </div>

          <a href="${Asia.Routes.CONTACT}" class="nav-link">Liên Hệ</a>

          <!-- Person icons created by Febrian Hidayat - Flaticon (flaticon.com/free-icons/person) -->
          <div class="account-item" id="account-area"></div>
        </nav>

        <button class="hamburger" type="button" data-menu-open aria-label="Mở menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    `;
  },

  _mobileBackdropEl() {
    const el = document.createElement("div");
    el.className = "mobile-menu-backdrop";
    el.setAttribute("data-mobile-backdrop", "");
    return el;
  },

  _mobileMenuEl() {
    const el = document.createElement("div");
    el.className = "mobile-menu";
    el.setAttribute("data-mobile-menu", "");
    el.innerHTML = `
      <div class="mobile-menu-top">
        <button class="mobile-menu-close" type="button" data-menu-close aria-label="Đóng menu">&times;</button>
      </div>
      <div class="mobile-menu-list">
        <div class="mobile-menu-group-label">Sản Phẩm</div>
        <div id="mobile-products"></div>

        <div class="mobile-menu-group-label">Thiết Kế &amp; Thi Công</div>
        <div id="mobile-services"></div>

        <a href="${Asia.Routes.CONTACT}" class="btn btn-solid btn-block mobile-menu-cta">Liên Hệ</a>

        <div class="mobile-menu-group-label">Tài Khoản</div>
        <div id="mobile-account"></div>
      </div>
    `;
    return el;
  },

  _renderMegaLists() {
    document.getElementById("mega-products").innerHTML = Asia.ProductCategories.map((c) =>
      `<a href="${Asia.Routes.PRODUCTS[Asia.Navbar._key(c.slug)]}" class="mega-link">${c.name}</a>`
    ).join("");

    document.getElementById("mega-services").innerHTML = Asia.ServiceCategories.map((c) =>
      `<a href="${Asia.Routes.SERVICES[Asia.Navbar._key(c.slug)]}" class="mega-link">${c.name}</a>`
    ).join("");
  },

  _renderMobileMenuLists() {
    document.getElementById("mobile-products").innerHTML = Asia.ProductCategories.map((c) =>
      `<a href="${Asia.Routes.PRODUCTS[Asia.Navbar._key(c.slug)]}" class="mobile-menu-item">${c.name} <span class="arrow">→</span></a>`
    ).join("");

    document.getElementById("mobile-services").innerHTML = Asia.ServiceCategories.map((c) =>
      `<a href="${Asia.Routes.SERVICES[Asia.Navbar._key(c.slug)]}" class="mobile-menu-item">${c.name} <span class="arrow">→</span></a>`
    ).join("");

    const isLoggedIn = Asia.AuthStore.isLoggedIn();
    document.getElementById("mobile-account").innerHTML = isLoggedIn
      ? `<a href="${Asia.Routes.ACCOUNT.PROFILE}" class="mobile-menu-item">Hồ Sơ Của Tôi <span class="arrow">→</span></a>
         <a href="${Asia.Routes.ACCOUNT.WISHLIST}" class="mobile-menu-item">Sản Phẩm Yêu Thích <span class="arrow">→</span></a>`
      : `<a href="${Asia.Routes.AUTH.LOGIN}" class="mobile-menu-item">Đăng Nhập / Đăng Ký <span class="arrow">→</span></a>`;
  },

  _renderAccountArea() {
    const area = document.getElementById("account-area");
    if (!area) return;

    const isLoggedIn = Asia.AuthStore.isLoggedIn();
    if (!isLoggedIn) {
      area.innerHTML = `<a href="${Asia.Routes.AUTH.LOGIN}" class="account-trigger" aria-label="Đăng nhập">${Asia.Navbar._personIconSvg()}</a>`;
      return;
    }

    const user = Asia.UserStore.getUser();
    area.innerHTML = `
      <button class="account-trigger" type="button" aria-label="Tài khoản">${Asia.Navbar._personIconSvg()}</button>
      <div class="account-dropdown">
        <div class="account-dropdown-name">${(user && user.full_name) || "Tài khoản"}</div>
        <a href="${Asia.Routes.ACCOUNT.PROFILE}" class="account-dropdown-link">Hồ sơ của tôi</a>
        <a href="${Asia.Routes.ACCOUNT.WISHLIST}" class="account-dropdown-link">Sản phẩm yêu thích</a>
        <a href="${Asia.Routes.ACCOUNT.CONSULTATIONS}" class="account-dropdown-link">Lịch sử yêu cầu</a>
        <div class="account-dropdown-divider"></div>
        <button class="account-dropdown-link" type="button" data-logout-btn>Đăng xuất</button>
      </div>
    `;

    const logoutBtn = area.querySelector("[data-logout-btn]");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        Asia.AuthStore.clearToken();
        Asia.Toast.success("Đã đăng xuất");
        window.location.href = Asia.Routes.HOME;
      });
    }
  },

  _wireHamburger() {
    const btn = document.querySelector("[data-menu-open]");
    if (btn) btn.addEventListener("click", () => Asia.MobileMenu.open());
  }
};

document.addEventListener("DOMContentLoaded", Asia.Navbar.init);