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
                    console.log("BlackICE Widget: Initializing...");
                    this.osUrl = "https://black-ice-3dbk.onrender.com/scrapsites/osapk.html";
                    this.homeUrl = "https://blackice-ac.vercel.app/";
                    this.crispId = "53f77668-00a3-4f45-8b0e-dd4d7c27ecdf";

                    this.theme = {
                        font: "'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif",
                        glassBg: "rgba(9, 9, 11, 0.95)",
                        glassBorder: "rgba(255, 255, 255, 0.08)",
                        accent: "#3b82f6",
                        textMain: "#ffffff",
                        textMuted: "#a1a1aa"
                    };

                    this.isOpen = false;
                    this.allProjects = [];
                    this.pinnedIds = JSON.parse(localStorage.getItem('bi_pinned') || '[]');
                    this.isGridView = false;
                    this.filterMode = 'all';
                    this.currentProjectUrl = '';
                    
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
                this.setupDraggable();
                this.setupActions();
                this.fetchProjects();

                setTimeout(() => {
                    const tooltip = document.getElementById('bi-drag-tip');
                    if(tooltip) tooltip.style.opacity = '0';
                }, 6000);
            }

            loadFonts() {
                if(document.querySelector('link[href*="Inter+Tight"]')) return;
                const link = document.createElement('link');
                link.href = "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&display=swap";
                link.rel = "stylesheet";
                document.head.appendChild(link);
            }

            loadCrisp() {
                if (window.$crisp) return; // Don't reload if exists
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
                
                /* --- TRIGGER --- */
                #bi-trigger {
                position: fixed; bottom: 30px; left: 30px; /* CHANGED: right to left */
                width: 56px; height: 56px;
                background: #18181b !important; /* Force background */
                border: 1px solid ${this.theme.glassBorder};
                border-radius: 18px;
                cursor: grab;
                z-index: 2147483647;
                display: flex; flex-direction: column; align-items: center; justify-content: center;
                box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0,0,0,0.5);
                transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s;
                color: ${this.theme.textMain};
                animation: bi-wiggle 2s ease-in-out 1.5s;
                }
                @keyframes bi-wiggle {
                0%, 100% { transform: rotate(0deg); }
                10% { transform: rotate(10deg); } /* CHANGED: direction */
                20% { transform: rotate(-10deg); }
                30% { transform: rotate(6deg); }
                40% { transform: rotate(-6deg); }
                50% { transform: rotate(0deg); }
                }
                #bi-trigger:hover { transform: scale(1.08); box-shadow: 0 15px 35px -5px rgba(59, 130, 246, 0.3), 0 0 0 1px ${this.theme.accent}; border-color: ${this.theme.accent}; }
                #bi-trigger:active { cursor: grabbing; transform: scale(0.95); }
                
                .bi-grip-lines { display: flex; gap: 2px; margin-top: 4px; opacity: 0.4; }
                .bi-grip-line { width: 12px; height: 2px; background: white; border-radius: 2px; }
                .bi-icon-wrap { position: relative; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; }
                #bi-trigger svg { position: absolute; width: 24px; height: 24px; transition: all 0.4s ease; }
                #bi-trigger.open .bi-menu-icon { transform: rotate(-90deg); opacity: 0; }
                .bi-close-icon { opacity: 0; transform: scale(0.5); }
                #bi-trigger.open .bi-close-icon { opacity: 1; transform: scale(1); transform: rotate(0deg); }
                
                #bi-drag-tip {
                position: absolute; left: 70px; /* CHANGED: right to left */
                top: 50%; transform: translateY(-50%);
                background: rgba(24, 24, 27, 0.9);
                backdrop-filter: blur(8px);
                border: 1px solid rgba(255,255,255,0.1);
                color: #e4e4e7; padding: 8px 12px; border-radius: 10px;
                font-family: ${this.theme.font}; font-size: 10px; font-weight: 600;
                text-transform: uppercase; letter-spacing: 0.05em;
                pointer-events: none; opacity: 1; transition: opacity 0.5s; white-space: nowrap;
                box-shadow: 0 4px 20px rgba(0,0,0,0.4);
                }
                #bi-drag-tip::after {
                content: ''; position: absolute; left: -4px; /* CHANGED: right to left */
                top: 50%; transform: translateY(-50%);
                border-width: 4px; border-style: solid;
                border-color: transparent rgba(24, 24, 27, 0.9) transparent transparent; /* CHANGED: Arrow points right */
                }
                
                /* --- SIDEBAR --- */
                #bi-sidebar {
                position: fixed; top: 10px; bottom: 10px; left: 10px; /* CHANGED: right to left */
                width: 340px; max-width: 90vw;
                background: ${this.theme.glassBg};
                backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
                border: 1px solid ${this.theme.glassBorder};
                border-radius: 24px;
                z-index: 2147483646;
                transform: translateX(-120%); /* CHANGED: Slide out to left */
                opacity: 0;
                transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                display: flex; flex-direction: column;
                box-shadow: 20px 0 50px rgba(0,0,0,0.5); /* CHANGED: Shadow on right */
                overflow: hidden;
                }
                #bi-sidebar.open { transform: translateX(0); opacity: 1; }
                
                .bi-header { padding: 16px 20px; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid ${this.theme.glassBorder}; background: rgba(255,255,255,0.02); }
                .bi-logo { width: 24px; height: 24px; border-radius: 6px; background: ${this.theme.accent}; display: grid; place-items: center; color: white; font-weight: bold; font-size: 14px; flex-shrink: 0; }
                .bi-title { font-weight: 600; font-size: 15px; color: ${this.theme.textMain}; letter-spacing: -0.02em; margin-right: auto; }
                
                .bi-action-btn {
                background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
                color: ${this.theme.textMuted}; border-radius: 8px; padding: 6px; cursor: pointer;
                display: flex; align-items: center; justify-content: center;
                transition: all 0.2s; font-size: 11px; font-weight: 600; flex-shrink: 0;
                }
                .bi-action-btn:hover { background: rgba(255,255,255,0.1); color: white; }
                #bi-home-btn:hover { background: rgba(239, 68, 68, 0.2); color: #ef4444; border-color: rgba(239, 68, 68, 0.3); }
                
                .bi-btn-os { padding: 6px 10px; gap: 6px; }
                .bi-btn-os svg { width: 14px; height: 14px; }
                #bi-master-btn { padding: 0 12px; height: 36px; gap: 6px; color: #d4d4d8; background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.3); }
                #bi-master-btn:hover { background: rgba(59, 130, 246, 0.2); color: #60a5fa; border-color: #60a5fa; }

                .bi-search-wrap { padding: 12px 12px 4px 12px; display: flex; align-items: center; gap: 8px; }
                .bi-search-box {
                background: rgba(0,0,0,0.2); border: 1px solid ${this.theme.glassBorder};
                border-radius: 12px; display: flex; align-items: center; padding: 8px 12px; gap: 8px;
                transition: border-color 0.2s; flex: 1;
                }
                .bi-search-box:focus-within { border-color: ${this.theme.accent}; }
                .bi-search-box svg { width: 14px; height: 14px; color: ${this.theme.textMuted}; }
                .bi-input { background: transparent; border: none; outline: none; color: white; font-size: 13px; width: 100%; font-family: ${this.theme.font}; }
                .bi-input::placeholder { color: #52525b; }
                
                .bi-content { flex: 1; overflow-y: auto; padding: 8px 12px; }
                .bi-content::-webkit-scrollbar { width: 0px; background: transparent; }

                /* --- FILTER TABS --- */
                .bi-filters { display: flex; gap: 8px; padding: 8px 12px; border-bottom: 1px solid ${this.theme.glassBorder}; }
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
                padding: 12px; margin-bottom: 4px;
                border-radius: 12px; text-decoration: none;
                transition: all 0.2s ease;
                background: transparent; border: 1px solid transparent;
                cursor: pointer; position: relative;
                }
                .bi-card:hover { background: rgba(255,255,255,0.03); border-color: ${this.theme.glassBorder}; transform: translateX(4px); }
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

                /* --- IFRAME & OVERLAY --- */
                #bi-iframe-container { position: fixed; inset: 0; width: 100%; height: 100%; background: #fff; z-index: 2147483645; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; }
                #bi-iframe-container.active { opacity: 1; pointer-events: auto; }
                #bi-iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; display: block; background: #fff; }
                #bi-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.3); backdrop-filter: blur(4px); z-index: 2147483645; opacity: 0; pointer-events: none; transition: opacity 0.4s; }
                #bi-overlay.visible { opacity: 1; pointer-events: auto; }
                
                /* --- SHARE MODAL --- */
                #bi-share-modal {
                position: fixed; inset: 0; z-index: 2147483647;
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
                #crisp-chatbox { z-index: 2147483648 !important; }
                .crisp-client .crisp-1s7z6t4 { z-index: 2147483648 !important; }
                `;
                const s = document.createElement('style');
                s.textContent = css;
                document.head.appendChild(s);
            }

            createElements() {
                console.log("Creating DOM Elements...");
                
                this.overlay = document.createElement('div');
                this.overlay.id = 'bi-overlay';
                this.overlay.onclick = () => this.toggle();

                // Iframe Container (Toolbar Removed)
                this.iframeContainer = document.createElement('div');
                this.iframeContainer.id = 'bi-iframe-container';
                this.iframeContainer.className = 'bi-root';
                // Only the iframe, no toolbar
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
                const menuIcon = `<svg class="bi-menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`;
                const closeIcon = `<svg class="bi-close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

                this.btn = document.createElement('div');
                this.btn.id = 'bi-trigger';
                this.btn.innerHTML = `
                <div id="bi-drag-tip">DRAG OR CLICK TO OPEN</div>
                <div class="bi-icon-wrap">${menuIcon}${closeIcon}</div>
                <div class="bi-grip-lines">
                    <div class="bi-grip-line" style="width:4px"></div>
                    <div class="bi-grip-line" style="width:16px"></div>
                    <div class="bi-grip-line" style="width:4px"></div>
                </div>
                `;

                this.sidebar = document.createElement('div');
                this.sidebar.id = 'bi-sidebar';
                this.sidebar.className = 'bi-root';
                this.sidebar.innerHTML = `
                <div class="bi-header">
                    <div class="bi-logo">B</div>
                    <div class="bi-title">BlackICE</div>
                    <button id="bi-view-btn" class="bi-action-btn" title="Toggle View">
                        <svg width="16" height="16" id="bi-view-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    </button>
                    <button id="bi-home-btn" class="bi-action-btn" title="Exit App / Home">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    </button>
                    <button id="bi-chat-btn" class="bi-action-btn" title="Support Chat">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    </button>
                    <button id="bi-fs-btn" class="bi-action-btn" title="Toggle Fullscreen">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
                    </button>
                    <button id="bi-os-btn" class="bi-action-btn bi-btn-os">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                        OS
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

                document.body.append(this.iframeContainer, this.overlay, this.shareModal, this.btn, this.sidebar);
                console.log("DOM Elements appended.");
            }

            setupActions() {
                // Sidebar Actions
                const osBtn = document.getElementById('bi-os-btn');
                if(osBtn) osBtn.onclick = () => window.open(this.osUrl, '_blank');
                
                const fsBtn = document.getElementById('bi-fs-btn');
                if(fsBtn) fsBtn.onclick = () => {
                    if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(e => console.log(e));
                    else document.exitFullscreen();
                };
                
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
                    if (document.getElementById('bi-iframe-container').classList.contains('active')) this.closeProject();
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
                        let finalUrl = project.url;
                        try { const u = new URL(project.url); finalUrl = window.location.origin + u.pathname; } catch(e) {}
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
                    let finalUrl = p.url;
                    try { const u = new URL(p.url); finalUrl = window.location.origin + u.pathname; } catch(e) {}

                    const el = document.createElement('div');
                    el.className = `bi-card ${isPinned ? 'pinned' : ''}`;

                    el.onclick = (e) => {
                        if (e.target.closest('.bi-card-btn')) return;
                        this.openProject(finalUrl, p.title);
                        const projectParam = encodeURIComponent(p.title || p.id || p.url);
                        const newUrl = `${window.location.pathname}?project=${projectParam}`;
                        window.history.pushState({}, '', newUrl);
                    };

                    el.innerHTML = `
                    <img src="${screenshot}" class="bi-card-img" loading="lazy" />
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
                        this.openShareModal(p, finalUrl);
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

            openShareModal(project, finalUrl) {
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
                this.currentProjectUrl = url;
                const iframe = document.getElementById('bi-iframe');
                const container = document.getElementById('bi-iframe-container');
                if(iframe) iframe.src = url;
                if(container) container.classList.add('active');
                document.body.style.overflow = 'hidden';
                if(window.$crisp) window.$crisp.push(["do", "chat:hide"]);
                if(this.isOpen) this.toggle();
            }

            closeProject() {
                const container = document.getElementById('bi-iframe-container');
                const iframe = document.getElementById('bi-iframe');
                if(container) container.classList.remove('active');
                document.body.style.overflow = '';
                if(iframe) {
                    setTimeout(() => { iframe.src = 'about:blank'; }, 300);
                }
                if(!this.isOpen) this.toggle();
            }

            setupDraggable() {
                let isDragging = false;
                let startX, startY, initLeft, initTop;
                let totalMove = 0;
                const onDown = (e) => {
                    const tip = document.getElementById('bi-drag-tip');
                    if(tip) tip.style.opacity = '0';
                    const evt = e.touches ? e.touches[0] : e;
                    isDragging = true;
                    totalMove = 0;
                    startX = evt.clientX; startY = evt.clientY;
                    const rect = this.btn.getBoundingClientRect();
                    initLeft = rect.left; initTop = rect.top;
                    e.preventDefault();
                    document.addEventListener('mousemove', onMove);
                    document.addEventListener('touchmove', onMove, { passive: false });
                    document.addEventListener('mouseup', onUp);
                    document.addEventListener('touchend', onUp);
                };
                const onMove = (e) => {
                    if (!isDragging) return;
                    const evt = e.touches ? e.touches[0] : e;
                    const dx = evt.clientX - startX;
                    const dy = evt.clientY - startY;
                    totalMove += Math.abs(dx) + Math.abs(dy);
                    this.btn.style.left = `${initLeft + dx}px`;
                    this.btn.style.top = `${initTop + dy}px`;
                    this.btn.style.right = 'auto'; this.btn.style.bottom = 'auto';
                };
                const onUp = () => {
                    isDragging = false;
                    document.removeEventListener('mousemove', onMove);
                    document.removeEventListener('touchmove', onMove);
                    document.removeEventListener('mouseup', onUp);
                    document.removeEventListener('touchend', onUp);
                    if (totalMove < 5) this.toggle();
                };
                this.btn.addEventListener('mousedown', onDown);
                this.btn.addEventListener('touchstart', onDown, { passive: false });
            }

            toggle() {
                this.isOpen = !this.isOpen;
                if (this.isOpen) {
                    this.sidebar.classList.add('open');
                    this.btn.classList.add('open');
                    this.overlay.classList.add('visible');
                } else {
                    this.sidebar.classList.remove('open');
                    this.btn.classList.remove('open');
                    this.overlay.classList.remove('visible');
                }
            }
        }

        const initWidget = () => {
            try {
                console.log("Initializing BlackICE Widget...");
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
