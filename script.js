/* ============================================
   RICHIT COMPUTER – JavaScript
   ============================================ */

// =============================================
// PRODUCT DATA
// =============================================
const PRODUCTS = [
  // CCTV
  {
    id: 1, category: 'cctv',
    name: 'ProShield 4K Dome Camera', catLabel: 'CCTV Camera',
    price: 3499, oldPrice: 4999, discount: '30% OFF',
    rating: 4.8, reviews: 124, badge: 'hot',
    svgColor: '#6C63FF', svgBg: 'rgba(108,99,255,0.08)',
    svgPath: `<ellipse cx="60" cy="55" rx="30" ry="30" fill="rgba(108,99,255,0.2)" stroke="#6C63FF" stroke-width="2"/>
              <ellipse cx="60" cy="55" rx="16" ry="16" fill="#6C63FF" opacity="0.5"/>
              <circle cx="60" cy="55" r="7" fill="#6C63FF"/>
              <path d="M90 55h20l12-15v30l-12-15" fill="none" stroke="#6C63FF" stroke-width="3" stroke-linejoin="round"/>
              <path d="M30 35v-10h-10v10" stroke="#3ECFCF" stroke-width="2" stroke-linecap="round" fill="none"/>
              <text x="60" y="110" text-anchor="middle" fill="#6C63FF" font-size="10" font-weight="600" font-family="Inter,sans-serif">4K • IP67</text>`
  },
  {
    id: 2, category: 'cctv',
    name: '8-Channel DVR Security Kit', catLabel: 'CCTV System',
    price: 12999, oldPrice: 18000, discount: '28% OFF',
    rating: 4.9, reviews: 87, badge: 'best',
    svgColor: '#3ECFCF', svgBg: 'rgba(62,207,207,0.08)',
    svgPath: `<rect x="20" y="40" width="80" height="55" rx="6" fill="rgba(62,207,207,0.15)" stroke="#3ECFCF" stroke-width="2"/>
              <rect x="28" y="48" width="30" height="20" rx="2" fill="rgba(62,207,207,0.3)"/>
              <rect x="62" y="48" width="30" height="20" rx="2" fill="rgba(62,207,207,0.3)"/>
              <rect x="28" y="72" width="30" height="15" rx="2" fill="rgba(62,207,207,0.2)"/>
              <rect x="62" y="72" width="30" height="15" rx="2" fill="rgba(62,207,207,0.2)"/>
              <circle cx="50" cy="100" r="4" fill="#3ECFCF" opacity="0.7"/>
              <text x="60" y="115" text-anchor="middle" fill="#3ECFCF" font-size="10" font-weight="600" font-family="Inter,sans-serif">8CH • 2TB HDD</text>`
  },
  {
    id: 3, category: 'cctv',
    name: 'Bullet Camera 2MP HD', catLabel: 'CCTV Camera',
    price: 1899, oldPrice: 2500, discount: '24% OFF',
    rating: 4.5, reviews: 203, badge: 'new',
    svgColor: '#FF6B9D', svgBg: 'rgba(255,107,157,0.08)',
    svgPath: `<rect x="25" y="45" width="70" height="30" rx="15" fill="rgba(255,107,157,0.2)" stroke="#FF6B9D" stroke-width="2"/>
              <circle cx="82" cy="60" r="12" fill="rgba(255,107,157,0.3)" stroke="#FF6B9D" stroke-width="1.5"/>
              <circle cx="82" cy="60" r="6" fill="#FF6B9D" opacity="0.6"/>
              <circle cx="82" cy="60" r="2.5" fill="#FF6B9D"/>
              <path d="M30 52v-15h-10v15" stroke="#FF6B9D" stroke-width="2" stroke-linecap="round" fill="none"/>
              <text x="60" y="100" text-anchor="middle" fill="#FF6B9D" font-size="10" font-weight="600" font-family="Inter,sans-serif">2MP • IR 30m</text>`
  },
  // KEYBOARDS
  {
    id: 4, category: 'keyboard',
    name: 'Mech Pro RGB Keyboard', catLabel: 'Keyboard',
    price: 2799, oldPrice: 3999, discount: '30% OFF',
    rating: 4.7, reviews: 356, badge: 'hot',
    svgColor: '#3ECFCF', svgBg: 'rgba(62,207,207,0.08)',
    svgPath: `<rect x="10" y="38" width="100" height="50" rx="6" fill="rgba(62,207,207,0.12)" stroke="#3ECFCF" stroke-width="2"/>
              <rect x="18" y="46" width="12" height="9" rx="2" fill="#3ECFCF" opacity="0.7"/>
              <rect x="33" y="46" width="12" height="9" rx="2" fill="#6C63FF" opacity="0.7"/>
              <rect x="48" y="46" width="12" height="9" rx="2" fill="#FF6B9D" opacity="0.7"/>
              <rect x="63" y="46" width="12" height="9" rx="2" fill="#F7C948" opacity="0.7"/>
              <rect x="78" y="46" width="12" height="9" rx="2" fill="#3ECFCF" opacity="0.7"/>
              <rect x="21" y="59" width="10" height="9" rx="2" fill="#6C63FF" opacity="0.6"/>
              <rect x="34" y="59" width="10" height="9" rx="2" fill="#3ECFCF" opacity="0.6"/>
              <rect x="47" y="59" width="10" height="9" rx="2" fill="#FF6B9D" opacity="0.6"/>
              <rect x="60" y="59" width="10" height="9" rx="2" fill="#F7C948" opacity="0.6"/>
              <rect x="73" y="59" width="10" height="9" rx="2" fill="#6C63FF" opacity="0.6"/>
              <rect x="32" y="72" width="56" height="9" rx="4" fill="#3ECFCF" opacity="0.5"/>
              <text x="60" y="105" text-anchor="middle" fill="#3ECFCF" font-size="10" font-weight="600" font-family="Inter,sans-serif">Mechanical • RGB</text>`
  },
  {
    id: 5, category: 'keyboard',
    name: 'Slim Wireless Keyboard', catLabel: 'Keyboard',
    price: 1299, oldPrice: 1800, discount: '28% OFF',
    rating: 4.4, reviews: 189, badge: 'sale',
    svgColor: '#F7C948', svgBg: 'rgba(247,201,72,0.08)',
    svgPath: `<rect x="8" y="42" width="104" height="40" rx="8" fill="rgba(247,201,72,0.12)" stroke="#F7C948" stroke-width="2"/>
              <rect x="16" y="50" width="8" height="7" rx="1.5" fill="#F7C948" opacity="0.6"/>
              <rect x="27" y="50" width="8" height="7" rx="1.5" fill="#F7C948" opacity="0.6"/>
              <rect x="38" y="50" width="8" height="7" rx="1.5" fill="#F7C948" opacity="0.6"/>
              <rect x="49" y="50" width="8" height="7" rx="1.5" fill="#F7C948" opacity="0.6"/>
              <rect x="60" y="50" width="8" height="7" rx="1.5" fill="#F7C948" opacity="0.6"/>
              <rect x="71" y="50" width="8" height="7" rx="1.5" fill="#F7C948" opacity="0.6"/>
              <rect x="82" y="50" width="8" height="7" rx="1.5" fill="#F7C948" opacity="0.6"/>
              <rect x="93" y="50" width="8" height="7" rx="1.5" fill="#F7C948" opacity="0.6"/>
              <rect x="18" y="61" width="8" height="7" rx="1.5" fill="#F7C948" opacity="0.5"/>
              <rect x="29" y="61" width="8" height="7" rx="1.5" fill="#F7C948" opacity="0.5"/>
              <rect x="40" y="61" width="8" height="7" rx="1.5" fill="#F7C948" opacity="0.5"/>
              <rect x="51" y="61" width="8" height="7" rx="1.5" fill="#F7C948" opacity="0.5"/>
              <rect x="62" y="61" width="8" height="7" rx="1.5" fill="#F7C948" opacity="0.5"/>
              <rect x="73" y="61" width="8" height="7" rx="1.5" fill="#F7C948" opacity="0.5"/>
              <rect x="84" y="61" width="8" height="7" rx="1.5" fill="#F7C948" opacity="0.5"/>
              <rect x="30" y="72" width="60" height="7" rx="3" fill="#F7C948" opacity="0.4"/>
              <text x="60" y="105" text-anchor="middle" fill="#F7C948" font-size="10" font-weight="600" font-family="Inter,sans-serif">Wireless • 2.4GHz</text>`
  },
  // MICE
  {
    id: 6, category: 'mouse',
    name: 'HyperGlide Gaming Mouse', catLabel: 'Mouse',
    price: 1599, oldPrice: 2200, discount: '27% OFF',
    rating: 4.8, reviews: 412, badge: 'hot',
    svgColor: '#FF6B9D', svgBg: 'rgba(255,107,157,0.08)',
    svgPath: `<path d="M35 35 Q60 28 85 35 L90 80 Q60 95 30 80 Z" fill="rgba(255,107,157,0.15)" stroke="#FF6B9D" stroke-width="2"/>
              <line x1="60" y1="28" x2="60" y2="65" stroke="#FF6B9D" stroke-width="2" opacity="0.7"/>
              <ellipse cx="60" cy="48" rx="10" ry="6" fill="rgba(255,107,157,0.4)"/>
              <circle cx="60" cy="80" r="6" fill="#FF6B9D" opacity="0.6"/>
              <circle cx="60" cy="80" r="2.5" fill="#FF6B9D"/>
              <rect x="30" y="35" width="8" height="20" rx="4" fill="#FF6B9D" opacity="0.3"/>
              <rect x="82" y="35" width="8" height="20" rx="4" fill="#FF6B9D" opacity="0.3"/>
              <text x="60" y="108" text-anchor="middle" fill="#FF6B9D" font-size="10" font-weight="600" font-family="Inter,sans-serif">16000 DPI • RGB</text>`
  },
  {
    id: 7, category: 'mouse',
    name: 'Ergonomic Wireless Mouse', catLabel: 'Mouse',
    price: 899, oldPrice: 1299, discount: '31% OFF',
    rating: 4.3, reviews: 278, badge: 'new',
    svgColor: '#6C63FF', svgBg: 'rgba(108,99,255,0.08)',
    svgPath: `<path d="M30 40 Q60 30 85 42 L88 82 Q60 98 32 82 Z" fill="rgba(108,99,255,0.15)" stroke="#6C63FF" stroke-width="2"/>
              <line x1="58" y1="30" x2="58" y2="65" stroke="#6C63FF" stroke-width="1.5" opacity="0.7"/>
              <ellipse cx="58" cy="50" rx="9" ry="5" fill="rgba(108,99,255,0.4)"/>
              <circle cx="58" cy="78" r="5" fill="#6C63FF" opacity="0.6"/>
              <text x="60" y="108" text-anchor="middle" fill="#6C63FF" font-size="10" font-weight="600" font-family="Inter,sans-serif">Wireless • 2.4G</text>`
  },
  // COMPUTERS
  {
    id: 8, category: 'computer',
    name: 'PowerDesk Core i7 Tower', catLabel: 'Desktop PC',
    price: 42999, oldPrice: 55000, discount: '22% OFF',
    rating: 4.9, reviews: 64, badge: 'best',
    svgColor: '#F7C948', svgBg: 'rgba(247,201,72,0.08)',
    svgPath: `<rect x="20" y="20" width="45" height="80" rx="6" fill="rgba(247,201,72,0.12)" stroke="#F7C948" stroke-width="2"/>
              <rect x="28" y="30" width="29" height="22" rx="2" fill="rgba(247,201,72,0.3)"/>
              <rect x="28" y="56" width="12" height="12" rx="2" fill="#F7C948" opacity="0.4"/>
              <rect x="43" y="56" width="14" height="5" rx="1" fill="#F7C948" opacity="0.3"/>
              <rect x="43" y="64" width="14" height="5" rx="1" fill="#F7C948" opacity="0.3"/>
              <circle cx="35" cy="78" r="4" fill="#F7C948" opacity="0.5"/>
              <circle cx="48" cy="78" r="4" fill="#3ECFCF" opacity="0.5"/>
              <rect x="73" y="30" width="30" height="55" rx="4" fill="rgba(247,201,72,0.08)" stroke="#F7C948" stroke-width="1.5"/>
              <rect x="77" y="36" width="22" height="14" rx="1" fill="rgba(247,201,72,0.2)"/>
              <path d="M77 56h6M87 56h6" stroke="#F7C948" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M77 62h6M87 62h6" stroke="#3ECFCF" stroke-width="1.5" stroke-linecap="round"/>
              <text x="60" y="114" text-anchor="middle" fill="#F7C948" font-size="9" font-weight="600" font-family="Inter,sans-serif">i7 • 16GB • 1TB SSD</text>`
  },
  {
    id: 9, category: 'computer',
    name: 'All-in-One 24" Desktop', catLabel: 'All-in-One',
    price: 38500, oldPrice: 48000, discount: '20% OFF',
    rating: 4.6, reviews: 43, badge: 'new',
    svgColor: '#3ECFCF', svgBg: 'rgba(62,207,207,0.08)',
    svgPath: `<rect x="10" y="20" width="100" height="65" rx="5" fill="rgba(62,207,207,0.12)" stroke="#3ECFCF" stroke-width="2"/>
              <rect x="16" y="26" width="88" height="52" rx="3" fill="#0a0a12"/>
              <path d="M22 36h10M36 36h10" stroke="#3ECFCF" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M22 44h20M46 44h10" stroke="#6C63FF" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M22 52h15M41 52h8" stroke="#F7C948" stroke-width="1.5" stroke-linecap="round"/>
              <rect x="65" y="30" width="32" height="40" rx="2" fill="rgba(62,207,207,0.1)"/>
              <rect x="42" y="85" width="36" height="5" rx="2" fill="#3ECFCF" opacity="0.4"/>
              <rect x="46" y="90" width="28" height="4" rx="2" fill="#3ECFCF" opacity="0.3"/>
              <text x="60" y="106" text-anchor="middle" fill="#3ECFCF" font-size="9" font-weight="600" font-family="Inter,sans-serif">24" FHD • i5 • 8GB RAM</text>`
  },
  // SPEAKERS
  {
    id: 10, category: 'speaker',
    name: 'BassMax 2.1 Speaker System', catLabel: 'Speaker',
    price: 3999, oldPrice: 5500, discount: '27% OFF',
    rating: 4.7, reviews: 192, badge: 'hot',
    svgColor: '#3ECFCF', svgBg: 'rgba(62,207,207,0.08)',
    svgPath: `<rect x="12" y="20" width="32" height="75" rx="6" fill="rgba(62,207,207,0.12)" stroke="#3ECFCF" stroke-width="2"/>
              <circle cx="28" cy="48" rx="12" ry="12" r="12" fill="none" stroke="#3ECFCF" stroke-width="2"/>
              <circle cx="28" cy="48" r="5" fill="#3ECFCF" opacity="0.5"/>
              <circle cx="28" cy="75" r="5" fill="none" stroke="#3ECFCF" stroke-width="1.5"/>
              <circle cx="28" cy="75" r="2" fill="#3ECFCF"/>
              <rect x="52" y="38" width="28" height="55" rx="8" fill="rgba(62,207,207,0.08)" stroke="#3ECFCF" stroke-width="1.5"/>
              <circle cx="66" cy="60" r="12" fill="none" stroke="#3ECFCF" stroke-width="1.5" opacity="0.6"/>
              <circle cx="66" cy="60" r="5" fill="#3ECFCF" opacity="0.4"/>
              <path d="M90 50c6 4 6 20 0 24" stroke="#6C63FF" stroke-width="2.5" stroke-linecap="round" fill="none"/>
              <path d="M96 44c10 8 10 28 0 36" stroke="#6C63FF" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.5"/>
              <text x="60" y="108" text-anchor="middle" fill="#3ECFCF" font-size="10" font-weight="600" font-family="Inter,sans-serif">2.1 • 40W RMS</text>`
  },
  {
    id: 11, category: 'speaker',
    name: 'SoundBar Pro 5.1 Home', catLabel: 'Speaker',
    price: 7999, oldPrice: 11000, discount: '27% OFF',
    rating: 4.8, reviews: 88, badge: 'best',
    svgColor: '#6C63FF', svgBg: 'rgba(108,99,255,0.08)',
    svgPath: `<rect x="10" y="50" width="100" height="25" rx="12" fill="rgba(108,99,255,0.15)" stroke="#6C63FF" stroke-width="2"/>
              <circle cx="24" cy="62" r="7" fill="rgba(108,99,255,0.4)"/>
              <circle cx="24" cy="62" r="3" fill="#6C63FF"/>
              <circle cx="42" cy="62" r="5" fill="rgba(108,99,255,0.3)"/>
              <circle cx="60" cy="62" r="8" fill="rgba(108,99,255,0.5)"/>
              <circle cx="60" cy="62" r="3.5" fill="#6C63FF"/>
              <circle cx="78" cy="62" r="5" fill="rgba(108,99,255,0.3)"/>
              <circle cx="96" cy="62" r="7" fill="rgba(108,99,255,0.4)"/>
              <circle cx="96" cy="62" r="3" fill="#6C63FF"/>
              <rect x="25" y="30" width="30" height="20" rx="6" fill="rgba(108,99,255,0.1)" stroke="#6C63FF" stroke-width="1.5"/>
              <circle cx="40" cy="40" r="7" fill="rgba(108,99,255,0.3)"/>
              <circle cx="40" cy="40" r="3" fill="#6C63FF" opacity="0.7"/>
              <text x="60" y="90" text-anchor="middle" fill="#6C63FF" font-size="10" font-weight="600" font-family="Inter,sans-serif">5.1 • 120W • HDMI ARC</text>`
  },
  // ACCESSORIES
  {
    id: 12, category: 'accessories',
    name: 'USB 3.0 7-Port Hub', catLabel: 'Accessory',
    price: 699, oldPrice: 999, discount: '30% OFF',
    rating: 4.3, reviews: 567, badge: 'sale',
    svgColor: '#FF6B9D', svgBg: 'rgba(255,107,157,0.08)',
    svgPath: `<rect x="15" y="48" width="90" height="22" rx="11" fill="rgba(255,107,157,0.12)" stroke="#FF6B9D" stroke-width="2"/>
              <rect x="20" y="52" width="12" height="14" rx="2" fill="#FF6B9D" opacity="0.5"/>
              <rect x="35" y="52" width="12" height="14" rx="2" fill="#FF6B9D" opacity="0.5"/>
              <rect x="50" y="52" width="12" height="14" rx="2" fill="#FF6B9D" opacity="0.5"/>
              <rect x="65" y="52" width="12" height="14" rx="2" fill="#FF6B9D" opacity="0.5"/>
              <rect x="80" y="52" width="12" height="14" rx="2" fill="#FF6B9D" opacity="0.3"/>
              <circle cx="21" cy="72" r="3" fill="#28c840" opacity="0.8"/>
              <circle cx="36" cy="72" r="3" fill="#28c840" opacity="0.8"/>
              <circle cx="51" cy="72" r="3" fill="#28c840" opacity="0.8"/>
              <circle cx="66" cy="72" r="3" fill="#febc2e" opacity="0.8"/>
              <path d="M60 30 L60 48" stroke="#FF6B9D" stroke-width="2" stroke-linecap="round"/>
              <text x="60" y="95" text-anchor="middle" fill="#FF6B9D" font-size="10" font-weight="600" font-family="Inter,sans-serif">USB 3.0 • 5Gbps</text>`
  },
];

// =============================================
// STATE
// =============================================
let cart = [];
let wishlist = new Set();
let currentFilter = 'all';
let testimonialOffset = 0;

// =============================================
// RENDER PRODUCTS
// =============================================
function renderProducts(filter = 'all') {
  currentFilter = filter;
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => createProductCard(p)).join('');

  // Set filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById('filter-' + filter);
  if (activeBtn) activeBtn.classList.add('active');

  // Animate cards in
  const cards = grid.querySelectorAll('.product-card');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, i * 60);
  });
}

function createProductCard(p) {
  const inWishlist = wishlist.has(p.id);
  const badgeLabels = { hot: 'HOT', new: 'NEW', best: 'BEST', sale: 'SALE' };
  const badgeClass = 'badge-' + p.badge;
  const savings = p.oldPrice - p.price;

  return `
    <div class="product-card" id="product-${p.id}" data-category="${p.category}">
      <div class="product-badge ${badgeClass}">${badgeLabels[p.badge]}</div>
      <div class="product-img-wrap" onclick="openProductDetail(${p.id})" style="cursor:pointer;">
        <div class="product-img-bg" style="background: ${p.svgBg};"></div>
        <svg class="product-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          ${p.svgPath}
        </svg>
        <div class="product-img-overlay">
          <span class="overlay-eye">👁 Quick View</span>
        </div>
      </div>
      <div class="product-info">
        <div class="product-cat">${p.catLabel}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span class="stars-small">${'★'.repeat(Math.floor(p.rating))}${p.rating % 1 >= 0.5 ? '★' : ''}</span>
          <span class="rating-count">${p.rating} (${p.reviews} reviews)</span>
        </div>
        <div class="product-price-row">
          <div>
            <div class="product-price">₹${p.price.toLocaleString('en-IN')}</div>
            <div class="product-price-old">₹${p.oldPrice.toLocaleString('en-IN')}</div>
          </div>
          <div class="product-discount">${p.discount}</div>
        </div>
        <!-- BUY NOW BUTTON (full width, prominent) -->
        <button class="btn-buy-now" id="buy-now-${p.id}" onclick="buyNow(${p.id})">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Buy Now via WhatsApp
        </button>
        <div class="product-actions">
          <button class="btn-add-cart" id="add-cart-${p.id}" onclick="addToCart(${p.id})">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            Add to Cart
          </button>
          <button class="btn-wishlist ${inWishlist ? 'liked' : ''}" id="wishlist-${p.id}" onclick="toggleWishlist(${p.id})" aria-label="Add to wishlist">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="${inWishlist ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

// =============================================
// BUY NOW – WhatsApp Integration
// =============================================
const OWNER_WHATSAPP = '917015510961'; // Country code + number

function buyNow(productId) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;

  const savings = p.oldPrice - p.price;
  const stars = '⭐'.repeat(Math.floor(p.rating));
  const specLine = p.svgPath.match(/font-family[^>]*>([^<]+)</);
  const specs = specLine ? specLine[1] : '';

  // Build a detailed, friendly WhatsApp message
  const message =
`🛒 *ORDER INQUIRY – Richit Computer*
━━━━━━━━━━━━━━━━━━━━
📦 *Product:* ${p.name}
🏷️ *Category:* ${p.catLabel}
${specs ? `⚙️ *Specs:* ${specs}\n` : ''}
💰 *Price:* ₹${p.price.toLocaleString('en-IN')}
🔖 *MRP:* ₹${p.oldPrice.toLocaleString('en-IN')}
✅ *You Save:* ₹${savings.toLocaleString('en-IN')} (${p.discount})
${stars} *Rating:* ${p.rating}/5 (${p.reviews} reviews)
━━━━━━━━━━━━━━━━━━━━
📍 *Shop:* Richit Computer
   Shop No. 02, Stadium Market, Safidon
📞 *Call:* 89300 16011 / 70155 10961
━━━━━━━━━━━━━━━━━━━━
Hello Richit bhai! 👋
I am interested in buying the *${p.name}* for ₹${p.price.toLocaleString('en-IN')}.
Please confirm availability and delivery details. 🙏`;

  const encodedMsg = encodeURIComponent(message);
  const waUrl = `https://wa.me/${OWNER_WHATSAPP}?text=${encodedMsg}`;

  // Animate the button briefly before opening
  const btn = document.getElementById(`buy-now-${productId}`);
  if (btn) {
    btn.classList.add('btn-buy-now--sending');
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="animation:spin 0.6s linear infinite"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-5h2v2h-2zm0-8h2v6h-2z"/></svg> Opening WhatsApp...`;
    setTimeout(() => {
      btn.classList.remove('btn-buy-now--sending');
      btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> Buy Now via WhatsApp`;
    }, 1500);
  }

  // Open WhatsApp in new tab
  window.open(waUrl, '_blank');
  showToast('🟢 Opening WhatsApp with order details!', 3000);
}

// =============================================
// PRODUCT QUICK-VIEW (click image to preview)
// =============================================
function openProductDetail(productId) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;
  const savings = p.oldPrice - p.price;

  // Create or update modal
  let modal = document.getElementById('product-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'product-modal';
    modal.className = 'product-modal-overlay';
    modal.onclick = (e) => { if (e.target === modal) closeProductModal(); };
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="product-modal-box">
      <button class="product-modal-close" onclick="closeProductModal()">✕</button>
      <div class="product-modal-grid">
        <div class="product-modal-img">
          <div style="background:${p.svgBg}; width:100%; height:100%; display:flex; align-items:center; justify-content:center; border-radius:16px;">
            <svg width="200" height="200" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              ${p.svgPath}
            </svg>
          </div>
        </div>
        <div class="product-modal-info">
          <div class="product-cat" style="margin-bottom:8px;">${p.catLabel}</div>
          <h2 style="font-family:'Outfit',sans-serif;font-size:1.5rem;font-weight:800;margin-bottom:12px;">${p.name}</h2>
          <div class="product-rating" style="margin-bottom:16px;">
            <span class="stars-small">${'★'.repeat(Math.floor(p.rating))}${p.rating % 1 >= 0.5 ? '★' : ''}</span>
            <span class="rating-count">${p.rating}/5 &nbsp;•&nbsp; ${p.reviews} reviews</span>
          </div>
          <div style="margin-bottom:16px;">
            <div style="font-size:2rem;font-weight:800;background:var(--gradient-main);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">₹${p.price.toLocaleString('en-IN')}</div>
            <div style="font-size:0.9rem;color:var(--text-muted);text-decoration:line-through;">₹${p.oldPrice.toLocaleString('en-IN')}</div>
            <div style="font-size:0.8rem;color:#28c840;font-weight:700;margin-top:4px;">You save ₹${savings.toLocaleString('en-IN')} (${p.discount})</div>
          </div>
          <div style="background:rgba(108,99,255,0.08);border:1px solid rgba(108,99,255,0.15);border-radius:12px;padding:14px;margin-bottom:20px;font-size:0.875rem;color:var(--text-secondary);line-height:1.7;">
            ✅ Genuine product with manufacturer warranty<br/>
            🚚 Fast delivery available in Safidon & nearby areas<br/>
            🔧 Free installation for CCTV systems<br/>
            💬 Chat with owner for best deal
          </div>
          <button class="btn-buy-now" style="width:100%;margin-bottom:10px;" onclick="closeProductModal();buyNow(${p.id})">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Buy Now via WhatsApp
          </button>
          <button class="btn-add-cart" style="width:100%;" onclick="closeProductModal();addToCart(${p.id})">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (modal) { modal.classList.remove('open'); }
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeProductModal();
});

function filterProducts(category) {
  renderProducts(category);
  // Update category cards active state
  document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
  const activeCard = document.getElementById('cat-' + category);
  if (activeCard) activeCard.classList.add('active');
  // Scroll to products
  document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// =============================================
// CART
// =============================================
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty++;
    showToast(`${product.name} quantity updated!`);
  } else {
    cart.push({ ...product, qty: 1 });
    showToast(`${product.name} added to cart!`);
  }

  updateCartUI();
  openCart();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById('cart-badge');
  const cartItems = document.getElementById('cart-items');
  const cartEmpty = document.getElementById('cart-empty');
  const cartFooter = document.getElementById('cart-footer');
  const totalEl = document.getElementById('cart-total-amount');

  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  if (badge) badge.textContent = totalQty;
  if (totalEl) totalEl.textContent = '₹' + totalPrice.toLocaleString('en-IN');

  if (cart.length === 0) {
    if (cartEmpty) cartEmpty.style.display = 'flex';
    if (cartFooter) cartFooter.style.display = 'none';
  } else {
    if (cartEmpty) cartEmpty.style.display = 'none';
    if (cartFooter) cartFooter.style.display = 'block';
  }

  if (cartItems) {
    const itemsHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-icon">
          <svg width="40" height="40" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            ${item.svgPath}
          </svg>
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')} ${item.qty > 1 ? '× ' + item.qty : ''}</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>
        </button>
      </div>
    `).join('');

    const emptyHTML = cart.length === 0 ? `
      <div class="cart-empty" id="cart-empty">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#444" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        <p>Your cart is empty</p>
        <a href="#products" onclick="toggleCart()" class="btn btn-primary btn-sm">Shop Now</a>
      </div>
    ` : '';

    cartItems.innerHTML = emptyHTML + itemsHTML;
  }
}

function openCart() {
  document.getElementById('cart-sidebar').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function toggleCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
}

function handleCheckout() {
  if (cart.length === 0) return;
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  showToast(`🎉 Order placed! Total: ₹${total.toLocaleString('en-IN')}. We'll contact you soon!`, 4000);
  cart = [];
  updateCartUI();
  toggleCart();
}

// =============================================
// WISHLIST
// =============================================
function toggleWishlist(productId) {
  if (wishlist.has(productId)) {
    wishlist.delete(productId);
    showToast('Removed from wishlist');
  } else {
    wishlist.add(productId);
    showToast('Added to wishlist ♥');
  }
  // Re-render current filter to update button state
  renderProducts(currentFilter);
}

// =============================================
// TOAST
// =============================================
function showToast(message, duration = 2800) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.style.cssText = `
      position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%) translateY(20px);
      background: linear-gradient(135deg, #6C63FF, #3ECFCF); color: white;
      padding: 14px 24px; border-radius: 100px; font-size: 0.875rem; font-weight: 600;
      z-index: 9999; opacity: 0; transition: all 0.3s ease; pointer-events: none;
      max-width: 90vw; text-align: center; box-shadow: 0 8px 32px rgba(108,99,255,0.4);
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, duration);
}

// =============================================
// SEARCH
// =============================================
function initSearch() {
  const searchBtn = document.getElementById('search-btn');
  const searchClose = document.getElementById('search-close');
  const searchOverlay = document.getElementById('search-overlay');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  function openSearch() {
    searchOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput && searchInput.focus(), 100);
  }
  function closeSearch() {
    searchOverlay.classList.remove('open');
    document.body.style.overflow = '';
    if (searchInput) searchInput.value = '';
    if (searchResults) searchResults.innerHTML = '';
  }

  if (searchBtn) searchBtn.addEventListener('click', openSearch);
  if (searchClose) searchClose.addEventListener('click', closeSearch);
  if (searchOverlay) searchOverlay.addEventListener('click', (e) => { if (e.target === searchOverlay) closeSearch(); });

  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const q = this.value.trim().toLowerCase();
      if (!q) { searchResults.innerHTML = ''; return; }

      const results = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.catLabel.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      ).slice(0, 6);

      if (results.length === 0) {
        searchResults.innerHTML = '<div style="padding:20px;text-align:center;color:#606080;font-size:0.875rem;">No products found</div>';
        return;
      }

      searchResults.innerHTML = results.map(p => `
        <div class="search-result-item" onclick="selectSearchResult('${p.category}'); closeSearchFn();">
          <svg width="32" height="32" viewBox="0 0 120 120" fill="none">${p.svgPath}</svg>
          <div>
            <div style="font-size:0.875rem;font-weight:600;">${p.name}</div>
            <div style="font-size:0.75rem;color:#606080;">₹${p.price.toLocaleString('en-IN')} • ${p.catLabel}</div>
          </div>
        </div>
      `).join('');
    });
  }

  window.closeSearchFn = closeSearch;
  window.selectSearchResult = (cat) => { filterProducts(cat); closeSearch(); };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSearch();
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  });
}

// =============================================
// NAVBAR
// =============================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const cartBtn = document.getElementById('cart-btn');

  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
    // Scroll top button
    const scrollBtn = document.getElementById('scroll-top-btn');
    if (scrollBtn) scrollBtn.classList.toggle('visible', window.scrollY > 400);

    // Update active nav link
    const sections = ['home','categories','products','features','testimonials','contact'];
    sections.forEach(id => {
      const section = document.getElementById(id);
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) {
        link.classList.toggle('active', rect.top <= 80 && rect.bottom > 80);
      }
    });
  });

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  if (cartBtn) cartBtn.addEventListener('click', toggleCart);
}

// =============================================
// SCROLL TO TOP
// =============================================
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =============================================
// ANIMATE COUNTERS
// =============================================
function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString('en-IN');
  }, 16);
}

// =============================================
// SCROLL REVEAL
// =============================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  const targets = document.querySelectorAll(
    '.category-card, .feature-card, .testimonial-card, .info-card'
  );
  targets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${i % 4 * 0.1}s, transform 0.5s ease ${i % 4 * 0.1}s`;
    observer.observe(el);
  });

  document.addEventListener('scroll', () => {}, { passive: true });
  // Add CSS for revealed class
  const style = document.createElement('style');
  style.textContent = '.revealed { opacity: 1 !important; transform: none !important; }';
  document.head.appendChild(style);
}

// =============================================
// TESTIMONIALS NAVIGATION
// =============================================
let testimonialIndex = 0;
function moveTestimonial(dir) {
  const track = document.getElementById('testimonials-track');
  if (!track) return;
  const cards = track.querySelectorAll('.testimonial-card');
  const total = cards.length;
  const visibleCount = window.innerWidth > 1100 ? 4 : window.innerWidth > 768 ? 2 : 1;
  testimonialIndex = Math.max(0, Math.min(testimonialIndex + dir, total - visibleCount));
  cards.forEach((card, i) => {
    card.style.display = (i >= testimonialIndex && i < testimonialIndex + visibleCount) ? '' : 'none';
  });
}

// =============================================
// CONTACT FORM
// =============================================
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('form-submit-btn');
  const success = document.getElementById('form-success');
  if (btn) {
    btn.innerHTML = '<span>Sending...</span>';
    btn.disabled = true;
  }
  setTimeout(() => {
    if (btn) {
      btn.innerHTML = '<span>Send Message</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
      btn.disabled = false;
    }
    if (success) success.style.display = 'block';
    document.getElementById('contact-form').reset();
    setTimeout(() => { if (success) success.style.display = 'none'; }, 5000);
  }, 1500);
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');
  initNavbar();
  initSearch();
  initCounters();
  initScrollReveal();

  // Cart button from hero section
  const cartBtn = document.getElementById('cart-btn');
  if (cartBtn) cartBtn.addEventListener('click', toggleCart);
});
