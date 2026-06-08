document.addEventListener('DOMContentLoaded', () => {
    // ---- Add to cart animation feedback ----
    const addButtons = document.querySelectorAll('.grid-add-btn');
    const cartCountEl = document.querySelector('.cart-count');
    const cartPriceEl = document.querySelector('.cart-fab span:last-child');
    let items = 4;
    let total = 11.20;

    const prices = [1.80, 2.00, 3.00, 3.50]; // match grid items

    addButtons.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Visual feedback: shrink → check → restore
            btn.classList.add('added');
            btn.textContent = '✓';
            btn.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                btn.style.transform = 'scale(1.1)';
                setTimeout(() => btn.style.transform = '', 120);
            }, 80);

            setTimeout(() => {
                btn.classList.remove('added');
                btn.textContent = '+';
            }, 800);

            // Update cart count & price
            items++;
            total += prices[index] || 2.00;
            cartCountEl.textContent = `${items} stavke`;
            
            // Pulse the FAB
            const fab = document.querySelector('.cart-fab');
            fab.style.transform = 'scale(1.03)';
            fab.style.boxShadow = '0 10px 35px rgba(239, 105, 30, 0.6)';
            setTimeout(() => {
                fab.style.transform = '';
                fab.style.boxShadow = '';
            }, 300);

            // Show toast
            showToast(`Dodano u košaricu!`);
        });
    });

    // ---- Header scroll effect ----
    const header = document.querySelector('.header');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // ---- WiFi Copy ----
    const wifiItem = document.getElementById('wifiCopy');
    if (wifiItem) {
        wifiItem.addEventListener('click', () => {
            const password = "taplito-guest";
            navigator.clipboard.writeText(password).then(() => {
                showToast("🔑 Lozinka kopirana!");
            }).catch(() => {
                showToast("Greška pri kopiranju.");
            });
        });
    }

    // ---- Toast system ----
    function showToast(message) {
        // Remove any existing toast
        const existing = document.querySelector('.toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        // Auto-remove after animation
        setTimeout(() => toast.remove(), 2800);
    }


    // ---- Search Logic ----
    const searchIcon = document.querySelector('.search-icon');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearchBtn = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchSuggestions = document.getElementById('searchSuggestions');

    const mockItems = [
        { name: 'Espresso', category: 'Kava i topli napitci', price: '1.80€', img: 'assets/espresso.png', link: '../03-product-screen/index.html' },
        { name: 'Macchiato', category: 'Kava i topli napitci', price: '2.00€', img: '../09-menu-screen/assets/macchiato.png', link: '../03-product-screen/index.html' },
        { name: 'Cappuccino', category: 'Kava i topli napitci', price: '2.20€', img: '../03-product-screen/assets/hero.png', link: '../03-product-screen/index.html' },
        { name: 'Latte Macchiato', category: 'Kava i topli napitci', price: '2.50€', img: '../09-menu-screen/assets/latte_macchiato.png', link: '../03-product-screen/index.html' },
        { name: 'Topla čokolada', category: 'Kava i topli napitci', price: '2.80€', img: '../09-menu-screen/assets/topla_cokolada.png', link: '../03-product-screen/index.html' },
        { name: 'Matcha Latte', category: 'Kava i topli napitci', price: '3.20€', img: '../09-menu-screen/assets/matcha_latte.png', link: '../03-product-screen/index.html' },
        { name: 'Coca Cola 0.25l', category: 'Hladna pića', price: '3.00€', img: 'assets/coca_cola.png', link: '#' },
        { name: 'Domaća limunada', category: 'Hladna pića', price: '3.10€', img: '../09-menu-screen/assets/limunada.png', link: '#' },
        { name: 'Svježi sok od naranče', category: 'Hladna pića', price: '3.50€', img: '../09-menu-screen/assets/orange_juice.png', link: '#' },
        { name: 'Craft Pivo 0.33l', category: 'Hladna pića', price: '3.80€', img: '../09-menu-screen/assets/craft_beer.png', link: '#' },
        { name: 'Crno vino Plavac Mali', category: 'Hladna pića', price: '4.50€', img: '../09-menu-screen/assets/crno_vino.png', link: '#' },
        { name: 'Gourmet Burger', category: 'Hrana', price: '9.40€', img: '../03-product-screen/assets/burger_v2.png', link: '../03-product-screen/index_food_v2.html' },
        { name: 'Club Sandwich', category: 'Hrana', price: '6.80€', img: '../09-menu-screen/assets/club_sandwich.png', link: '../03-product-screen/index_food_v2.html' },
        { name: 'Tost Sendvič', category: 'Hrana', price: '3.00€', img: '../09-menu-screen/assets/tost_sandwich.png', link: '../03-product-screen/index_food_v2.html' },
        { name: 'Cezar Salata', category: 'Hrana', price: '7.50€', img: '../09-menu-screen/assets/cezar_salata.png', link: '../03-product-screen/index_food_v2.html' },
        { name: 'Kroasan Maslac', category: 'Hrana', price: '1.50€', img: '../09-menu-screen/assets/kroasan_maslac.png', link: '../03-product-screen/index_food_v2.html' },
        { name: 'Tiramisu', category: 'Deserti', price: '4.00€', img: '../09-menu-screen/assets/tiramisu.png', link: '../03-product-screen/index_food_v2.html' },
        { name: 'Cheesecake', category: 'Deserti', price: '4.20€', img: '../09-menu-screen/assets/cheesecake.png', link: '../03-product-screen/index_food_v2.html' },
        { name: 'Američke palačinke', category: 'Deserti', price: '4.50€', img: '../09-menu-screen/assets/pancakes.png', link: '../03-product-screen/index_food_v2.html' }
    ];

    if (searchIcon) {
        searchIcon.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            setTimeout(() => searchInput.focus(), 300);
        });
    }

    if (closeSearchBtn) {
        closeSearchBtn.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
            document.body.style.overflow = '';
            searchInput.value = '';
            renderResults('');
        });
    }

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        renderResults(query);
    });

    function renderResults(query) {
        if (!query) {
            searchResults.style.display = 'none';
            searchSuggestions.style.display = 'block';
            return;
        }

        searchSuggestions.style.display = 'none';
        searchResults.style.display = 'block';

        const filtered = mockItems.filter(item => 
            item.name.toLowerCase().includes(query) || 
            item.category.toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
            searchResults.innerHTML = `<div class="no-results">Nema rezultata za "${query}"</div>`;
            return;
        }

        searchResults.innerHTML = `
            <h3 class="search-suggestions-title">Rezultati pretrage</h3>
            <div class="search-suggestions-list">
                ${filtered.map(item => `
                    <a href="${item.link}" class="search-result-item">
                        <img src="${item.img}" alt="${item.name}" class="result-thumb">
                        <div class="result-info">
                            <h4>${item.name}</h4>
                            <p>${item.category}</p>
                        </div>
                        <span class="result-price">${item.price}</span>
                    </a>
                `).join('')}
            </div>
        `;
    }

    // ---- Dynamic Contextual UI (Time of Day Recommendations) ----
    const bannerImg = document.querySelector('.banner-img');
    const bannerTitle = document.querySelector('.banner-text h2');
    const bannerDesc = document.querySelector('.banner-text p');
    
    if (bannerImg && bannerTitle && bannerDesc) {
        const currentHour = new Date().getHours();
        if (currentHour >= 6 && currentHour < 12) {
            // Morning: Coffee & Croissant
            bannerImg.src = 'assets/promo_combo.png';
            bannerTitle.textContent = 'Jutarnja ponuda';
            bannerDesc.textContent = 'Kava + Croissant za samo 3.50€';
        } else if (currentHour >= 12 && currentHour < 18) {
            // Afternoon: Coffee & Dessert
            bannerImg.src = '../09-menu-screen/assets/cheesecake.png';
            bannerTitle.textContent = 'Popodnevni predah';
            bannerDesc.textContent = 'Cappuccino + Cheesecake za samo 5.50€';
        } else {
            // Evening: Beer & Burger
            bannerImg.src = 'assets/burger.png';
            bannerTitle.textContent = 'Večernja ponuda';
            bannerDesc.textContent = 'Gourmet Burger + Craft Pivo za samo 12.20€';
        }
    }
});

