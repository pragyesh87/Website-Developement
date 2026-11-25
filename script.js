const slides = [...document.querySelectorAll('.hero-slide')];
const next = document.getElementById('nextSlide');
const prev = document.getElementById('prevSlide');

let idx = 0;

function showSlide(nextIndex) {
  slides[idx].classList.remove('active');
  idx = (nextIndex + slides.length) % slides.length;
  slides[idx].classList.add('active');
}

next?.addEventListener('click', () => showSlide(idx + 1));
prev?.addEventListener('click', () => showSlide(idx - 1));
setInterval(() => showSlide(idx + 1), 5500);

const chips = [...document.querySelectorAll('.chip')];
chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');
  });
});

const storageKey = 'premium_store_demo_state_v1';
const launchKey = 'simpliphi_launch_ends_at_v1';
const freeShippingThreshold = 2499;
const milestoneTiers = [
  {
    name: 'Starter Tier',
    threshold: 10000,
    reward: '₹500 Φ Credits',
    details: 'Instant credit on confirmed milestone completion.',
  },
  {
    name: 'Growth Tier',
    threshold: 25000,
    reward: '₹1,500 Φ Credits + Priority support',
    details: 'Higher redemption limit and priority queue assistance.',
  },
  {
    name: 'Elite Tier',
    threshold: 50000,
    reward: '₹3,500 Φ Credits + Early access drops',
    details: 'Premium early-access windows and loyalty boosts.',
  },
  {
    name: 'Signature Tier',
    threshold: 100000,
    reward: '₹8,000 Φ Credits + Concierge benefits',
    details: 'Top-tier benefits with milestone unlock recognition.',
  },
];

const adminInsights = {
  landings7d: [
    { day: 'Mon', count: 428 },
    { day: 'Tue', count: 511 },
    { day: 'Wed', count: 603 },
    { day: 'Thu', count: 574 },
    { day: 'Fri', count: 690 },
    { day: 'Sat', count: 744 },
    { day: 'Sun', count: 638 },
  ],
  geoLandings: [
    { city: 'Bengaluru', country: 'India', x: 66, y: 60, customerName: 'customer', source: 'Logged-in customer' },
    { city: 'Mumbai', country: 'India', x: 63, y: 57, customerName: 'Aditi R.', source: 'Logged-in customer' },
    { city: 'Delhi NCR', country: 'India', x: 64, y: 52, customerName: null, source: 'Anonymous landing' },
    { city: 'Dubai', country: 'UAE', x: 57, y: 54, customerName: null, source: 'Anonymous landing' },
    { city: 'London', country: 'UK', x: 49, y: 40, customerName: 'Rohan P.', source: 'Logged-in customer' },
    { city: 'Singapore', country: 'Singapore', x: 73, y: 64, customerName: null, source: 'Campaign landing' },
  ],
  customerSessions: [
    { name: 'customer', city: 'Bengaluru', pages: 12, lastAction: 'Added Flex Track Pants to cart' },
    { name: 'Aditi R.', city: 'Mumbai', pages: 8, lastAction: 'Viewed milestone rewards' },
    { name: 'Rohan P.', city: 'London', pages: 5, lastAction: 'Referral code shared' },
  ],
  inventorySync: [
    { batch: 'INV-2026-1107-A', matched: 148, unmatched: 6, status: 'Needs mapping review' },
    { batch: 'INV-2026-1106-B', matched: 152, unmatched: 0, status: 'Applied' },
  ],
  campaigns: [
    { name: 'Launch Welcome', conversion: '5.6%', budgetUsed: '₹18,200 / ₹50,000', status: 'Active' },
    { name: 'Weekend Push', conversion: '4.2%', budgetUsed: '₹12,050 / ₹20,000', status: 'Active' },
    { name: 'Referral Boost', conversion: '7.3%', budgetUsed: '₹9,800 / ₹15,000', status: 'Healthy' },
  ],
  locationShare: [
    { location: 'India', share: '74%', landings: 3120 },
    { location: 'UAE', share: '9%', landings: 380 },
    { location: 'UK', share: '8%', landings: 337 },
    { location: 'Singapore', share: '6%', landings: 253 },
    { location: 'Other', share: '3%', landings: 126 },
  ],
  topCities: [
    { city: 'Bengaluru', landings: 640, trend: '+14%' },
    { city: 'Mumbai', landings: 522, trend: '+11%' },
    { city: 'Delhi NCR', landings: 474, trend: '+7%' },
    { city: 'Dubai', landings: 166, trend: '+9%' },
    { city: 'London', landings: 152, trend: '+5%' },
  ],
  regionConversion: [
    { region: 'India', conversion: '4.8%', avgOrder: '₹1,840' },
    { region: 'UAE', conversion: '3.9%', avgOrder: '₹2,120' },
    { region: 'UK', conversion: '3.4%', avgOrder: '₹2,280' },
    { region: 'Singapore', conversion: '4.1%', avgOrder: '₹2,060' },
  ],
  geoInsights: [
    { label: 'Peak landing window', value: '7:30 PM – 10:30 PM IST' },
    { label: 'Best performing city', value: 'Bengaluru (+14% WoW)' },
    { label: 'High bounce region', value: 'Anonymous UAE traffic' },
  ],
  regionDeviceMix: [
    { region: 'India', mix: 'Mobile 81% • Desktop 17% • Tablet 2%' },
    { region: 'UAE', mix: 'Mobile 73% • Desktop 24% • Tablet 3%' },
    { region: 'UK', mix: 'Mobile 68% • Desktop 29% • Tablet 3%' },
  ],
};

const defaultState = {
  credits: 560,
  couponQueue: [
    { id: 'CPN-1001', code: 'WELCOME10', customer: 'customer', status: 'Pending' },
    { id: 'CPN-1002', code: 'FESTIVE15', customer: 'customer', status: 'Pending' },
  ],
  returnQueue: [
    { id: 'RET-301', order: 'ORD-901', item: 'Flex Track Pants', status: 'Pending' },
    { id: 'RET-302', order: 'ORD-902', item: 'Classic Crew Tee', status: 'Pending' },
  ],
  cart: [
    { name: 'Classic Crew Tee', qty: 2, price: 899 },
    { name: 'UltraSoft Boxers (2-Pack)', qty: 1, price: 1499 },
  ],
  wishlist: [
    { name: 'Active Support Bra', price: 1099 },
  ],
  savedLater: [
    { name: 'Flex Track Pants', price: 1299 },
  ],
  payments: [
    { ref: 'PAY-4101', amount: 3297, mode: 'UPI', status: 'Captured' },
    { ref: 'PAY-4018', amount: 2198, mode: 'Card', status: 'Captured' },
  ],
  ledger: [
    { date: '2026-11-02', label: 'Welcome Φ credit', amount: 200 },
    { date: '2026-11-04', label: 'Purchase Φ reward', amount: 180 },
    { date: '2026-11-06', label: 'Referral Φ reward', amount: 180 },
  ],
  milestones: milestoneTiers,
  lifetimeBilling: 18960,
  referredUsers: [
    { name: 'Aarav S.', firstPurchaseDone: true, creditGiven: false, creditAmount: 250 },
    { name: 'Riya M.', firstPurchaseDone: false, creditGiven: false, creditAmount: 250 },
  ],
  recentViewed: [],
};

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return { ...defaultState };
    const parsed = JSON.parse(raw);
    return {
      ...defaultState,
      ...parsed,
      couponQueue: Array.isArray(parsed?.couponQueue) ? parsed.couponQueue : defaultState.couponQueue,
      returnQueue: Array.isArray(parsed?.returnQueue) ? parsed.returnQueue : defaultState.returnQueue,
      cart: Array.isArray(parsed?.cart) ? parsed.cart : defaultState.cart,
      wishlist: Array.isArray(parsed?.wishlist) ? parsed.wishlist : defaultState.wishlist,
      savedLater: Array.isArray(parsed?.savedLater) ? parsed.savedLater : defaultState.savedLater,
      payments: Array.isArray(parsed?.payments) ? parsed.payments : defaultState.payments,
      ledger: Array.isArray(parsed?.ledger) ? parsed.ledger : defaultState.ledger,
      milestones: Array.isArray(parsed?.milestones) ? parsed.milestones : defaultState.milestones,
      referredUsers: Array.isArray(parsed?.referredUsers) ? parsed.referredUsers : defaultState.referredUsers,
      recentViewed: Array.isArray(parsed?.recentViewed) ? parsed.recentViewed : defaultState.recentViewed,
    };
  } catch {
    return { ...defaultState };
  }
}

let appState = loadState();

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(appState));
}

function formatInr(value) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
}

function listHtml(items) {
  return items.join('');
}

function getCartValue() {
  return appState.cart.reduce((sum, item) => sum + item.qty * item.price, 0);
}

function trackRecentView(product) {
  if (!product?.name) return;
  const filtered = appState.recentViewed.filter((item) => item.name !== product.name);
  filtered.unshift({ name: product.name, price: product.price, viewedAt: new Date().toISOString() });
  appState.recentViewed = filtered.slice(0, 6);
  saveState();
}

function getRecommendedProducts() {
  const cartNames = new Set(appState.cart.map((i) => i.name.replace(/\s•\s.+$/, '')));
  const wishlistNames = new Set(appState.wishlist.map((i) => i.name));
  const source = Object.values(productCatalog);
  const filtered = source.filter((p) => !cartNames.has(p.name) && !wishlistNames.has(p.name));
  return (filtered.length ? filtered : source).slice(0, 4);
}

function getDisplayedCatalogProducts() {
  const cards = [...document.querySelectorAll('.product-card:not([data-collected-product])')];
  return cards.map((card) => {
    const id = card.getAttribute('data-product-id') || '';
    const title = card.querySelector('h3')?.textContent?.trim() || 'Unnamed product';
    const rawPrice = card.querySelector('p')?.textContent || '₹0';
    const price = Number(rawPrice.replace(/[^\d]/g, '')) || 0;
    const catalogItem = productCatalog[id];
    const stock = catalogItem ? Object.values(catalogItem.sizes).reduce((sum, qty) => sum + qty, 0) : 0;
    return {
      id,
      title,
      price,
      stock,
      status: stock <= 0 ? 'Out of stock' : stock <= 8 ? 'Low stock' : 'Healthy',
    };
  });
}

function getNextMilestone(spendValue) {
  return milestoneTiers.find((tier) => spendValue < tier.threshold) || null;
}

function updateCommerceNudges() {
  const cartValue = getCartValue();
  const qualifiesForFreeShipping = cartValue > freeShippingThreshold;
  const progress = qualifiesForFreeShipping ? 100 : Math.min(99, (cartValue / freeShippingThreshold) * 100);
  const nextMilestone = getNextMilestone(appState.lifetimeBilling);

  const shippingProgress = document.getElementById('shippingProgress');
  const shippingStatus = document.getElementById('shippingStatus');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const floatingCheckout = document.getElementById('floatingCheckout');
  const floatingTotal = document.getElementById('floatingTotal');
  const checkoutMilestoneHint = document.getElementById('checkoutMilestoneHint');

  if (shippingProgress) shippingProgress.style.width = `${progress}%`;
  if (shippingStatus) {
    shippingStatus.textContent = qualifiesForFreeShipping
      ? 'Demo: this subtotal qualifies for free shipping.'
      : 'Demo: ₹129 shipping; free on orders above ₹2,499.';
  }
  if (cartSubtotal) cartSubtotal.textContent = formatInr(cartValue);
  if (floatingTotal) floatingTotal.textContent = formatInr(cartValue);
  if (checkoutMilestoneHint) {
    checkoutMilestoneHint.textContent = nextMilestone
      ? `Next benefit: ${nextMilestone.reward} at ${formatInr(nextMilestone.threshold)}`
      : 'All milestone rewards unlocked.';
  }

  if (floatingCheckout) {
    if (cartValue > 0) floatingCheckout.classList.remove('hidden');
    else floatingCheckout.classList.add('hidden');
  }
}

function renderMilestoneCards(spendValue) {
  const milestoneCards = document.getElementById('milestoneCards');
  const simulatedSpendLabel = document.getElementById('simulatedSpendLabel');
  if (!milestoneCards || !simulatedSpendLabel) return;

  simulatedSpendLabel.textContent = formatInr(spendValue);

  milestoneCards.innerHTML = milestoneTiers
    .map((tier) => {
      const raw = (spendValue / tier.threshold) * 100;
      const progress = Math.min(100, Math.max(0, raw));
      const achieved = spendValue >= tier.threshold;
      const status = achieved ? 'Reward unlocked' : `${formatInr(tier.threshold - spendValue)} to unlock`;

      return `
        <article class="milestone-item">
          <h4>${tier.name}</h4>
          <div class="milestone-meta">
            <span>Target: ${formatInr(tier.threshold)}</span>
            <span>Reward: ${tier.reward}</span>
          </div>
          <p class="muted">${tier.details}</p>
          <div class="milestone-progress"><span style="width:${progress}%"></span></div>
          <div class="milestone-status ${achieved ? 'done' : 'pending'}">${status}</div>
        </article>
      `;
    })
    .join('');
}

function setupMilestoneControls() {
  const spendSimulator = document.getElementById('spendSimulator');
  if (!spendSimulator) return;
  spendSimulator.value = String(appState.lifetimeBilling);
  renderMilestoneCards(appState.lifetimeBilling);

  spendSimulator.addEventListener('input', () => {
    const next = Number(spendSimulator.value);
    appState.lifetimeBilling = next;
    saveState();
    document.getElementById('ltvValue').textContent = formatInr(next);
    renderMilestoneCards(next);
  });
}

function renderAdminAnalytics() {
  const totalLandings = adminInsights.landings7d.reduce((sum, item) => sum + item.count, 0);
  const loggedIn = adminInsights.geoLandings.filter((row) => Boolean(row.customerName)).length;
  const pendingApprovals = appState.couponQueue.length + appState.returnQueue.length;

  document.getElementById('kpiLandings').textContent = totalLandings.toLocaleString('en-IN');
  document.getElementById('kpiLoggedIn').textContent = loggedIn.toString();
  document.getElementById('kpiAov').textContent = formatInr(Math.round(getCartValue() / Math.max(1, appState.cart.length)));
  document.getElementById('kpiApprovals').textContent = pendingApprovals.toString();
  document.getElementById('kpiLifetimeBilling').textContent = formatInr(appState.lifetimeBilling);

  const maxLanding = Math.max(...adminInsights.landings7d.map((x) => x.count));
  document.getElementById('landingBars').innerHTML = adminInsights.landings7d
    .map((row) => {
      const h = Math.max(8, (row.count / maxLanding) * 100);
      return `<div class="bar-col"><div class="bar-fill" style="height:${h}%"></div><small>${row.day}</small><small>${row.count}</small></div>`;
    })
    .join('');

  document.getElementById('landingRows').innerHTML = adminInsights.landings7d
    .map((row) => `<li><span>${row.day}</span><strong>${row.count.toLocaleString('en-IN')} landings</strong></li>`)
    .join('');

  document.getElementById('geoMapPins').innerHTML = adminInsights.geoLandings
    .map((row) => {
      const cls = row.customerName ? 'geo-pin customer' : 'geo-pin';
      const label = `${row.city}, ${row.country}${row.customerName ? ` • ${row.customerName}` : ''}`;
      return `<span class="${cls}" style="left:${row.x}%; top:${row.y}%;" title="${label}"></span>`;
    })
    .join('');

  document.getElementById('geoLandingList').innerHTML = adminInsights.geoLandings
    .map((row) => {
      const identity = row.customerName ? `Customer: ${row.customerName}` : 'Anonymous visitor';
      return `<li><span>${row.city}, ${row.country} • ${identity}</span><strong>${row.source}</strong></li>`;
    })
    .join('');

  document.getElementById('customerSessions').innerHTML = adminInsights.customerSessions
    .map(
      (session) =>
        `<li><span>${session.name} • ${session.city} • ${session.pages} pages</span><strong>${session.lastAction}</strong></li>`,
    )
    .join('');

  document.getElementById('inventorySyncRows').innerHTML = adminInsights.inventorySync
    .map(
      (batch) =>
        `<li><span>${batch.batch} • matched ${batch.matched} • unmatched ${batch.unmatched}</span><strong>${batch.status}</strong></li>`,
    )
    .join('');

  document.getElementById('campaignRows').innerHTML = adminInsights.campaigns
    .map(
      (campaign) =>
        `<li><span>${campaign.name} • Conv ${campaign.conversion} • ${campaign.budgetUsed}</span><strong>${campaign.status}</strong></li>`,
    )
    .join('');

  document.getElementById('locationShareRows').innerHTML = adminInsights.locationShare
    .map((row) => `<li><span>${row.location} • ${row.landings.toLocaleString('en-IN')} landings</span><strong>${row.share}</strong></li>`)
    .join('');

  document.getElementById('topCitiesRows').innerHTML = adminInsights.topCities
    .map((row) => `<li><span>${row.city}</span><strong>${row.landings.toLocaleString('en-IN')} • ${row.trend}</strong></li>`)
    .join('');

  document.getElementById('regionConversionRows').innerHTML = adminInsights.regionConversion
    .map((row) => `<li><span>${row.region} • Conv ${row.conversion}</span><strong>AOV ${row.avgOrder}</strong></li>`)
    .join('');

  document.getElementById('geoInsightRows').innerHTML = adminInsights.geoInsights
    .map((row) => `<li><span>${row.label}</span><strong>${row.value}</strong></li>`)
    .join('');

  document.getElementById('regionDeviceMixRows').innerHTML = adminInsights.regionDeviceMix
    .map((row) => `<li><span>${row.region}</span><strong>${row.mix}</strong></li>`)
    .join('');
}

function renderAdminCatalog() {
  const rows = getDisplayedCatalogProducts();
  const productCount = rows.length;
  const lowStockCount = rows.filter((r) => r.status === 'Low stock').length;
  const outOfStockCount = rows.filter((r) => r.status === 'Out of stock').length;
  const catalogValue = rows.reduce((sum, row) => sum + row.price * Math.max(0, row.stock), 0);

  const productCountEl = document.getElementById('catalogProductCount');
  const lowStockEl = document.getElementById('catalogLowStockCount');
  const outOfStockEl = document.getElementById('catalogOutOfStockCount');
  const catalogValueEl = document.getElementById('catalogValue');
  const catalogRowsEl = document.getElementById('catalogRows');

  if (!productCountEl || !lowStockEl || !outOfStockEl || !catalogValueEl || !catalogRowsEl) return;

  productCountEl.textContent = String(productCount);
  lowStockEl.textContent = String(lowStockCount);
  outOfStockEl.textContent = String(outOfStockCount);
  catalogValueEl.textContent = formatInr(catalogValue);

  catalogRowsEl.innerHTML = rows
    .map((row) => {
      const statusClass = row.status === 'Healthy' ? 'healthy' : row.status === 'Low stock' ? 'low' : 'out';
      return `
        <tr>
          <td>${row.title}</td>
          <td>${formatInr(row.price)}</td>
          <td><span class="stock-pill">${row.stock} units</span></td>
          <td><span class="status-pill ${statusClass}">${row.status}</span></td>
          <td><div class="mini-actions"><button class="small-btn" type="button">Edit</button><button class="small-btn" type="button">Feature</button></div></td>
        </tr>
      `;
    })
    .join('');
}

function setupAdminTabs() {
  const tabs = [...document.querySelectorAll('.admin-tab')];
  const views = {
    overview: document.getElementById('adminViewOverview'),
    landings: document.getElementById('adminViewLandings'),
    geo: document.getElementById('adminViewGeo'),
    customers: document.getElementById('adminViewCustomers'),
    catalog: document.getElementById('adminViewCatalog'),
    approvals: document.getElementById('adminViewApprovals'),
    inventory: document.getElementById('adminViewInventory'),
    campaigns: document.getElementById('adminViewCampaigns'),
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-admin-tab');
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      Object.values(views).forEach((v) => v.classList.add('hidden'));
      views[target]?.classList.remove('hidden');
    });
  });
}

function setupLaunchCountdown() {
  const timerEl = document.getElementById('launchTimer');
  if (!timerEl) return;

  let launchEndsAt = localStorage.getItem(launchKey);
  if (!launchEndsAt) {
    const future = Date.now() + 36 * 60 * 60 * 1000;
    launchEndsAt = String(future);
    localStorage.setItem(launchKey, launchEndsAt);
  }

  function render() {
    const diff = Number(launchEndsAt) - Date.now();
    if (diff <= 0) {
      timerEl.textContent = '00:00:00';
      return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    timerEl.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  render();
  setInterval(render, 1000);
}

function addToCart(productName, productPrice) {
  const existing = appState.cart.find((item) => item.name === productName);
  if (existing) {
    existing.qty += 1;
  } else {
    appState.cart.push({ name: productName, qty: 1, price: productPrice });
  }
  saveState();
  renderCustomerPanel();
}

function addToWishlist(productName, productPrice) {
  const exists = appState.wishlist.some((item) => item.name === productName);
  if (!exists) {
    appState.wishlist.unshift({ name: productName, price: productPrice });
    saveState();
    renderCustomerPanel();
  }
}

function addToSavedLater(productName, productPrice) {
  const exists = appState.savedLater.some((item) => item.name === productName);
  if (!exists) {
    appState.savedLater.unshift({ name: productName, price: productPrice });
    saveState();
    renderCustomerPanel();
  }
}

function setupAddToCartButtons() {
  const buttons = [...document.querySelectorAll('.add-cart')];
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('data-name');
      const price = Number(button.getAttribute('data-price'));
      if (!name || !Number.isFinite(price)) return;
      addToCart(name, price);
    });
  });

  const wishlistButtons = [...document.querySelectorAll('.add-wishlist')];
  wishlistButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('data-name');
      const price = Number(button.getAttribute('data-price'));
      if (!name || !Number.isFinite(price)) return;
      addToWishlist(name, price);
    });
  });

  const saveLaterButtons = [...document.querySelectorAll('.save-later')];
  saveLaterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('data-name');
      const price = Number(button.getAttribute('data-price'));
      if (!name || !Number.isFinite(price)) return;
      addToSavedLater(name, price);
    });
  });

  document.getElementById('recommendedItems')?.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const name = target.getAttribute('data-name');
    const price = Number(target.getAttribute('data-price'));
    if (!name || !Number.isFinite(price)) return;
    addToCart(name, price);
    renderAdminCatalog();
  });

  document.getElementById('recentViewedItems')?.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const name = target.getAttribute('data-name');
    const price = Number(target.getAttribute('data-price'));
    if (!name || !Number.isFinite(price)) return;
    addToCart(name, price);
    renderAdminCatalog();
  });
}

function renderCustomerPanel() {
  const cartValue = getCartValue();
  const nextMilestone = getNextMilestone(appState.lifetimeBilling);
  const recommendations = getRecommendedProducts();
  const recentViewed = appState.recentViewed || [];

  document.getElementById('cartValue').textContent = formatInr(cartValue);
  document.getElementById('creditValue').textContent = formatInr(appState.credits);
  document.getElementById('wishlistCount').textContent = String(appState.wishlist.length);
  document.getElementById('savedLaterCount').textContent = String(appState.savedLater.length);

  const accountNudge = document.getElementById('accountNudge');
  if (accountNudge) {
    accountNudge.textContent = nextMilestone
      ? `${formatInr(nextMilestone.threshold - appState.lifetimeBilling)} away from ${nextMilestone.name}. Add recommended picks to unlock ${nextMilestone.reward}.`
      : 'All milestones unlocked. Keep exploring fresh drops and continue earning Φ Credits.';
  }

  document.getElementById('cartItems').innerHTML = listHtml(
    appState.cart.map((i) => `<li><span>${i.name} × ${i.qty}</span><strong>${formatInr(i.qty * i.price)}</strong></li>`),
  );

  document.getElementById('paymentItems').innerHTML = listHtml(
    appState.payments.map((p) => `<li><span>${p.ref} • ${p.mode} • ${p.status}</span><strong>${formatInr(p.amount)}</strong></li>`),
  );

  document.getElementById('nextMilestonePayment').textContent = nextMilestone
    ? `${formatInr(nextMilestone.threshold - appState.lifetimeBilling)} away from ${nextMilestone.name}`
    : 'You have unlocked all milestone tiers.';
  document.getElementById('nextMilestoneBenefit').textContent = nextMilestone
    ? `Benefit: ${nextMilestone.reward} • ${nextMilestone.details}`
    : 'Enjoy all active loyalty benefits.';

  document.getElementById('wishlistItems').innerHTML = appState.wishlist.length
    ? listHtml(appState.wishlist.map((i) => `<li><span>${i.name}</span><strong>${formatInr(i.price)}</strong></li>`))
    : '<li><span>No items in wishlist</span><strong>—</strong></li>';

  document.getElementById('savedLaterItems').innerHTML = appState.savedLater.length
    ? listHtml(appState.savedLater.map((i) => `<li><span>${i.name}</span><strong>${formatInr(i.price)}</strong></li>`))
    : '<li><span>No items saved for later</span><strong>—</strong></li>';

  document.getElementById('creditLedger').innerHTML = listHtml(
    appState.ledger.map((l) => `<li><span>${l.date} • ${l.label}</span><strong>+${formatInr(l.amount)}</strong></li>`),
  );

  document.getElementById('referralStatus').innerHTML = listHtml(
    appState.referredUsers.map((r) => {
      const status = r.firstPurchaseDone
        ? r.creditGiven
          ? `Reward credited (${formatInr(r.creditAmount)})`
          : 'Eligible for credit processing'
        : 'Waiting for first purchase';
      return `<li><span>${r.name}</span><strong>${status}</strong></li>`;
    }),
  );

  const recommendedItems = document.getElementById('recommendedItems');
  if (recommendedItems) {
    recommendedItems.innerHTML = recommendations
      .map(
        (item) =>
          `<li><span>${item.name}</span><div class="mini-actions"><strong>${formatInr(item.price)}</strong><button class="small-btn" data-name="${item.name}" data-price="${item.price}">Add</button></div></li>`,
      )
      .join('');
  }

  const recentViewedItems = document.getElementById('recentViewedItems');
  if (recentViewedItems) {
    recentViewedItems.innerHTML = recentViewed.length
      ? recentViewed
          .map(
            (item) =>
              `<li><span>${item.name}</span><div class="mini-actions"><strong>${formatInr(item.price || 0)}</strong><button class="small-btn" data-name="${item.name}" data-price="${item.price || 0}">Add again</button></div></li>`,
          )
          .join('')
      : '<li><span>No recently viewed products yet</span><strong>—</strong></li>';
  }

  updateCommerceNudges();
}

function renderAdminPanel() {
  const couponList = appState.couponQueue.length
    ? appState.couponQueue
        .map(
          (c) =>
            `<li><span>${c.id} • ${c.code} • ${c.customer}</span><div><button class="small-btn" data-coupon="${c.id}">Approve</button></div></li>`,
        )
        .join('')
    : '<li><span>All coupon requests processed</span><strong>Done</strong></li>';

  const returnList = appState.returnQueue.length
    ? appState.returnQueue
        .map(
          (r) =>
            `<li><span>${r.id} • ${r.order} • ${r.item}</span><div><button class="small-btn" data-return="${r.id}">Approve</button></div></li>`,
        )
        .join('')
    : '<li><span>All returns processed</span><strong>Done</strong></li>';

  document.getElementById('couponQueue').innerHTML = couponList;
  document.getElementById('returnQueue').innerHTML = returnList;
}

function processReferralCredits() {
  let creditAdded = 0;
  appState.referredUsers = appState.referredUsers.map((r) => {
    if (r.firstPurchaseDone && !r.creditGiven) {
      creditAdded += r.creditAmount;
      return { ...r, creditGiven: true };
    }
    return r;
  });

  if (creditAdded > 0) {
    appState.credits += creditAdded;
    appState.ledger.unshift({
      date: new Date().toISOString().slice(0, 10),
      label: 'Referral processing batch',
      amount: creditAdded,
    });
    saveState();
    renderCustomerPanel();
    alert(`Referral Φ credits processed: ${formatInr(creditAdded)}`);
  } else {
    alert('No eligible referrals pending credit.');
  }
}

function addManualCredit() {
  const amountInput = document.getElementById('manualCreditAmount');
  const amount = Number(amountInput.value);
  if (!Number.isFinite(amount) || amount <= 0) {
    alert('Enter a valid credit amount.');
    return;
  }

  appState.credits += amount;
  appState.ledger.unshift({
    date: new Date().toISOString().slice(0, 10),
    label: 'Manual admin Φ credit',
    amount,
  });
  saveState();
  renderCustomerPanel();
  alert(`Added ${formatInr(amount)} to customer Φ credits.`);
}

function setupAdminActions() {
  document.getElementById('couponQueue').addEventListener('click', (e) => {
    const id = e.target.getAttribute('data-coupon');
    if (!id) return;
    appState.couponQueue = appState.couponQueue.filter((c) => c.id !== id);
    saveState();
    renderAdminPanel();
  });

  document.getElementById('returnQueue').addEventListener('click', (e) => {
    const id = e.target.getAttribute('data-return');
    if (!id) return;
    appState.returnQueue = appState.returnQueue.filter((r) => r.id !== id);
    saveState();
    renderAdminPanel();
  });

  document.getElementById('processReferrals').addEventListener('click', processReferralCredits);
  document.getElementById('addManualCredit').addEventListener('click', addManualCredit);
}

const loginModal = document.getElementById('loginModal');
const loginTitle = document.getElementById('loginTitle');
const loginHint = document.getElementById('loginHint');
const loginUser = document.getElementById('loginUser');
const loginPass = document.getElementById('loginPass');
const loginMessage = document.getElementById('loginMessage');
const loginSubmit = document.getElementById('loginSubmit');
const googleAutoLogin = document.getElementById('googleAutoLogin');
const appleAutoLogin = document.getElementById('appleAutoLogin');
const emailLinkAutoLogin = document.getElementById('emailLinkAutoLogin');
const phoneOtpAutoLogin = document.getElementById('phoneOtpAutoLogin');
const customerSignOut = document.getElementById('customerSignOut');
const adminSignOut = document.getElementById('adminSignOut');
const headerSession = document.getElementById('headerSession');
const headerRole = document.getElementById('headerRole');
const headerSignOut = document.getElementById('headerSignOut');
const openCustomerLogin = document.getElementById('openCustomerLogin');
const openAdminLogin = document.getElementById('openAdminLogin');

let loginMode = 'customer';
let activeSessionRole = null;

function setSessionUi(role) {
  activeSessionRole = role;
  if (!headerSession || !headerRole) return;

  if (role) {
    headerSession.classList.remove('hidden');
    headerRole.textContent = role === 'admin' ? 'Signed in: Admin' : 'Signed in: Customer';
    openCustomerLogin?.classList.add('hidden');
    openAdminLogin?.classList.add('hidden');
  } else {
    headerSession.classList.add('hidden');
    headerRole.textContent = 'Signed in';
    openCustomerLogin?.classList.remove('hidden');
    openAdminLogin?.classList.remove('hidden');
  }
}

function openLogin(mode) {
  loginMode = mode;
  loginTitle.textContent = mode === 'admin' ? 'Admin Login / Sign up' : 'Customer Login / Sign up';
  loginHint.textContent = mode === 'admin' ? 'Use admin / admin or social sign-in' : 'Use customer / customer or social sign-in';
  loginUser.value = '';
  loginPass.value = '';
  loginMessage.textContent = '';
  loginModal.classList.remove('hidden');
}

function closeLogin() {
  loginModal.classList.add('hidden');
}

function signOut(role) {
  if (role === 'customer') {
    document.getElementById('customerPanel').classList.add('hidden');
  }
  if (role === 'admin') {
    document.getElementById('adminPanel').classList.add('hidden');
  }
  setSessionUi(null);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function tryLogin() {
  const user = loginUser.value.trim().toLowerCase();
  const pass = loginPass.value.trim();

  if (loginMode === 'admin' && user === 'admin' && pass === 'admin') {
    document.getElementById('adminPanel').classList.remove('hidden');
    document.getElementById('adminPanel').scrollIntoView({ behavior: 'smooth', block: 'start' });
    setSessionUi('admin');
    closeLogin();
    return;
  }

  if (loginMode === 'customer' && user === 'customer' && pass === 'customer') {
    document.getElementById('customerPanel').classList.remove('hidden');
    document.getElementById('customerPanel').scrollIntoView({ behavior: 'smooth', block: 'start' });
    setSessionUi('customer');
    closeLogin();
    return;
  }

  loginMessage.textContent = 'Invalid credentials for selected role.';
}

function socialAutoLogin(provider) {
  if (loginMode === 'admin') {
    loginUser.value = 'admin';
    loginPass.value = 'admin';
  } else {
    loginUser.value = 'customer';
    loginPass.value = 'customer';
  }
  loginMessage.textContent = `${provider} auto sign-in/sign-up verified in demo mode.`;
  setTimeout(() => {
    tryLogin();
  }, 300);
}

openAdminLogin.addEventListener('click', () => openLogin('admin'));
openCustomerLogin.addEventListener('click', () => openLogin('customer'));
document.getElementById('loginClose').addEventListener('click', closeLogin);
loginSubmit.addEventListener('click', tryLogin);
googleAutoLogin?.addEventListener('click', () => socialAutoLogin('Google'));
appleAutoLogin?.addEventListener('click', () => socialAutoLogin('Apple'));
emailLinkAutoLogin?.addEventListener('click', () => socialAutoLogin('Email Link'));
phoneOtpAutoLogin?.addEventListener('click', () => socialAutoLogin('Phone OTP'));
customerSignOut?.addEventListener('click', () => signOut('customer'));
adminSignOut?.addEventListener('click', () => signOut('admin'));
headerSignOut?.addEventListener('click', () => {
  if (activeSessionRole) signOut(activeSessionRole);
});
loginPass.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') tryLogin();
});
loginModal.addEventListener('click', (e) => {
  if (e.target === loginModal) closeLogin();
});

const rollTrack = document.getElementById('rollTrack');
const rollPrev = document.getElementById('rollPrev');
const rollNext = document.getElementById('rollNext');
const viewerModal = document.getElementById('viewerModal');
const viewerImage = document.getElementById('viewerImage');
const viewerTitle = document.getElementById('viewerTitle');
const viewerClose = document.getElementById('viewerClose');
const viewerPrev = document.getElementById('viewerPrev');
const viewerNext = document.getElementById('viewerNext');
const viewerProduct = document.getElementById('viewerProduct');

const productCatalog = {
  'classic-crew-tee': {
    name: 'Classic Crew Tee',
    price: 899,
    theme: {
      label: 'Urban Core Theme',
      accent: '#2563eb',
      soft: '#eaf2ff',
      bg: 'linear-gradient(165deg, #ffffff 0%, #eef4ff 100%)',
    },
    description: 'Soft-touch everyday t-shirt with moisture-friendly knit for all-day comfort.',
    meta: ['Fabric: 95% Cotton, 5% Elastane', 'Fit: Regular fit', 'Color: Jet Black', 'Care: Machine wash cold'],
    images: [
      'https://images.unsplash.com/photo-1588117260148-b47818741c74?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop',
    ],
    sizes: {
      S: 6,
      M: 14,
      L: 11,
      XL: 4,
    },
  },
  'flex-track-pants': {
    name: 'Flex Track Pants',
    price: 1299,
    theme: {
      label: 'Performance Motion Theme',
      accent: '#0d9488',
      soft: '#e9fbf8',
      bg: 'linear-gradient(165deg, #ffffff 0%, #ecfffc 100%)',
    },
    description: 'Performance track pants with stretch waistband and tapered silhouette.',
    meta: ['Fabric: Poly-cotton blend', 'Fit: Slim tapered', 'Color: Graphite Grey', 'Feature: Side zip pockets'],
    images: [
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506629905607-d9b6a7f99cb2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=1200&auto=format&fit=crop',
    ],
    sizes: {
      M: 8,
      L: 13,
      XL: 9,
      XXL: 2,
    },
  },
  'active-support-bra': {
    name: 'Active Support Bra',
    price: 1099,
    theme: {
      label: 'Energy Pulse Theme',
      accent: '#db2777',
      soft: '#ffeef8',
      bg: 'linear-gradient(165deg, #ffffff 0%, #fff0fa 100%)',
    },
    description: 'Medium-impact support bra with breathable mesh panels and smooth underband.',
    meta: ['Fabric: Nylon-Elastane', 'Support: Medium impact', 'Color: Rose Plum', 'Feature: Adjustable straps'],
    images: [
      'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop',
    ],
    sizes: {
      S: 5,
      M: 10,
      L: 7,
      XL: 0,
    },
  },
  'ultrasoft-boxers-pack': {
    name: 'UltraSoft Boxers (2-Pack)',
    price: 1499,
    theme: {
      label: 'Night Active Theme',
      accent: '#4f46e5',
      soft: '#efeeff',
      bg: 'linear-gradient(165deg, #ffffff 0%, #f1f2ff 100%)',
    },
    description: 'Dual-pack comfort boxers with anti-roll waistband and ultra-soft inner seam finish.',
    meta: ['Fabric: 100% combed cotton', 'Pack: 2 units', 'Color: Navy / Steel', 'Feature: Anti-chafe construction'],
    images: [
      'https://images.unsplash.com/photo-1618677366787-9727aacca7ea?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop',
    ],
    sizes: {
      S: 9,
      M: 12,
      L: 8,
      XL: 3,
    },
  },
};

const productDetailModal = document.getElementById('productDetailModal');
const productModalCard = document.querySelector('.product-modal-card');
const productModalClose = document.getElementById('productModalClose');
const productMainImage = document.getElementById('productMainImage');
const productThumbs = document.getElementById('productThumbs');
const productThemeTag = document.getElementById('productThemeTag');
const productTitle = document.getElementById('productTitle');
const productPrice = document.getElementById('productPrice');
const productDescription = document.getElementById('productDescription');
const productMeta = document.getElementById('productMeta');
const productSizes = document.getElementById('productSizes');
const sizeStockLabel = document.getElementById('sizeStockLabel');
const qtyMinus = document.getElementById('qtyMinus');
const qtyPlus = document.getElementById('qtyPlus');
const qtyInput = document.getElementById('qtyInput');
const productAddToCart = document.getElementById('productAddToCart');
const productAddWishlist = document.getElementById('productAddWishlist');
const productSaveLater = document.getElementById('productSaveLater');
const productBrand = document.getElementById('productBrand');
const productNote = document.getElementById('productNote');
const productColorBlock = document.getElementById('productColorBlock');
const productColorName = document.getElementById('productColorName');
const productColors = document.getElementById('productColors');
const productPreviewNotice = document.getElementById('productPreviewNotice');

let activeProductId = null;
let activeSize = null;
let activeImageIndex = 0;
let activeColorIndex = 0;

const collectedCards = document.getElementById('collectedCards');
collectedCards.innerHTML = collectedProductKeys.map((id) => {
  const product = collectedProducts[id];
  const price = product.price === 'Price to be confirmed' ? product.price : `${product.price} (indicative)`;
  return `<article class="product-card" data-product-id="${id}" data-collected-product>
    <img src="${product.variants[0].preview}" alt="${product.name} in ${product.variants[0].name}" loading="lazy" />
    <p class="product-card-style">Style #${product.style} · ${product.variants[0].name}</p>
    <h3>${product.name}</h3>
    <p class="product-card-price">${price}</p>
    <div class="product-actions"><button class="small-btn view-collected" type="button">View details <span aria-hidden="true">↗</span></button></div>
  </article>`;
}).join('');

rollTrack.innerHTML = collectedProductKeys.map((id) => {
  const product = collectedProducts[id];
  const variant = product.variants[0];
  return `<button type="button" class="roll-item" data-product-id="${id}">
    <img src="${variant.preview}" alt="" loading="lazy" />
    <span class="roll-item-info">
      <span class="roll-item-style">Style #${product.style}</span>
      <span class="roll-item-name">${product.name}</span>
      <span class="roll-item-color">${variant.name} · View look</span>
    </span>
  </button>`;
}).join('');
const rollItems = [...rollTrack.querySelectorAll('.roll-item')];

let viewerIndex = 0;

function renderViewer(index) {
  const safeIndex = (index + rollItems.length) % rollItems.length;
  viewerIndex = safeIndex;
  const product = collectedProducts[rollItems[safeIndex].dataset.productId];
  viewerImage.src = product.variants[0].preview;
  viewerImage.alt = `${product.name} in ${product.variants[0].name}`;
  viewerTitle.textContent = product.name;
}

function openViewer(index) {
  renderViewer(index);
  viewerModal.classList.remove('hidden');
  viewerModal.setAttribute('aria-hidden', 'false');
}

function closeViewer() {
  viewerModal.classList.add('hidden');
  viewerModal.setAttribute('aria-hidden', 'true');
}

function updateQtyControls(maxStock) {
  if (collectedProducts[activeProductId]) {
    qtyInput.value = '1';
    qtyInput.disabled = true;
    qtyMinus.disabled = true;
    qtyPlus.disabled = true;
    productAddToCart.disabled = true;
    sizeStockLabel.textContent = 'Sizes shown for preview only; stock is not connected.';
    return;
  }
  qtyInput.disabled = false;
  qtyMinus.disabled = false;
  qtyPlus.disabled = false;
  const safeStock = Math.max(0, maxStock || 0);
  const current = Number(qtyInput.value) || 1;
  const nextValue = Math.min(Math.max(current, 1), Math.max(1, safeStock || 1));
  qtyInput.value = String(nextValue);
  qtyInput.max = String(Math.max(1, safeStock || 1));

  if (safeStock <= 0) {
    qtyInput.value = '1';
    productAddToCart.disabled = true;
    sizeStockLabel.textContent = 'Out of stock for selected size';
  } else {
    productAddToCart.disabled = false;
    sizeStockLabel.textContent = `${safeStock} item(s) in stock for size ${activeSize}`;
  }
}

function renderProductImages(product) {
  const variant = product.variants?.[activeColorIndex];
  const images = variant ? variant.images : product.images;
  productMainImage.src = images[activeImageIndex];
  productMainImage.alt = `${product.name}${variant ? ` - ${variant.name}` : ''}`;
  productThumbs.innerHTML = (variant?.thumbnails || images)
    .map(
      (img, index) =>
        `<button type="button" class="${index === activeImageIndex ? 'active' : ''}" data-thumb-index="${index}" aria-pressed="${index === activeImageIndex}" aria-label="Show product image ${index + 1}"><img src="${img}" alt="" /></button>`,
    )
    .join('');

  productThumbs.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeImageIndex = Number(btn.getAttribute('data-thumb-index'));
      renderProductImages(product);
    });
  });
}

function renderProductColors(product) {
  productColorBlock.hidden = !product.variants;
  if (!product.variants) return;
  productColorName.textContent = product.variants[activeColorIndex].name;
  productColors.innerHTML = product.variants.map((variant, index) =>
    `<button type="button" class="product-color ${index === activeColorIndex ? 'active' : ''}" data-color-index="${index}" aria-pressed="${index === activeColorIndex}"><img src="${variant.preview}" alt="" /><span>${variant.name}</span></button>`,
  ).join('');
  productColors.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      activeColorIndex = Number(button.getAttribute('data-color-index'));
      activeImageIndex = 0;
      renderProductColors(product);
      renderProductImages(product);
      renderSizeOptions(product);
    });
  });
}

function renderSizeOptions(product) {
  const sizes = product.variants ? product.variants[activeColorIndex].sizes : product.sizes;
  const sizeEntries = Object.entries(sizes);
  if (!activeSize || !(activeSize in sizes) || (sizes[activeSize] !== null && sizes[activeSize] <= 0)) {
    const firstAvailable = sizeEntries.find(([, stock]) => stock === null || stock > 0)?.[0] ?? sizeEntries[0]?.[0];
    activeSize = firstAvailable;
  }

  productSizes.innerHTML = sizeEntries
    .map(([size, stock]) => {
      const isActive = size === activeSize;
      return `<button type="button" data-size="${size}" ${stock !== null && stock <= 0 ? 'disabled' : ''} class="${isActive ? 'active' : ''}" aria-pressed="${isActive}">${size}</button>`;
    })
    .join('');

  productSizes.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeSize = btn.getAttribute('data-size');
      renderSizeOptions(product);
      updateQtyControls(sizes[activeSize]);
    });
  });

  updateQtyControls(sizes[activeSize]);
}

function openProductModal(productId) {
  const product = collectedProducts[productId] || productCatalog[productId];
  if (!product) return;

  activeProductId = productId;
  activeSize = null;
  activeImageIndex = 0;
  activeColorIndex = 0;

  if (productModalCard) {
    productModalCard.style.setProperty('--product-accent', product.theme?.accent || '#363c32');
    productModalCard.style.setProperty('--product-accent-soft', product.theme?.soft || '#eeeee8');
    productModalCard.style.setProperty('--product-bg', product.theme?.bg || '#fbfaf7');
  }
  if (productThemeTag) {
    productThemeTag.textContent = product.style ? `Style #${product.style}` : product.theme?.label || 'Dynamic product theme';
  }

  const isCollected = Boolean(collectedProducts[productId]);
  productTitle.textContent = product.name;
  productBrand.hidden = !isCollected;
  productBrand.textContent = isCollected ? `Brand: ${product.brand}` : '';
  productPrice.textContent = isCollected
    ? (product.price === 'Price to be confirmed' ? product.price : `${product.price} (indicative)`)
    : formatInr(product.price);
  productDescription.textContent = product.description;
  productMeta.innerHTML = (isCollected ? product.details : product.meta).map((line) => `<li>${line}</li>`).join('');
  productNote.textContent = product.note || '';
  productNote.hidden = !product.note;
  productPreviewNotice.hidden = !isCollected;
  productAddWishlist.disabled = isCollected;
  productSaveLater.disabled = isCollected;
  qtyInput.value = '1';

  if (!isCollected) {
    trackRecentView({ name: product.name, price: product.price });
    renderCustomerPanel();
  }

  renderProductColors(product);
  renderProductImages(product);
  renderSizeOptions(product);

  productDetailModal.classList.remove('hidden');
  productDetailModal.setAttribute('aria-hidden', 'false');
}

function closeProductModal() {
  productDetailModal.classList.add('hidden');
  productDetailModal.setAttribute('aria-hidden', 'true');
}

rollPrev?.addEventListener('click', () => {
  rollTrack.scrollBy({ left: -320, behavior: 'smooth' });
});

rollNext?.addEventListener('click', () => {
  rollTrack.scrollBy({ left: 320, behavior: 'smooth' });
});

rollItems.forEach((item, index) => {
  item.addEventListener('click', () => openViewer(index));
});

[...document.querySelectorAll('.product-card')].forEach((card) => {
  const id = card.getAttribute('data-product-id');
  const image = card.querySelector('img');
  const title = card.querySelector('h3');
  image?.addEventListener('click', () => openProductModal(id));
  title?.addEventListener('click', () => openProductModal(id));
  card.querySelector('.view-collected')?.addEventListener('click', () => openProductModal(id));
});

viewerClose?.addEventListener('click', closeViewer);
viewerPrev?.addEventListener('click', () => renderViewer(viewerIndex - 1));
viewerNext?.addEventListener('click', () => renderViewer(viewerIndex + 1));
viewerProduct?.addEventListener('click', () => {
  const productId = rollItems[viewerIndex].dataset.productId;
  closeViewer();
  openProductModal(productId);
});

viewerModal?.addEventListener('click', (e) => {
  if (e.target === viewerModal) closeViewer();
});

window.addEventListener('keydown', (e) => {
  if (!viewerModal || viewerModal.classList.contains('hidden')) return;
  if (e.key === 'Escape') closeViewer();
  if (e.key === 'ArrowLeft') renderViewer(viewerIndex - 1);
  if (e.key === 'ArrowRight') renderViewer(viewerIndex + 1);
});

qtyMinus?.addEventListener('click', () => {
  qtyInput.value = String(Math.max(1, (Number(qtyInput.value) || 1) - 1));
});

qtyPlus?.addEventListener('click', () => {
  const max = Number(qtyInput.max || '1');
  qtyInput.value = String(Math.min(max, (Number(qtyInput.value) || 1) + 1));
});

qtyInput?.addEventListener('input', () => {
  const max = Number(qtyInput.max || '1');
  const val = Number(qtyInput.value || '1');
  qtyInput.value = String(Math.min(max, Math.max(1, Number.isFinite(val) ? val : 1)));
});

productAddToCart?.addEventListener('click', () => {
  if (!activeProductId) return;
  const product = productCatalog[activeProductId];
  if (!product || !activeSize) return;
  const stock = product.sizes[activeSize] ?? 0;
  const qty = Math.min(stock, Math.max(1, Number(qtyInput.value) || 1));
  if (qty <= 0) return;

  addToCart(`${product.name} • ${activeSize}`, product.price);
  product.sizes[activeSize] = Math.max(0, stock - qty);
  renderSizeOptions(product);
  renderAdminCatalog();
});

productAddWishlist?.addEventListener('click', () => {
  if (!activeProductId) return;
  const product = productCatalog[activeProductId];
  if (!product) return;
  addToWishlist(product.name, product.price);
});

productSaveLater?.addEventListener('click', () => {
  if (!activeProductId) return;
  const product = productCatalog[activeProductId];
  if (!product) return;
  addToSavedLater(product.name, product.price);
});

productModalClose?.addEventListener('click', closeProductModal);
productDetailModal?.addEventListener('click', (e) => {
  if (e.target === productDetailModal) closeProductModal();
});

window.addEventListener('keydown', (e) => {
  if (!productDetailModal || productDetailModal.classList.contains('hidden')) return;
  if (e.key === 'Escape') closeProductModal();
});

setSessionUi(null);

renderCustomerPanel();
renderAdminPanel();
setupAdminActions();
setupAddToCartButtons();
setupLaunchCountdown();
renderAdminAnalytics();
setupAdminTabs();
renderAdminCatalog();
