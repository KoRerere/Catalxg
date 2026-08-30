(() => {
  const key = 'catalxg-local-cart-v1';
  const money = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' });
  const read = () => { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } };
  const write = value => { localStorage.setItem(key, JSON.stringify(value)); render(); };
  const total = cart => cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let cart = read();

  const nameFrom = button => button.getAttribute('aria-label')?.replace(/^Add to cart:\s*[“\"]?|[”\"]$/g, '') || button.closest('.product, form, .product-summary')?.querySelector('h1,h2,h3,h4,h5,.product_title')?.textContent.trim() || 'Catalxg product';
  const priceFrom = button => {
    const text = button.closest('.product, form, .product-summary, .fusion-layout-column')?.querySelector('.price,.woocommerce-Price-amount')?.textContent || '';
    return Number(text.replace(/[^0-9.]/g, '')) || 0;
  };
  const add = (button, amount = 1) => {
    const id = button.dataset.product_id || button.value || nameFrom(button);
    const existing = cart.find(item => item.id === String(id));
    if (existing) existing.quantity += amount;
    else cart.push({ id: String(id), name: nameFrom(button), price: priceFrom(button), quantity: amount });
    write(cart); toast('Product added to your cart.');
  };
  const toast = message => { const node = document.querySelector('.local-toast'); node.textContent = message; node.classList.add('show'); clearTimeout(toast.timer); toast.timer = setTimeout(() => node.classList.remove('show'), 2600); };

  function renderCartPage() {
    if (!/\/cart-?2?\/?$/.test(location.pathname)) return;
    const target = document.querySelector('.woocommerce-cart-form, .cart-collaterals, .woocommerce');
    if (!target || !cart.length) return;
    const rows = cart.map(item => `<tr><td>${item.name}</td><td>${money.format(item.price)}</td><td><button class="local-change" data-id="${item.id}" data-delta="-1">-</button> ${item.quantity} <button class="local-change" data-id="${item.id}" data-delta="1">+</button></td><td>${money.format(item.price * item.quantity)}</td><td><button class="local-remove" data-id="${item.id}">Remove</button></td></tr>`).join('');
    target.innerHTML = `<div class="local-order-note">Your local cart is saved in this browser.</div><table class="shop_table"><thead><tr><th>Product</th><th>Price</th><th>Quantity</th><th>Total</th><th></th></tr></thead><tbody>${rows}</tbody></table><p class="cart-subtotal"><strong>Subtotal: ${money.format(total(cart))}</strong></p><p><a class="button" href="/checkout-2/">Proceed to checkout</a></p>`;
  }
  function renderCheckout() {
    if (!/\/checkout-?2?\/?$/.test(location.pathname)) return;
    const target = document.querySelector('#main');
    if (!target || target.dataset.localCheckout) return;
    target.dataset.localCheckout = 'true';
    const products = cart.length ? cart.map(item => `<p><span>${item.name} × ${item.quantity}</span><span>${money.format(item.price * item.quantity)}</span></p>`).join('') : '<p><span>Your cart is empty</span><span>£0.00</span></p>';
    target.innerHTML = `<section class="local-checkout-shell"><h1>Checkout</h1><p>Complete your details to place your local order.</p><div class="local-checkout-grid"><form class="checkout local-checkout-form"><label>First name<input required name="first-name" autocomplete="given-name"></label><label>Last name<input required name="last-name" autocomplete="family-name"></label><label class="full">Email address<input required type="email" name="email" autocomplete="email"></label><label class="full">Address<input required name="address" autocomplete="street-address"></label><label>Town / City<input required name="city" autocomplete="address-level2"></label><label>Postcode<input required name="postcode" autocomplete="postal-code"></label><button id="place_order" type="submit" ${cart.length ? '' : 'disabled'}>Place order</button></form><aside class="local-checkout-summary"><h3>Your order</h3>${products}<p><strong>Total</strong><strong>${money.format(total(cart))}</strong></p></aside></div></section>`;
  }
  function render() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.fusion-dynamic-cart-count, .local-cart-count').forEach(node => node.textContent = count);
    const panel = document.querySelector('.local-cart-panel');
    if (!panel) return;
    panel.innerHTML = `<h3>Your cart</h3>${cart.length ? cart.map(item => `<div class="local-cart-item"><span>${item.name}<br><small>${item.quantity} × ${money.format(item.price)}</small></span><button class="local-remove" data-id="${item.id}" aria-label="Remove ${item.name}">Remove</button></div>`).join('') + `<strong>Total: ${money.format(total(cart))}</strong><a class="local-checkout" href="/checkout-2/">Checkout</a>` : '<p>Your cart is empty.</p>'}`;
    renderCartPage(); renderCheckout();
  }
  function install() {
    document.body.insertAdjacentHTML('beforeend', '<button class="local-cart-toggle" aria-label="Open cart">&#128722;<span class="local-cart-count">0</span></button><aside class="local-cart-panel" aria-live="polite"></aside><div class="local-toast" role="status"></div>');
    document.addEventListener('click', event => {
      const button = event.target.closest('.add_to_cart_button, .single_add_to_cart_button, [name="add-to-cart"]');
      if (button) { event.preventDefault(); const quantity = Number(button.closest('form')?.querySelector('.qty')?.value) || 1; add(button, quantity); return; }
      if (event.target.closest('.local-cart-toggle')) { document.querySelector('.local-cart-panel').classList.toggle('open'); return; }
      const remove = event.target.closest('.local-remove');
      if (remove) { cart = cart.filter(item => item.id !== remove.dataset.id); write(cart); return; }
      const change = event.target.closest('.local-change');
      if (change) { const item = cart.find(candidate => candidate.id === change.dataset.id); if (item) item.quantity += Number(change.dataset.delta); cart = cart.filter(candidate => candidate.quantity > 0); write(cart); return; }
      if (event.target.matches('.checkout-button, #place_order, [name="woocommerce_checkout_place_order"]')) { event.preventDefault(); cart = []; write(cart); toast('Order received. Thank you.'); setTimeout(() => location.assign('/'), 900); }
    });
    document.querySelectorAll('form.checkout').forEach(form => form.addEventListener('submit', event => { event.preventDefault(); cart = []; write(cart); toast('Order received. Thank you.'); }));
    render();
  }
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', install) : install();
})();
