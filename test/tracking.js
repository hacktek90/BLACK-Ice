(function () {
  // Prevent duplicate loading of the whole tracking bundle
  if (window.__blackiceTrackingLoaded) return;
  window.__blackiceTrackingLoaded = true;

  /* -------------------- SENTRY CDN -------------------- */
  if (!window.__sentryScriptLoaded) {
    window.__sentryScriptLoaded = true;

    const sentry = document.createElement("script");
    sentry.src =
      "https://js-de.sentry-cdn.com/d36d10deb3819c24ccbf1a6f76d7042c.min.js";
    sentry.crossOrigin = "anonymous";
    sentry.async = true;
    sentry.id = "sentry-cdn-loader";

    document.head.appendChild(sentry);
  }

  /* -------------------- GOOGLE TAG MANAGER -------------------- */
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l !== "dataLayer" ? "&l=" + l : "";

    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-W9F9C7ZS");

  /* -------------------- GTM NOSCRIPT FALLBACK -------------------- */
  function injectNoScript() {
    if (document.getElementById("gtm-noscript")) return;

    var ns = document.createElement("noscript");
    ns.id = "gtm-noscript";
    ns.innerHTML =
      '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W9F9C7ZS" ' +
      'height="0" width="0" style="display:none;visibility:hidden"></iframe>';

    document.body.appendChild(ns);
  }

  if (document.body) injectNoScript();
  else document.addEventListener("DOMContentLoaded", injectNoScript);

  /* -------------------- GOOGLE ANALYTICS (GA4 gtag) -------------------- */
  if (!window.__ga4Loaded) {
    window.__ga4Loaded = true;

    var gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src =
      "https://www.googletagmanager.com/gtag/js?id=G-BJ7N8R2CLY";

    document.head.appendChild(gtagScript);

    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", "G-BJ7N8R2CLY");
  }

  /* -------------------- CLOUDFLARE PAGES ANALYTICS -------------------- */
  if (!window.__cfAnalyticsLoaded) {
    window.__cfAnalyticsLoaded = true;

    var cfScript = document.createElement("script");
    cfScript.defer = true;
    cfScript.src =
      "https://static.cloudflareinsights.com/beacon.min.js";

    cfScript.setAttribute(
      "data-cf-beacon",
      '{"token": "b5a71e89ec674296bffb5791b1953eb9"}'
    );

    document.head.appendChild(cfScript);
  }
})();
