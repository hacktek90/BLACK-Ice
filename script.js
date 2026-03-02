import { c as _c } from "react/compiler-runtime";
import React from 'react';
// If you had './App.css', see next step; here we just use the Style editor instead.

// --- Icons ---
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var MenuIcon = function MenuIcon() {
  var $ = _c(1);
  var t0;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/_jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [/*#__PURE__*/_jsx("line", {
        x1: "4",
        y1: "12",
        x2: "20",
        y2: "12"
      }), /*#__PURE__*/_jsx("line", {
        x1: "4",
        y1: "6",
        x2: "20",
        y2: "6"
      }), /*#__PURE__*/_jsx("line", {
        x1: "4",
        y1: "18",
        x2: "20",
        y2: "18"
      })]
    });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
var ZapIcon = function ZapIcon() {
  var $ = _c(1);
  var t0;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/_jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /*#__PURE__*/_jsx("polygon", {
        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
      })
    });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
var ShieldIcon = function ShieldIcon() {
  var $ = _c(1);
  var t0;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/_jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /*#__PURE__*/_jsx("path", {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      })
    });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
var LayersIcon = function LayersIcon() {
  var $ = _c(1);
  var t0;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/_jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [/*#__PURE__*/_jsx("polygon", {
        points: "12 2 2 7 12 12 22 7 12 2"
      }), /*#__PURE__*/_jsx("polyline", {
        points: "2 17 12 22 22 17"
      }), /*#__PURE__*/_jsx("polyline", {
        points: "2 12 12 17 22 12"
      })]
    });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
var Navbar = function Navbar() {
  var $ = _c(5);
  var t0;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/_jsxs("div", {
      className: "logo",
      children: [/*#__PURE__*/_jsx(ZapIcon, {}), /*#__PURE__*/_jsx("span", {
        children: "StreamLine"
      })]
    });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  var t1;
  if ($[1] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = /*#__PURE__*/_jsxs("div", {
      className: "nav-links",
      children: [/*#__PURE__*/_jsx("a", {
        href: "#features",
        children: "Features"
      }), /*#__PURE__*/_jsx("a", {
        href: "#about",
        children: "About"
      }), /*#__PURE__*/_jsx("a", {
        href: "#pricing",
        children: "Pricing"
      }), /*#__PURE__*/_jsx("a", {
        href: "#contact",
        children: "Contact"
      })]
    });
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  var t2;
  var t3;
  if ($[2] === Symbol["for"]("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/_jsx("a", {
      href: "#",
      className: "nav-login",
      children: "Log in"
    });
    t3 = /*#__PURE__*/_jsx("button", {
      className: "btn btn-primary",
      children: "Get Started"
    });
    $[2] = t2;
    $[3] = t3;
  } else {
    t2 = $[2];
    t3 = $[3];
  }
  var t4;
  if ($[4] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = /*#__PURE__*/_jsx("header", {
      className: "header",
      children: /*#__PURE__*/_jsx("div", {
        className: "container",
        children: /*#__PURE__*/_jsxs("nav", {
          className: "nav",
          children: [t0, t1, /*#__PURE__*/_jsxs("div", {
            className: "nav-actions",
            children: [t2, t3, /*#__PURE__*/_jsx("button", {
              className: "mobile-menu-btn",
              children: /*#__PURE__*/_jsx(MenuIcon, {})
            })]
          })]
        })
      })
    });
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  return t4;
};
var Hero = function Hero() {
  var $ = _c(4);
  var t0;
  var t1;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/_jsxs("h1", {
      children: ["Build your digital presence", /*#__PURE__*/_jsx("br", {}), "with speed and precision."]
    });
    t1 = /*#__PURE__*/_jsx("p", {
      children: "Launch your next project with a landing page that converts. No setup required, just pure performance and beautiful design out of the box."
    });
    $[0] = t0;
    $[1] = t1;
  } else {
    t0 = $[0];
    t1 = $[1];
  }
  var t2;
  if ($[2] === Symbol["for"]("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/_jsxs("div", {
      className: "hero-btns",
      children: [/*#__PURE__*/_jsx("button", {
        className: "btn btn-primary",
        children: "Start Free Trial"
      }), /*#__PURE__*/_jsx("button", {
        className: "btn btn-outline",
        children: "View Documentation"
      })]
    });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  var t3;
  if ($[3] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = /*#__PURE__*/_jsx("section", {
      className: "hero",
      children: /*#__PURE__*/_jsxs("div", {
        className: "container",
        children: [t0, t1, t2, /*#__PURE__*/_jsx("div", {
          className: "hero-image",
          children: /*#__PURE__*/_jsx("img", {
            src: "https://picsum.photos/seed/landingreact/1000/500",
            alt: "App Dashboard Preview"
          })
        })]
      })
    });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  return t3;
};
var FeatureCard = function FeatureCard(t0) {
  var $ = _c(10);
  var icon = t0.icon,
    title = t0.title,
    description = t0.description;
  var t1;
  if ($[0] !== icon) {
    t1 = /*#__PURE__*/_jsx("div", {
      className: "icon-box",
      children: icon
    });
    $[0] = icon;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  var t2;
  if ($[2] !== title) {
    t2 = /*#__PURE__*/_jsx("h3", {
      children: title
    });
    $[2] = title;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  var t3;
  if ($[4] !== description) {
    t3 = /*#__PURE__*/_jsx("p", {
      children: description
    });
    $[4] = description;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  var t4;
  if ($[6] !== t1 || $[7] !== t2 || $[8] !== t3) {
    t4 = /*#__PURE__*/_jsxs("div", {
      className: "feature-card",
      children: [t1, t2, t3]
    });
    $[6] = t1;
    $[7] = t2;
    $[8] = t3;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  return t4;
};
var Features = function Features() {
  var $ = _c(3);
  var t0;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = [{
      icon: /*#__PURE__*/_jsx(ZapIcon, {}),
      title: "Lightning Fast",
      description: "Optimized for speed. Our components render instantly ensuring your users never wait."
    }, {
      icon: /*#__PURE__*/_jsx(ShieldIcon, {}),
      title: "Secure by Design",
      description: "Built with security best practices in mind. Your data and your users data is safe."
    }, {
      icon: /*#__PURE__*/_jsx(LayersIcon, {}),
      title: "Fully Modular",
      description: "Pick and choose the components you need. Build complex layouts with simple blocks."
    }];
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  var featuresData = t0;
  var t1;
  if ($[1] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = /*#__PURE__*/_jsxs("div", {
      className: "section-header",
      children: [/*#__PURE__*/_jsx("h2", {
        children: "Why choose us?"
      }), /*#__PURE__*/_jsx("p", {
        children: "We provide the tools you need to succeed."
      })]
    });
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  var t2;
  if ($[2] === Symbol["for"]("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/_jsx("section", {
      id: "features",
      className: "features",
      children: /*#__PURE__*/_jsxs("div", {
        className: "container",
        children: [t1, /*#__PURE__*/_jsx("div", {
          className: "features-grid",
          children: featuresData.map(_temp)
        })]
      })
    });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  return t2;
};
var CTA = function CTA() {
  var $ = _c(1);
  var t0;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/_jsx("section", {
      className: "cta-section",
      children: /*#__PURE__*/_jsxs("div", {
        className: "container",
        children: [/*#__PURE__*/_jsx("h2", {
          children: "Ready to get started?"
        }), /*#__PURE__*/_jsx("p", {
          children: "Join thousands of developers building amazing things today."
        }), /*#__PURE__*/_jsx("button", {
          className: "btn btn-white",
          children: "Create Free Account"
        })]
      })
    });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
var Footer = function Footer() {
  var $ = _c(5);
  var t0;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/_jsxs("div", {
      className: "footer-brand",
      children: [/*#__PURE__*/_jsx("h3", {
        children: "StreamLine"
      }), /*#__PURE__*/_jsx("p", {
        children: "Making web development accessible, fast, and beautiful for everyone."
      })]
    });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  var t1;
  if ($[1] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = /*#__PURE__*/_jsxs("div", {
      className: "footer-col",
      children: [/*#__PURE__*/_jsx("h4", {
        children: "Product"
      }), /*#__PURE__*/_jsxs("ul", {
        children: [/*#__PURE__*/_jsx("li", {
          children: /*#__PURE__*/_jsx("a", {
            href: "#",
            children: "Features"
          })
        }), /*#__PURE__*/_jsx("li", {
          children: /*#__PURE__*/_jsx("a", {
            href: "#",
            children: "Integrations"
          })
        }), /*#__PURE__*/_jsx("li", {
          children: /*#__PURE__*/_jsx("a", {
            href: "#",
            children: "Pricing"
          })
        })]
      })]
    });
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  var t2;
  if ($[2] === Symbol["for"]("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/_jsxs("div", {
      className: "footer-col",
      children: [/*#__PURE__*/_jsx("h4", {
        children: "Resources"
      }), /*#__PURE__*/_jsxs("ul", {
        children: [/*#__PURE__*/_jsx("li", {
          children: /*#__PURE__*/_jsx("a", {
            href: "#",
            children: "Documentation"
          })
        }), /*#__PURE__*/_jsx("li", {
          children: /*#__PURE__*/_jsx("a", {
            href: "#",
            children: "API Reference"
          })
        })]
      })]
    });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  var t3;
  if ($[3] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = /*#__PURE__*/_jsxs("div", {
      className: "footer-grid",
      children: [t0, t1, t2, /*#__PURE__*/_jsxs("div", {
        className: "footer-col",
        children: [/*#__PURE__*/_jsx("h4", {
          children: "Company"
        }), /*#__PURE__*/_jsxs("ul", {
          children: [/*#__PURE__*/_jsx("li", {
            children: /*#__PURE__*/_jsx("a", {
              href: "#",
              children: "About"
            })
          }), /*#__PURE__*/_jsx("li", {
            children: /*#__PURE__*/_jsx("a", {
              href: "#",
              children: "Careers"
            })
          }), /*#__PURE__*/_jsx("li", {
            children: /*#__PURE__*/_jsx("a", {
              href: "#",
              children: "Contact"
            })
          })]
        })]
      })]
    });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  var t4;
  if ($[4] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = /*#__PURE__*/_jsx("footer", {
      className: "footer",
      children: /*#__PURE__*/_jsxs("div", {
        className: "container",
        children: [t3, /*#__PURE__*/_jsxs("div", {
          className: "copyright",
          children: ["\xA9 ", new Date().getFullYear(), " StreamLine Inc. All rights reserved."]
        })]
      })
    });
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  return t4;
};
var App = function App() {
  var $ = _c(1);
  var t0;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/_jsxs("div", {
      className: "app",
      children: [/*#__PURE__*/_jsx(Navbar, {}), /*#__PURE__*/_jsxs("main", {
        children: [/*#__PURE__*/_jsx(Hero, {}), /*#__PURE__*/_jsx(Features, {}), /*#__PURE__*/_jsx(CTA, {})]
      }), /*#__PURE__*/_jsx(Footer, {})]
    });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
export default App;
function _temp(feature, index) {
  return /*#__PURE__*/_jsx(FeatureCard, {
    icon: feature.icon,
    title: feature.title,
    description: feature.description
  }, index);
}