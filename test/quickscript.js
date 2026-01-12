window.addEventListener('load', () => {
  try {
    if (
      'IntersectionObserver' in window &&
      'requestIdleCallback' in window &&
      window.quicklink
    ) {
      quicklink({
        ignores: [
          url => url.includes('firebase'),
          url => url.includes('analytics'),
          url => url.includes('clarity'),
          url => url.includes('crisp'),
          url => url.includes('microlink')
        ]
      });
    } else {
      console.warn('Quicklink disabled: browser not supported');
    }
  } catch (err) {
    console.error('Quicklink failed safely:', err);
  }
});
