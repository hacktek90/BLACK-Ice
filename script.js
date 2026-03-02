function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { c as _c } from "react/compiler-runtime";
import React from 'react';
import { createRoot } from 'react-dom/client';

// --- Interfaces ---
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// --- Icons (SVG Components) ---
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
        x2: "20",
        y1: "12",
        y2: "12"
      }), /*#__PURE__*/_jsx("line", {
        x1: "4",
        x2: "20",
        y1: "6",
        y2: "6"
      }), /*#__PURE__*/_jsx("line", {
        x1: "4",
        x2: "20",
        y1: "18",
        y2: "18"
      })]
    });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
var CheckIcon = function CheckIcon() {
  var $ = _c(1);
  var t0;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/_jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        color: "var(--primary)"
      },
      children: /*#__PURE__*/_jsx("polyline", {
        points: "20 6 9 17 4 12"
      })
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
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
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
      children: [/*#__PURE__*/_jsx("path", {
        d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
      }), /*#__PURE__*/_jsx("path", {
        d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"
      }), /*#__PURE__*/_jsx("path", {
        d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"
      })]
    });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};

// --- Components ---

var Navbar = function Navbar() {
  var $ = _c(4);
  React.useState(false);
  var t0;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/_jsxs("a", {
      href: "#",
      className: "logo",
      children: [/*#__PURE__*/_jsx(ZapIcon, {}), "Nova"]
    });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  var t1;
  var t2;
  if ($[1] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = /*#__PURE__*/_jsx("nav", {
      children: /*#__PURE__*/_jsxs("ul", {
        className: "nav-links",
        children: [/*#__PURE__*/_jsx("li", {
          children: /*#__PURE__*/_jsx("a", {
            href: "#features",
            children: "Features"
          })
        }), /*#__PURE__*/_jsx("li", {
          children: /*#__PURE__*/_jsx("a", {
            href: "#pricing",
            children: "Pricing"
          })
        }), /*#__PURE__*/_jsx("li", {
          children: /*#__PURE__*/_jsx("a", {
            href: "#contact",
            children: "Contact"
          })
        })]
      })
    });
    t2 = {
      display: "flex",
      gap: "1rem",
      alignItems: "center"
    };
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  var t3;
  if ($[3] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = /*#__PURE__*/_jsx("header", {
      children: /*#__PURE__*/_jsxs("div", {
        className: "container nav-content",
        children: [t0, t1, /*#__PURE__*/_jsxs("div", {
          style: t2,
          children: [/*#__PURE__*/_jsx("button", {
            className: "btn btn-outline",
            style: {
              padding: "8px 16px",
              display: window.innerWidth < 768 ? "none" : "inline-flex"
            },
            onClick: _temp,
            children: "Log In"
          }), /*#__PURE__*/_jsx("button", {
            className: "btn btn-primary",
            onClick: _temp2,
            children: "Get Started"
          })]
        })]
      })
    });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  return t3;
};
var Hero = function Hero() {
  var $ = _c(4);
  var t0;
  var t1;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/_jsxs("h1", {
      children: ["Build faster with ", /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("span", {
        className: "text-gradient",
        children: "Intelligent Tools"
      })]
    });
    t1 = /*#__PURE__*/_jsx("p", {
      children: "Nova provides the essential building blocks for your next big project. Streamline your workflow, collaborate seamlessly, and ship in record time."
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
      className: "hero-content",
      children: [t0, t1, /*#__PURE__*/_jsxs("div", {
        className: "hero-buttons",
        children: [/*#__PURE__*/_jsx("button", {
          className: "btn btn-primary",
          children: "Start Free Trial"
        }), /*#__PURE__*/_jsx("button", {
          className: "btn btn-outline",
          children: "View Demo"
        })]
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
        className: "container hero-grid",
        children: [t2, /*#__PURE__*/_jsx("div", {
          className: "hero-image",
          children: /*#__PURE__*/_jsx("img", {
            src: "https://picsum.photos/seed/novahero/600/400",
            alt: "Dashboard Preview"
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
      description: "Optimized for speed. Nova loads in milliseconds so you never have to wait."
    }, {
      icon: /*#__PURE__*/_jsx(ShieldIcon, {}),
      title: "Bank-Grade Security",
      description: "Your data is encrypted end-to-end. We prioritize your privacy above all else."
    }, {
      icon: /*#__PURE__*/_jsx(LayersIcon, {}),
      title: "Seamless Integrations",
      description: "Connect with your favorite tools like Slack, Jira, and GitHub in one click."
    }];
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  var featuresData = t0;
  var t1;
  if ($[1] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = /*#__PURE__*/_jsxs("div", {
      style: {
        textAlign: "center",
        marginBottom: "60px"
      },
      children: [/*#__PURE__*/_jsx("h2", {
        children: "Everything you need"
      }), /*#__PURE__*/_jsx("p", {
        style: {
          color: "var(--gray)"
        },
        children: "Powerful tools for modern development teams."
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
      className: "section-padding features",
      children: /*#__PURE__*/_jsxs("div", {
        className: "container",
        children: [t1, /*#__PURE__*/_jsx("div", {
          className: "features-grid",
          children: featuresData.map(_temp3)
        })]
      })
    });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  return t2;
};
var PricingCard = function PricingCard(t0) {
  var $ = _c(26);
  var name = t0.name,
    price = t0.price,
    description = t0.description,
    features = t0.features,
    isPopular = t0.isPopular;
  var t1 = "pricing-card ".concat(isPopular ? "popular" : "");
  var t2;
  if ($[0] !== isPopular) {
    t2 = isPopular && /*#__PURE__*/_jsx("div", {
      style: {
        position: "absolute",
        top: "-12px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "var(--primary)",
        color: "white",
        padding: "4px 12px",
        borderRadius: "20px",
        fontSize: "0.8rem",
        fontWeight: "bold"
      },
      children: "MOST POPULAR"
    });
    $[0] = isPopular;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  var t3;
  if ($[2] !== name) {
    t3 = /*#__PURE__*/_jsx("h3", {
      children: name
    });
    $[2] = name;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  var t4;
  if ($[4] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = {
      color: "var(--gray)",
      fontSize: "0.9rem"
    };
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  var t5;
  if ($[5] !== description) {
    t5 = /*#__PURE__*/_jsx("p", {
      style: t4,
      children: description
    });
    $[5] = description;
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  var t6;
  if ($[7] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = /*#__PURE__*/_jsx("span", {
      style: {
        fontSize: "1rem",
        color: "var(--gray)",
        fontWeight: 400
      },
      children: "/mo"
    });
    $[7] = t6;
  } else {
    t6 = $[7];
  }
  var t7;
  if ($[8] !== price) {
    t7 = /*#__PURE__*/_jsxs("div", {
      className: "price",
      children: ["$", price, t6]
    });
    $[8] = price;
    $[9] = t7;
  } else {
    t7 = $[9];
  }
  var t8;
  if ($[10] !== features) {
    t8 = features.map(_temp4);
    $[10] = features;
    $[11] = t8;
  } else {
    t8 = $[11];
  }
  var t9;
  if ($[12] !== t8) {
    t9 = /*#__PURE__*/_jsx("ul", {
      className: "plan-features",
      children: t8
    });
    $[12] = t8;
    $[13] = t9;
  } else {
    t9 = $[13];
  }
  var t10 = "btn ".concat(isPopular ? "btn-primary" : "btn-outline");
  var t11;
  if ($[14] === Symbol["for"]("react.memo_cache_sentinel")) {
    t11 = {
      width: "100%"
    };
    $[14] = t11;
  } else {
    t11 = $[14];
  }
  var t12;
  if ($[15] !== name || $[16] !== t10) {
    t12 = /*#__PURE__*/_jsxs("button", {
      className: t10,
      style: t11,
      children: ["Choose ", name]
    });
    $[15] = name;
    $[16] = t10;
    $[17] = t12;
  } else {
    t12 = $[17];
  }
  var t13;
  if ($[18] !== t1 || $[19] !== t12 || $[20] !== t2 || $[21] !== t3 || $[22] !== t5 || $[23] !== t7 || $[24] !== t9) {
    t13 = /*#__PURE__*/_jsxs("div", {
      className: t1,
      children: [t2, t3, t5, t7, t9, t12]
    });
    $[18] = t1;
    $[19] = t12;
    $[20] = t2;
    $[21] = t3;
    $[22] = t5;
    $[23] = t7;
    $[24] = t9;
    $[25] = t13;
  } else {
    t13 = $[25];
  }
  return t13;
};
var Pricing = function Pricing() {
  var $ = _c(5);
  var t0;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = {
      name: "Starter",
      price: "0",
      description: "For individuals.",
      features: ["1 User", "5 Projects", "Community Support"]
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  var t1;
  if ($[1] === Symbol["for"]("react.memo_cache_sentinel")) {
    t1 = {
      name: "Pro",
      price: "29",
      description: "For growing teams.",
      features: ["5 Users", "Unlimited Projects", "Priority Support"],
      isPopular: true
    };
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  var t2;
  if ($[2] === Symbol["for"]("react.memo_cache_sentinel")) {
    t2 = [t0, t1, {
      name: "Enterprise",
      price: "99",
      description: "For large scale.",
      features: ["Unlimited Users", "24/7 Support", "SSO"]
    }];
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  var plans = t2;
  var t3;
  if ($[3] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = /*#__PURE__*/_jsxs("div", {
      style: {
        textAlign: "center",
        marginBottom: "60px"
      },
      children: [/*#__PURE__*/_jsx("h2", {
        children: "Simple Pricing"
      }), /*#__PURE__*/_jsx("p", {
        style: {
          color: "var(--gray)"
        },
        children: "No hidden fees. Cancel anytime."
      })]
    });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  var t4;
  if ($[4] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = /*#__PURE__*/_jsx("section", {
      id: "pricing",
      className: "section-padding",
      children: /*#__PURE__*/_jsxs("div", {
        className: "container",
        children: [t3, /*#__PURE__*/_jsx("div", {
          className: "pricing-grid",
          children: plans.map(_temp5)
        })]
      })
    });
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  return t4;
};
var Footer = function Footer() {
  var $ = _c(4);
  var t0;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/_jsxs("div", {
      className: "footer-col",
      children: [/*#__PURE__*/_jsx("h4", {
        children: "Nova"
      }), /*#__PURE__*/_jsx("p", {
        style: {
          color: "#94a3b8",
          fontSize: "0.9rem"
        },
        children: "Built for developers, by developers."
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
      className: "footer-grid",
      children: [t0, t1, /*#__PURE__*/_jsxs("div", {
        className: "footer-col",
        children: [/*#__PURE__*/_jsx("h4", {
          children: "Legal"
        }), /*#__PURE__*/_jsxs("ul", {
          children: [/*#__PURE__*/_jsx("li", {
            children: /*#__PURE__*/_jsx("a", {
              href: "#",
              children: "Privacy"
            })
          }), /*#__PURE__*/_jsx("li", {
            children: /*#__PURE__*/_jsx("a", {
              href: "#",
              children: "Terms"
            })
          })]
        })]
      })]
    });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  var t3;
  if ($[3] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = /*#__PURE__*/_jsx("footer", {
      className: "footer",
      children: /*#__PURE__*/_jsxs("div", {
        className: "container",
        children: [t2, /*#__PURE__*/_jsxs("div", {
          className: "copyright",
          children: ["\xA9 ", new Date().getFullYear(), " Nova Inc."]
        })]
      })
    });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  return t3;
};

// --- Main App ---
var App = function App() {
  var $ = _c(1);
  var t0;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/_jsxs(React.Fragment, {
      children: [/*#__PURE__*/_jsx(Navbar, {}), /*#__PURE__*/_jsxs("main", {
        children: [/*#__PURE__*/_jsx(Hero, {}), /*#__PURE__*/_jsx(Features, {}), /*#__PURE__*/_jsx(Pricing, {})]
      }), /*#__PURE__*/_jsx(Footer, {})]
    });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};

// --- Mounting ---
var rootElement = document.getElementById('root');
if (rootElement) {
  var root = createRoot(rootElement);
  root.render(/*#__PURE__*/_jsx(App, {}));
}
function _temp() {
  return alert("Login clicked");
}
function _temp2() {
  return alert("Get Started clicked");
}
function _temp3(feature, index) {
  return /*#__PURE__*/_jsx(FeatureCard, _objectSpread({}, feature), index);
}
function _temp4(feat, i) {
  return /*#__PURE__*/_jsxs("li", {
    children: [/*#__PURE__*/_jsx(CheckIcon, {}), " ", feat]
  }, i);
}
function _temp5(plan, index) {
  return /*#__PURE__*/_jsx(PricingCard, _objectSpread({}, plan), index);
}