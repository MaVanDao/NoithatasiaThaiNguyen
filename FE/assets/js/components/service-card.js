/* SERVICE-CARD */
window.Asia = window.Asia || {};
Asia.ServiceCard = {
  html(item) {
    return `
      <article class="service-card">
        <div class="service-card-img"><img src="${item.image || '/FE/assets/images/placeholders/service.png'}" alt="${item.name}"></div>
        <div class="service-card-body">
          <h3 class="service-card-name">${item.name}</h3>
          <p class="service-card-meta">${item.area || ''} · ${item.style || ''}</p>
          <a href="${Asia.Routes.SERVICES.DETAIL}?slug=${item.slug}" class="btn btn-outline">Xem chi tiết</a>
        </div>
      </article>
    `;
  }
};
