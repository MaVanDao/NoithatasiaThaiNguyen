window.Asia = window.Asia || {};

Asia.ServiceDetailPage = {
  init() {
    const slug = new URLSearchParams(window.location.search).get('slug');
    const item = Asia.ServiceService.getBySlug(slug);

    if (!item) {
      document.body.innerHTML = `
        <div class="container" style="padding:80px 24px; text-align:center;">
          <h1 class="page-title">Không tìm thấy dự án</h1>
          <a href="/FE/pages/index.html" class="btn btn-solid" style="margin-top:18px;">Về trang chủ</a>
        </div>
      `;
      return;
    }

    const bc = document.getElementById('breadcrumb-current');
    if (bc) bc.textContent = item.name;
    document.title = item.name + ' — Nội Thất Asia Thái Nguyên';

    const mainImage = document.getElementById('gallery-main-image');
    const mainVideo = document.getElementById('gallery-main-video');
    const hasVideo = !!item.video && String(item.video).trim() !== '';

    if (mainImage) {
      mainImage.style.backgroundImage = `url('${item.image || ''}')`;
      mainImage.style.backgroundSize = 'cover';
      mainImage.style.backgroundPosition = 'center';
      mainImage.textContent = '';
    }

    if (hasVideo && mainVideo) {
      mainVideo.controls = true;
      mainVideo.muted = true;
      mainVideo.playsInline = true;
      mainVideo.preload = 'metadata';
      mainVideo.src = item.video;
      mainVideo.load();
    }

    const thumbs = document.getElementById('gallery-thumbs');
    if (thumbs) {
      const imageThumbs = (item.gallery || []).map((src, index) => `
        <button type="button" class="detail-gallery-thumb${index === 0 ? ' is-active' : ''}" data-media-type="image" data-thumb-src="${src}">
          <img src="${src}" alt="${Asia.Helpers.escapeHtml(item.name)}" />
        </button>
      `).join('');

      thumbs.innerHTML = imageThumbs;

      if (hasVideo) {
        thumbs.insertAdjacentHTML('beforeend', `
          <button type="button" class="detail-gallery-thumb has-video" data-media-type="video" role="button" tabindex="0">Video</button>
        `);
      }

      Asia.Helpers.qsa('[data-media-type]', thumbs).forEach((btn) => {
        btn.addEventListener('click', () => {
          const isVideo = btn.dataset.mediaType === 'video';

          Asia.Helpers.qsa('[data-media-type]', thumbs).forEach((x) => x.classList.remove('is-active'));
          btn.classList.add('is-active');

          if (isVideo && hasVideo && mainVideo && mainImage) {
            mainVideo.style.display = 'block';
            mainImage.style.display = 'none';
            mainVideo.currentTime = 0;
            mainVideo.play().catch(() => {});
          } else {
            if (!mainVideo.paused) {
              mainVideo.pause();
            }
            mainVideo.currentTime = 0;
            mainVideo.style.display = 'none';
            mainImage.style.display = 'flex';

            const src = btn.dataset.thumbSrc;
            if (src && mainImage) {
              mainImage.style.backgroundImage = `url('${src}')`;
            }
          }
        });
      });

      if (hasVideo) {
        const firstVideoThumb = thumbs.querySelector('[data-media-type="video"]');
        if (firstVideoThumb) {
          firstVideoThumb.classList.add('is-active');
          if (mainVideo && mainImage) {
            mainVideo.style.display = 'block';
            mainImage.style.display = 'none';
            mainVideo.currentTime = 0;
            mainVideo.play().catch(() => {});
          }
        }
      }
    }

    const nameEl = document.getElementById('detail-name');
    if (nameEl) nameEl.textContent = item.name;
    const areaEl = document.getElementById('detail-area');
    if (areaEl) areaEl.textContent = item.area || '';
    const styleEl = document.getElementById('detail-style');
    if (styleEl) styleEl.textContent = item.style || '';
    const descEl = document.getElementById('detail-description');
    if (descEl) descEl.textContent = item.description || '';
    const detEl = document.getElementById('detail-details');
    if (detEl) detEl.textContent = item.details || '';

    const consultBtn = document.getElementById('consult-btn');
    if (consultBtn) {
      consultBtn.addEventListener('click', () => {
        Asia.ConsultForm.open('design', { id: item.id, name: item.name });
      });
    }

    const wishBtn = document.getElementById('detail-wishlist-btn');
    if (wishBtn) {
      wishBtn.classList.toggle('is-active', Asia.WishlistStore.has(item.id));
      wishBtn.addEventListener('click', () => {
        const added = Asia.WishlistStore.toggle(item.id);
        wishBtn.classList.toggle('is-active', added);
        Asia.Toast.success(added ? 'Đã thêm vào yêu thích' : 'Đã bỏ yêu thích');
      });
    }

    document.addEventListener('wishlist:changed', () => {
      if (wishBtn) {
        wishBtn.classList.toggle('is-active', Asia.WishlistStore.has(item.id));
      }
    });

    const related = Asia.ServiceService.getRelated(item, 3);
    const relatedGrid = document.getElementById('related-grid');
    if (relatedGrid) {
      relatedGrid.innerHTML = related.map((r) => `
        <div class="project-card">
          <div class="project-card-img" style="background-image:url('${r.image || ''}'); cursor:pointer;" data-detail-link="${Asia.Routes.SERVICES.DETAIL}?slug=${r.slug}"></div>
          <div class="project-card-body">
            <div class="project-card-name">${Asia.Helpers.escapeHtml(r.name)}</div>
            <button type="button" class="btn btn-solid btn-block"
                    data-consult-id="${r.id}" data-consult-name="${Asia.Helpers.escapeHtml(r.name)}">
              Tư vấn ngay
            </button>
          </div>
        </div>
      `).join('');

      Asia.Helpers.qsa('[data-detail-link]', relatedGrid).forEach((el) => {
        el.addEventListener('click', () => {
          window.location.href = el.dataset.detailLink;
        });
      });

      Asia.Helpers.qsa('[data-consult-id]', relatedGrid).forEach((btn) => {
        btn.addEventListener('click', () => {
          Asia.ConsultForm.open('design', { id: Number(btn.dataset.consultId), name: btn.dataset.consultName });
        });
      });
    }
  }
};

document.addEventListener('DOMContentLoaded', Asia.ServiceDetailPage.init);
