(function() {
    const container = document.createElement('div');
    container.id = 'blackice-chip';
    container.innerHTML = `
        <style>
            @keyframes border-rotate {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-4px); }
            }
            #blackice-chip {
                position: fixed;
                bottom: 24px;
                right: 24px;
                z-index: 9999;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                animation: float 4s ease-in-out infinite;
            }
            #blackice-chip button {
                position: relative;
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 12px 20px;
                background: #0a0a0a;
                color: #fff;
                border: none;
                border-radius: 100px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            #blackice-chip button::before {
                content: '';
                position: absolute;
                inset: -2px;
                border-radius: 100px;
                background: linear-gradient(90deg, #00d4ff, #ff00aa, #00d4ff);
                background-size: 200% 100%;
                animation: border-rotate 3s linear infinite;
                z-index: -1;
            }
            #blackice-chip button::after {
                content: '';
                position: absolute;
                inset: 0;
                border-radius: 100px;
                background: #0a0a0a;
                z-index: -1;
            }
            #blackice-chip button:hover {
                transform: scale(1.05);
                color: #fff;
            }
            #blackice-chip button:hover::after {
                background: #1a1a1a;
            }
            #blackice-chip button:active {
                transform: scale(0.98);
            }
            #blackice-chip svg {
                width: 16px;
                height: 16px;
                stroke-width: 2;
                transition: transform 0.3s ease;
            }
            #blackice-chip button:hover svg {
                transform: translate(2px, -2px);
            }
        </style>
        <button onclick="window.open('https://blackice-ac.vercel.app','_blank')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
            <span>Visit</span>
        </button>
    `;
    document.body.appendChild(container);
})();
