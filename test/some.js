document.addEventListener('DOMContentLoaded', () => {
    const els = {
        // Music Elements
        backgroundAudio: document.getElementById('backgroundAudio'),
        audioControlBtn: document.getElementById('audioControlBtn'),
        audioDropdown: document.getElementById('audioDropdown'),
        playPauseToggle: document.getElementById('playPauseToggle'),
        trackOptions: document.querySelectorAll('.track-option'),
        
        // Split View Elements
        splitBtn: document.getElementById('splitViewBtn'),
        splitContainer: document.getElementById('splitContainer'),
        leftPane: document.getElementById('leftPane'),
        rightPane: document.getElementById('rightPane'),
        splitResizer: document.getElementById('splitResizer'),
        frame: document.getElementById('portalFrame'),
        frame2: document.getElementById('portalFrame2'),
        
        // Sidebar Elements
        sidebar: document.getElementById('sidebar'),
        sidebarToggle: document.getElementById('sidebarToggle'),
        
        // History Elements
        historyBar: document.getElementById('historyBar'),
        historyChips: document.getElementById('historyChips'),
    };

    // --- 1. Background Music Logic ---
    if (els.backgroundAudio && els.audioControlBtn) {
        els.backgroundAudio.volume = 0.3;
        
        els.audioControlBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            els.audioDropdown.classList.toggle('hidden');
        });

        document.addEventListener('click', (e) => {
            if (!els.audioControlBtn.contains(e.target) && !els.audioDropdown.contains(e.target)) {
                els.audioDropdown.classList.add('hidden');
            }
        });

        els.playPauseToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (els.backgroundAudio.paused) {
                els.backgroundAudio.play().catch(e => console.error(e));
            } else {
                els.backgroundAudio.pause();
            }
        });

        els.trackOptions.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const src = btn.getAttribute('data-src');
                els.trackOptions.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                els.backgroundAudio.src = src;
                els.backgroundAudio.play().catch(err => console.error("Play error:", err));
            });
        });

        els.backgroundAudio.onplay = () => {
            els.audioControlBtn.innerHTML = '<i data-lucide="pause" class="w-4 h-4"></i>';
            els.playPauseToggle.innerText = 'Pause';
            els.playPauseToggle.classList.remove('text-primary');
            els.playPauseToggle.classList.add('text-red-400');
            if(window.lucide) window.lucide.createIcons();
        };

        els.backgroundAudio.onpause = () => {
            els.audioControlBtn.innerHTML = '<i data-lucide="play" class="w-4 h-4"></i>';
            els.playPauseToggle.innerText = 'Play';
            els.playPauseToggle.classList.add('text-primary');
            els.playPauseToggle.classList.remove('text-red-400');
            if(window.lucide) window.lucide.createIcons();
        };
    }

    // --- 2. Split View Feature ---
    let splitViewActive = false;
    let activePane = 'left';
    let isDragging = false;

    function updatePaneVisuals() {
        if (!splitViewActive) {
            els.leftPane.classList.add('active'); els.leftPane.classList.remove('inactive');
            els.rightPane.classList.add('inactive'); els.rightPane.classList.remove('active');
            return;
        }
        if (activePane === 'left') {
            els.leftPane.classList.add('active'); els.leftPane.classList.remove('inactive');
            els.rightPane.classList.add('inactive'); els.rightPane.classList.remove('active');
        } else {
            els.rightPane.classList.add('active'); els.rightPane.classList.remove('inactive');
            els.leftPane.classList.add('inactive'); els.leftPane.classList.remove('active');
        }
    }

    function setActivePane(pane) {
        activePane = pane;
        updatePaneVisuals();
        // Export active pane for main script to use
        window.currentActivePane = activePane;
        window.splitViewEnabled = splitViewActive;
    }
    
    // Export for external use
    window.setActivePane = setActivePane;

    if (els.splitBtn) {
        els.splitBtn.onclick = () => {
            splitViewActive = !splitViewActive;
            window.splitViewEnabled = splitViewActive;
            
            if (splitViewActive) {
                els.splitContainer.classList.add('split-view-active');
                els.leftPane.style.width = '50%';
                els.rightPane.classList.remove('hidden');
                els.rightPane.style.width = '50%';
                els.splitResizer.classList.remove('hidden');
                els.splitBtn.classList.add('text-primary', 'bg-primary/10');
                updatePaneVisuals();
            } else {
                els.splitContainer.classList.remove('split-view-active');
                els.leftPane.style.width = '100%';
                els.rightPane.classList.add('hidden');
                els.rightPane.style.width = '0%';
                els.splitResizer.classList.add('hidden');
                els.splitBtn.classList.remove('text-primary', 'bg-primary/10');
                setActivePane('left');
                if(els.frame) els.frame.style.pointerEvents = 'auto';
                if(els.frame2) els.frame2.style.pointerEvents = 'auto';
            }
            if(window.lucide) window.lucide.createIcons();
        };
    }

    // Split Resizer Logic
    if (els.splitResizer) {
        els.splitResizer.addEventListener('mousedown', () => {
            if (!splitViewActive) return;
            isDragging = true;
            els.splitResizer.classList.add('dragging');
            document.body.style.cursor = 'col-resize';
            document.body.style.userSelect = 'none';
            els.frame.style.pointerEvents = 'none';
            els.frame2.style.pointerEvents = 'none';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const rect = els.splitContainer.getBoundingClientRect();
            const pct = ((e.clientX - rect.left) / rect.width) * 100;
            if (pct > 20 && pct < 80) {
                els.leftPane.style.width = `${pct}%`;
                els.rightPane.style.width = `${100 - pct}%`;
            }
        });

        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            els.splitResizer.classList.remove('dragging');
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
            els.frame.style.pointerEvents = 'auto';
            els.frame2.style.pointerEvents = 'auto';
        });
    }
    
    // Indicators
    const leftInd = document.querySelector('#leftPane .pane-indicator');
    const rightInd = document.querySelector('#rightPane .pane-indicator');
    if(leftInd) leftInd.onclick = () => setActivePane('left');
    if(rightInd) rightInd.onclick = () => setActivePane('right');


    // --- 3. Sidebar Collapse Feature ---
    let isCollapsed = false;
    if (els.sidebarToggle) {
        els.sidebarToggle.onclick = () => {
            isCollapsed = !isCollapsed;
            if (isCollapsed) {
                els.sidebar.classList.add('sidebar-collapsed');
                els.sidebarToggle.innerHTML = '<i data-lucide="panel-left-open" class="w-4 h-4"></i>';
            } else {
                els.sidebar.classList.remove('sidebar-collapsed');
                els.sidebarToggle.innerHTML = '<i data-lucide="panel-left-close" class="w-4 h-4"></i>';
            }
            if(window.lucide) window.lucide.createIcons();
        };
    }

    // --- 4. History Bar Logic ---
    let history = [];
    window.addToHistory = function(title, url) {
        history = history.filter(h => h.url !== url);
        history.unshift({ title, url });
        if (history.length > 5) history.pop();
        
        const historyHTML = history.map(h => `
        <button onclick="loadProject('${h.url}')"
        class="shrink-0 px-2 py-0.5 text-[10px] bg-[#18181b] border border-[#27272a] rounded hover:border-primary/50 hover:text-primary text-[#a1a1aa] transition-colors truncate max-w-[110px]">
        ${h.title}
        </button>
        `).join('');
        
        els.historyChips.innerHTML = historyHTML;
        if (history.length > 0) {
            els.historyBar.classList.remove('hidden');
            els.historyBar.classList.add('flex');
        }
    };
});
