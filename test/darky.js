(function () {
    class DarkyWidget {
        constructor(options = {}) {
            this.options = {
                bottom: options.bottom || '32px',
                right: options.right || '32px',
                left: options.left || 'unset',
                saveState: options.saveState !== false, // Default: true (remember choice)
                autoMatchOs: options.autoMatchOs === true, // CHANGED: Default false (manual only)
            };
            this.init();
        }

        init() {
            this.injectStyles();
            this.createWidget();
            this.attachEvents();
            this.checkPreference();
        }

        injectStyles() {
            const css = `
                /* WIDGET STYLES */
                .dw-widget {
                    position: fixed;
                    bottom: ${this.options.bottom};
                    right: ${this.options.right};
                    left: ${this.options.left};
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    cursor: grab;
                    z-index: 2147483647;
                    background-color: #fff; 
                    mix-blend-mode: difference;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    touch-action: none; 
                    user-select: none;
                    transition: transform 0.1s, background-color 0.4s;
                    -webkit-tap-highlight-color: transparent;
                }
                .dw-widget:active { cursor: grabbing; transform: scale(0.9); }

                /* ICONS (22px) */
                .dw-icon {
                    width: 22px; height: 22px; position: absolute;
                    top: 50%; left: 50%; transform: translate(-50%, -50%);
                    transition: opacity 0.4s, transform 0.4s; pointer-events: none;
                }
                .dw-icon-moon { opacity: 1; transform: translate(-50%, -50%) rotate(0deg); fill: #000; }
                .dw-icon-sun { opacity: 0; transform: translate(-50%, -50%) rotate(-90deg); fill: #fff; }
                
                /* DARK MODE FILTER */
                html.dw-dark-mode { filter: invert(1) hue-rotate(180deg); transition: filter 0.4s ease; }
                
                /* RE-INVERSION LIST */
                html.dw-dark-mode img, 
                html.dw-dark-mode video, 
                html.dw-dark-mode .dw-ignore,
                html.dw-dark-mode .dw-widget {
                    filter: invert(1) hue-rotate(180deg);
                }
                
                html.dw-dark-mode .dw-widget { background-color: #000; box-shadow: 0 4px 10px rgba(255,255,255,0.2); }
                html.dw-dark-mode .dw-icon-moon { opacity: 0; transform: translate(-50%, -50%) rotate(90deg); }
                html.dw-dark-mode .dw-icon-sun { opacity: 1; transform: translate(-50%, -50%) rotate(0deg); }
            `;
            const style = document.createElement('style');
            style.type = 'text/css';
            style.appendChild(document.createTextNode(css));
            document.head.appendChild(style);
        }

        createWidget() {
            this.widget = document.createElement('div');
            this.widget.className = 'dw-widget';
            this.widget.id = 'dw-widget';
            
            const moonSvg = `<svg class="dw-icon dw-icon-moon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
            const sunSvg = `<svg class="dw-icon dw-icon-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="12" y1="21" x2="12" y2="23" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="1" y1="12" x2="3" y2="12" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="21" y1="12" x2="23" y2="12" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>`;

            this.widget.innerHTML = moonSvg + sunSvg;
            document.body.appendChild(this.widget);
        }

        toggleTheme() {
            const html = document.documentElement;
            html.classList.toggle('dw-dark-mode');
            if (this.options.saveState) {
                localStorage.setItem('dw-theme', html.classList.contains('dw-dark-mode') ? 'dark' : 'light');
            }
        }

        checkPreference() {
            const saved = localStorage.getItem('dw-theme');
            const system = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            // LOGIC CHANGED: Only use system preference if autoMatchOs is explicitly TRUE
            if (saved === 'dark') {
                document.documentElement.classList.add('dw-dark-mode');
            } else if (!saved && this.options.autoMatchOs && system) {
                document.documentElement.classList.add('dw-dark-mode');
            }
        }

        attachEvents() {
            let isDragging = false;
            let hasMoved = false;
            let startX, startY, initialLeft, initialTop;

            const start = (e, x, y) => {
                isDragging = true;
                hasMoved = false;
                startX = x; startY = y;
                const rect = this.widget.getBoundingClientRect();
                initialLeft = rect.left; initialTop = rect.top;
                this.widget.style.bottom = 'auto'; this.widget.style.right = 'auto';
                this.widget.style.left = initialLeft + 'px'; this.widget.style.top = initialTop + 'px';
            };

            const move = (e, x, y) => {
                if (!isDragging) return;
                if(e.cancelable) e.preventDefault();
                const dx = x - startX; const dy = y - startY;
                if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasMoved = true;
                let newL = initialLeft + dx; let newT = initialTop + dy;
                const maxL = window.innerWidth - this.widget.offsetWidth;
                const maxT = window.innerHeight - this.widget.offsetHeight;
                if (newL < 0) newL = 0; if (newT < 0) newT = 0;
                if (newL > maxL) newL = maxL; if (newT > maxT) newT = maxT;
                this.widget.style.left = newL + 'px'; this.widget.style.top = newT + 'px';
            };

            const end = () => {
                if (!isDragging) return;
                isDragging = false;
                if (!hasMoved) this.toggleTheme();
            };

            this.widget.addEventListener('mousedown', e => start(e, e.clientX, e.clientY));
            document.addEventListener('mousemove', e => move(e, e.clientX, e.clientY));
            document.addEventListener('mouseup', end);

            this.widget.addEventListener('touchstart', e => start(e, e.touches[0].clientX, e.touches[0].clientY), {passive:false});
            document.addEventListener('touchmove', e => move(e, e.touches[0].clientX, e.touches[0].clientY), {passive:false});
            document.addEventListener('touchend', end);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => new DarkyWidget());
    } else {
        new DarkyWidget();
    }
})();

// mnimap 
 (function() {
        class MiniMapWidget {
            constructor(options = {}) {
                this.options = {
                    width: options.width || 120, 
                    position: options.position || 'right', 
                    opacity: options.opacity || 0.95,
                    themeColor: options.themeColor || '#6200ea',
                    // Added 'table', 'blockquote', 'pre', 'ul' to selector list
                    selector: options.selector || 'h1, h2, h3, p, img, section, article, .card, div.form-box, table, pre, blockquote, ul, .grid-gallery', 
                };

                this.canvas = null;
                this.ctx = null;
                this.container = null;
                this.isDragging = false;
                this.scale = 1;
                this.mapHeight = 0;

                this.init();
            }

            init() {
                this.injectStyles();
                this.createElements();
                this.attachEvents();
                if (document.readyState === 'complete') {
                    this.update();
                } else {
                    window.addEventListener('load', () => this.update());
                }
            }

            injectStyles() {
                const side = this.options.position === 'left' ? 'left: 20px;' : 'right: 20px;';
                const css = `
                    .mm-container {
                        position: fixed; bottom: 20px; ${side} width: ${this.options.width}px;
                        background: rgba(255, 255, 255, ${this.options.opacity});
                        border: 1px solid rgba(0,0,0,0.1); border-radius: 8px;
                        box-shadow: 0 4px 15px rgba(0,0,0,0.15); z-index: 9999;
                        overflow: hidden; display: flex; flex-direction: column;
                    }
                    .mm-canvas { display: block; cursor: pointer; width: 100%; }
                    .mm-toggle {
                        width: 100%; padding: 5px; background: #f1f1f1; border: none;
                        border-top: 1px solid #ddd; cursor: pointer; font-size: 10px;
                        color: #666; text-transform: uppercase; letter-spacing: 1px;
                    }
                    .mm-toggle:hover { background: #e0e0e0; }
                    .mm-container:active { cursor: grabbing; }
                `;
                const style = document.createElement('style');
                style.textContent = css;
                document.head.appendChild(style);
            }

            createElements() {
                this.container = document.createElement('div');
                this.container.className = 'mm-container';
                this.canvas = document.createElement('canvas');
                this.canvas.className = 'mm-canvas';
                this.ctx = this.canvas.getContext('2d');
                
                const btn = document.createElement('button');
                btn.className = 'mm-toggle';
                btn.innerText = 'Hide Map';
                btn.onclick = () => {
                    const isHidden = this.canvas.style.display === 'none';
                    this.canvas.style.display = isHidden ? 'block' : 'none';
                    btn.innerText = isHidden ? 'Hide Map' : 'Show Map';
                    if(isHidden) this.update(); 
                };

                this.container.appendChild(this.canvas);
                this.container.appendChild(btn);
                document.body.appendChild(this.container);
            }

            update() {
                if (this.canvas.style.display === 'none') return;

                const docHeight = document.documentElement.scrollHeight;
                const docWidth = document.documentElement.scrollWidth; 
                const winHeight = window.innerHeight;
                const maxMapHeight = Math.min(winHeight * 0.5, 500); // 50% screen height max
                
                this.scale = this.options.width / docWidth;
                this.mapHeight = docHeight * this.scale;

                if (this.mapHeight > maxMapHeight) {
                    this.canvas.height = maxMapHeight;
                    this.scale = maxMapHeight / docHeight;
                } else {
                    this.canvas.height = this.mapHeight;
                }
                this.canvas.width = this.options.width;
                this.draw();
            }

            draw() {
                const ctx = this.ctx;
                const w = this.canvas.width;
                const h = this.canvas.height;

                ctx.clearRect(0, 0, w, h);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, w, h);

                // Draw Elements
                const elements = document.body.querySelectorAll(this.options.selector);
                
                elements.forEach(el => {
                    if (el === this.container || this.container.contains(el)) return; 
                    
                    const rect = el.getBoundingClientRect();
                    const absoluteTop = rect.top + window.scrollY;
                    const absoluteLeft = rect.left + window.scrollX;

                    const x = absoluteLeft * this.scale;
                    const y = absoluteTop * this.scale;
                    const elW = rect.width * this.scale;
                    const elH = rect.height * this.scale;

                    if (elW < 1 || elH < 1) return;

                    // Color Coding Logic
                    ctx.fillStyle = '#e0e0e0'; // Default Light Grey
                    const tag = el.tagName.toLowerCase();
                    
                    // Specific Colors for different elements
                    if (tag === 'img' || el.classList.contains('grid-gallery')) ctx.fillStyle = '#90caf9'; // Blue (Images)
                    else if (tag.startsWith('h')) ctx.fillStyle = '#ffcc80'; // Orange (Headers)
                    else if (tag === 'pre') ctx.fillStyle = '#cfd8dc'; // Dark Grey (Code)
                    else if (tag === 'table') ctx.fillStyle = '#fff9c4'; // Yellow (Tables)
                    else if (tag === 'blockquote') ctx.fillStyle = '#e1bee7'; // Purple (Quotes)
                    else if (tag === 'div' && el.classList.contains('form-box')) ctx.fillStyle = '#b2dfdb'; // Teal (Forms)
                    else if (tag === 'p') ctx.fillStyle = '#bdbdbd'; // Standard Text
                    
                    ctx.fillRect(x, y, elW, elH);
                });

                // Draw Viewport
                const winY = window.scrollY * this.scale;
                const winH = window.innerHeight * this.scale;
                
                ctx.fillStyle = 'rgba(98, 0, 234, 0.1)'; 
                ctx.fillRect(0, winY, w, winH);
                ctx.strokeStyle = this.options.themeColor;
                ctx.lineWidth = 1;
                ctx.strokeRect(0, winY, w, winH);
            }

            attachEvents() {
                window.addEventListener('scroll', () => requestAnimationFrame(() => this.draw()));
                window.addEventListener('resize', () => this.update());
                
                const handleInput = (clientY) => {
                    const rect = this.canvas.getBoundingClientRect();
                    const offsetY = clientY - rect.top;
                    const targetDocY = offsetY / this.scale;
                    const centerOffset = (window.innerHeight / 2);
                    window.scrollTo(0, targetDocY - centerOffset);
                };

                const startDrag = (e) => { this.isDragging = true; handleInput(e.clientY || e.touches[0].clientY); };
                const doDrag = (e) => { if (!this.isDragging) return; e.preventDefault(); handleInput(e.clientY || e.touches[0].clientY); };
                const stopDrag = () => { this.isDragging = false; };

                this.canvas.addEventListener('mousedown', startDrag);
                document.addEventListener('mousemove', doDrag);
                document.addEventListener('mouseup', stopDrag);
                this.canvas.addEventListener('touchstart', (e) => startDrag(e), {passive: false});
                document.addEventListener('touchmove', (e) => doDrag(e), {passive: false});
                document.addEventListener('touchend', stopDrag);
            }
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => new MiniMapWidget());
        } else {
            new MiniMapWidget();
        }
    })();
