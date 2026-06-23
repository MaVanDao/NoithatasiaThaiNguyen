/* ============================================================
   FOOTER — Tự "vẽ" chân trang (logo+slogan, danh sách Sản Phẩm,
   thông tin liên hệ) từ dữ liệu trong constants/ và app.store.js.
   Trang chỉ cần có sẵn: <footer id="site-footer"></footer>
   ============================================================ */
window.Asia = window.Asia || {};

Asia.Footer = {
  init() {
    const root = document.getElementById("site-footer");
    if (!root) return;

    // Cùng lỗi như navbar.js: CSS cần class="site-footer", không chỉ id
    root.classList.add("site-footer");

    const cfg = Asia.AppStore.getSettings();
    root.innerHTML = Asia.Footer._html(cfg);
  },

  _key(slug) {
    return slug.toUpperCase().replace(/-/g, "_");
  },

  // Chèn dấu chấm màu vàng cam vào giữa slogan, ví dụ:
  // "Trung thực · Tiên phong · Trách nhiệm"
  _sloganHtml(slogan) {
    return slogan
      .split("·")
      .map((w) => w.trim())
      .join(' <span class="dot">·</span> ');
  },

  _html(cfg) {
    const productLinks = Asia.ProductCategories.map((c) =>
      `<a href="${Asia.Routes.PRODUCTS[Asia.Footer._key(c.slug)]}">${c.name}</a>`
    ).join("");

    const serviceLinks = Asia.ServiceCategories.map((c) =>
      `<a href="${Asia.Routes.SERVICES[Asia.Footer._key(c.slug)]}">${c.name}</a>`
    ).join("");

    return `
      <div class="container">
        <div class="footer-grid">

          <div>
            <div class="footer-col-title">Nội Thất Asia Thái Nguyên</div>
          </div>

          <div>
            <div class="footer-col-title">Vị trí</div>
            <div class="footer-map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.3236875594653!2d105.80185927472942!3d21.587350068360003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313527ade024592b%3A0xce136a3ce2f3b1a0!2zTuG7mWkgVGjhuqV0IEFzaWEgVGjDoWkgTmd1ecOqbg!5e1!3m2!1svi!2s!4v1782100242000!5m2!1svi!2s"
                width="100%"
                height="240"
                style="border:0; border-radius:10px;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Bản đồ vị trí Nội Thất Asia Thái Nguyên"
              ></iframe>
            </div>
          </div>

          <div>
            <div class="footer-col-title">Thông tin liên hệ</div>
            <div class="footer-contact">
              <span>${cfg.ADDRESS}</span>
              <a href="${Asia.Phone.toTelLink(cfg.HOTLINE)}" class="tel">${Asia.Phone.format(cfg.HOTLINE)}</a>
              <span>${cfg.EMAIL}</span>
            </div>
            <div class="footer-social">
              <a href="${cfg.ZALO_LINK}" class="social-icon" aria-label="Zalo">Z</a>
              <a href="${cfg.MESSENGER_LINK}" class="social-icon" aria-label="Messenger">M</a>
            </div>
          </div>

          <div>
            <div class="footer-col-title" style="text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; margin-bottom: 15px;">FANPAGE</div>
            <div class="footer-fanpage-wrap">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnoithatnhuathainguyen%2F&tabs=&width=280&height=450&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                width="300"
                height="450"
                style="border:0; overflow:hidden; border-radius:10px; display:block; width:280px; max-width:100%;"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Fanpage Facebook Nội Thất Asia Thái Nguyên"
              ></iframe>
            </div>
          </div>

        </div>
        <div class="footer-bottom">
          © ${new Date().getFullYear()} ${cfg.SITE_NAME}. Mọi quyền được bảo lưu.
        </div>
      </div>
    `;
  }
};

document.addEventListener("DOMContentLoaded", Asia.Footer.init);