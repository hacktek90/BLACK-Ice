(function () {
  // prevent duplicate loading
  if (window.__sentryScriptLoaded) return;
  window.__sentryScriptLoaded = true;

  const s = document.createElement("script");
  s.src = "https://js-de.sentry-cdn.com/d36d10deb3819c24ccbf1a6f76d7042c.min.js";
  s.crossOrigin = "anonymous";
  s.async = true;
  s.id = "sentry-cdn-loader";

  document.head.appendChild(s);
})();
