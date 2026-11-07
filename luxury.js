document.querySelectorAll('.fade-in').forEach((el, i) => {
  el.style.animationDelay = `${i * 70}ms`;
});

function mockAction(message) {
  alert(message);
}

document.querySelectorAll('[data-mock]').forEach((btn) => {
  btn.addEventListener('click', () => {
    mockAction(btn.getAttribute('data-mock'));
  });
});

const baseVariants = [
  {
    name: 'White',
    preview: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=450',
    images: [
      'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1300',
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1300',
      'https://images.pexels.com/photos/9558601/pexels-photo-9558601.jpeg?auto=compress&cs=tinysrgb&w=1300',
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1300',
      'https://images.pexels.com/photos/6311393/pexels-photo-6311393.jpeg?auto=compress&cs=tinysrgb&w=1300',
    ],
    sizes: { S: 10, M: 14, L: 11, XL: 4, XXL: 0 },
  },
  {
    name: 'Lilas',
    preview: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=450',
    images: [
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1300',
      'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1300',
      'https://images.pexels.com/photos/9558601/pexels-photo-9558601.jpeg?auto=compress&cs=tinysrgb&w=1300',
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1300',
    ],
    sizes: { S: 6, M: 9, L: 7, XL: 3, XXL: 1 },
  },
  {
    name: 'Anemone',
    preview: 'https://images.pexels.com/photos/9558601/pexels-photo-9558601.jpeg?auto=compress&cs=tinysrgb&w=450',
    images: [
      'https://images.pexels.com/photos/9558601/pexels-photo-9558601.jpeg?auto=compress&cs=tinysrgb&w=1300',
      'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1300',
      'https://images.pexels.com/photos/6311393/pexels-photo-6311393.jpeg?auto=compress&cs=tinysrgb&w=1300',
    ],
    sizes: { S: 8, M: 8, L: 5, XL: 2, XXL: 0 },
  },
  {
    name: 'Black',
    preview: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=450',
    images: [
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1300',
      'https://images.pexels.com/photos/6311393/pexels-photo-6311393.jpeg?auto=compress&cs=tinysrgb&w=1300',
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1300',
    ],
    sizes: { S: 5, M: 6, L: 4, XL: 1, XXL: 0 },
  },
  {
    name: 'Cashmere Rose',
    preview: 'https://images.pexels.com/photos/6311393/pexels-photo-6311393.jpeg?auto=compress&cs=tinysrgb&w=450',
    images: [
      'https://images.pexels.com/photos/6311393/pexels-photo-6311393.jpeg?auto=compress&cs=tinysrgb&w=1300',
      'https://images.pexels.com/photos/9558601/pexels-photo-9558601.jpeg?auto=compress&cs=tinysrgb&w=1300',
      'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1300',
    ],
    sizes: { S: 7, M: 10, L: 7, XL: 3, XXL: 0 },
  },
];

function cloneVariants() {
  return JSON.parse(JSON.stringify(baseVariants));
}

const productCatalog = {
  'camisole-stretch': {
    name: 'Micro Modal Elastane Stretch Camisole with Adjustable Straps and StayFresh Treatment',
    price: '₹459.00',
    variants: cloneVariants(),
  },
  'performance-knit-tee': {
    name: 'Performance Knit Tee',
    price: '₹1,099.00',
    variants: cloneVariants(),
  },
  'flex-studio-pant': {
    name: 'Flex Studio Pant',
    price: '₹1,599.00',
    variants: cloneVariants(),
  },
  'contour-support-bra': {
    name: 'Contour Support Bra',
    price: '₹1,349.00',
    variants: cloneVariants(),
  },
  'ultrasoft-trunk-set': {
    name: 'Ultra Soft Trunk Set',
    price: '₹1,499.00',
    variants: cloneVariants(),
  },
  'motion-layer-tee': {
    name: 'Motion Layer Tee',
    price: '₹999.00',
    variants: cloneVariants(),
  },
  'studio-jogger': {
    name: 'Studio Jogger',
    price: '₹1,699.00',
    variants: cloneVariants(),
  },
  'everyday-support-bra': {
    name: 'Everyday Support Bra',
    price: '₹1,299.00',
    variants: cloneVariants(),
  },
  'core-lounge-shorts': {
    name: 'Core Lounge Shorts',
    price: '₹1,099.00',
    variants: cloneVariants(),
  },
};

const requestedProductKey = new URLSearchParams(window.location.search).get('product') || 'camisole-stretch';
const activeProductKey = productCatalog[requestedProductKey] ? requestedProductKey : 'camisole-stretch';
const productData = productCatalog[activeProductKey];

const pdpMainImage = document.getElementById('pdpMainImage');
const pdpThumbs = document.getElementById('pdpThumbs');
const colorCards = document.getElementById('colorCards');
const selectedColorName = document.getElementById('selectedColorName');
const selectedInventory = document.getElementById('selectedInventory');
const sizeGrid = document.getElementById('sizeGrid');
const qtyInput = document.getElementById('qtyInput');
const qtyMinus = document.getElementById('qtyMinus');
const qtyPlus = document.getElementById('qtyPlus');
const addToBagBtn = document.getElementById('addToBagBtn');
const pincodeInput = document.getElementById('pincodeInput');
const checkPincode = document.getElementById('checkPincode');
const deliveryStatus = document.getElementById('deliveryStatus');
const pdpTitle = document.getElementById('pdpTitle');
const pdpPrice = document.getElementById('pdpPrice');

let activeVariantIndex = 0;
let activeImageIndex = 0;
let activeSize = 'M';

function getVariant() {
  return productData.variants[activeVariantIndex];
}

function inventorySummary(variant) {
  return Object.entries(variant.sizes)
    .filter(([, stock]) => stock > 0)
    .map(([size, stock]) => `${size} (${stock})`)
    .join(', ');
}

function updateQtyBound() {
  const variant = getVariant();
  const stock = variant.sizes[activeSize] ?? 0;
  const nextVal = Math.max(1, Math.min(Number(qtyInput.value || 1), Math.max(1, stock)));
  qtyInput.value = String(nextVal);
  qtyInput.max = String(Math.max(1, stock));
  addToBagBtn.disabled = stock <= 0;
  addToBagBtn.textContent = stock <= 0 ? 'OUT OF STOCK' : 'ADD TO BAG';
}

function renderThumbs() {
  if (!pdpThumbs || !pdpMainImage) return;
  const variant = getVariant();
  pdpMainImage.src = variant.images[activeImageIndex] || variant.images[0];
  pdpMainImage.alt = `${productData.name} - ${variant.name}`;

  pdpThumbs.innerHTML = variant.images
    .map(
      (img, index) =>
        `<button type="button" class="${index === activeImageIndex ? 'active' : ''}" data-thumb-index="${index}"><img src="${img}" alt="${variant.name} view ${index + 1}" /></button>`,
    )
    .join('');

  pdpThumbs.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeImageIndex = Number(btn.getAttribute('data-thumb-index'));
      renderThumbs();
    });
  });
}

function renderColorCards() {
  if (!colorCards || !selectedColorName || !selectedInventory) return;
  colorCards.innerHTML = productData.variants
    .map(
      (variant, index) =>
        `<button type="button" class="color-card ${index === activeVariantIndex ? 'active' : ''}" data-variant-index="${index}"><img src="${variant.preview}" alt="${variant.name}" /><p>${variant.name}</p></button>`,
    )
    .join('');

  const variant = getVariant();
  selectedColorName.textContent = variant.name;
  selectedInventory.textContent = inventorySummary(variant) || 'Out of stock';

  colorCards.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeVariantIndex = Number(btn.getAttribute('data-variant-index'));
      activeImageIndex = 0;
      const currentVariant = getVariant();
      const firstAvailable = Object.entries(currentVariant.sizes).find(([, stock]) => stock > 0)?.[0];
      activeSize = firstAvailable || 'S';
      renderColorCards();
      renderThumbs();
      renderSizes();
      updateQtyBound();
    });
  });
}

function renderSizes() {
  if (!sizeGrid) return;
  const variant = getVariant();
  sizeGrid.innerHTML = Object.entries(variant.sizes)
    .map(([size, stock]) => {
      const isActive = size === activeSize;
      return `<button type="button" data-size="${size}" ${stock <= 0 ? 'disabled' : ''} class="${isActive ? 'active' : ''}">${size}</button>`;
    })
    .join('');

  sizeGrid.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeSize = btn.getAttribute('data-size') || 'S';
      renderSizes();
      updateQtyBound();
    });
  });
}

function setupQtyControls() {
  qtyMinus?.addEventListener('click', () => {
    qtyInput.value = String(Math.max(1, (Number(qtyInput.value) || 1) - 1));
  });

  qtyPlus?.addEventListener('click', () => {
    const max = Number(qtyInput.max || '1');
    qtyInput.value = String(Math.min(max, (Number(qtyInput.value) || 1) + 1));
  });

  qtyInput?.addEventListener('input', () => {
    updateQtyBound();
  });
}

function setupDeliveryCheck() {
  checkPincode?.addEventListener('click', () => {
    const pin = (pincodeInput?.value || '').trim();
    if (!/^\d{6}$/.test(pin)) {
      deliveryStatus.textContent = 'Please enter a valid 6-digit pincode.';
      return;
    }
    const eta = Number(pin.slice(-1)) % 2 === 0 ? 'Delivery by Tue, 11 Nov' : 'Delivery by Wed, 12 Nov';
    deliveryStatus.textContent = `${eta} • Express delivery available for this location.`;
  });
}

function initPdp() {
  if (!pdpMainImage || !colorCards || !sizeGrid) return;
  pdpTitle.textContent = productData.name;
  pdpPrice.textContent = productData.price;
  document.title = `SimpliPhi Fashion — ${productData.name}`;
  const firstVariant = getVariant();
  const firstAvailable = Object.entries(firstVariant.sizes).find(([, stock]) => stock > 0)?.[0];
  activeSize = firstAvailable || 'S';

  renderColorCards();
  renderThumbs();
  renderSizes();
  updateQtyBound();
  setupQtyControls();
  setupDeliveryCheck();
}

initPdp();
