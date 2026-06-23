/* ANALYTICS.SERVICE */
window.Asia = window.Asia || {};
Asia.AnalyticsService = {
  track(eventName, payload) {
    if (window.dataLayer) {
      window.dataLayer.push({ event: eventName, ...payload });
    }
    console.log('[Analytics]', eventName, payload);
  }
};
