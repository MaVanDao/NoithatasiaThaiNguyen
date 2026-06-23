window.Asia = window.Asia || {};

Asia.ServiceListPage = {
  state: {
    category: null
  },

  init() {
    const grid = document.getElementById("service-grid");
    if (!grid) return;

    Asia.ServiceListPage.state.category = grid.dataset.category;
    Asia.ServiceListPage._renderTitleAndBreadcrumb();
    Asia.ServiceListPage._render();
  },

  _categoryInfo() {
    return Asia.ServiceCategories.find((c) => c.slug === Asia.ServiceListPage.state.category);
  },

  _renderTitleAndBreadcrumb() {
    const info = Asia.ServiceListPage._categoryInfo();
    const name = info ? info.name : "";

    const bc = document.getElementById("breadcrumb-current");
    if (bc) bc.textContent = name;

    const titleEl = document.getElementById("page-title");
    if (titleEl) titleEl.textContent = name;

    document.title = name + " — Nội Thất Asia Thái Nguyên";
  },

  _render() {
    const grid = document.getElementById("service-grid");
    if (!grid) return;

    const items = Asia.ServiceService.getByCategory(Asia.ServiceListPage.state.category);

    if (!items.length) {
      grid.innerHTML = `
        <div class="state-box" style="grid-column:1/-1;">
          <div class="state-title">Chưa có dự án phù hợp</div>
          <p>Hãy quay lại sau để xem thêm các dự án mới.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = items.map(Asia.ServiceListPage._cardHtml).join("");
    Asia.ServiceListPage._wireButtons(grid);
  },

  _cardHtml(item) {
    const detailUrl = Asia.Routes.SERVICES.DETAIL + "?slug=" + item.slug;
    const imageStyle = item.image
      ? `background-image:url('${item.image}'); background-size:cover; background-position:center;`
      : "";

    return `
      <div class="project-card">
        <div class="project-card-img" data-detail-link="${detailUrl}" style="cursor:pointer; ${imageStyle}"></div>
        <div class="project-card-body">
          <a href="${detailUrl}" class="project-card-name">${Asia.Helpers.escapeHtml(item.name)}</a>
          <button type="button" class="btn btn-solid btn-block"
                  data-consult-id="${item.id}" data-consult-name="${Asia.Helpers.escapeHtml(item.name)}">
            Tư vấn ngay
          </button>
        </div>
      </div>
    `;
  },

  _wireButtons(scope) {
    Asia.Helpers.qsa("[data-detail-link]", scope).forEach((el) => {
      el.addEventListener("click", () => {
        window.location.href = el.dataset.detailLink;
      });
    });

    Asia.Helpers.qsa("[data-consult-id]", scope).forEach((btn) => {
      btn.addEventListener("click", () => {
        Asia.ConsultForm.open("design", {
          id: Number(btn.dataset.consultId),
          name: btn.dataset.consultName
        });
      });
    });
  }
};

document.addEventListener("DOMContentLoaded", Asia.ServiceListPage.init);
