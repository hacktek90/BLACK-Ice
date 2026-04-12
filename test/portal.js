 // BlackICE widget
    (function() {
            // Global flag to prevent double loading
            if (window.BlackICEWidget) {
                console.warn("BlackICE Widget is already running.");
                return;
            }

            class BlackICEWidget {
                constructor() {
                    try {
                        console.log("BlackICE Widget: Initializing (Blue Toggle Mode)...");
                        this.osUrl = "https://black-ice-3dbk.onrender.com/scrapsites/osapk.html";
                        this.homeUrl = "https://blackice-ac.vercel.app/";
                        this.crispId = "53f77668-00a3-4f45-8b0e-dd4d7c27ecdf";
                        this.formUrl = "https://blackice-ac.vercel.app/scrapsites/formsub.html";

                        this.theme = {
                            font: "'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif",
                            glassBg: "rgba(9, 9, 11, 0.95)",
                            glassBorder: "rgba(255, 255, 255, 0.08)",
                            accent: "#3b82f6",
                            textMain: "#ffffff",
                            textMuted: "#a1a1aa"
                        };

                        this.isSidebarOpen = true; 
                        this.allProjects = [];
                        this.pinnedIds = JSON.parse(localStorage.getItem('bi_pinned') || '[]');
                        this.isGridView = false;
                        this.filterMode = 'all';
                        this.currentProjectUrl = '';
                        this.isProjectOpen = false;
                        
                        this.init();
                    } catch (e) {
                        console.error("BlackICE Widget Error in Constructor:", e);
                        alert("Widget failed to initialize. Check console (F12) for details.");
                    }
                }

                init() {
                    this.loadFonts();
                    this.loadCrisp();
                    this.injectStyles();
                    this.createElements();
                    this.setupActions();
                    this.fetchProjects();
                }

                loadFonts() {
                    if(document.querySelector('link[href*="Inter+Tight"]')) return;
                    const link = document.createElement('link');
                    link.href = "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&display=swap";
                    link.rel = "stylesheet";
                    document.head.appendChild(link);
                }

                loadCrisp() {
                    if (window.$crisp) return;
                    window.$crisp = [];
                    window.CRISP_WEBSITE_ID = this.crispId;
                    const d = document;
                    const s = d.createElement("script");
                    s.src = "https://client.crisp.chat/l.js";
                    s.async = 1;
                    d.getElementsByTagName("head")[0].appendChild(s);
                    window.$crisp.push(["do", "chat:hide"]);
                    window.$crisp.push(["on", "chat:closed", () => {
                        window.$crisp.push(["do", "chat:hide"]);
                    }]);
                }

                injectStyles() {
                    const css = `
                    .bi-reset { all: initial; }
                    .bi-root { font-family: ${this.theme.font}; box-sizing: border-box; -webkit-font-smoothing: antialiased; }
                    .bi-root * { box-sizing: border-box; }
                    
                    /* --- FLOATING TOGGLE BUTTON --- */
                    #bi-float-toggle {
                        position: fixed;
                        top: 20px;
                        left: 20px;
                        width: 36px;
                        height: 36px;
                        background: rgba(59, 130, 246, 0.25); /* Blue Transparent */
                        backdrop-filter: blur(4px);
                        -webkit-backdrop-filter: blur(4px);
                        border: 1px solid rgba(59, 130, 246, 0.3); /* Blue Border */
                        border-radius: 8px;
                        z-index: 10003; 
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: ns-resize;
                        color: rgba(255, 255, 255, 0.9); 
                        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15); /* Blue Glow */
                        transition: background 0.2s, transform 0.1s;
                        user-select: none;
                    }
                    #bi-float-toggle:hover {
                        background: rgba(59, 130, 246, 0.5); /* Darker on hover */
                        border-color: rgba(59, 130, 246, 0.8);
                        color: white;
                        box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
                    }
                    #bi-float-toggle:active {
                        cursor: grabbing;
                        transform: scale(0.95);
                    }
                    #bi-float-toggle svg {
                        transition: transform 0.3s ease;
                        width: 18px;
                        height: 18px;
                    }
                    #bi-float-toggle.active svg {
                        transform: rotate(180deg);
                    }

                    /* --- SIDEBAR --- */
                    #bi-sidebar {
                    position: fixed; top: 0; bottom: 0; left: 0;
                    width: 340px;
                    background: ${this.theme.glassBg};
                    backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
                    border-right: 1px solid ${this.theme.glassBorder};
                    z-index: 10002; 
                    transform: translateX(0); 
                    opacity: 1;
                    transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s;
                    display: flex; flex-direction: column;
                    box-shadow: 20px 0 50px rgba(0,0,0,0.5);
                    overflow: hidden;
                    }

                    /* Hidden State (width 0) */
                    #bi-sidebar.hidden {
                        width: 0;
                        opacity: 0;
                        border: none;
                    }
                    
                    .bi-header { 
                        padding: 16px 20px; 
                        display: flex; 
                        align-items: center; 
                        gap: 12px; 
                        border-bottom: 1px solid ${this.theme.glassBorder}; 
                        background: rgba(255,255,255,0.02);
                        flex-shrink: 0;
                    }
                    .bi-logo { width: 28px; height: 28px; border-radius: 8px; background: ${this.theme.accent}; display: grid; place-items: center; color: white; font-weight: bold; font-size: 14px; flex-shrink: 0; box-shadow: 0 0 10px rgba(59, 130, 246, 0.4); }
                    .bi-title { font-weight: 600; font-size: 15px; color: ${this.theme.textMain}; letter-spacing: -0.02em; margin-right: auto; white-space: nowrap; overflow: hidden; }
                    
                    .bi-actions-row {
                        display: flex; gap: 8px; padding: 12px; border-bottom: 1px solid ${this.theme.glassBorder}; background: rgba(255,255,255,0.01);
                        flex-wrap: wrap;
                    }

                    .bi-action-btn {
                    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
                    color: ${this.theme.textMuted}; border-radius: 8px; padding: 6px 10px; cursor: pointer;
                    display: flex; align-items: center; justify-content: center;
                    transition: all 0.2s; font-size: 11px; font-weight: 600; flex-shrink: 0;
                    gap: 6px;
                    }
                    .bi-action-btn:hover { background: rgba(255,255,255,0.1); color: white; }
                    #bi-home-btn:hover { background: rgba(239, 68, 68, 0.2); color: #ef4444; border-color: rgba(239, 68, 68, 0.3); }
                    
                    .bi-btn-os svg { width: 14px; height: 14px; }
                    #bi-master-btn { padding: 0 12px; height: 36px; color: #d4d4d8; background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.3); flex: 1; }
                    #bi-master-btn:hover { background: rgba(59, 130, 246, 0.2); color: #60a5fa; border-color: #60a5fa; }
                    #bi-form-btn { color: #d4d4d8; background: rgba(168, 85, 247, 0.1); border-color: rgba(168, 85, 247, 0.3); }
                    #bi-form-btn:hover { background: rgba(168, 85, 247, 0.2); color: #c084fc; border-color: #c084fc; }

                    .bi-search-wrap { padding: 16px 12px 8px 12px; display: flex; align-items: center; gap: 8px; }
                    .bi-search-box {
                    background: rgba(0,0,0,0.3); border: 1px solid ${this.theme.glassBorder};
                    border-radius: 12px; display: flex; align-items: center; padding: 10px 12px; gap: 8px;
                    transition: border-color 0.2s; flex: 1;
                    }
                    .bi-search-box:focus-within { border-color: ${this.theme.accent}; background: rgba(0,0,0,0.5); }
                    .bi-search-box svg { width: 14px; height: 14px; color: ${this.theme.textMuted}; }
                    .bi-input { background: transparent; border: none; outline: none; color: white; font-size: 13px; width: 100%; font-family: ${this.theme.font}; }
                    .bi-input::placeholder { color: #52525b; }
                    
                    .bi-content { flex: 1; overflow-y: auto; padding: 8px 12px; }
                    .bi-content::-webkit-scrollbar { width: 4px; background: transparent; }
                    .bi-content::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }

                    /* --- FILTER TABS --- */
                    .bi-filters { display: flex; gap: 8px; padding: 8px 12px 12px 12px; border-bottom: 1px solid ${this.theme.glassBorder}; }
                    .bi-filter-tab {
                        flex: 1; padding: 6px; font-size: 11px; font-weight: 600; text-align: center;
                        background: rgba(255,255,255,0.03); border-radius: 6px; color: #71717a;
                        cursor: pointer; transition: all 0.2s; border: 1px solid transparent;
                    }
                    .bi-filter-tab:hover { color: #e4e4e7; background: rgba(255,255,255,0.05); }
                    .bi-filter-tab.active { background: rgba(59, 130, 246, 0.15); color: #60a5fa; border-color: rgba(59, 130, 246, 0.3); }
                    
                    /* --- PROJECT CARD --- */
                    .bi-card {
                    display: flex; align-items: center; gap: 14px;
                    padding: 12px; margin-bottom: 6px;
                    border-radius: 12px; text-decoration: none;
                    transition: all 0.2s ease;
                    background: transparent; border: 1px solid transparent;
                    cursor: pointer; position: relative;
                    }
                    .bi-card:hover { background: rgba(255,255,255,0.04); border-color: ${this.theme.glassBorder}; transform: translateX(4px); }
                    .bi-card.pinned { border-left: 2px solid ${this.theme.accent}; background: rgba(59,130,246,0.05); }
                    
                    .bi-card-img {
                    width: 38px; height: 38px; border-radius: 10px;
                    background: #27272a; object-fit: cover;
                    border: 1px solid ${this.theme.glassBorder};
                    }
                    .bi-card-info { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
                    .bi-card-title { color: #f4f4f5; font-size: 14px; font-weight: 500; }
                    .bi-card-desc { color: #71717a; font-size: 11px; }
                    
                    .bi-card-actions { display: flex; gap: 4px; opacity: 0; pointer-events: none; transition: opacity 0.2s; }
                    .bi-card:hover .bi-card-actions { opacity: 1; pointer-events: auto; }
                    
                    .bi-card-btn {
                    padding: 6px; border-radius: 6px; color: #71717a;
                    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
                    transition: all 0.2s;
                    }
                    .bi-card-btn:hover { color: white; background: rgba(255,255,255,0.1); }
                    .bi-card-btn.active-pin { color: ${this.theme.accent}; border-color: ${this.theme.accent}; background: rgba(59,130,246,0.1); }
                    .bi-card-btn.share-btn { color: #10b981; border-color: rgba(16, 185, 129, 0.2); background: rgba(16, 185, 129, 0.1); }
                    
                    /* --- GRID VIEW MODE --- */
                    .bi-content.grid-view {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 8px;
                    }
                    .bi-content.grid-view .bi-card {
                        flex-direction: column;
                        padding: 8px;
                        transform: none;
                    }
                    .bi-content.grid-view .bi-card:hover {
                        transform: translateY(-2px);
                        background: rgba(255,255,255,0.04);
                    }
                    .bi-content.grid-view .bi-card-img {
                        width: 100%;
                        height: 70px;
                        margin-bottom: 6px;
                    }
                    .bi-content.grid-view .bi-card-info {
                        text-align: center;
                    }
                    .bi-content.grid-view .bi-card-actions {
                        justify-content: center;
                        opacity: 1;
                        margin-top: 6px;
                        pointer-events: auto;
                    }

                    /* --- IFRAME --- */
                    #bi-iframe-container { position: fixed; inset: 0; width: 100%; height: 100%; background: #fff; z-index: 10000; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; }
                    #bi-iframe-container.active { opacity: 1; pointer-events: auto; }
                    #bi-iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; display: block; background: #fff; }
                    
                    /* --- SHARE MODAL --- */
                    #bi-share-modal {
                    position: fixed; inset: 0; z-index: 10004;
                    display: flex; align-items: center; justify-content: center;
                    opacity: 0; pointer-events: none; transition: opacity 0.3s;
                    }
                    #bi-share-modal.active { opacity: 1; pointer-events: auto; }
                    
                    .bi-modal-backdrop { position: absolute; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px); }
                    
                    .bi-modal-content {
                        position: relative; width: 90%; max-width: 400px;
                        background: #18181b; border: 1px solid ${this.theme.glassBorder};
                        border-radius: 20px; padding: 24px;
                        box-shadow: 0 20px 50px rgba(0,0,0,0.5);
                        transform: scale(0.95); transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    }
                    #bi-share-modal.active .bi-modal-content { transform: scale(1); }
                    
                    .bi-modal-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
                    .bi-modal-title { color: white; font-weight: 600; font-size: 18px; }
                    .bi-modal-close { background: transparent; border: none; color: #71717a; cursor: pointer; padding: 4px; }
                    .bi-modal-close:hover { color: white; }
                    
                    .bi-qr-wrap { background: white; padding: 10px; border-radius: 12px; width: 150px; height: 150px; margin: 0 auto 20px auto; display: flex; align-items: center; justify-content: center; }
                    .bi-qr-img { width: 100%; height: 100%; object-fit: contain; }
                    
                    .bi-social-row { display: flex; gap: 10px; justify-content: center; margin-bottom: 24px; flex-wrap: wrap; }
                    .bi-social-btn {
                        width: 40px; height: 40px; border-radius: 50%;
                        border: 1px solid ${this.theme.glassBorder};
                        display: flex; align-items: center; justify-content: center;
                        color: white; transition: transform 0.2s; text-decoration: none;
                    }
                    .bi-social-btn:hover { transform: scale(1.1); border-color: ${this.theme.accent}; }
                    
                    .bi-input-group { margin-bottom: 12px; }
                    .bi-input-label { display: block; color: #a1a1aa; font-size: 11px; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em; }
                    .bi-input-wrapper { display: flex; gap: 8px; }
                    .bi-modal-input {
                        flex: 1; background: #27272a; border: 1px solid ${this.theme.glassBorder};
                        color: #e4e4e7; padding: 8px 10px; border-radius: 8px;
                        font-size: 12px; font-family: monospace; outline: none; text-overflow: ellipsis;
                    }
                    .bi-modal-input:focus { border-color: ${this.theme.accent}; }
                    .bi-copy-small {
                        background: #3f3f46; color: white; border: none; padding: 0 12px; border-radius: 8px;
                        font-size: 11px; cursor: pointer; font-weight: 500; transition: background 0.2s;
                    }
                    .bi-copy-small:hover { background: #52525b; }
                    
                    /* CRISP CHAT Z-INDEX FIX */
                    #crisp-chatbox { z-index: 10005 !important; }
                    .crisp-client .crisp-1s7z6t4 { z-index: 10005 !important; }
                    `;
                    const s = document.createElement('style');
                    s.textContent = css;
                    document.head.appendChild(s);
                }

                createElements() {
                    console.log("Creating DOM Elements...");
                    
                    // 1. Create Floating Toggle Button (Chevron)
                    this.toggleBtn = document.createElement('div');
                    this.toggleBtn.id = 'bi-float-toggle';
                    this.toggleBtn.className = 'active'; 
                    this.toggleBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>`;

                    // 2. Iframe Container (No controls)
                    this.iframeContainer = document.createElement('div');
                    this.iframeContainer.id = 'bi-iframe-container';
                    this.iframeContainer.className = 'bi-root';
                    
                    this.iframeContainer.innerHTML = `
                        <iframe id="bi-iframe" src="about:blank" allow="fullscreen; clipboard-read; clipboard-write; geolocation; microphone; camera; midi; encrypted-media; autoplay"></iframe>
                    `;

                    this.shareModal = document.createElement('div');
                    this.shareModal.id = 'bi-share-modal';
                    this.shareModal.className = 'bi-root';
                    this.shareModal.innerHTML = `
                        <div class="bi-modal-backdrop" onclick="window.BlackICEWidget.closeShareModal()"></div>
                        <div class="bi-modal-content">
                            <div class="bi-modal-header">
                                <div class="bi-modal-title">Share Project</div>
                                <button class="bi-modal-close" onclick="window.BlackICEWidget.closeShareModal()">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            </div>
                            <div class="bi-qr-wrap">
                                <img id="bi-share-qr" class="bi-qr-img" src="" alt="QR Code">
                            </div>
                            <div class="bi-social-row">
                                <a href="#" id="bi-share-twitter" target="_blank" class="bi-social-btn" title="Share on X">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                </a>
                                <a href="#" id="bi-share-whatsapp" target="_blank" class="bi-social-btn" title="Share on WhatsApp">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                </a>
                                <a href="#" id="bi-share-facebook" target="_blank" class="bi-social-btn" title="Share on Facebook">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a>
                                <a href="#" id="bi-share-linkedin" target="_blank" class="bi-social-btn" title="Share on LinkedIn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                            </div>
                            <div class="bi-input-group">
                                <span class="bi-input-label">Direct Link</span>
                                <div class="bi-input-wrapper">
                                    <input type="text" id="bi-share-url" class="bi-modal-input" readonly>
                                    <button class="bi-copy-small" onclick="window.BlackICEWidget.copyShareInput('bi-share-url')">Copy</button>
                                </div>
                            </div>
                            <div class="bi-input-group">
                                <span class="bi-input-label">Embed Code</span>
                                <div class="bi-input-wrapper">
                                    <input type="text" id="bi-share-embed" class="bi-modal-input" readonly>
                                    <button class="bi-copy-small" onclick="window.BlackICEWidget.copyShareInput('bi-share-embed')">Copy</button>
                                </div>
                            </div>
                        </div>
                    `;
                    
                    this.dbUrl = "https://h-90-8a7c5-default-rtdb.firebaseio.com/sites.json";

                    this.sidebar = document.createElement('div');
                    this.sidebar.id = 'bi-sidebar';
                    this.sidebar.className = 'bi-root';
                    
                    this.sidebar.innerHTML = `
                    <div class="bi-header">
                        <div class="bi-logo">B</div>
                        <div class="bi-title">BlackICE</div>
                    </div>
                    
                    <div class="bi-actions-row">
                        <button id="bi-view-btn" class="bi-action-btn" title="Toggle View">
                            <svg width="16" height="16" id="bi-view-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                        </button>
                        <button id="bi-home-btn" class="bi-action-btn" title="Exit App / Home">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        </button>
                        <button id="bi-chat-btn" class="bi-action-btn" title="Support Chat">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                        </button>
                        <button id="bi-form-btn" class="bi-action-btn" title="Open Submission Form">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        </button>
                        <button id="bi-os-btn" class="bi-action-btn bi-btn-os" title="Download OS">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                            <span>OS</span>
                        </button>
                    </div>

                    <div class="bi-search-wrap">
                        <div class="bi-search-box">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            <input type="text" id="bi-search" class="bi-input" placeholder="Search projects...">
                        </div>
                        <button id="bi-master-btn" class="bi-action-btn" title="Open Master Projects">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            <span>Master</span>
                        </button>
                    </div>
                    <div class="bi-filters">
                        <div class="bi-filter-tab active" id="bi-filter-all">All Projects</div>
                        <div class="bi-filter-tab" id="bi-filter-pinned">Pinned Only</div>
                    </div>
                    <div class="bi-content" id="bi-list">
                        <div style="padding:20px; text-align:center; color:#52525b; font-size:12px;">Loading...</div>
                    </div>
                    `;

                    document.body.append(this.iframeContainer, this.sidebar, this.shareModal, this.toggleBtn);
                    
                    const demoContent = document.querySelector('.demo-content');
                    if(demoContent) {
                        demoContent.style.paddingLeft = '360px';
                    }
                }

                setupActions() {
                    // --- DRAGGABLE TOGGLE LOGIC ---
                    let isDragging = false;
                    let startY = 0;
                    let startTop = 0;
                    let totalMove = 0;

                    const handleStart = (e) => {
                        if(e.type === 'mousedown' && e.button !== 0) return;
                        
                        const evt = e.touches ? e.touches[0] : e;
                        isDragging = true;
                        startY = evt.clientY;
                        startTop = parseInt(window.getComputedStyle(this.toggleBtn).top, 10) || 20;
                        totalMove = 0;
                        this.toggleBtn.style.transition = 'none'; 
                    };

                    const handleMove = (e) => {
                        if (!isDragging) return;
                        const evt = e.touches ? e.touches[0] : e;
                        const deltaY = evt.clientY - startY;
                        let newTop = startTop + deltaY;
                        
                        const maxTop = window.innerHeight - 50; 
                        if(newTop < 10) newTop = 10;
                        if(newTop > maxTop) newTop = maxTop;

                        this.toggleBtn.style.top = `${newTop}px`;
                        totalMove += Math.abs(deltaY);
                    };

                    const handleEnd = (e) => {
                        if (!isDragging) return;
                        isDragging = false;
                        this.toggleBtn.style.transition = 'background 0.2s, transform 0.1s'; 

                        if (totalMove < 5) {
                            this.toggleSidebar();
                        }
                    };

                    this.toggleBtn.addEventListener('mousedown', handleStart);
                    window.addEventListener('mousemove', handleMove);
                    window.addEventListener('mouseup', handleEnd);

                    this.toggleBtn.addEventListener('touchstart', handleStart, { passive: false });
                    window.addEventListener('touchmove', handleMove, { passive: false });
                    window.addEventListener('touchend', handleEnd);


                    // Sidebar Actions
                    const osBtn = document.getElementById('bi-os-btn');
                    if(osBtn) osBtn.onclick = () => window.open(this.osUrl, '_blank');
                    
                    const formBtn = document.getElementById('bi-form-btn');
                    if(formBtn) {
                        formBtn.onclick = () => {
                            window.open(this.formUrl, '_blank');
                        };
                    }
                    
                    const masterBtn = document.getElementById('bi-master-btn');
                    if(masterBtn) masterBtn.onclick = () => this.openProject('/projects.html', 'Master Projects');

                    const viewBtn = document.getElementById('bi-view-btn');
                    if(viewBtn) viewBtn.onclick = () => {
                        this.isGridView = !this.isGridView;
                        const icon = document.getElementById('bi-view-icon');
                        if(icon) {
                            if(this.isGridView) {
                                icon.innerHTML = `<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>`;
                            } else {
                                icon.innerHTML = `<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>`;
                            }
                        }
                        this.runSearchAndRender();
                    };

                    const filterAll = document.getElementById('bi-filter-all');
                    if(filterAll) filterAll.onclick = () => this.setFilter('all');
                    const filterPinned = document.getElementById('bi-filter-pinned');
                    if(filterPinned) filterPinned.onclick = () => this.setFilter('pinned');

                    const chatBtn = document.getElementById('bi-chat-btn');
                    if(chatBtn) chatBtn.onclick = () => {
                        window.$crisp.push(["do", "chat:open"]);
                        window.$crisp.push(["do", "chat:show"]);
                    };

                    const searchInput = document.getElementById('bi-search');
                    if(searchInput) {
                        searchInput.oninput = (e) => {
                            this.runSearchAndRender();
                        };
                    }

                    const homeBtn = document.getElementById('bi-home-btn');
                    if(homeBtn) homeBtn.onclick = () => window.location.href = this.homeUrl;
                }

                toggleSidebar() {
                    this.isSidebarOpen = !this.isSidebarOpen;
                    const sidebar = document.getElementById('bi-sidebar');
                    const toggleBtn = document.getElementById('bi-float-toggle');
                    const demoContent = document.querySelector('.demo-content');

                    if (this.isSidebarOpen) {
                        sidebar.classList.remove('hidden');
                        toggleBtn.classList.add('active');
                        if(demoContent) demoContent.style.paddingLeft = '360px';
                    } else {
                        sidebar.classList.add('hidden');
                        toggleBtn.classList.remove('active');
                        if(demoContent) demoContent.style.paddingLeft = '80px'; 
                    }
                }

                setFilter(mode) {
                    this.filterMode = mode;
                    document.querySelectorAll('.bi-filter-tab').forEach(el => el.classList.remove('active'));
                    const activeTab = (mode === 'all') ? document.getElementById('bi-filter-all') : document.getElementById('bi-filter-pinned');
                    if(activeTab) activeTab.classList.add('active');
                    this.runSearchAndRender();
                }

                runSearchAndRender() {
                    const searchInput = document.getElementById('bi-search');
                    const term = searchInput ? searchInput.value.toLowerCase().trim() : '';
                    let projects = this.allProjects;

                    if(this.filterMode === 'pinned') {
                        projects = projects.filter(p => this.pinnedIds.includes(p.id));
                    }

                    if (term) {
                        const keywords = term.split(/\s+/).filter(k => k.length > 0);
                        projects = projects.filter(p => {
                            const content = `${p.title || ''} ${p.url || ''} ${p.id || ''} ${p.desc || ''}`.toLowerCase();
                            return keywords.every(keyword => content.includes(keyword));
                        });
                    }
                    this.renderProjects(projects);
                }

                async fetchProjects() {
                    try {
                        const res = await fetch(this.dbUrl);
                        const data = await res.json();
                        if (data) {
                            this.allProjects = Object.entries(data).map(([key, val]) => ({ id: key, ...val }));
                            this.allProjects.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
                            this.runSearchAndRender();
                            this.checkSharedLink();
                        }
                    } catch (err) {
                        console.error("Fetch Error:", err);
                        const list = document.getElementById('bi-list');
                        if(list) list.innerHTML = `<div style="padding:20px; text-align:center; color:#71717a">Unable to load portal.</div>`;
                    }
                }

                checkSharedLink() {
                    const urlParams = new URLSearchParams(window.location.search);
                    const projectParam = urlParams.get('project');
                    if (projectParam && this.allProjects.length > 0) {
                        const decodedParam = decodeURIComponent(projectParam);
                        const project = this.allProjects.find(site =>
                            site.title === decodedParam || site.id === decodedParam || site.url === decodedParam ||
                            (site.title || '').toLowerCase() === decodedParam.toLowerCase()
                        );
                        if (project) {
                            // --- URL REWRITE LOGIC START ---
                            let finalUrl = project.url;
                            try {
                                const parsedUrl = new URL(project.url);
                                if (parsedUrl.hostname.includes('onrender.com')) {
                                    const path = parsedUrl.pathname;
                                    finalUrl = `https://blackice-ac.vercel.app${path}`;
                                    console.log(`Rewriting URL from ${project.url} to ${finalUrl}`);
                                }
                            } catch (e) {
                                console.warn("Invalid URL format for rewriting", project.url);
                                finalUrl = project.url;
                            }
                            // --- URL REWRITE LOGIC END ---
                            this.openProject(finalUrl, project.title);
                        }
                    }
                }

                renderProjects(projects) {
                    const list = document.getElementById('bi-list');
                    if(!list) return;
                    
                    list.innerHTML = "";
                    if(projects.length === 0) {
                        list.innerHTML = `<div style="padding:20px; text-align:center; color:#52525b; font-size:12px;">No results found.</div>`;
                        return;
                    }

                    if(this.isGridView) list.classList.add('grid-view');
                    else list.classList.remove('grid-view');

                    const needsSeparator = !this.isGridView && this.filterMode === 'all';

                    const pinned = [];
                    const others = [];

                    if(needsSeparator) {
                        projects.forEach(p => {
                            if(this.pinnedIds.includes(p.id)) pinned.push(p);
                            else others.push(p);
                        });
                    } else {
                        others.push(...projects);
                    }

                    const createCard = (p, isPinned) => {
                        const screenshot = `https://api.microlink.io/?url=${encodeURIComponent(p.url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=800&viewport.height=600`;
                        const projectUrl = p.url;

                        const el = document.createElement('div');
                        el.className = `bi-card ${isPinned ? 'pinned' : ''}`;

                        el.onclick = (e) => {
                            if (e.target.closest('.bi-card-btn')) return;
                            this.openProject(projectUrl, p.title);
                            
                            const projectParam = encodeURIComponent(p.title || p.id || p.url);
                            const newUrl = `${window.location.pathname}?project=${projectParam}`;
                            window.history.pushState({}, '', newUrl);
                        };

                        el.innerHTML = `
                        <img src="${screenshot}" class="bi-card-img" loading="lazy" alt="Preview" />
                        <div class="bi-card-info">
                            <div class="bi-card-title">${p.title || 'Untitled Project'}</div>
                            <div class="bi-card-desc">Click to launch app</div>
                        </div>
                        <div class="bi-card-actions">
                            <button class="bi-card-btn share-btn" title="Share Virally">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                            </button>
                            <button class="bi-card-btn bi-pin-btn ${isPinned ? 'active-pin' : ''}" title="${isPinned ? 'Unpin' : 'Pin'}">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="${isPinned ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="17" x2="12" y2="22"></line><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path></svg>
                            </button>
                        </div>
                        `;

                        el.querySelector('.share-btn').onclick = (e) => {
                            e.stopPropagation();
                            this.openShareModal(p, projectUrl);
                        };

                        el.querySelector('.bi-pin-btn').onclick = (e) => {
                            e.stopPropagation();
                            this.togglePin(p.id);
                        };

                        return el;
                    };

                    if(needsSeparator) {
                        pinned.forEach(p => list.appendChild(createCard(p, true)));
                        if(pinned.length > 0 && others.length > 0) {
                            const hr = document.createElement('div');
                            hr.style.cssText = "height:1px; background:rgba(255,255,255,0.1); margin:8px 4px; grid-column: 1 / -1;";
                            list.appendChild(hr);
                        }
                    }
                    others.forEach(p => list.appendChild(createCard(p, false)));
                }

                openShareModal(project, projectUrl) {
                    const shareableUrl = `${window.location.origin}${window.location.pathname}?project=${encodeURIComponent(project.title || project.id || project.url)}`;
                    const embedCode = `<iframe src="${shareableUrl}" width="100%" height="600" style="border:none; border-radius:12px;" allowfullscreen></iframe>`;
                    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(shareableUrl)}&bgcolor=18181b&color=ffffff`;

                    const qrImg = document.getElementById('bi-share-qr');
                    const urlInput = document.getElementById('bi-share-url');
                    const embedInput = document.getElementById('bi-share-embed');
                    
                    if(qrImg) qrImg.src = qrUrl;
                    if(urlInput) urlInput.value = shareableUrl;
                    if(embedInput) embedInput.value = embedCode;

                    const twitterText = encodeURIComponent(`Check out ${project.title} on BlackICE!`);
                    const twitterLink = document.getElementById('bi-share-twitter');
                    if(twitterLink) twitterLink.href = `https://twitter.com/intent/tweet?text=${twitterText}&url=${encodeURIComponent(shareableUrl)}`;
                    
                    const whatsappText = encodeURIComponent(`Check out ${project.title} on BlackICE! ${shareableUrl}`);
                    const whatsappLink = document.getElementById('bi-share-whatsapp');
                    if(whatsappLink) whatsappLink.href = `https://api.whatsapp.com/send?text=${whatsappText}`;
                    
                    const fbLink = document.getElementById('bi-share-facebook');
                    if(fbLink) fbLink.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareableUrl)}`;
                    
                    const liLink = document.getElementById('bi-share-linkedin');
                    if(liLink) liLink.href = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareableUrl)}`;

                    this.shareModal.classList.add('active');
                }

                closeShareModal() {
                    this.shareModal.classList.remove('active');
                }

                copyShareInput(inputId) {
                    const input = document.getElementById(inputId);
                    if(!input) return;
                    
                    input.select();
                    document.execCommand('copy');
                    
                    const btn = input.nextElementSibling;
                    if(btn) {
                        const originalText = btn.textContent;
                        btn.textContent = "Copied!";
                        btn.style.color = "#10b981";
                        setTimeout(() => {
                            btn.textContent = originalText;
                            btn.style.color = "";
                        }, 2000);
                    }
                }

                togglePin(id) {
                    if(this.pinnedIds.includes(id)) {
                        this.pinnedIds = this.pinnedIds.filter(pid => pid !== id);
                    } else {
                        this.pinnedIds.push(id);
                    }
                    localStorage.setItem('bi_pinned', JSON.stringify(this.pinnedIds));
                    this.runSearchAndRender();
                }

                openProject(url, title) {
                    let finalUrl = url;

                    // --- URL REWRITE LOGIC START ---
                    try {
                        const parsedUrl = new URL(url);
                        if (parsedUrl.hostname.includes('onrender.com')) {
                            const path = parsedUrl.pathname;
                            finalUrl = `https://blackice-ac.vercel.app${path}`;
                            console.log(`Rewriting URL from ${url} to ${finalUrl}`);
                        }
                    } catch (e) {
                        console.warn("Invalid URL format for rewriting", url);
                        finalUrl = url;
                    }
                    // --- URL REWRITE LOGIC END ---

                    this.currentProjectUrl = finalUrl;
                    this.isProjectOpen = true;

                    const iframe = document.getElementById('bi-iframe');
                    const container = document.getElementById('bi-iframe-container');
                    
                    if(iframe) iframe.src = finalUrl;
                    if(container) container.classList.add('active');
                    
                    document.body.style.overflow = 'hidden';
                    if(window.$crisp) window.$crisp.push(["do", "chat:hide"]);

                    if(this.isSidebarOpen) {
                        this.toggleSidebar();
                    }
                }
            }

            const initWidget = () => {
                try {
                    console.log("Initializing BlackICE Blue Widget...");
                    window.BlackICEWidget = new BlackICEWidget();
                } catch(e) {
                    console.error("Failed to start Widget:", e);
                }
            };

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initWidget);
            } else {
                initWidget();
            }
        })();
    (function () {
      const s = document.createElement("script");
      s.src = "https://blackice-ac.vercel.app/test/tracking.js";
      s.defer = true;
      document.head.appendChild(s);
    })();

