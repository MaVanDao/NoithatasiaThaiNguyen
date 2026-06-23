/* PRODUCT-CARD */
window.Asia = window.Asia || {};
Asia.ProductCard = {
  html(product) {
    return `
      <article class="product-card">
        <div class="product-card-img"><img src="${product.image || '/FE/assets/images/placeholders/product.png'}" alt="${product.name}"></div>
        <div class="product-card-body">
          <h3 class="product-card-name">${product.name}</h3>
          <div class="product-card-price">${Asia.Formatter.currency(product.price || 0)}</div>
          <a href="${Asia.Routes.PRODUCTS.DETAIL}?slug=${product.slug}" class="btn btn-outline">Xem chi tiết</a>
        </div>
      </article>
    `;
  }
};
