(function () {
  const VERCEL_HOST = "blackice-ac.vercel.app";
  const VERCEL_HOME = "https://blackice-ac.vercel.app/Home.html";

  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
    .test(navigator.userAgent);

  const isSmallScreen = window.innerWidth <= 768;
  const isMobile = isMobileUA || isSmallScreen;

  const currentHost = window.location.hostname;
  const currentPath = window.location.pathname;

  // 1️⃣ Redirect ANY non-Vercel domain to Vercel Home
  if (currentHost !== VERCEL_HOST) {
    window.location.replace(VERCEL_HOME);
    return; // stop further execution
  }

  // 2️⃣ Mobile redirect (only on Vercel)
  if (isMobile && currentPath !== "/mobile.html") {
    window.location.replace("/mobile.html");
  }
})();
