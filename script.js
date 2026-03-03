/* Analyzed bindings: {
  "ref": "setup-const",
  "computed": "setup-const",
  "onMounted": "setup-const",
  "searchQuery": "setup-ref",
  "selectedEngineIndex": "setup-ref",
  "engines": "setup-const",
  "currentEngine": "setup-ref",
  "openDevMode": "setup-const",
  "handleSearch": "setup-const"
} */
import { createCommentVNode as _createCommentVNode, createElementVNode as _createElementVNode, withKeys as _withKeys, createTextVNode as _createTextVNode, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, toDisplayString as _toDisplayString, vModelSelect as _vModelSelect, withDirectives as _withDirectives, vModelText as _vModelText, withModifiers as _withModifiers, createStaticVNode as _createStaticVNode } from "vue"

const _hoisted_1 = { class: "blackice-portal-wrapper" }
const _hoisted_2 = { class: "main-container" }
const _hoisted_3 = { class: "hero-section" }
const _hoisted_4 = { class: "search-wrapper" }
const _hoisted_5 = {
  class: "engine-selector",
  title: "Select Search Engine"
}
const _hoisted_6 = ["value"]
const _hoisted_7 = ["src"]
const _hoisted_8 = { class: "search-actions" }

import { ref, computed, onMounted } from 'vue';

// --- State ---

const __sfc__ = {
  __name: 'Component',
  setup(__props) {

const searchQuery = ref('');
const selectedEngineIndex = ref(0);

// --- Data ---
const engines = [
  {
    name: 'Brave',
    value: 'https://search.brave.com/search?q=%s',
    domain: 'search.brave.com',
    aiUrl: 'https://search.brave.com/ask?q=%s',
  },
  {
    name: 'Perplexity',
    value: 'https://www.perplexity.ai/?q=%s',
    domain: 'perplexity.ai',
    aiUrl: '', // No AI button for Perplexity standard search in original
  },
  {
    name: 'DuckDuckGo',
    value: 'https://duckduckgo.com/?q=%s',
    domain: 'duckduckgo.com',
    aiUrl: 'https://duck.ai/chat?q=%s',
  },
];

// --- Computed ---
const currentEngine = computed(() => engines[selectedEngineIndex.value]);

// --- Methods ---
const openDevMode = () => {
  window.open('/test/dev.html', '_blank');
};

const handleSearch = (type) => {
  const query = encodeURIComponent(searchQuery.value);
  if (!query) return;

  let urlTemplate = '';
  if (type === 'ai' && currentEngine.value.aiUrl) {
    urlTemplate = currentEngine.value.aiUrl;
  } else {
    urlTemplate = currentEngine.value.value;
  }

  const finalUrl = urlTemplate.replace('%s', query);
  window.open(finalUrl, '_blank');
};

// --- Lifecycle ---
onMounted(() => {
  // 1. Inject Schema.org data
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BlackICE Portal",
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": "Web",
    "description": "A minimal web-based portal offering AI tools, productivity apps, developer utilities, document creation, media tools, and real-time collaboration.",
    "url": "https://blackice-ac.vercel.app/",
    "creator": {
      "@type": "Organization",
      "name": "BlackICE"
    }
  };

  const scriptSchema = document.createElement('script');
  scriptSchema.type = 'application/ld+json';
  scriptSchema.text = JSON.stringify(schema);
  document.head.appendChild(scriptSchema);

  // 2. Dynamically load external scripts (portal.js and darky.js)
  const externalScripts = [
    'https://blackice-ac.vercel.app/test/portal.js',
    ''
  ];

  externalScripts.forEach(src => {
    const script = document.createElement('script');
    script.src = src;
    script.defer = true; // Ensures script runs after HTML parsing
    document.head.appendChild(script);
  });
});

return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createCommentVNode(" Ambient Glow "),
    _cache[10] || (_cache[10] = _createElementVNode("div", { class: "glow" }, null, -1 /* CACHED */)),
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("main", _hoisted_3, [
        _createElementVNode("h1", {
          class: "portal-title",
          onClick: openDevMode,
          onKeydown: _withKeys(openDevMode, ["enter"]),
          tabindex: "0",
          title: "Enter Developer Mode"
        }, " BlackICE Portal ", 32 /* NEED_HYDRATION */),
        _cache[7] || (_cache[7] = _createElementVNode("p", null, [
          _createTextVNode(" The operating system for your web productivity."),
          _createElementVNode("br"),
          _createTextVNode("Seamlessly integrated AI, Utilities, and Workspace tools. ")
        ], -1 /* CACHED */)),
        _createCommentVNode(" === SEARCH BAR === "),
        _createElementVNode("div", _hoisted_4, [
          _createElementVNode("form", {
            class: "search-bar",
            onSubmit: _cache[3] || (_cache[3] = _withModifiers($event => (handleSearch('standard')), ["prevent"]))
          }, [
            _createElementVNode("div", _hoisted_5, [
              _withDirectives(_createElementVNode("select", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((selectedEngineIndex).value = $event))
              }, [
                (_openBlock(), _createElementBlock(_Fragment, null, _renderList(engines, (engine, index) => {
                  return _createElementVNode("option", {
                    key: index,
                    value: index
                  }, _toDisplayString(engine.name), 9 /* TEXT, PROPS */, _hoisted_6)
                }), 64 /* STABLE_FRAGMENT */))
              ], 512 /* NEED_PATCH */), [
                [_vModelSelect, selectedEngineIndex.value]
              ]),
              _createElementVNode("img", {
                src: currentEngine.value.icon,
                class: "engine-icon",
                alt: "Search Engine"
              }, null, 8 /* PROPS */, _hoisted_7),
              _cache[4] || (_cache[4] = _createElementVNode("svg", {
                class: "selector-arrow",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                _createElementVNode("polyline", { points: "6 9 12 15 18 9" })
              ], -1 /* CACHED */))
            ]),
            _withDirectives(_createElementVNode("input", {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((searchQuery).value = $event)),
              type: "text",
              class: "search-input",
              placeholder: "Search the web...",
              required: "",
              autocomplete: "off"
            }, null, 512 /* NEED_PATCH */), [
              [_vModelText, searchQuery.value]
            ]),
            _createElementVNode("div", _hoisted_8, [
              _cache[6] || (_cache[6] = _createElementVNode("button", {
                type: "submit",
                class: "search-btn",
                title: "Standard Search"
              }, [
                _createElementVNode("svg", {
                  width: "18",
                  height: "18",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  _createElementVNode("circle", {
                    cx: "11",
                    cy: "11",
                    r: "8"
                  }),
                  _createElementVNode("line", {
                    x1: "21",
                    y1: "21",
                    x2: "16.65",
                    y2: "16.65"
                  })
                ])
              ], -1 /* CACHED */)),
              (currentEngine.value.aiUrl)
                ? (_openBlock(), _createElementBlock("button", {
                    key: 0,
                    type: "button",
                    class: "search-btn ai-btn",
                    title: "AI Search / Chat",
                    onClick: _cache[2] || (_cache[2] = $event => (handleSearch('ai')))
                  }, [...(_cache[5] || (_cache[5] = [
                    _createElementVNode("svg", {
                      width: "18",
                      height: "18",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      _createElementVNode("path", { d: "M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" })
                    ], -1 /* CACHED */)
                  ]))]))
                : _createCommentVNode("v-if", true)
            ])
          ], 32 /* NEED_HYDRATION */)
        ]),
        _createCommentVNode(" === END SEARCH BAR === "),
        _cache[8] || (_cache[8] = _createElementVNode("div", { class: "hint-wrap" }, [
          _createElementVNode("div", { class: "hint-text" }, " Click the button toggle at left bottom to open projects ")
        ], -1 /* CACHED */))
      ]),
      _cache[9] || (_cache[9] = _createStaticVNode("<section class=\"glass-card\"><span class=\"section-title\">System Capabilities</span><div class=\"features-grid\"><div class=\"feature-item\"><h3>AI Core</h3><p>Focus enhancement, health tracking, and automated intelligence workflows.</p></div><div class=\"feature-item\"><h3>Productivity</h3><p>Task management, habit tracking, and advanced planning systems.</p></div><div class=\"feature-item\"><h3>Creation</h3><p>Docs, slides, whiteboards, and mind maps in one unified interface.</p></div><div class=\"feature-item\"><h3>Dev Tools</h3><p>HTML viewers, Git utilities, and minimal developer environments.</p></div></div><div class=\"sr-only\"><h2>All-in-One Web Tools &amp; AI Utilities Platform</h2><p> BlackICE Portal is a browser-based platform combining AI-powered tools, productivity apps, developer utilities, document creation systems, media tools, and real-time collaboration in a single minimal interface. </p><ul><li>Use AI tools for focus, health tracking, and automation</li><li>Manage tasks, habits, notes, and planning workflows</li><li>Create documents, slides, mind maps, and whiteboards</li><li>Access developer utilities like HTML viewers and Git fetchers</li><li>Collaborate via chat, calls, shared docs, and drawing boards</li></ul></div></section>", 1))
    ])
  ]))
}
}

}
__sfc__.__file = "Component.vue";
export default __sfc__;

document.head.insertBefore(
  Object.assign(document.createElement('style'), { textContent: "/* CSS Variables & Reset */\n[data-v-e3c34c9c]:root {\n  --bg-color: #0a0a0f;\n  --card-bg: #13131f;\n  --primary: #6366f1;\n  --primary-hover: #4f46e5;\n  --accent: #a855f7;\n  --text-main: #ffffff;\n  --text-muted: #94a3b8;\n  --border: #27273a;\n  --gradient: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);\n}\n[data-v-e3c34c9c] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbody[data-v-e3c34c9c] {\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n  background-color: var(--bg-color);\n  color: var(--text-main);\n  line-height: 1.6;\n}\na[data-v-e3c34c9c] {\n  text-decoration: none;\n  color: inherit;\n  transition: color 0.3s ease;\n}\nul[data-v-e3c34c9c] {\n  list-style: none;\n}\n\n/* Utility Classes */\n.container[data-v-e3c34c9c] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.btn-primary[data-v-e3c34c9c] {\n  background: var(--gradient);\n  border: none;\n  color: white;\n  padding: 10px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.btn-primary[data-v-e3c34c9c]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);\n}\n.btn-secondary[data-v-e3c34c9c] {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: white;\n  padding: 10px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  backdrop-filter: blur(10px);\n  transition: background 0.3s;\n}\n.btn-secondary[data-v-e3c34c9c]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.btn-outline[data-v-e3c34c9c] {\n  background: transparent;\n  border: 1px solid var(--border);\n  color: var(--text-main);\n  padding: 10px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  width: 100%;\n  transition: all 0.3s;\n}\n.btn-outline[data-v-e3c34c9c]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.btn-login[data-v-e3c34c9c] {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  font-weight: 500;\n  cursor: pointer;\n  margin-right: 15px;\n}\n.btn-login[data-v-e3c34c9c]:hover {\n  color: var(--text-main);\n}\n\n/* Navigation */\n.navbar[data-v-e3c34c9c] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background: rgba(10, 10, 15, 0.8);\n  backdrop-filter: blur(12px);\n  z-index: 1000;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.nav-content[data-v-e3c34c9c] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 70px;\n}\n.logo[data-v-e3c34c9c] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.logo-icon[data-v-e3c34c9c] {\n  color: var(--primary);\n  font-size: 1.5rem;\n}\n.nav-links[data-v-e3c34c9c] {\n  display: flex;\n  gap: 32px;\n}\n.nav-links a[data-v-e3c34c9c] {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n}\n.nav-links a[data-v-e3c34c9c]:hover {\n  color: var(--text-main);\n}\n.nav-actions[data-v-e3c34c9c] {\n  display: flex;\n  align-items: center;\n}\n.mobile-menu-btn[data-v-e3c34c9c] {\n  display: none;\n  background: none;\n  border: none;\n  color: white;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n/* Hero Section */\n.hero[data-v-e3c34c9c] {\n  padding-top: 140px;\n  padding-bottom: 80px;\n  position: relative;\n  overflow: hidden;\n}\n.hero-content[data-v-e3c34c9c] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n}\n.badge[data-v-e3c34c9c] {\n  display: inline-block;\n  background: rgba(99, 102, 241, 0.1);\n  color: var(--primary);\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  margin-bottom: 24px;\n  border: 1px solid rgba(99, 102, 241, 0.2);\n}\n.hero h1[data-v-e3c34c9c] {\n  font-size: 3.5rem;\n  line-height: 1.1;\n  margin-bottom: 24px;\n  font-weight: 800;\n}\n.gradient-text[data-v-e3c34c9c] {\n  background: var(--gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero p[data-v-e3c34c9c] {\n  color: var(--text-muted);\n  font-size: 1.125rem;\n  margin-bottom: 32px;\n  max-width: 500px;\n}\n.hero-buttons[data-v-e3c34c9c] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 40px;\n}\n.stats[data-v-e3c34c9c] {\n  display: flex;\n  gap: 40px;\n  border-top: 1px solid var(--border);\n  padding-top: 24px;\n}\n.stats strong[data-v-e3c34c9c] {\n  display: block;\n  font-size: 1.5rem;\n  color: var(--text-main);\n}\n.stats span[data-v-e3c34c9c] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n\n/* Hero Visual */\n.hero-visual[data-v-e3c34c9c] {\n  position: relative;\n  height: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.orb[data-v-e3c34c9c] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  z-index: 0;\n  opacity: 0.6;\n}\n.orb-1[data-v-e3c34c9c] {\n  width: 300px;\n  height: 300px;\n  background: var(--primary);\n  top: 0;\n  right: 0;\n}\n.orb-2[data-v-e3c34c9c] {\n  width: 250px;\n  height: 250px;\n  background: var(--accent);\n  bottom: 0;\n  left: 0;\n}\n.glass-panel[data-v-e3c34c9c] {\n  background: rgba(255, 255, 255, 0.03);\n  backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 16px;\n  padding: 24px;\n  width: 100%;\n  max-width: 450px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);\n  position: relative;\n  z-index: 1;\n}\n.code-block[data-v-e3c34c9c] {\n  font-family: 'Fira Code', monospace;\n  font-size: 0.9rem;\n  color: #e2e8f0;\n}\n.keyword[data-v-e3c34c9c] { color: #c084fc;\n}\n.function[data-v-e3c34c9c] { color: #60a5fa;\n}\n.string[data-v-e3c34c9c] { color: #4ade80;\n}\n.comment[data-v-e3c34c9c] { color: #64748b;\n}\n\n/* Trusted By */\n.trusted-by[data-v-e3c34c9c] {\n  border-top: 1px solid var(--border);\n  border-bottom: 1px solid var(--border);\n  padding: 40px 0;\n  background: rgba(255, 255, 255, 0.02);\n  text-align: center;\n}\n.trusted-by p[data-v-e3c34c9c] {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  margin-bottom: 20px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.logos[data-v-e3c34c9c] {\n  display: flex;\n  justify-content: center;\n  gap: 40px;\n  flex-wrap: wrap;\n  opacity: 0.5;\n  font-weight: 700;\n  font-size: 1.25rem;\n}\n\n/* Features */\n.features[data-v-e3c34c9c] {\n  padding: 100px 0;\n}\n.section-header[data-v-e3c34c9c] {\n  text-align: center;\n  margin-bottom: 60px;\n}\n.section-header h2[data-v-e3c34c9c] {\n  font-size: 2.5rem;\n  margin-bottom: 16px;\n}\n.section-header p[data-v-e3c34c9c] {\n  color: var(--text-muted);\n  font-size: 1.125rem;\n}\n.grid[data-v-e3c34c9c] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 24px;\n}\n.feature-card[data-v-e3c34c9c] {\n  background: var(--card-bg);\n  padding: 32px;\n  border-radius: 12px;\n  border: 1px solid var(--border);\n  transition: transform 0.3s, border-color 0.3s;\n}\n.feature-card[data-v-e3c34c9c]:hover {\n  transform: translateY(-5px);\n  border-color: var(--primary);\n}\n.icon-box[data-v-e3c34c9c] {\n  width: 48px;\n  height: 48px;\n  background: rgba(99, 102, 241, 0.1);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  margin-bottom: 20px;\n}\n.feature-card h3[data-v-e3c34c9c] {\n  margin-bottom: 12px;\n  font-size: 1.25rem;\n}\n.feature-card p[data-v-e3c34c9c] {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n}\n\n/* Pricing */\n.pricing[data-v-e3c34c9c] {\n  padding: 100px 0;\n  background: rgba(255, 255, 255, 0.02);\n}\n.pricing-grid[data-v-e3c34c9c] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 30px;\n  align-items: start;\n}\n.pricing-card[data-v-e3c34c9c] {\n  background: var(--card-bg);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  padding: 40px;\n  position: relative;\n}\n.pricing-card.featured[data-v-e3c34c9c] {\n  border-color: var(--primary);\n  box-shadow: 0 0 30px rgba(99, 102, 241, 0.15);\n}\n.popular-badge[data-v-e3c34c9c] {\n  position: absolute;\n  top: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--gradient);\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.pricing-card h3[data-v-e3c34c9c] {\n  font-size: 1.25rem;\n  margin-bottom: 10px;\n}\n.price[data-v-e3c34c9c] {\n  font-size: 3rem;\n  font-weight: 800;\n  margin-bottom: 30px;\n}\n.price span[data-v-e3c34c9c] {\n  font-size: 1rem;\n  color: var(--text-muted);\n  font-weight: 400;\n}\n.pricing-card ul[data-v-e3c34c9c] {\n  margin-bottom: 30px;\n}\n.pricing-card li[data-v-e3c34c9c] {\n  margin-bottom: 12px;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n}\n.pricing-card li[data-v-e3c34c9c]::before {\n  content: \"✓\";\n  color: var(--primary);\n  margin-right: 10px;\n  font-weight: bold;\n}\n\n/* Footer */\n.footer[data-v-e3c34c9c] {\n  padding: 80px 0 30px 0;\n  border-top: 1px solid var(--border);\n}\n.footer-content[data-v-e3c34c9c] {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  gap: 60px;\n  margin-bottom: 60px;\n}\n.footer-brand p[data-v-e3c34c9c] {\n  color: var(--text-muted);\n  margin-top: 16px;\n  max-width: 300px;\n}\n.footer-links[data-v-e3c34c9c] {\n  display: flex;\n  justify-content: space-between;\n}\n.footer-links h4[data-v-e3c34c9c] {\n  margin-bottom: 20px;\n  color: var(--text-main);\n}\n.footer-links a[data-v-e3c34c9c] {\n  display: block;\n  color: var(--text-muted);\n  margin-bottom: 12px;\n  font-size: 0.9rem;\n}\n.footer-links a[data-v-e3c34c9c]:hover {\n  color: var(--primary);\n}\n.copyright[data-v-e3c34c9c] {\n  text-align: center;\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  padding-top: 30px;\n  border-top: 1px solid var(--border);\n}\n\n/* Responsive Design */\n@media (max-width: 900px) {\n.hero-content[data-v-e3c34c9c] {\n    grid-template-columns: 1fr;\n    text-align: center;\n}\n.hero h1[data-v-e3c34c9c] {\n    font-size: 2.5rem;\n}\n.hero p[data-v-e3c34c9c] {\n    margin: 0 auto 32px auto;\n}\n.hero-buttons[data-v-e3c34c9c] {\n    justify-content: center;\n}\n.stats[data-v-e3c34c9c] {\n    justify-content: center;\n}\n.hero-visual[data-v-e3c34c9c] {\n    display: none;\n}\n.footer-content[data-v-e3c34c9c] {\n    grid-template-columns: 1fr;\n    gap: 40px;\n}\n}\n@media (max-width: 768px) {\n.nav-links[data-v-e3c34c9c], .nav-actions .btn-login[data-v-e3c34c9c], .nav-actions .btn-primary[data-v-e3c34c9c] {\n    display: none;\n}\n.mobile-menu-btn[data-v-e3c34c9c] {\n    display: block;\n}\n.nav-links.active[data-v-e3c34c9c] {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 70px;\n    left: 0;\n    width: 100%;\n    background: var(--card-bg);\n    padding: 20px;\n    border-bottom: 1px solid var(--border);\n    gap: 20px;\n}\n}\n\n\n/* CSS Variables */\n:root {\n  --bg-dark: #09090b;\n  --glass-bg: rgba(9, 9, 11, 0.65);\n  --glass-border: rgba(255, 255, 255, 0.08);\n  --accent-blue: #3b82f6;\n  --accent-glow: rgba(59, 130, 246, 0.5);\n  --text-main: #ffffff;\n  --text-muted: #a1a1aa;\n}\n\n/* Global Reset & Base Styles applied to wrapper to mimic body/html */\n.blackice-portal-wrapper {\n  width: 100%;\n  min-height: 100vh;\n  font-family: \"Inter Tight\", -apple-system, BlinkMacSystemFont, sans-serif;\n  color: var(--text-main);\n  overflow-x: hidden;\n  background-color: var(--bg-dark);\n  background-image: radial-gradient(circle at center, #1a1a1e 0%, #09090b 100%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 1;\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* --- Ambient Glow --- */\n.glow {\n  position: fixed;\n  width: 600px;\n  height: 600px;\n  background: radial-gradient(\n    circle,\n    rgba(59, 130, 246, 0.15) 0%,\n    rgba(0, 0, 0, 0) 70%\n  );\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n  z-index: -1;\n}\n\n/* --- Original Layout Container --- */\n.main-container {\n  width: 100%;\n  max-width: 900px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 60px;\n  animation: fadeIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;\n  opacity: 0;\n  transform: translateY(20px);\n}\n\n/* --- Hero Section --- */\n.hero-section {\n  text-align: center;\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.portal-title {\n  font-size: clamp(2.5rem, 5vw, 4rem);\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  line-height: 1.1;\n  margin-bottom: 20px;\n  background: linear-gradient(180deg, #ffffff 0%, #a1a1aa 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-shadow: 0 0 40px rgba(255, 255, 255, 0.1);\n  border: none;\n  background-color: transparent;\n}\n.portal-title:hover {\n  opacity: 0.9;\n  transform: scale(1.01);\n  text-shadow: 0 0 60px rgba(59, 130, 246, 0.3);\n}\n.hero-section p {\n  font-size: 1.125rem;\n  color: var(--text-muted);\n  max-width: 500px;\n  margin: 0 auto;\n  line-height: 1.6;\n  font-weight: 300;\n}\n\n/* --- Search Bar Styles --- */\n.search-wrapper {\n  width: 100%;\n  max-width: 560px;\n  margin-top: 35px;\n}\n.search-bar {\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 50px;\n  padding: 6px;\n  transition: all 0.3s ease;\n  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);\n}\n.search-bar:focus-within {\n  border-color: var(--accent-blue);\n  background: rgba(255, 255, 255, 0.06);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n.engine-selector {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 14px;\n  height: 40px;\n  border-right: 1px solid rgba(255, 255, 255, 0.1);\n  cursor: pointer;\n}\n.engine-selector select {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  cursor: pointer;\n  z-index: 2;\n}\n.engine-icon {\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  pointer-events: none;\n  transition: transform 0.2s ease;\n}\n.engine-selector:hover .engine-icon {\n  transform: scale(1.1);\n}\n.selector-arrow {\n  margin-left: 8px;\n  width: 12px;\n  height: 12px;\n  color: var(--text-muted);\n  pointer-events: none;\n}\n.search-input {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  color: var(--text-main);\n  font-size: 0.95rem;\n  font-family: inherit;\n  padding: 0 16px;\n  font-weight: 400;\n}\n.search-input::placeholder {\n  color: var(--text-muted);\n  opacity: 0.7;\n}\n\n/* Buttons Container */\n.search-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding-left: 4px;\n}\n.search-btn {\n  background: var(--accent-blue);\n  border: none;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: white;\n  flex-shrink: 0;\n}\n.search-btn:hover {\n  background: #2563eb;\n  transform: scale(1.05);\n}\n.search-btn:active {\n  transform: scale(0.95);\n}\n\n/* AI Button Specific Styles */\n.search-btn.ai-btn {\n  background: linear-gradient(135deg, #3b82f6, #8b5cf6);\n  width: 40px;\n  transition: all 0.3s ease;\n  overflow: hidden;\n  margin-left: 0;\n}\n.search-btn.ai-btn:hover {\n  box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);\n  transform: scale(1.05);\n}\n\n/* --- Glass Card for Features --- */\n.glass-card {\n  background: var(--glass-bg);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid var(--glass-border);\n  border-radius: 24px;\n  padding: 40px;\n  width: 100%;\n  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5),\n    inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  text-align: center;\n}\n.section-title {\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: var(--accent-blue);\n  margin-bottom: 24px;\n  display: block;\n  font-weight: 600;\n}\n.features-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n  text-align: left;\n  margin-top: 20px;\n}\n.feature-item {\n  padding: 16px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  transition: transform 0.2s ease, background 0.2s ease;\n}\n.feature-item:hover {\n  background: rgba(255, 255, 255, 0.06);\n  transform: translateY(-2px);\n}\n.feature-item h3 {\n  font-size: 0.95rem;\n  color: #fff;\n  margin-bottom: 6px;\n  font-weight: 500;\n}\n.feature-item p {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  line-height: 1.4;\n}\n\n/* --- Hint/Launcher HUD --- */\n.hint-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px 24px;\n  background: rgba(0, 0, 0, 0.4);\n  border: 1px solid var(--glass-border);\n  border-radius: 50px;\n  margin-top: 20px;\n  backdrop-filter: blur(10px);\n}\n.hint-text {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.8);\n}\n\n/* --- Animations --- */\n@keyframes fadeIn {\nto {\n    opacity: 1;\n    transform: translateY(0);\n}\n}\n\n/* SEO hidden content for structure but visual separation */\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}" }),
  document.head.getElementsByTagName('style')[0]
);
