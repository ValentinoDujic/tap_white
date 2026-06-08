const Cart = {
    getItems: function() {
        const cartStr = localStorage.getItem('taplito_cart');
        return cartStr ? JSON.parse(cartStr) : [];
    },
    saveItems: function(items) {
        localStorage.setItem('taplito_cart', JSON.stringify(items));
    },
    addItem: function(item) {
        const items = this.getItems();
        // check if identical item exists (same id and same modifiers)
        const existingIndex = items.findIndex(i => 
            i.id === item.id && 
            JSON.stringify(i.modifiers || []) === JSON.stringify(item.modifiers || [])
        );
        if (existingIndex >= 0) {
            items[existingIndex].qty += item.qty;
        } else {
            items.push(item);
        }
        this.saveItems(items);
        this.updateBadge();
    },
    updateQty: function(index, newQty) {
        const items = this.getItems();
        if (items[index]) {
            if (newQty <= 0) {
                items.splice(index, 1);
            } else {
                items[index].qty = newQty;
            }
            this.saveItems(items);
            this.updateBadge();
        }
    },
    removeItem: function(index) {
        this.updateQty(index, 0);
    },
    clear: function() {
        localStorage.removeItem('taplito_cart');
        this.updateBadge();
    },
    getTotals: function() {
        const items = this.getItems();
        let subtotal = 0;
        let itemCount = 0;
        items.forEach(item => {
            let itemTotal = item.price;
            if (item.modifiers) {
                item.modifiers.forEach(mod => {
                    itemTotal += mod.price || 0;
                });
            }
            subtotal += itemTotal * item.qty;
            itemCount += item.qty;
        });
        return { subtotal, itemCount };
    },
    updateBadge: function() {
        const totals = this.getTotals();
        
        // Update elements
        const cartCountEls = document.querySelectorAll('.cart-count');
        cartCountEls.forEach(el => {
            const isSingle = totals.itemCount === 1;
            const itemsText = isSingle ? (typeof getTranslation === 'function' ? getTranslation('cart_item') : 'stavka') : (typeof getTranslation === 'function' ? getTranslation('cart_items') : 'stavke');
            el.innerHTML = `${totals.itemCount} <span data-i18n="${isSingle ? 'cart_item' : 'cart_items'}">${itemsText}</span>`;
        });
        
        const cartAmountEls = document.querySelectorAll('.cart-amount');
        cartAmountEls.forEach(el => {
            el.textContent = totals.subtotal.toFixed(2) + '€';
        });

        const badgeIconEls = document.querySelectorAll('.cart-badge');
        badgeIconEls.forEach(el => {
            el.textContent = totals.itemCount;
            el.style.display = totals.itemCount > 0 ? 'flex' : 'none';
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    Cart.updateBadge();
});
