(function() {
    // --- CONFIGURATION ---
    const CONFIG = {
        color: '#00f3ff',        // Neon Cyan (Sci-Fi Default)
        glow: '0 0 10px #00f3ff', // Glow effect
        width: '6px',            // Thickness of the rail
        zIndex: 99999,           // Ensures it sits on top
        speed: 0.08,             // Physics friction: Lower = heavier/slower, Higher = snappier
        searchEngines: {
            brave: 'https://search.brave.com/search?q=',
            duck: 'https://duckduckgo.com/?q=',
            bing: 'https://www.bing.com/search?q=',
            perplexity: 'https://www.perplexity.ai/search?q=' 
        }
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
            overflow-x: hidden !important;
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
            pointer-events: none;
        }

        #scifi-puck {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 0%;
            background: ${CONFIG.color};
            box-shadow: ${CONFIG.glow};
            border-radius: 99px;
            will-change: height;
            background-image: linear-gradient(
                to bottom,
                ${CONFIG.color} 50%,
                rgba(0,0,0,0.2) 50%
            );
            background-size: 100% 4px; 
        }

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

        /* --- OMNIBOX SEARCH STYLES --- */
        #scifi-omnibox-container {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(6px);
            z-index: ${CONFIG.zIndex + 1};
            display: none;
            justify-content: center;
            align-items: flex-start;
            padding-top: 15vh;
            opacity: 0;
            transition: opacity 0.2s ease;
        }

        #scifi-omnibox-container.active {
            display: flex;
            opacity: 1;
        }

        #scifi-omnibox-wrapper {
            position: relative;
            width: 600px;
            max-width: 90%;
            animation: scifi-drop 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.15);
        }

        @keyframes scifi-drop {
            from { transform: translateY(-30px) scaleY(0.8); opacity: 0; }
            to { transform: translateY(0) scaleY(1); opacity: 1; }
        }

        #scifi-omnibox {
            width: 100%;
            box-sizing: border-box;
            background: rgba(5, 5, 15, 0.95);
            border: 1px solid ${CONFIG.color};
            box-shadow: ${CONFIG.glow}, 0 0 40px rgba(0, 243, 255, 0.1);
            border-radius: 8px;
            padding: 16px 20px;
            font-family: 'Courier New', Courier, monospace;
            font-size: 18px;
            color: #fff;
            outline: none;
            caret-color: ${CONFIG.color};
        }

        #scifi-omnibox::placeholder {
            color: rgba(255,255,255,0.3);
        }

        #scifi-omnibox-engine {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: ${CONFIG.color};
            font-family: 'Courier New', Courier, monospace;
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 2px;
            opacity: 0;
            transition: opacity 0.2s ease;
            text-shadow: ${CONFIG.glow};
        }

        #scifi-omnibox-hint {
            text-align: center;
            margin-top: 12px;
            font-family: 'Courier New', Courier, monospace;
            font-size: 12px;
            color: rgba(255,255,255,0.4);
        }

        /* --- HUD DASHBOARD STYLES --- */
        #scifi-hud {
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: ${CONFIG.zIndex + 1}; /* Keep above the dark omnibox background */
            background: rgba(5, 5, 15, 0.85);
            border: 1px solid ${CONFIG.color};
            box-shadow: ${CONFIG.glow};
            border-radius: 8px;
            padding: 15px 20px;
            font-family: 'Courier New', Courier, monospace;
            color: ${CONFIG.color};
            backdrop-filter: blur(4px);
            min-width: 180px;
            /* Hidden by default */
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
        }
        
        #scifi-hud.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        #scifi-hud-time {
            font-size: 26px;
            font-weight: bold;
            text-shadow: 0 0 5px ${CONFIG.color};
            letter-spacing: 2px;
            line-height: 1;
        }
        #scifi-hud-date {
            font-size: 11px;
            opacity: 0.7;
            margin-top: 5px;
            letter-spacing: 1px;
            text-transform: uppercase;
        }
        .scifi-hud-divider {
            height: 1px;
            background: ${CONFIG.color};
            opacity: 0.3;
            margin: 10px 0;
        }
        .scifi-hud-row {
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .scifi-hud-label {
            opacity: 0.6;
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

    // Omnibox DOM
    const omniContainer = document.createElement('div');
    omniContainer.id = 'scifi-omnibox-container';
    
    const omniWrapper = document.createElement('div');
    omniWrapper.id = 'scifi-omnibox-wrapper';
    
    const omniInput = document.createElement('input');
    omniInput.id = 'scifi-omnibox';
    omniInput.type = 'text';
    omniInput.placeholder = 'Type :brave, :duck, :bing, or :perplexity followed by your query...';
    omniInput.autocomplete = 'off';
    
    const omniEngine = document.createElement('div');
    omniEngine.id = 'scifi-omnibox-engine';
    
    const omniHint = document.createElement('div');
    omniHint.id = 'scifi-omnibox-hint';
    omniHint.innerText = 'PRESS ENTER TO SEARCH • ESC TO CLOSE';

    omniWrapper.appendChild(omniInput);
    omniWrapper.appendChild(omniEngine);
    omniContainer.appendChild(omniWrapper);
    omniContainer.appendChild(omniHint);
    document.body.appendChild(omniContainer);

    // HUD DOM
    const hud = document.createElement('div');
    hud.id = 'scifi-hud';
    hud.innerHTML = `
        <div id="scifi-hud-time">00:00:00</div>
        <div id="scifi-hud-date">SYS_DATE</div>
        <div class="scifi-hud-divider"></div>
        <div class="scifi-hud-row">
            <span class="scifi-hud-label">WEATHER</span>
            <span id="scifi-hud-weather">---.-</span>
        </div>
        <div class="scifi-hud-row" style="margin-top: 5px;">
            <span class="scifi-hud-label">STATUS</span>
            <span id="scifi-hud-wstatus">LOCATING</span>
        </div>
    `;
    document.body.appendChild(hud);


    // --- 4. OMNIBOX LOGIC ---
    function openOmniBox() {
        omniContainer.classList.add('active');
        hud.classList.add('active'); // Show HUD
        omniInput.value = ':';
        omniInput.focus();
    }

    function closeOmniBox() {
        omniContainer.classList.remove('active');
        hud.classList.remove('active'); // Hide HUD
        omniInput.value = '';
        omniEngine.style.opacity = '0';
        omniEngine.innerText = '';
    }

    document.addEventListener('keydown', (e) => {
        const tag = e.target.tagName.toLowerCase();
        if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;

        if (e.key === ':') {
            e.preventDefault();
            openOmniBox();
        }
    });

    omniInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeOmniBox();
        } else if (e.key === 'Enter') {
            const val = omniInput.value.trim();
            let url = null;

            if (val.startsWith(':brave ')) {
                const query = val.substring(7);
                url = query ? CONFIG.searchEngines.brave + encodeURIComponent(query) : 'https://search.brave.com';
            } else if (val.startsWith(':duck ')) {
                const query = val.substring(6);
                url = query ? CONFIG.searchEngines.duck + encodeURIComponent(query) : 'https://duckduckgo.com';
            } else if (val.startsWith(':bing ')) {
                const query = val.substring(6);
                url = query ? CONFIG.searchEngines.bing + encodeURIComponent(query) : 'https://www.bing.com';
            } else if (val.startsWith(':perplexity ')) {
                const query = val.substring(12);
                url = query ? CONFIG.searchEngines.perplexity + encodeURIComponent(query) : 'https://www.perplexity.ai';
            }

            if (url) {
                window.open(url, '_blank');
            }
            
            closeOmniBox();
        }
    });

    omniInput.addEventListener('input', () => {
        const val = omniInput.value.toLowerCase();
        if (val.startsWith(':brave')) {
            omniEngine.innerText = 'BRAVE';
            omniEngine.style.opacity = '1';
        } else if (val.startsWith(':duck')) {
            omniEngine.innerText = 'DUCK';
            omniEngine.style.opacity = '1';
        } else if (val.startsWith(':bing')) {
            omniEngine.innerText = 'BING';
            omniEngine.style.opacity = '1';
        } else if (val.startsWith(':perp')) {
            omniEngine.innerText = 'PERPLEXITY';
            omniEngine.style.opacity = '1';
        } else {
            omniEngine.style.opacity = '0';
        }
    });

    omniContainer.addEventListener('click', (e) => {
        if (e.target === omniContainer) {
            closeOmniBox();
        }
    });

    // --- 5. HUD LOGIC (Time & Weather) ---
    function updateClock() {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');
        document.getElementById('scifi-hud-time').innerText = `${h}:${m}:${s}`;

        const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        const day = days[now.getDay()];
        const date = String(now.getDate()).padStart(2, '0');
        const month = months[now.getMonth()];
        document.getElementById('scifi-hud-date').innerText = `${day} ${month} ${date}`;
    }

    function mapWeatherCode(code) {
        if (code === 0) return 'CLEAR';
        if (code >= 1 && code <= 3) return 'CLOUDY';
        if (code >= 45 && code <= 48) return 'FOG';
        if (code >= 51 && code <= 67) return 'RAIN';
        if (code >= 71 && code <= 77) return 'SNOW';
        if (code >= 80 && code <= 82) return 'RAIN';
        if (code >= 95) return 'STORM';
        return 'UNKNOWN';
    }

    // Fetch Weather directly using Open-Meteo
    function fetchWeather() {
        const weatherEl = document.getElementById('scifi-hud-weather');
        const statusEl = document.getElementById('scifi-hud-wstatus');
        statusEl.innerText = 'LOCATING...';

        // 1. Try IP-based Geolocation (No permissions required)
        fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then(data => {
                if (data.latitude && data.longitude) {
                    getWeatherFromCoords(data.latitude, data.longitude);
                } else {
                    // 2. Fallback to browser geolocation if IP API fails
                    tryBrowserGeolocation();
                }
            })
            .catch(() => {
                // 2. Fallback to browser geolocation if fetch throws an error
                tryBrowserGeolocation();
            });
    }

    function tryBrowserGeolocation() {
        const statusEl = document.getElementById('scifi-hud-wstatus');
        if (!navigator.geolocation) {
            statusEl.innerText = 'GEO-OFFLINE';
            return;
        }
        statusEl.innerText = 'PERMISSION...';
        navigator.geolocation.getCurrentPosition(
            (pos) => getWeatherFromCoords(pos.coords.latitude, pos.coords.longitude),
            () => { statusEl.innerText = 'GEO-DENIED'; }
        );
    }

    function getWeatherFromCoords(lat, lon) {
        const weatherEl = document.getElementById('scifi-hud-weather');
        const statusEl = document.getElementById('scifi-hud-wstatus');
        statusEl.innerText = 'FETCHING...';
        
        // Call Open-Meteo API
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
            .then(res => res.json())
            .then(data => {
                if (data.current_weather) {
                    const temp = data.current_weather.temperature.toFixed(1);
                    const cond = mapWeatherCode(data.current_weather.weathercode);
                    weatherEl.innerText = `${temp}°C ${cond}`;
                    statusEl.innerText = 'ONLINE';
                } else {
                    statusEl.innerText = 'DATA-ERROR';
                }
            })
            .catch(() => { statusEl.innerText = 'NET-ERROR'; });
    }

    // Start Clock and Weather in the background
    setInterval(updateClock, 1000);
    updateClock();
    fetchWeather();
    setInterval(fetchWeather, 600000); // Update weather every 10 mins

    // --- 6. PHYSICS ENGINE ---
    let currentScroll = 0;
    let targetScroll = 0;
    
    function animate() {
        targetScroll = window.scrollY || window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        if (docHeight <= 0) {
            puck.style.height = '0%';
            requestAnimationFrame(animate);
            return;
        }

        const diff = targetScroll - currentScroll;
        
        if (Math.abs(diff) > 0.1) {
            currentScroll += diff * CONFIG.speed;
        } else {
            currentScroll = targetScroll;
        }

        const scrollPercent = (currentScroll / docHeight) * 100;
        const safePercent = Math.min(Math.max(scrollPercent, 0), 100);

        puck.style.height = `${safePercent}%`;

        requestAnimationFrame(animate);
    }

    animate();

})();
