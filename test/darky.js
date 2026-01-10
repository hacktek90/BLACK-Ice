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
// ASCII credit 

        // 1. ASCII ART LOGO
        const asciiLogo = `
    ▄▀█ ▀▄▀ █▀█ ▄▀█ █▀▄ █▀▀ █▀█
    █▀█ █░█ █▀▄ █▀█ █▄▀ ██▄ █▀▄`;

        // 2. TECHIE DESCRIPTION
        // Formatted to look like a system boot sequence or terminal status output
        const description = `
// SYSTEM STATUS: ONLINE
// PROTOCOL: BLACKICE ACADEMY
---------------------------------------------------
[+] TARGET:      Ethical Hacking & Cyberwarfare Mastery
[+] MODULES:     Offensive Ops | Red Teaming | CTF
[+] CLEARANCE:   Client Access Granted By Subho
---------------------------------------------------
>> INITIATE TRAINING SEQUENCE BELOW:`;

        // 3. STYLES
        // Neon Green style for the logo
        const logoStyle = [
            'color: #00ff41',
            'font-weight: bold',
            'font-family: monospace',
            'font-size: 20px',
            'text-shadow: 0 0 10px #00ff41'
        ].join(';');

        // Cyan/Blue style for the tech info
        const descStyle = [
            'color: #00ffff', 
            'font-family: monospace',
            'font-size: 12px',
            'line-height: 1.5'
        ].join(';');

        // 4. EXECUTION
        // Log the Logo
        console.log('%c' + asciiLogo, logoStyle);
        
        // Log the Description
        console.log('%c' + description, descStyle);
        
        // Log the Link (Left unstyled to ensure it remains clickable in all browsers)
        console.log('https://blackice-ac.vercel.app/');
   
