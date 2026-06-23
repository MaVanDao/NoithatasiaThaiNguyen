/* SEO META */
window.Asia = window.Asia || {};
Asia.SeoMeta = {
  set(title, description, keywords) {
    document.title = title;
    const setTag = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };
    if (description) setTag('description', description);
    if (keywords) setTag('keywords', keywords);
  }
};
