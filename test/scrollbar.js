(function() {
    // --- CONFIGURATION ---
    // You can change these colors to match your brand
    const CONFIG = {
        color: '#00f3ff',        // Neon Cyan (Sci-Fi Default)
        glow: '0 0 10px #00f3ff', // Glow effect
        width: '6px',            // Thickness of the rail
        zIndex: 99999,           // Ensures it sits on top
        speed: 0.08              // Physics friction: Lower = heavier/slower, Higher = snappier
    };

    // --- 1. PREVENT DUPLICATION ---
    if (document.getElementById('scifi-rail-system')) return;

    // --- 2. INJECT STYLES ---
    const style = document.createElement('style');
    style.id = 'scifi-rail-system';
    style.innerHTML = `
        /* AGGRESSIVELY HIDE ALL NATIVE SCROLLBARS */
        html, body {
            margin: 0 !important;
            padding: 0 !important;
            overflow-x: hidden !important; /* Prevent horizontal glitch */
        }
        
        /* Webkit (Chrome, Safari, Edge) */
        ::-webkit-scrollbar { 
            width: 0px !important; 
            height: 0px !important; 
            background: transparent !important; 
        }
        
        /* Firefox */
        * { 
            scrollbar-width: none !important; 
            -ms-overflow-style: none !important; 
        }

        /* --- CUSTOM SCROLLBAR STYLES --- */
        #scifi-rail {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            width: ${CONFIG.width};
            background: rgba(255, 255, 255, 0.05);
            z-index: ${CONFIG.zIndex};
            pointer-events: none; /* Let clicks pass through */
        }

        #scifi-puck {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 0%; /* JS controls this */
            background: ${CONFIG.color};
            box-shadow: ${CONFIG.glow};
            border-radius: 99px;
            will-change: height; /* Performance optimization */
            
            /* The Sci-Fi Segmented/Dashed Effect */
            background-image: linear-gradient(
                to bottom,
                ${CONFIG.color} 50%,
                rgba(0,0,0,0.2) 50%
            );
            background-size: 100% 4px; 
        }

        /* Glowing "Head" of the puck */
        #scifi-puck::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: #fff;
            box-shadow: 0 0 8px #fff;
        }
    `;
    document.head.appendChild(style);

    // --- 3. INJECT DOM ELEMENTS ---
    const rail = document.createElement('div');
    rail.id = 'scifi-rail';
    document.body.appendChild(rail);

    const puck = document.createElement('div');
    puck.id = 'scifi-puck';
    rail.appendChild(puck);

    // --- 4. PHYSICS ENGINE ---
    let currentScroll = 0;
    let targetScroll = 0;
    
    function animate() {
        // Get target scroll position
        targetScroll = window.scrollY || window.pageYOffset;
        
        // Get page height dynamically (in case content changes via AJAX)
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Prevent division by zero on short pages
        if (docHeight <= 0) {
            puck.style.height = '0%';
            requestAnimationFrame(animate);
            return;
        }

        // Linear Interpolation (Lerp) for inertia
        const diff = targetScroll - currentScroll;
        
        if (Math.abs(diff) > 0.1) {
            currentScroll += diff * CONFIG.speed;
        } else {
            currentScroll = targetScroll;
        }

        // Calculate percentage height
        const scrollPercent = (currentScroll / docHeight) * 100;
        
        // Clamp between 0 and 100 to prevent visual glitches
        const safePercent = Math.min(Math.max(scrollPercent, 0), 100);

        // Apply to DOM
        puck.style.height = `${safePercent}%`;

        // Loop
        requestAnimationFrame(animate);
    }

    // Start engine
    animate();

})();
