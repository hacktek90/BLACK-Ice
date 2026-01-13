(function () {
    class DarkyWidget {
        constructor(options = {}) {
            this.options = {
                side: options.side || 'right', 
                saveState: options.saveState !== false,
                autoMatchOs: options.autoMatchOs === true,
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
            const isRight = this.options.side === 'right';
            const css = `
                /* MINI SIDE TAB */
                .dw-widget {
                    position: fixed;
                    top: 50%;
                    ${isRight ? 'right: 0;' : 'left: 0;'}
                    transform: translateY(-50%);
                    width: 24px;   /* Smaller width */
                    height: 34px;  /* Smaller height */
                    border-radius: ${isRight ? '4px 0 0 4px' : '0 4px 4px 0'};
                    cursor: pointer;
                    z-index: 2147483647;
                    background-color: #fff; 
                    mix-blend-mode: difference;
                    box-shadow: 0 0 5px rgba(0,0,0,0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: width 0.2s, background-color 0.4s;
                    user-select: none;
                    -webkit-tap-highlight-color: transparent;
                }
                
                .dw-widget:hover {
                    width: 28px; /* Subtle growth on hover */
                }

                .dw-icon {
                    width: 16px; height: 16px; /* Scaled down icon */
                    position: absolute;
                    transition: opacity 0.4s, transform 0.4s; pointer-events: none;
                }
                .dw-icon-moon { opacity: 1; fill: #000; }
                .dw-icon-sun { opacity: 0; fill: #fff; }
                
                /* DARK MODE FILTER */
                html.dw-dark-mode { filter: invert(1) hue-rotate(180deg); transition: filter 0.4s ease; }
                
                /* RE-INVERSION */
                html.dw-dark-mode img, 
                html.dw-dark-mode video, 
                html.dw-dark-mode .dw-ignore,
                html.dw-dark-mode .dw-widget {
                    filter: invert(1) hue-rotate(180deg);
                }
                
                html.dw-dark-mode .dw-widget { background-color: #000; }
                html.dw-dark-mode .dw-icon-moon { opacity: 0; transform: scale(0.6) rotate(45deg); }
                html.dw-dark-mode .dw-icon-sun { opacity: 1; transform: scale(1) rotate(0deg); }
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
            const sunSvg = `<svg class="dw-icon dw-icon-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3" stroke="white" stroke-width="2"/><line x1="12" y1="21" x2="12" y2="23" stroke="white" stroke-width="2"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="white" stroke-width="2"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="white" stroke-width="2"/><line x1="1" y1="12" x2="3" y2="12" stroke="white" stroke-width="2"/><line x1="21" y1="12" x2="23" y2="12" stroke="white" stroke-width="2"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="white" stroke-width="2"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="white" stroke-width="2"/></svg>`;

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
            if (saved === 'dark') {
                document.documentElement.classList.add('dw-dark-mode');
            } else if (!saved && this.options.autoMatchOs && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add('dw-dark-mode');
            }
        }

        attachEvents() {
            this.widget.addEventListener('click', () => this.toggleTheme());
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => new DarkyWidget());
    } else {
        new DarkyWidget();
    }
})();

// Credits
const asciiLogo = `
    ▄▀█ ▀▄▀ █▀█ ▄▀█ █▀▄ █▀▀ █▀█
    █▀█ █░█ █▀▄ █▀█ █▄▀ ██▄ █▀▄`;
console.log('%c' + asciiLogo, 'color: #00ff41; font-weight: bold; font-family: monospace;');
