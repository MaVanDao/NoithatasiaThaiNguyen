/* SEO SCHEMA */
window.Asia = window.Asia || {};
Asia.SeoSchema = {
  organization(name, url) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name,
      url
    };
  }
};
