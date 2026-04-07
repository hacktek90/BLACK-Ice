(function() {
    const container = document.createElement('div');
    container.id = 'blackice-chip';
    container.innerHTML = `
    <style>
      @keyframes border-rotate {
        0% {
          background-position: 0% 50%;
        }
    
        50% {
          background-position: 100% 50%;
        }
    
        100% {
          background-position: 0% 50%;
        }
      }
    
      @keyframes float {
    
        0%,
        100% {
          transform: translateY(0);
        }
    
        50% {
          transform: translateY(-4px);
        }
      }
    
      /* Animation for the pulsing badge */
      @keyframes badge-pulse {
        0% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(255, 71, 87, 0.7);
        }
    
        70% {
          transform: scale(1.15);
          box-shadow: 0 0 0 6px rgba(255, 71, 87, 0);
        }
    
        100% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(255, 71, 87, 0);
        }
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
        overflow: visible;
        /* Allows the badge to sit outside the rounded corners */
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
    
      /* Badge Styles */
      .notification-badge {
        position: absolute;
        top: -4px;
        right: -4px;
        height: 18px;
        min-width: 18px;
        background: #ff4757;
        color: white;
        font-size: 10px;
        font-weight: 700;
        border-radius: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 4px;
        border: 2px solid #0a0a0a;
        /* Matches button background for clean cutout look */
        animation: badge-pulse 2s infinite;
        z-index: 10;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      }
    
      /* Text transition for smooth cycling */
      #dynamic-text {
        display: inline-block;
        min-width: 60px;
        text-align: left;
      }
    </style>
    <button onclick="window.open('https://blackice-ac.vercel.app','_blank')">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                <span id="dynamic-text">Visit</span>
                <span class="notification-badge">1</span>
            </button>
    `;
    document.body.appendChild(container);
    
    // --- Dynamic Text Cycling Logic ---
    const textElement = container.querySelector('#dynamic-text');
    const messages = ["System Ready", "Visit", "New Update","Connect","Login"];
    let msgIndex = 0;
    
    setInterval(() => {
    // Fade out
    textElement.style.opacity = 0;
    
    setTimeout(() => {
    // Change text and fade in
    msgIndex = (msgIndex + 1) % messages.length;
    textElement.innerText = messages[msgIndex];
    textElement.style.transition = 'opacity 0.2s ease';
    textElement.style.opacity = 1;
    }, 200); // Wait for fade out
    }, 9000); // Change every 9 seconds
    
    })();
