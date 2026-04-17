(function() {
    'use strict';

    // 1. INJECT CSS STYLES
    // We create a style tag and insert it into the page head
    const css = `
        #mobile-redirect-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.85);
            z-index: 99999;
            display: none; /* Hidden by default */
            justify-content: center;
            align-items: center;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        #mobile-redirect-box {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 12px;
            width: 90%;
            max-width: 400px;
            text-align: center;
            box-shadow: 0 10px 25px rgba(0,0,0,0.5);
            animation: popIn 0.3s ease-out;
        }

        @keyframes popIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }

        #mobile-redirect-box h3 {
            margin: 0 0 15px 0;
            color: #333;
            font-size: 22px;
        }

        #mobile-redirect-box p {
            margin: 0 0 25px 0;
            color: #666;
            line-height: 1.5;
        }

        .mr-btn-group {
            display: flex;
            gap: 10px;
            justify-content: center;
        }

        .mr-btn {
            padding: 12px 20px;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: opacity 0.2s;
        }

        .mr-btn:hover { opacity: 0.9; }

        .mr-btn-primary {
            background-color: #007BFF;
            color: white;
        }

        .mr-btn-secondary {
            background-color: #e2e6ea;
            color: #333;
        }
    `;

    const styleElement = document.createElement('style');
    styleElement.appendChild(document.createTextNode(css));
    document.head.appendChild(styleElement);


    // 2. INJECT HTML STRUCTURE
    // We create the div elements and append them to the body
    const overlay = document.createElement('div');
    overlay.id = 'mobile-redirect-overlay';
    overlay.innerHTML = `
        <div id="mobile-redirect-box">
            <h3>Mobile View Available</h3>
            <p>We have detected you are on a mobile device. Would you like to switch to our optimized mobile version?</p>
            <div class="mr-btn-group">
                <button id="mr-btn-yes" class="mr-btn mr-btn-primary">Go to Mobile</button>
                <button id="mr-btn-no" class="mr-btn mr-btn-secondary">Stay Here</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);


    // 3. LOGIC: DETECTION & REDIRECT
    function isMobile() {
        const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        return regex.test(navigator.userAgent);
    }

    // Check if mobile AND not already on the mobile page (to prevent infinite loops)
    if (isMobile() && window.location.pathname !== '/mobile.html') {
        
        // Show the popup
        overlay.style.display = 'flex';

        // Handle "Go to Mobile" click
        document.getElementById('mr-btn-yes').addEventListener('click', function() {
            window.location.href = '/mobile.html';
        });

        // Handle "Stay Here" click
        document.getElementById('mr-btn-no').addEventListener('click', function() {
            overlay.style.display = 'none';
        });
    }

})();
