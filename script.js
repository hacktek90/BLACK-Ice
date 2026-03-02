function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { c as _c } from "react/compiler-runtime";
import React, { useState } from 'react';

// --- Types & Interfaces ---
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// --- Data ---
var ENGINES = [{
  name: 'Brave',
  domain: 'search.brave.com',
  url: 'https://search.brave.com/search?q=%s',
  aiUrl: 'https://search.brave.com/ask?q=%s'
}, {
  name: 'Perplexity',
  domain: 'perplexity.ai',
  url: 'https://www.perplexity.ai/?q=%s',
  aiUrl: ''
}, {
  name: 'DuckDuckGo',
  domain: 'duckduckgo.com',
  url: 'https://duckduckgo.com/?q=%s',
  aiUrl: 'https://duck.ai/chat?q=%s'
}];

// --- Components ---

var App = function App() {
  var $ = _c(45);
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    engineIndex = _useState2[0],
    setEngineIndex = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    query = _useState4[0],
    setQuery = _useState4[1];
  var currentEngine = ENGINES[engineIndex];
  var t0;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = function t0(e) {
      setEngineIndex(Number(e.target.value));
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  var handleEngineChange = t0;
  var t1;
  if ($[1] !== currentEngine.aiUrl || $[2] !== currentEngine.url || $[3] !== query) {
    t1 = function t1(e_0, type) {
      e_0.preventDefault();
      if (!query) {
        return;
      }
      var urlTemplate;
      if (type === "ai") {
        urlTemplate = currentEngine.aiUrl;
        if (!urlTemplate) {
          urlTemplate = currentEngine.url;
        }
      } else {
        urlTemplate = currentEngine.url;
      }
      var finalUrl = urlTemplate.replace("%s", encodeURIComponent(query));
      window.open(finalUrl, "_blank");
    };
    $[1] = currentEngine.aiUrl;
    $[2] = currentEngine.url;
    $[3] = query;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var handleSearch = t1;
  var handleTitleClick = _temp;
  var getFaviconSrc = _temp2;
  var t2;
  if ($[5] === Symbol["for"]("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/_jsx("div", {
      className: "glow"
    });
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  var t3;
  if ($[6] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = /*#__PURE__*/_jsx("h1", {
      className: "hero-title",
      onClick: handleTitleClick,
      onKeyDown: function onKeyDown(e_1) {
        if (e_1.key === "Enter") {
          handleTitleClick();
        }
      },
      role: "button",
      tabIndex: 0,
      title: "Enter Developer Mode",
      children: "BlackICE Portal"
    });
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  var t4;
  if ($[7] === Symbol["for"]("react.memo_cache_sentinel")) {
    t4 = /*#__PURE__*/_jsxs("p", {
      children: ["The operating system for your web productivity.", /*#__PURE__*/_jsx("br", {}), "Seamlessly integrated AI, Utilities, and Workspace tools."]
    });
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  var t5;
  if ($[8] !== handleSearch) {
    t5 = function t5(e_2) {
      return handleSearch(e_2, "standard");
    };
    $[8] = handleSearch;
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  var t6;
  if ($[10] === Symbol["for"]("react.memo_cache_sentinel")) {
    t6 = ENGINES.map(_temp3);
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  var t7;
  if ($[11] !== engineIndex) {
    t7 = /*#__PURE__*/_jsx("select", {
      className: "engine-select",
      value: engineIndex,
      onChange: handleEngineChange,
      children: t6
    });
    $[11] = engineIndex;
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  var t8 = getFaviconSrc(currentEngine.domain);
  var t9;
  if ($[13] !== currentEngine.name || $[14] !== t8) {
    t9 = /*#__PURE__*/_jsx("img", {
      className: "engine-icon",
      src: t8,
      alt: currentEngine.name
    });
    $[13] = currentEngine.name;
    $[14] = t8;
    $[15] = t9;
  } else {
    t9 = $[15];
  }
  var t10;
  if ($[16] === Symbol["for"]("react.memo_cache_sentinel")) {
    t10 = /*#__PURE__*/_jsx("svg", {
      className: "selector-arrow",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /*#__PURE__*/_jsx("polyline", {
        points: "6 9 12 15 18 9"
      })
    });
    $[16] = t10;
  } else {
    t10 = $[16];
  }
  var t11;
  if ($[17] !== t7 || $[18] !== t9) {
    t11 = /*#__PURE__*/_jsxs("div", {
      className: "engine-selector",
      children: [t7, t9, t10]
    });
    $[17] = t7;
    $[18] = t9;
    $[19] = t11;
  } else {
    t11 = $[19];
  }
  var t12;
  if ($[20] === Symbol["for"]("react.memo_cache_sentinel")) {
    t12 = function t12(e_3) {
      return setQuery(e_3.target.value);
    };
    $[20] = t12;
  } else {
    t12 = $[20];
  }
  var t13;
  if ($[21] !== query) {
    t13 = /*#__PURE__*/_jsx("input", {
      type: "text",
      className: "search-input",
      placeholder: "Search the web...",
      value: query,
      onChange: t12,
      autoComplete: "off",
      required: true
    });
    $[21] = query;
    $[22] = t13;
  } else {
    t13 = $[22];
  }
  var t14;
  if ($[23] === Symbol["for"]("react.memo_cache_sentinel")) {
    t14 = /*#__PURE__*/_jsx("button", {
      type: "submit",
      className: "search-btn",
      title: "Standard Search",
      children: /*#__PURE__*/_jsxs("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [/*#__PURE__*/_jsx("circle", {
          cx: "11",
          cy: "11",
          r: "8"
        }), /*#__PURE__*/_jsx("line", {
          x1: "21",
          y1: "21",
          x2: "16.65",
          y2: "16.65"
        })]
      })
    });
    $[23] = t14;
  } else {
    t14 = $[23];
  }
  var t15;
  if ($[24] !== currentEngine.aiUrl || $[25] !== handleSearch) {
    t15 = currentEngine.aiUrl && /*#__PURE__*/_jsx("button", {
      type: "button",
      className: "search-btn ai-btn",
      title: "AI Search / Chat",
      onClick: function onClick(e_4) {
        return handleSearch(e_4, "ai");
      },
      children: /*#__PURE__*/_jsx("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/_jsx("path", {
          d: "M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z"
        })
      })
    });
    $[24] = currentEngine.aiUrl;
    $[25] = handleSearch;
    $[26] = t15;
  } else {
    t15 = $[26];
  }
  var t16;
  if ($[27] !== t15) {
    t16 = /*#__PURE__*/_jsxs("div", {
      className: "search-actions",
      children: [t14, t15]
    });
    $[27] = t15;
    $[28] = t16;
  } else {
    t16 = $[28];
  }
  var t17;
  if ($[29] !== t11 || $[30] !== t13 || $[31] !== t16 || $[32] !== t5) {
    t17 = /*#__PURE__*/_jsx("div", {
      className: "search-wrapper",
      children: /*#__PURE__*/_jsxs("form", {
        className: "search-bar",
        onSubmit: t5,
        children: [t11, t13, t16]
      })
    });
    $[29] = t11;
    $[30] = t13;
    $[31] = t16;
    $[32] = t5;
    $[33] = t17;
  } else {
    t17 = $[33];
  }
  var t18;
  if ($[34] === Symbol["for"]("react.memo_cache_sentinel")) {
    t18 = /*#__PURE__*/_jsx("div", {
      className: "hint-wrap",
      children: /*#__PURE__*/_jsx("div", {
        className: "hint-text",
        children: "Click the button toggle at left bottom to open projects"
      })
    });
    $[34] = t18;
  } else {
    t18 = $[34];
  }
  var t19;
  if ($[35] !== t17) {
    t19 = /*#__PURE__*/_jsxs("main", {
      className: "hero-section",
      children: [t3, t4, t17, t18]
    });
    $[35] = t17;
    $[36] = t19;
  } else {
    t19 = $[36];
  }
  var t20;
  if ($[37] === Symbol["for"]("react.memo_cache_sentinel")) {
    t20 = /*#__PURE__*/_jsx("span", {
      className: "section-title",
      children: "System Capabilities"
    });
    $[37] = t20;
  } else {
    t20 = $[37];
  }
  var t21;
  if ($[38] === Symbol["for"]("react.memo_cache_sentinel")) {
    t21 = /*#__PURE__*/_jsxs("div", {
      className: "feature-item",
      children: [/*#__PURE__*/_jsx("h3", {
        children: "AI Core"
      }), /*#__PURE__*/_jsx("p", {
        children: "Focus enhancement, health tracking, and automated intelligence workflows."
      })]
    });
    $[38] = t21;
  } else {
    t21 = $[38];
  }
  var t22;
  if ($[39] === Symbol["for"]("react.memo_cache_sentinel")) {
    t22 = /*#__PURE__*/_jsxs("div", {
      className: "feature-item",
      children: [/*#__PURE__*/_jsx("h3", {
        children: "Productivity"
      }), /*#__PURE__*/_jsx("p", {
        children: "Task management, habit tracking, and advanced planning systems."
      })]
    });
    $[39] = t22;
  } else {
    t22 = $[39];
  }
  var t23;
  if ($[40] === Symbol["for"]("react.memo_cache_sentinel")) {
    t23 = /*#__PURE__*/_jsxs("div", {
      className: "feature-item",
      children: [/*#__PURE__*/_jsx("h3", {
        children: "Creation"
      }), /*#__PURE__*/_jsx("p", {
        children: "Docs, slides, whiteboards, and mind maps in one unified interface."
      })]
    });
    $[40] = t23;
  } else {
    t23 = $[40];
  }
  var t24;
  if ($[41] === Symbol["for"]("react.memo_cache_sentinel")) {
    t24 = /*#__PURE__*/_jsxs("div", {
      className: "features-grid",
      children: [t21, t22, t23, /*#__PURE__*/_jsxs("div", {
        className: "feature-item",
        children: [/*#__PURE__*/_jsx("h3", {
          children: "Dev Tools"
        }), /*#__PURE__*/_jsx("p", {
          children: "HTML viewers, Git utilities, and minimal developer environments."
        })]
      })]
    });
    $[41] = t24;
  } else {
    t24 = $[41];
  }
  var t25;
  if ($[42] === Symbol["for"]("react.memo_cache_sentinel")) {
    t25 = /*#__PURE__*/_jsxs("section", {
      className: "glass-card",
      children: [t20, t24, /*#__PURE__*/_jsxs("div", {
        className: "sr-only",
        children: [/*#__PURE__*/_jsx("h2", {
          children: "All-in-One Web Tools & AI Utilities Platform"
        }), /*#__PURE__*/_jsx("p", {
          children: "BlackICE Portal is a browser-based platform combining AI-powered tools, productivity apps, developer utilities, document creation systems, media tools, and real-time collaboration in a single minimal interface."
        })]
      })]
    });
    $[42] = t25;
  } else {
    t25 = $[42];
  }
  var t26;
  if ($[43] !== t19) {
    t26 = /*#__PURE__*/_jsxs("div", {
      className: "app",
      children: [t2, /*#__PURE__*/_jsxs("div", {
        className: "main-container",
        children: [t19, t25]
      })]
    });
    $[43] = t19;
    $[44] = t26;
  } else {
    t26 = $[44];
  }
  return t26;
};
export default App;
function _temp() {
  window.open("/test/dev.html", "_blank");
}
function _temp2(domain) {
  return "https://www.google.com/s2/favicons?domain=".concat(domain, "&sz=32");
}
function _temp3(eng, idx) {
  return /*#__PURE__*/_jsx("option", {
    value: idx,
    children: eng.name
  }, idx);
}