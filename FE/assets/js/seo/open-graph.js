/* SEO OPEN GRAPH */
window.Asia = window.Asia || {};
Asia.SeoOpenGraph = {
  set(title, description, image, url) {
    const setMeta = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.content = content;
    };
    if (title) setMeta('og:title', title);
    if (description) setMeta('og:description', description);
    if (image) setMeta('og:image', image);
    if (url) setMeta('og:url', url);
  }
};
