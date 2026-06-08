(function() {
    // Check if we already showed it in this session to avoid annoying them on every single page
    if (sessionStorage.getItem('taplito_demo_popup_shown')) {
        return;
    }

    // Check if 10 seconds have passed since they first landed
    let startTime = sessionStorage.getItem('taplito_demo_start_time');
    if (!startTime) {
        startTime = Date.now();
        sessionStorage.setItem('taplito_demo_start_time', startTime);
    }

    const elapsed = Date.now() - parseInt(startTime);
    let delay = 10000 - elapsed;
    if (delay < 0) delay = 2000; // if 10s already passed on previous pages, show it 2s after loading current page

    setTimeout(() => {
        // Double check it wasn't shown by another tab or page
        if (sessionStorage.getItem('taplito_demo_popup_shown')) return;

        showPopup();
    }, delay);

    function showPopup() {
        sessionStorage.setItem('taplito_demo_popup_shown', 'true');

        const style = document.createElement('style');
        style.innerHTML = `
            .demo-overlay {
                position: fixed;
                inset: 0;
                background: rgba(0,0,0,0.6);
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
                z-index: 99999;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.4s ease;
                padding: 20px;
            }
            .demo-overlay.show {
                opacity: 1;
            }
            .demo-popup {
                background: #ffffff;
                width: 100%;
                max-width: 360px;
                border-radius: 28px;
                padding: 35px 25px 30px;
                text-align: center;
                box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                transform: translateY(30px) scale(0.95);
                transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                position: relative;
            }
            .demo-overlay.show .demo-popup {
                transform: translateY(0) scale(1);
            }
            .demo-close {
                position: absolute;
                top: 15px;
                right: 15px;
                background: rgba(0,0,0,0.05);
                border: none;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                font-size: 14px;
                color: #555;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background 0.2s;
            }
            .demo-close:active {
                background: rgba(0,0,0,0.1);
            }
            .demo-icon {
                font-size: 52px;
                margin-bottom: 10px;
            }
            .demo-title {
                font-size: 22px;
                font-weight: 800;
                color: #111;
                margin-bottom: 12px;
                line-height: 1.2;
                letter-spacing: -0.5px;
            }
            .demo-desc {
                font-size: 14px;
                color: #666;
                margin-bottom: 25px;
                line-height: 1.5;
            }
            .demo-btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                background: #EF691E;
                color: #fff;
                text-decoration: none;
                font-weight: 800;
                font-size: 16px;
                padding: 16px 24px;
                border-radius: 100px;
                width: 100%;
                box-shadow: 0 8px 20px rgba(239, 105, 30, 0.3);
                transition: transform 0.2s, box-shadow 0.2s;
            }
            .demo-btn:active {
                transform: scale(0.96);
                box-shadow: 0 4px 10px rgba(239, 105, 30, 0.2);
            }
        `;
        document.head.appendChild(style);

        const overlay = document.createElement('div');
        overlay.className = 'demo-overlay';
        
        overlay.innerHTML = `
            <div class="demo-popup">
                <button class="demo-close">✕</button>
                <div class="demo-icon">👋</div>
                <h2 class="demo-title">Zanima vas ovakvo rješenje za vaš lokal?</h2>
                <p class="demo-desc">Sandro iz Taplita vam stoji na raspolaganju. Zakažite besplatne 30-minutne konzultacije i saznajte kako Taplito može unaprijediti vaše poslovanje.</p>
                <a href="https://calendly.com/sandro-taplito/30min?month=2026-06" target="_blank" class="demo-btn">
                    📅 Zakaži termin
                </a>
            </div>
        `;

        document.body.appendChild(overlay);

        // trigger animation
        requestAnimationFrame(() => {
            overlay.classList.add('show');
        });

        const closeBtn = overlay.querySelector('.demo-close');
        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('show');
            setTimeout(() => overlay.remove(), 400);
        });
    }
})();
