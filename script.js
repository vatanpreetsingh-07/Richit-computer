/* ============================================
   RICHIT COMPUTER – JavaScript
   ============================================ */

// =============================================
// PRODUCT DATA
// =============================================
const DEFAULT_PRODUCTS = [
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
  }
];

// =============================================
// CATEGORIES DATA & STATE
// =============================================
const DEFAULT_CATEGORIES = [
  { id: 'cctv', name: 'CCTV Camera', desc: 'HD & 4K security dome & bullet cameras', svgBg: 'rgba(108,99,255,0.08)', svgPath: `<circle cx="32" cy="32" r="30" fill="url(#cctvGrad)" opacity="0.15"/><ellipse cx="26" cy="32" rx="10" ry="10" stroke="#6C63FF" stroke-width="2.5"/><ellipse cx="26" cy="32" rx="5" ry="5" fill="#6C63FF" opacity="0.5"/><circle cx="26" cy="32" r="2" fill="#6C63FF"/><path d="M36 32h10l5-6v12l-5-6" stroke="#6C63FF" stroke-width="2.5" stroke-linejoin="round"/><path d="M16 20v-4h-4v4" stroke="#3ECFCF" stroke-width="2" stroke-linecap="round"/><defs><linearGradient id="cctvGrad" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#6C63FF"/><stop offset="1" stop-color="#3ECFCF"/></linearGradient></defs>` },
  { id: 'keyboard', name: 'Keyboards', desc: 'Mechanical, membrane & gaming keyboards for every need', svgBg: 'rgba(62,207,207,0.08)', svgPath: `<rect x="6" y="18" width="52" height="28" rx="5" fill="url(#kbGrad)" opacity="0.15" stroke="#3ECFCF" stroke-width="2"/><rect x="12" y="24" width="6" height="5" rx="1.5" fill="#3ECFCF" opacity="0.7"/><rect x="21" y="24" width="6" height="5" rx="1.5" fill="#3ECFCF" opacity="0.7"/><rect x="30" y="24" width="6" height="5" rx="1.5" fill="#3ECFCF" opacity="0.7"/><rect x="39" y="24" width="6" height="5" rx="1.5" fill="#3ECFCF" opacity="0.7"/><rect x="48" y="24" width="6" height="5" rx="1.5" fill="#3ECFCF" opacity="0.7"/><rect x="14" y="32" width="5" height="5" rx="1.5" fill="#6C63FF" opacity="0.7"/><rect x="22" y="32" width="5" height="5" rx="1.5" fill="#6C63FF" opacity="0.7"/><rect x="30" y="32" width="5" height="5" rx="1.5" fill="#6C63FF" opacity="0.7"/><rect x="38" y="32" width="5" height="5" rx="1.5" fill="#6C63FF" opacity="0.7"/><rect x="46" y="32" width="5" height="5" rx="1.5" fill="#6C63FF" opacity="0.7"/><rect x="16" y="40" width="32" height="5" rx="2.5" fill="#FF6B9D" opacity="0.6"/><defs><linearGradient id="kbGrad" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#3ECFCF"/><stop offset="1" stop-color="#6C63FF"/></linearGradient></defs>` },
  { id: 'mouse', name: 'Mice', desc: 'Ergonomic, wireless & gaming mice for precision control', svgBg: 'rgba(255,107,157,0.08)', svgPath: `<rect x="18" y="12" width="28" height="40" rx="14" fill="url(#mouseGrad)" opacity="0.15" stroke="#FF6B9D" stroke-width="2"/><line x1="32" y1="12" x2="32" y2="36" stroke="#FF6B9D" stroke-width="2"/><ellipse cx="32" cy="26" rx="5" ry="3" fill="#FF6B9D" opacity="0.5"/><circle cx="32" cy="44" r="3" fill="#FF6B9D" opacity="0.7"/><defs><linearGradient id="mouseGrad" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#FF6B9D"/><stop offset="1" stop-color="#6C63FF"/></linearGradient></defs>` },
  { id: 'computer', name: 'Computers', desc: 'Desktop PCs, all-in-ones & workstations for every budget', svgBg: 'rgba(247,201,72,0.08)', svgPath: `<rect x="8" y="10" width="48" height="32" rx="4" fill="url(#pcGrad)" opacity="0.15" stroke="#F7C948" stroke-width="2"/><rect x="14" y="16" width="36" height="20" rx="2" fill="#1a1a2e"/><path d="M18 20h4M26 20h4M34 20h4" stroke="#F7C948" stroke-width="1.5" stroke-linecap="round"/><path d="M18 25h10M32 25h6" stroke="#6C63FF" stroke-width="1.5" stroke-linecap="round"/><path d="M18 30h6M28 30h4M36 30h2" stroke="#3ECFCF" stroke-width="1.5" stroke-linecap="round"/><path d="M24 42h16v4H24z" fill="#F7C948" opacity="0.5" rx="2"/><path d="M28 42v4" stroke="#F7C948" stroke-width="1"/><path d="M36 42v4" stroke="#F7C948" stroke-width="1"/><rect x="8" y="46" width="48" height="8" rx="2" fill="#F7C948" opacity="0.2" stroke="#F7C948" stroke-width="1.5"/><defs><linearGradient id="pcGrad" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#F7C948"/><stop offset="1" stop-color="#FF6B9D"/></linearGradient></defs>` },
  { id: 'speaker', name: 'Speakers', desc: 'Crystal-clear audio from desktop speakers to surround systems', svgBg: 'rgba(62,207,207,0.08)', svgPath: `<rect x="10" y="8" width="24" height="48" rx="5" fill="url(#spGrad)" opacity="0.15" stroke="#3ECFCF" stroke-width="2"/><circle cx="22" cy="28" r="9" stroke="#3ECFCF" stroke-width="2"/><circle cx="22" cy="28" r="4" fill="#3ECFCF" opacity="0.5"/><circle cx="22" cy="48" r="4" stroke="#3ECFCF" stroke-width="1.5"/><circle cx="22" cy="48" r="1.5" fill="#3ECFCF"/><path d="M40 20c4 3 4 21 0 24" stroke="#6C63FF" stroke-width="2.5" stroke-linecap="round"/><path d="M46 14c7 6 7 30 0 36" stroke="#6C63FF" stroke-width="2" stroke-linecap="round" opacity="0.5"/><defs><linearGradient id="spGrad" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#3ECFCF"/><stop offset="1" stop-color="#6C63FF"/></linearGradient></defs>` },
  { id: 'accessories', name: 'Accessories', desc: 'Cables, hubs, cooling pads, bags & essential PC gear', svgBg: 'rgba(255,107,157,0.08)', svgPath: `<circle cx="32" cy="32" r="12" stroke="#FF6B9D" stroke-width="2"/><circle cx="32" cy="32" r="5" fill="#FF6B9D" opacity="0.4"/><path d="M32 8v8M32 48v8M8 32h8M48 32h8" stroke="#FF6B9D" stroke-width="2.5" stroke-linecap="round"/><path d="M16.9 16.9l5.7 5.7M41.4 41.4l5.7 5.7M16.9 47.1l5.7-5.7M41.4 22.6l5.7-5.7" stroke="#6C63FF" stroke-width="2" stroke-linecap="round"/><defs><linearGradient id="accGrad" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#FF6B9D"/><stop offset="1" stop-color="#6C63FF"/></linearGradient></defs>` }
];

let CATEGORIES = JSON.parse(localStorage.getItem('richit_categories'));
if (!CATEGORIES || CATEGORIES.length === 0) {
  CATEGORIES = DEFAULT_CATEGORIES;
  localStorage.setItem('richit_categories', JSON.stringify(CATEGORIES));
}

function saveCategoriesState() {
  // 1) Always write to localStorage for instant local cache
  localStorage.setItem('richit_categories', JSON.stringify(CATEGORIES));

  // 2) Upsert to Supabase if configured (cloud persistence)
  if (window.supabaseDb) {
    window.supabaseDb
      .from('store_config')
      .upsert({ key: 'categories', data: CATEGORIES, updated_at: new Date().toISOString() })
      .then(({ error }) => {
        if (error) console.warn('⚠️ Supabase categories save failed:', error.message);
        else console.log('✅ Categories saved to Supabase.');
      });
  }
}

// Load products from localStorage or initialize with defaults
let PRODUCTS = JSON.parse(localStorage.getItem('richit_products'));
if (!PRODUCTS || PRODUCTS.length === 0) {
  PRODUCTS = DEFAULT_PRODUCTS.map(p => ({ ...p, stock: 15 }));
  localStorage.setItem('richit_products', JSON.stringify(PRODUCTS));
} else {
  // Sanitize to make sure every product has a valid stock value (not undefined)
  PRODUCTS = PRODUCTS.map(p => ({ ...p, stock: typeof p.stock === 'number' ? p.stock : 15 }));
}

function saveProductsState() {
  // 1) Always write to localStorage for instant local cache
  localStorage.setItem('richit_products', JSON.stringify(PRODUCTS));

  // 2) Upsert to Supabase if configured (cloud persistence)
  if (window.supabaseDb) {
    window.supabaseDb
      .from('store_config')
      .upsert({ key: 'products', data: PRODUCTS, updated_at: new Date().toISOString() })
      .then(({ error }) => {
        if (error) console.warn('⚠️ Supabase products save failed:', error.message);
        else console.log('✅ Products saved to Supabase.');
      });
  }
}

// =============================================
// SUPABASE REAL-TIME SYNC
// =============================================
function applyCloudRow(row) {
  if (!row || !Array.isArray(row.data) || row.data.length === 0) return;

  if (row.key === 'products') {
    // Sanitize to make sure every product has a valid stock value
    PRODUCTS = row.data.map(p => ({ ...p, stock: typeof p.stock === 'number' ? p.stock : 15 }));
    localStorage.setItem('richit_products', JSON.stringify(PRODUCTS));
    renderProducts(currentFilter);
    validateCartStock();
    // Refresh owner dashboard product list if open
    const dash = document.getElementById('dashboard-modal-overlay');
    if (dash && dash.classList.contains('open')) {
      const searchVal = document.getElementById('dash-search-input');
      renderDashboardProducts(searchVal ? searchVal.value : '');
    }
    console.log(`🔄 Products synced from Supabase (${PRODUCTS.length} items).`);
  }

  if (row.key === 'categories') {
    CATEGORIES = row.data;
    localStorage.setItem('richit_categories', JSON.stringify(CATEGORIES));
    renderCategories();
    renderFilterBar();
    populateCategoryDropdowns();
    // Refresh owner dashboard category panel if open
    const catPanel = document.getElementById('dash-categories-panel');
    if (catPanel && catPanel.style.display !== 'none') {
      renderDashboardCategories();
    }
    console.log(`🔄 Categories synced from Supabase (${CATEGORIES.length} items).`);
  }
}

function initSupabase() {
  if (!window.supabaseDb) {
    // Supabase not configured — localStorage-only mode, nothing more to do
    return;
  }

  const sb = window.supabaseDb;

  // ── Step 1: Load latest data from Supabase on page open ────
  sb.from('store_config')
    .select('key, data')
    .then(({ data: rows, error }) => {
      if (error) {
        console.warn('⚠️ Supabase initial load error:', error.message);
        return;
      }

      if (rows && rows.length > 0) {
        // Cloud has data — apply each row
        rows.forEach(row => applyCloudRow(row));
      } else {
        // First run: Supabase table is empty — seed with current localStorage data
        console.log('🌱 Seeding Supabase with default data...');
        sb.from('store_config')
          .upsert([
            { key: 'products',   data: PRODUCTS,   updated_at: new Date().toISOString() },
            { key: 'categories', data: CATEGORIES, updated_at: new Date().toISOString() }
          ])
          .then(({ error: seedErr }) => {
            if (seedErr) console.warn('⚠️ Supabase seed error:', seedErr.message);
            else console.log('✅ Supabase seeded with default products & categories.');
          });
      }
    });

  // ── Step 2: Subscribe to real-time changes ─────────────────
  // Whenever ANY browser saves a change, all other open browsers
  // receive the update automatically via WebSocket.
  sb.channel('store-realtime')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'store_config' },
      payload => {
        if (payload.new) {
          applyCloudRow(payload.new);
        }
      }
    )
    .subscribe(status => {
      if (status === 'SUBSCRIBED') {
        console.log('📡 Supabase realtime channel active — changes will sync instantly.');
      }
    });

  showToast('🟢 Connected to Supabase — data syncs across all devices!', 3500);
}


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
    <div class="product-card motion-tilt-card motion-tilt-card-inner reveal-on-scroll" id="product-${p.id}" data-category="${p.category}">
      <div class="motion-glare-overlay"></div>
      <div class="product-badge ${badgeClass}">${badgeLabels[p.badge]}</div>
      <div class="product-img-wrap" onclick="openProductDetail(${p.id})" style="cursor:pointer;">
        <div class="product-img-bg" style="background: ${p.svgBg};"></div>
        ${p.image ? `
          <img src="${p.image}" class="product-img-element" alt="${p.name}" />
        ` : `
          <svg class="product-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            ${p.svgPath}
          </svg>
        `}
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
        <!-- STOCK STATUS -->
        <div class="product-stock-status" style="font-size:0.75rem; font-weight:700; margin-bottom:12px; display:flex; align-items:center; gap:6px; color:${p.stock > 0 ? '#3ECFCF' : '#ff5f57'};">
          <span>${p.stock > 0 ? `● In Stock (${p.stock} units)` : `● Out of Stock`}</span>
        </div>
        <!-- BUY NOW BUTTON (full width, prominent) -->
        <button class="btn-buy-now" id="buy-now-${p.id}" onclick="openPaymentModal(${p.id})" ${p.stock <= 0 ? 'disabled style="background:linear-gradient(135deg, #555 0%, #333 100%); cursor:not-allowed; opacity:0.6;"' : ''}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          ${p.stock > 0 ? '⚡ Buy Now (UPI)' : 'Out of Stock'}
        </button>
        <div class="product-actions">
          <button class="btn-add-cart" id="add-cart-${p.id}" onclick="addToCart(${p.id})" ${p.stock <= 0 ? 'disabled style="background:#555; cursor:not-allowed; opacity:0.6;"' : ''}>
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
// BUY NOW – UPI Flow
// =============================================
const OWNER_WHATSAPP = '917015510961'; // Country code + number
const OWNER_UPI = '9253455405-6@ybl';

let selectedPaymentFile = null;
let currentPaymentProductId = null;
let currentViewedReceiptData = null;

// Opens the UPI payment modal for the selected product
function openPaymentModal(productId) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;

  currentPaymentProductId = productId;
  selectedPaymentFile = null;

  let modal = document.getElementById('payment-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'payment-modal';
    modal.className = 'product-modal-overlay';
    modal.onclick = (e) => { if (e.target === modal) closePaymentModal(); };
    document.body.appendChild(modal);
  }

  // Construct UPI URIs
  const upiParams = `pa=${OWNER_UPI}&pn=${encodeURIComponent('Richit Computer')}&am=${p.price}&cu=INR&tn=${encodeURIComponent('Order: ' + p.name)}`;
  const upiUriGeneric = `upi://pay?${upiParams}`;
  const upiUriPhonePe  = `phonepe://pay?${upiParams}`;
  const upiUriPaytm    = `paytmmp://pay?${upiParams}`;
  const upiUriGPay     = `gpay://upi/pay?${upiParams}`;

  // QR Code generator API URL
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUriGeneric)}`;

  modal.innerHTML = `
    <div class="product-modal-box" style="max-width: 500px; padding: 24px;">
      <button class="product-modal-close" onclick="closePaymentModal()">✕</button>
      
      <div class="upi-modal-content">
        <div style="text-align: center; margin-bottom: 8px;">
          <h2 style="font-family:'Outfit',sans-serif;font-size:1.4rem;font-weight:800;color:var(--purple);margin-bottom:6px;">⚡ Pay via UPI</h2>
          <p style="font-size:0.85rem;color:var(--text-secondary);">Complete payment of <strong>₹${p.price.toLocaleString('en-IN')}</strong> for "${p.name}"</p>
        </div>

        <!-- QR Code for desktop/mobile scanning -->
        <div class="qr-container">
          <img class="qr-image" src="${qrUrl}" alt="Scan QR Code to Pay" />
          <span style="font-size:0.75rem;color:var(--text-secondary);text-align:center;line-height:1.4;">
            Scan QR code with Google Pay, PhonePe, Paytm, or BHIM app
          </span>
        </div>

        <!-- UPI App chooser (for mobile users) -->
        <div style="text-align: center;">
          <span style="font-size:0.75rem;color:var(--text-secondary);font-weight:600;">OR Pay Directly via Mobile App</span>
          <div class="upi-app-list">
            <button class="upi-app-btn" onclick="window.open('${upiUriPhonePe}', '_blank')">
              <img src="https://img.icons8.com/color/48/phonepe.png" alt="PhonePe"/> PhonePe
            </button>
            <button class="upi-app-btn" onclick="window.open('${upiUriGPay}', '_blank')">
              <img src="https://img.icons8.com/color/48/google-pay.png" alt="GPay"/> Google Pay
            </button>
            <button class="upi-app-btn" onclick="window.open('${upiUriPaytm}', '_blank')">
              <img src="https://img.icons8.com/color/48/paytm.png" alt="Paytm"/> Paytm
            </button>
            <button class="upi-app-btn" onclick="window.open('${upiUriGeneric}', '_blank')">
              📦 Any UPI App
            </button>
          </div>
        </div>

        <hr style="border:0;border-top:1px solid var(--border);margin:4px 0;"/>

        <!-- Upload screenshot section -->
        <div>
          <span style="font-size:0.8rem;color:var(--text-primary);font-weight:700;display:block;margin-bottom:8px;">📸 Upload Payment Screenshot</span>
          <div class="screenshot-upload-box" onclick="document.getElementById('upi-screenshot-input').click()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--purple);margin-bottom:6px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <p style="font-size:0.75rem;color:var(--text-secondary);" id="upi-upload-label">Click to select receipt screenshot</p>
            <input type="file" id="upi-screenshot-input" accept="image/*" style="display:none;" onchange="handleUpiScreenshotSelect(event)"/>
          </div>
          
          <div class="screenshot-preview-container" id="upi-preview-container">
            <img id="upi-screenshot-preview" src="" alt="Payment Screenshot Preview"/>
          </div>
        </div>

        <!-- Actions -->
        <button class="btn btn-primary" id="btn-submit-payment" style="width:100%;margin-top:8px;opacity:0.6;cursor:not-allowed;" disabled onclick="handlePaymentSubmit()">
          <span>Submit &amp; Chat on WhatsApp</span>
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePaymentModal() {
  const modal = document.getElementById('payment-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

// File input callback to handle preview and enable submit button
function handleUpiScreenshotSelect(event) {
  const file = event.target.files[0];
  if (!file) return;

  selectedPaymentFile = file;
  
  const preview = document.getElementById('upi-screenshot-preview');
  const container = document.getElementById('upi-preview-container');
  const label = document.getElementById('upi-upload-label');
  const btn = document.getElementById('btn-submit-payment');

  const reader = new FileReader();
  reader.onload = function(e) {
    preview.src = e.target.result;
    container.style.display = 'flex';
    label.textContent = `Selected: ${file.name} (${Math.round(file.size / 1024)} KB)`;
    btn.disabled = false;
    btn.style.opacity = '1';
    btn.style.cursor = 'pointer';
  };
  reader.readAsDataURL(file);
}

// Helper to compress the screenshot before saving it to Supabase
function compressScreenshot(file, callback) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 500;
      const MAX_HEIGHT = 500;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          width = MAX_HEIGHT;
        }
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      
      const base64Data = canvas.toDataURL('image/jpeg', 0.65);
      callback(base64Data);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// Helper to copy base64 image data to device clipboard (converts to PNG for max browser support)
async function copyImageToClipboard(base64Data) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(async (pngBlob) => {
        try {
          if (!pngBlob) { resolve(false); return; }
          await navigator.clipboard.write([
            new ClipboardItem({ 'image/png': pngBlob })
          ]);
          resolve(true);
        } catch (e) {
          console.warn('Clipboard write failed:', e.message);
          resolve(false);
        }
      }, 'image/png');
    };
    img.onerror = () => resolve(false);
    img.src = base64Data;
  });
}

// Compresses screenshot, writes to Supabase, constructs receipt link, redirects to WhatsApp
function handlePaymentSubmit() {
  if (!selectedPaymentFile || !currentPaymentProductId) return;

  const btn = document.getElementById('btn-submit-payment');
  btn.disabled = true;
  btn.innerHTML = `<span>Uploading Receipt...</span>`;

  const p = PRODUCTS.find(prod => prod.id === currentPaymentProductId);
  if (!p) return;

  compressScreenshot(selectedPaymentFile, function(base64Screenshot) {
    // Synchronously initiate clipboard copy
    copyImageToClipboard(base64Screenshot).then(copied => {
      if (!window.supabaseDb) {
        // Fallback if Supabase not configured yet
        showToast(copied 
          ? '📋 Screenshot copied! Paste it in WhatsApp.' 
          : '⚠️ Config missing. Opening WhatsApp...');
        setTimeout(() => {
          sendPaymentWhatsApp(p, null, base64Screenshot);
          closePaymentModal();
        }, 1500);
        return;
      }

      // Insert transaction into public 'payments' table
      window.supabaseDb
        .from('payments')
        .insert([
          {
            product_id: p.id,
            product_name: p.name,
            price: p.price,
            screenshot: base64Screenshot
          }
        ])
        .select()
        .then(({ data, error }) => {
          if (error) {
            console.error('Supabase write error:', error.message);
            showToast('⚠️ Sync failed. Opening WhatsApp...');
            setTimeout(() => {
              sendPaymentWhatsApp(p, null, base64Screenshot);
            }, 1000);
          } else if (data && data[0]) {
            showToast(copied 
              ? '📋 Screenshot copied! Paste it in WhatsApp (Ctrl+V).' 
              : '🎉 Receipt uploaded to cloud!');
            setTimeout(() => {
              sendPaymentWhatsApp(p, data[0].id, base64Screenshot);
            }, 2000);
          }
          closePaymentModal();
        });
    });
  });
}

// Opens WhatsApp containing order info, price, specs, and verification URL
function sendPaymentWhatsApp(product, paymentId, base64Screenshot) {
  const specsLine = product.svgPath.match(/font-family[^>]*>([^<]+)</);
  const specs = specsLine ? specsLine[1] : '';

  // Get viewer link
  const receiptLink = paymentId 
    ? `${window.location.origin}${window.location.pathname}?view_payment=${paymentId}`
    : 'No link available (Database offline)';

  const message =
`🛒 *NEW UPI ORDER – Richit Computer*
━━━━━━━━━━━━━━━━━━━━
📦 *Product:* ${product.name}
🏷️ *Category:* ${product.catLabel}
${specs ? `⚙️ *Specs:* ${specs}\n` : ''}
💰 *Price Paid:* ₹${product.price.toLocaleString('en-IN')}
🧾 *Status:* UPI Paid via App
━━━━━━━━━━━━━━━━━━━━
🔗 *Verify Receipt & Screenshot:*
${receiptLink}
━━━━━━━━━━━━━━━━━━━━
Hello Richit bhai! 👋
I have just paid ₹${product.price.toLocaleString('en-IN')} via UPI for the *${product.name}* and uploaded my payment screenshot. Please confirm my order! 🙏`;

  const waUrl = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.location.href = waUrl;
  showToast('🟢 Transferring you to WhatsApp with order details...', 3000);
}

// Verification Modal for owner to view screenshot
function showPaymentReceiptModal(data) {
  currentViewedReceiptData = data;
  let modal = document.getElementById('receipt-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'receipt-modal';
    modal.className = 'product-modal-overlay';
    modal.onclick = (e) => { if (e.target === modal) closeReceiptModal(); };
    document.body.appendChild(modal);
  }
  
  modal.innerHTML = `
    <div class="product-modal-box" style="max-width: 500px; padding: 24px; position:relative;">
      <button class="product-modal-close" onclick="closeReceiptModal()">✕</button>
      
      <div style="text-align:center; margin-bottom:16px;">
        <h2 style="font-family:'Outfit',sans-serif;font-size:1.4rem;font-weight:800;color:var(--cyan);margin-bottom:4px;">🧾 Payment Receipt</h2>
        <span style="font-size:0.75rem;color:var(--text-secondary);">Transaction verification ID: #${data.id}</span>
      </div>

      <div style="background:rgba(255,255,255,0.02);border:1px solid var(--border);border-radius:var(--radius-md);padding:14px;margin-bottom:16px;font-size:0.85rem;">
        <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
          <span style="color:var(--text-secondary);">Product Name:</span>
          <strong style="color:var(--text-primary);">${data.product_name}</strong>
        </div>
        <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
          <span style="color:var(--text-secondary);">Amount Paid:</span>
          <strong style="color:var(--cyan);">₹${Number(data.price).toLocaleString('en-IN')}</strong>
        </div>
        <div style="display:flex;justify-content:space-between;">
          <span style="color:var(--text-secondary);">Payment Date:</span>
          <strong style="color:var(--text-primary);">${new Date(data.created_at).toLocaleString('en-IN')}</strong>
        </div>
      </div>

      <div style="text-align:center;margin-bottom:8px;font-size:0.8rem;color:var(--text-secondary);font-weight:700;">Uploaded Payment Screenshot</div>
      <div style="border:1px solid var(--border);border-radius:var(--radius-sm);overflow:hidden;background:#000;display:flex;justify-content:center;align-items:center;padding:6px;">
        <img src="${data.screenshot}" style="max-width:100%;max-height:300px;object-fit:contain;" alt="Payment Screenshot"/>
      </div>

      <div style="display:grid;grid-template-columns:1.2fr 0.8fr;gap:12px;margin-top:16px;">
        <button class="btn btn-primary" onclick="downloadReceiptImage()" style="background:var(--gradient-main); display:flex; align-items:center; justify-content:center; gap:6px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download Receipt
        </button>
        <button class="btn btn-secondary" onclick="closeReceiptModal()" style="background:rgba(255,255,255,0.05);border:1px solid var(--border);color:var(--text-primary);">
          Close
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeReceiptModal() {
  const modal = document.getElementById('receipt-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
  currentViewedReceiptData = null;
  
  // Clean parameter from URL to avoid re-opening on reload
  const url = new URL(window.location);
  url.searchParams.delete('view_payment');
  window.history.replaceState({}, document.title, url.pathname);
}

// Draws receipt details + screenshot image to canvas and downloads as PNG
function downloadReceiptImage() {
  const data = currentViewedReceiptData;
  if (!data) return;

  showToast('⌛ Preparing receipt download...');

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Set dimensions (600px width, 850px height)
  const width = 600;
  const height = 850;
  canvas.width = width;
  canvas.height = height;
  
  // 1. Solid Dark Background
  ctx.fillStyle = '#0a0a0f';
  ctx.fillRect(0, 0, width, height);
  
  // Outer Cyber/Purple Border
  ctx.strokeStyle = '#6C63FF';
  ctx.lineWidth = 4;
  ctx.strokeRect(2, 2, width - 4, height - 4);
  
  // 2. Header Title
  ctx.font = 'bold 24px sans-serif';
  ctx.fillStyle = '#f0f0ff';
  ctx.textAlign = 'center';
  ctx.fillText('RICHIT COMPUTER', width / 2, 50);
  
  ctx.font = '14px sans-serif';
  ctx.fillStyle = '#a0a0c0';
  ctx.fillText('Stadium Market, Safidon, Haryana', width / 2, 75);
  ctx.fillText('Call: 89300 16011 / 70155 10961', width / 2, 95);
  
  // Separator Line
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(30, 115);
  ctx.lineTo(width - 30, 115);
  ctx.stroke();
  
  // 3. Receipt Subheader
  ctx.font = 'bold 18px sans-serif';
  ctx.fillStyle = '#3ECFCF';
  ctx.fillText('PAYMENT TRANSACTION RECEIPT', width / 2, 145);
  
  // 4. Details Container
  ctx.fillStyle = 'rgba(255,255,255,0.02)';
  ctx.fillRect(40, 170, width - 80, 155);
  ctx.strokeStyle = 'rgba(255,255,255,0.06)';
  ctx.strokeRect(40, 170, width - 80, 155);
  
  ctx.textAlign = 'left';
  ctx.font = '15px sans-serif';
  
  // Labels
  ctx.fillStyle = '#a0a0c0';
  ctx.fillText('Receipt ID:', 60, 205);
  ctx.fillText('Product Name:', 60, 240);
  ctx.fillText('Amount Paid:', 60, 275);
  ctx.fillText('Payment Date:', 60, 310);
  
  // Values
  ctx.textAlign = 'right';
  ctx.fillStyle = '#f0f0ff';
  ctx.fillText(`#${data.id}`, width - 60, 205);
  ctx.fillText(data.product_name.substring(0, 32) + (data.product_name.length > 32 ? '...' : ''), width - 60, 240);
  ctx.fillStyle = '#3ECFCF';
  ctx.font = 'bold 15px sans-serif';
  ctx.fillText(`₹${Number(data.price).toLocaleString('en-IN')}`, width - 60, 275);
  ctx.font = '15px sans-serif';
  ctx.fillStyle = '#f0f0ff';
  ctx.fillText(new Date(data.created_at).toLocaleString('en-IN'), width - 60, 310);
  
  // 5. Draw Screenshot Image
  const img = new Image();
  img.onload = function() {
    ctx.textAlign = 'center';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillStyle = '#a0a0c0';
    ctx.fillText('UPLOADED PAYMENT SCREENSHOT', width / 2, 365);
    
    // Screenshot dimensions
    const sWidth = 320;
    const sHeight = 410;
    const sX = (width - sWidth) / 2;
    const sY = 385;
    
    // Draw background border box for screenshot
    ctx.fillStyle = '#000000';
    ctx.fillRect(sX - 4, sY - 4, sWidth + 8, sHeight + 8);
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.strokeRect(sX - 4, sY - 4, sWidth + 8, sHeight + 8);
    
    ctx.drawImage(img, sX, sY, sWidth, sHeight);
    
    // Footer message
    ctx.font = 'italic 12px sans-serif';
    ctx.fillStyle = '#606080';
    ctx.fillText('Thank you for purchasing with Richit Computer!', width / 2, height - 20);
    
    // Auto download
    try {
      const link = document.createElement('a');
      link.download = `receipt_richit_computer_${data.id}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      showToast('💾 Receipt image downloaded successfully!');
    } catch (e) {
      console.warn('Canvas download error:', e.message);
      showToast('⚠️ Could not auto-download image. Try saving the screen.');
    }
  };
  img.onerror = () => {
    showToast('⚠️ Error loading receipt screenshot image.');
  };
  img.src = data.screenshot;
}

// Checks URL on startup for receipt ID parameters
function checkPaymentReceipt() {
  const urlParams = new URLSearchParams(window.location.search);
  const paymentId = urlParams.get('view_payment');
  if (paymentId && window.supabaseDb) {
    window.supabaseDb
      .from('payments')
      .select('*')
      .eq('id', paymentId)
      .single()
      .then(({ data, error }) => {
        if (error) {
          console.error('Error fetching receipt:', error.message);
          showToast('⚠️ Could not load receipt details.');
        } else if (data) {
          showPaymentReceiptModal(data);
        }
      });
  }
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
          <div style="background:${p.svgBg}; width:100%; height:100%; display:flex; align-items:center; justify-content:center; border-radius:16px; padding:20px;">
            ${p.image ? `
              <img src="${p.image}" class="product-img-element" style="max-height:220px;" alt="${p.name}" />
            ` : `
              <svg width="200" height="200" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                ${p.svgPath}
              </svg>
            `}
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
            🔥 Stock Available: <strong style="color:${p.stock > 0 ? '#3ECFCF' : '#ff5f57'};">${p.stock > 0 ? `${p.stock} units` : 'Out of Stock'}</strong><br/>
            ✅ Genuine product with manufacturer warranty<br/>
            🚚 Fast delivery available in Safidon & nearby areas<br/>
            🔧 Free installation for CCTV systems<br/>
            💬 Chat with owner for best deal
          </div>
          <button class="btn-buy-now" style="width:100%;margin-bottom:10px;" onclick="closeProductModal();openPaymentModal(${p.id})" ${p.stock <= 0 ? 'disabled style="background:linear-gradient(135deg, #555 0%, #333 100%); cursor:not-allowed; opacity:0.6;"' : ''}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            ${p.stock > 0 ? 'Buy Now (UPI)' : 'Out of Stock'}
          </button>
          <button class="btn-add-cart" style="width:100%;" onclick="closeProductModal();addToCart(${p.id})" ${p.stock <= 0 ? 'disabled style="background:#555; cursor:not-allowed; opacity:0.6;"' : ''}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            ${p.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
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

  if (product.stock <= 0) {
    showToast(`⚠️ Sorry, ${product.name} is out of stock!`);
    return;
  }

  const existing = cart.find(i => i.id === productId);
  if (existing) {
    if (existing.qty >= product.stock) {
      showToast(`⚠️ Cannot add more! Only ${product.stock} units available in stock.`);
      return;
    }
    existing.qty++;
    showToast(`${product.name} quantity updated in cart!`);
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

// Function to check if items in cart still have stock
function validateCartStock() {
  let changed = false;
  cart = cart.filter(item => {
    const p = PRODUCTS.find(prod => prod.id === item.id);
    if (!p || p.stock <= 0) {
      changed = true;
      return false; // Remove item completely if stock is 0
    }
    if (item.qty > p.stock) {
      item.qty = p.stock; // Reduce quantity to available stock
      changed = true;
    }
    return true;
  });
  if (changed) {
    updateCartUI();
    showToast("⚠️ Cart updated: Some items changed due to stock availability.");
  }
}

function toggleCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
  if (sidebar.classList.contains('open')) {
    validateCartStock();
  }
}

function handleCheckout() {
  if (cart.length === 0) return;
  
  // Final validation of stock before deducting
  let outOfStockItems = [];
  cart.forEach(item => {
    const p = PRODUCTS.find(prod => prod.id === item.id);
    if (!p || p.stock < item.qty) {
      outOfStockItems.push(item.name);
    }
  });

  if (outOfStockItems.length > 0) {
    showToast(`⚠️ Cannot checkout! Out of stock items: ${outOfStockItems.join(', ')}`);
    validateCartStock();
    return;
  }

  // Deduct from stock
  cart.forEach(item => {
    const p = PRODUCTS.find(prod => prod.id === item.id);
    if (p) {
      p.stock -= item.qty;
    }
  });

  saveProductsState();
  renderProducts(currentFilter);

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
// OWNER PORTAL LOGIC & ACTIONS
// =============================================
let isOwnerLoggedIn = false;

function toggleOwnerPortal(e) {
  if (e) e.preventDefault();
  if (isOwnerLoggedIn) {
    openDashboardModal();
  } else {
    openLoginModal();
  }
}

function openLoginModal() {
  const modal = document.getElementById('login-modal-overlay');
  if (modal) modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLoginModal() {
  const modal = document.getElementById('login-modal-overlay');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
  document.getElementById('owner-login-form').reset();
  document.getElementById('login-error-msg').style.display = 'none';
}

function closeLoginModalOutside(e) {
  if (e.target === document.getElementById('login-modal-overlay')) {
    closeLoginModal();
  }
}

function handleOwnerLogin(e) {
  e.preventDefault();
  const user = document.getElementById('owner-username').value.trim();
  const pass = document.getElementById('owner-password').value;
  const errorMsg = document.getElementById('login-error-msg');

  if (user === 'Richit' && pass === 'Richit@1122334455') {
    isOwnerLoggedIn = true;
    sessionStorage.setItem('richit_owner_mode', 'true');
    showToast('🔑 Welcome Richit! Owner portal loaded.');
    updateOwnerUIState();
    closeLoginModal();
    openDashboardModal();
  } else {
    errorMsg.style.display = 'block';
    showToast('❌ Login failed! Try again.');
  }
}

function handleOwnerLogout() {
  closeDashboardModal();
}

function updateOwnerUIState() {
  const btn = document.getElementById('owner-portal-btn');
  if (btn) {
    if (isOwnerLoggedIn) {
      btn.innerHTML = '⚙️ Owner Dashboard';
      btn.classList.add('active');
    } else {
      btn.innerHTML = '🔐 Owner Portal';
      btn.classList.remove('active');
    }
  }
}

function checkOwnerSession() {
  if (sessionStorage.getItem('richit_owner_mode') === 'true') {
    isOwnerLoggedIn = true;
    updateOwnerUIState();
  }
}

function openDashboardModal() {
  const modal = document.getElementById('dashboard-modal-overlay');
  if (modal) modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  switchDashboardTab('products');
}

function closeDashboardModal() {
  const modal = document.getElementById('dashboard-modal-overlay');
  if (modal && modal.classList.contains('open')) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    
    // Reset forms
    document.getElementById('add-product-form').reset();
    document.getElementById('add-category-form').reset();
    
    // Reset dashboard tabs
    switchDashboardTab('products');

    // Clear session & log out automatically
    if (isOwnerLoggedIn) {
      isOwnerLoggedIn = false;
      sessionStorage.removeItem('richit_owner_mode');
      updateOwnerUIState();
      showToast('🔒 Dashboard closed & logged out.');
      
      // Refresh views to clean up
      renderProducts(currentFilter);
    }
  }
}

// Render list of products in the owner panel
function renderDashboardProducts(filterText = '') {
  const listContainer = document.getElementById('dashboard-product-list');
  if (!listContainer) return;

  const query = filterText.toLowerCase().trim();
  const filtered = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.catLabel.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    listContainer.innerHTML = '<div style="padding:24px; text-align:center; color:var(--text-muted); font-size:0.875rem;">No products found</div>';
    return;
  }

  listContainer.innerHTML = filtered.map(p => `
    <div class="dashboard-item">
      <div class="dash-item-icon">
        ${p.image ? `
          <img src="${p.image}" style="width:100%; height:100%; object-fit:cover; border-radius:4px;" />
        ` : `
          <svg viewBox="0 0 120 120" fill="none">
            ${p.svgPath}
          </svg>
        `}
      </div>
      <div class="dash-item-details">
        <div class="dash-item-name">${p.name}</div>
        <div class="dash-item-meta">${p.catLabel} &nbsp;•&nbsp; ₹${p.price.toLocaleString('en-IN')} &nbsp;•&nbsp; Stock: ${p.stock}</div>
      </div>
      <div class="dash-item-controls">
        <div class="dash-stock-control">
          <button class="dash-stock-btn" onclick="adjustDashboardStock(${p.id}, -1)">−</button>
          <div class="dash-stock-val" id="dash-stock-val-${p.id}">${p.stock}</div>
          <button class="dash-stock-btn" onclick="adjustDashboardStock(${p.id}, 1)">+</button>
        </div>
        <!-- Edit details button -->
        <button class="dash-btn-edit" onclick="openEditModal(${p.id})" title="Edit Product Details" style="background:rgba(62,207,207,0.1); border:1px solid rgba(62,207,207,0.25); color:#3ECFCF; width:32px; height:32px; border-radius:var(--radius-sm); cursor:pointer; display:flex; align-items:center; justify-content:center; transition:var(--transition);">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </button>
        <button class="dash-btn-delete" onclick="deleteDashboardProduct(${p.id})" title="Delete Product">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>
        </button>
      </div>
    </div>
  `).join('');
}

function filterDashboardProducts(val) {
  renderDashboardProducts(val);
}

// Edit Stock
function adjustDashboardStock(productId, change) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;

  const newVal = p.stock + change;
  if (newVal < 0) return;

  p.stock = newVal;
  saveProductsState();

  // Update dynamic elements instantly
  const valDisplay = document.getElementById(`dash-stock-val-${productId}`);
  if (valDisplay) valDisplay.textContent = p.stock;

  // Sync main catalog page & cart check
  renderProducts(currentFilter);
  validateCartStock();
}

// Delete Product
function deleteDashboardProduct(productId) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;

  if (confirm(`Are you sure you want to delete "${p.name}" completely from the catalog?`)) {
    PRODUCTS = PRODUCTS.filter(prod => prod.id !== productId);
    saveProductsState();
    
    // Remove from cart/wishlist
    cart = cart.filter(i => i.id !== productId);
    wishlist.delete(productId);
    updateCartUI();

    // Re-render dashboard list & main catalog
    const searchVal = document.getElementById('dash-search-input').value;
    renderDashboardProducts(searchVal);
    renderProducts(currentFilter);
    showToast(`🗑️ ${p.name} deleted successfully.`);
  }
}

// Helper to compress and resize images using HTML5 Canvas to fit in LocalStorage
function compressImage(file, callback) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 300;
      const MAX_HEIGHT = 300;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      
      // Compress to JPEG at 70% quality
      const base64Data = canvas.toDataURL('image/jpeg', 0.7);
      callback(base64Data);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// Add Product with Mandatory Photo Upload
function handleAddProduct(e) {
  e.preventDefault();
  
  const photoInput = document.getElementById('prod-photo');
  if (!photoInput.files || photoInput.files.length === 0) {
    showToast('⚠️ Product photo is mandatory!');
    return;
  }

  const name = document.getElementById('prod-name').value.trim();
  const category = document.getElementById('prod-cat').value;
  const badge = document.getElementById('prod-badge').value;
  const price = parseInt(document.getElementById('prod-price').value);
  const oldPrice = parseInt(document.getElementById('prod-oldprice').value);
  const discountText = document.getElementById('prod-discount').value.trim();
  const stock = parseInt(document.getElementById('prod-stock').value);
  const specs = document.getElementById('prod-specs').value.trim();

  if (price > oldPrice) {
    showToast('⚠️ Price cannot be greater than MRP (Old Price)!');
    return;
  }

  // Compress image, then insert product
  compressImage(photoInput.files[0], function(base64Image) {
    // Calculate discount tag automatically if empty
    let discount = discountText;
    if (!discount) {
      const calc = Math.round(((oldPrice - price) / oldPrice) * 100);
      discount = calc > 0 ? `${calc}% OFF` : '';
    }

    // Map category code to labels
    const catLabels = {
      cctv: 'CCTV Camera',
      keyboard: 'Keyboard',
      mouse: 'Mouse',
      computer: 'Desktop PC',
      speaker: 'Speaker',
      accessories: 'Accessory'
    };
    const catLabel = catLabels[category] || 'Tech Product';

    // SVG preset generator based on category selection (fallback)
    let svgBg = '';
    let svgPath = '';
    if (category === 'cctv') {
      svgBg = 'rgba(108,99,255,0.08)';
      svgPath = `<ellipse cx="60" cy="55" rx="30" ry="30" fill="rgba(108,99,255,0.2)" stroke="#6C63FF" stroke-width="2"/>
                <ellipse cx="60" cy="55" rx="16" ry="16" fill="#6C63FF" opacity="0.5"/>
                <circle cx="60" cy="55" r="7" fill="#6C63FF"/>
                <path d="M90 55h20l12-15v30l-12-15" fill="none" stroke="#6C63FF" stroke-width="3" stroke-linejoin="round"/>
                <text x="60" y="110" text-anchor="middle" fill="#6C63FF" font-size="10" font-weight="600" font-family="Inter,sans-serif">${specs || '4K • Dome'}</text>`;
    } else if (category === 'keyboard') {
      svgBg = 'rgba(62,207,207,0.08)';
      svgPath = `<rect x="10" y="38" width="100" height="50" rx="6" fill="rgba(62,207,207,0.12)" stroke="#3ECFCF" stroke-width="2"/>
                <rect x="25" y="48" width="15" height="10" rx="2" fill="#3ECFCF" opacity="0.7"/>
                <rect x="45" y="48" width="15" height="10" rx="2" fill="#6C63FF" opacity="0.7"/>
                <rect x="65" y="48" width="15" height="10" rx="2" fill="#FF6B9D" opacity="0.7"/>
                <rect x="85" y="48" width="15" height="10" rx="2" fill="#F7C948" opacity="0.7"/>
                <rect x="35" y="65" width="50" height="10" rx="3" fill="#3ECFCF" opacity="0.5"/>
                <text x="60" y="105" text-anchor="middle" fill="#3ECFCF" font-size="10" font-weight="600" font-family="Inter,sans-serif">${specs || 'Mechanical'}</text>`;
    } else if (category === 'mouse') {
      svgBg = 'rgba(255,107,157,0.08)';
      svgPath = `<path d="M35 35 Q60 28 85 35 L90 80 Q60 95 30 80 Z" fill="rgba(255,107,157,0.15)" stroke="#FF6B9D" stroke-width="2"/>
                <line x1="60" y1="28" x2="60" y2="65" stroke="#FF6B9D" stroke-width="2" opacity="0.7"/>
                <ellipse cx="60" cy="48" rx="10" ry="6" fill="rgba(255,107,157,0.4)"/>
                <circle cx="60" cy="80" r="4" fill="#FF6B9D"/>
                <text x="60" y="108" text-anchor="middle" fill="#FF6B9D" font-size="10" font-weight="600" font-family="Inter,sans-serif">${specs || 'Gaming Mouse'}</text>`;
    } else if (category === 'computer') {
      svgBg = 'rgba(247,201,72,0.08)';
      svgPath = `<rect x="15" y="22" width="90" height="58" rx="5" fill="rgba(247,201,72,0.12)" stroke="#F7C948" stroke-width="2"/>
                <rect x="22" y="28" width="76" height="46" rx="2" fill="#0a0a12"/>
                <rect x="45" y="80" width="30" height="5" rx="2" fill="#F7C948" opacity="0.4"/>
                <rect x="50" y="85" width="20" height="4" rx="2" fill="#F7C948" opacity="0.3"/>
                <text x="60" y="108" text-anchor="middle" fill="#F7C948" font-size="9" font-weight="600" font-family="Inter,sans-serif">${specs || 'Intel Core PC'}</text>`;
    } else if (category === 'speaker') {
      svgBg = 'rgba(62,207,207,0.08)';
      svgPath = `<rect x="25" y="20" width="70" height="75" rx="6" fill="rgba(62,207,207,0.12)" stroke="#3ECFCF" stroke-width="2"/>
                <circle cx="60" cy="45" r="15" fill="none" stroke="#3ECFCF" stroke-width="2"/>
                <circle cx="60" cy="45" r="6" fill="#3ECFCF" opacity="0.5"/>
                <circle cx="60" cy="78" r="8" fill="none" stroke="#3ECFCF" stroke-width="1.5"/>
                <text x="60" y="110" text-anchor="middle" fill="#3ECFCF" font-size="10" font-weight="600" font-family="Inter,sans-serif">${specs || 'Desktop Audio'}</text>`;
    } else {
      svgBg = 'rgba(255,107,157,0.08)';
      svgPath = `<circle cx="60" cy="50" r="20" stroke="#FF6B9D" stroke-width="2" fill="none"/>
                <circle cx="60" cy="50" r="8" fill="#FF6B9D" opacity="0.4"/>
                <path d="M60 18v12M60 70v12M28 50h12M80 50h12" stroke="#FF6B9D" stroke-width="2.5" stroke-linecap="round"/>
                <text x="60" y="105" text-anchor="middle" fill="#FF6B9D" font-size="10" font-weight="600" font-family="Inter,sans-serif">${specs || 'PC Hub Gear'}</text>`;
    }

    // Create a new product entry
    const newId = PRODUCTS.length > 0 ? Math.max(...PRODUCTS.map(p => p.id)) + 1 : 1;
    const newProduct = {
      id: newId,
      category,
      name,
      catLabel,
      price,
      oldPrice,
      discount,
      rating: 5.0, // default rating for added items
      reviews: 0,   // default review count
      badge: badge || 'new',
      svgBg,
      svgPath,
      stock,
      image: base64Image // Store custom resized image base64
    };

    PRODUCTS.push(newProduct);
    saveProductsState();

    // Reset Add form, success confirmation
    document.getElementById('add-product-form').reset();
    showToast(`✅ Added "${name}" successfully!`);

    // Reload views
    const searchVal = document.getElementById('dash-search-input').value;
    renderDashboardProducts(searchVal);
    renderProducts(currentFilter);
  });
}

// =============================================
// EDIT PRODUCT FLOW
// =============================================
function openEditModal(productId) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;

  document.getElementById('edit-prod-id').value = p.id;
  document.getElementById('edit-prod-name').value = p.name;
  document.getElementById('edit-prod-cat').value = p.category;
  document.getElementById('edit-prod-badge').value = p.badge || '';
  document.getElementById('edit-prod-price').value = p.price;
  document.getElementById('edit-prod-oldprice').value = p.oldPrice;
  document.getElementById('edit-prod-discount').value = p.discount || '';
  document.getElementById('edit-prod-stock').value = p.stock;
  
  // Extract specs from svg text if it's default
  let currentSpecs = '';
  if (p.svgPath) {
    const specLine = p.svgPath.match(/font-family[^>]*>([^<]+)</);
    currentSpecs = specLine ? specLine[1] : '';
  }
  document.getElementById('edit-prod-specs').value = currentSpecs;

  // Preview current photo
  const previewDiv = document.getElementById('edit-prod-photo-preview');
  const previewImg = document.getElementById('edit-preview-img');
  
  if (p.image) {
    previewImg.src = p.image;
    previewDiv.style.display = 'flex';
  } else {
    previewDiv.style.display = 'none';
  }

  // Clear file input
  document.getElementById('edit-prod-photo').value = '';

  // Show modal
  const editModal = document.getElementById('edit-modal-overlay');
  if (editModal) editModal.classList.add('open');
}

function closeEditModal() {
  const editModal = document.getElementById('edit-modal-overlay');
  if (editModal) editModal.classList.remove('open');
}

function handleSaveProductEdit(e) {
  e.preventDefault();

  const id = parseInt(document.getElementById('edit-prod-id').value);
  const p = PRODUCTS.find(prod => prod.id === id);
  if (!p) return;

  const name = document.getElementById('edit-prod-name').value.trim();
  const category = document.getElementById('edit-prod-cat').value;
  const badge = document.getElementById('edit-prod-badge').value;
  const price = parseInt(document.getElementById('edit-prod-price').value);
  const oldPrice = parseInt(document.getElementById('edit-prod-oldprice').value);
  const discountText = document.getElementById('edit-prod-discount').value.trim();
  const stock = parseInt(document.getElementById('edit-prod-stock').value);
  const specs = document.getElementById('edit-prod-specs').value.trim();

  if (price > oldPrice) {
    showToast('⚠️ Price cannot be greater than MRP (Old Price)!');
    return;
  }

  let discount = discountText;
  if (!discount) {
    const calc = Math.round(((oldPrice - price) / oldPrice) * 100);
    discount = calc > 0 ? `${calc}% OFF` : '';
  }

  const catLabels = {
    cctv: 'CCTV Camera',
    keyboard: 'Keyboard',
    mouse: 'Mouse',
    computer: 'Desktop PC',
    speaker: 'Speaker',
    accessories: 'Accessory'
  };
  const catLabel = catLabels[category] || 'Tech Product';

  // Apply changes helper
  const applyChanges = (base64Image = null) => {
    p.name = name;
    p.category = category;
    p.catLabel = catLabel;
    p.badge = badge;
    p.price = price;
    p.oldPrice = oldPrice;
    p.discount = discount;
    p.stock = stock;

    if (base64Image) {
      p.image = base64Image;
    }

    // Refresh specs in fallback SVG if no image is present
    if (!p.image) {
      if (category === 'cctv') {
        p.svgBg = 'rgba(108,99,255,0.08)';
        p.svgPath = `<ellipse cx="60" cy="55" rx="30" ry="30" fill="rgba(108,99,255,0.2)" stroke="#6C63FF" stroke-width="2"/>
                    <ellipse cx="60" cy="55" rx="16" ry="16" fill="#6C63FF" opacity="0.5"/>
                    <circle cx="60" cy="55" r="7" fill="#6C63FF"/>
                    <path d="M90 55h20l12-15v30l-12-15" fill="none" stroke="#6C63FF" stroke-width="3" stroke-linejoin="round"/>
                    <text x="60" y="110" text-anchor="middle" fill="#6C63FF" font-size="10" font-weight="600" font-family="Inter,sans-serif">${specs || '4K • Dome'}</text>`;
      } else if (category === 'keyboard') {
        p.svgBg = 'rgba(62,207,207,0.08)';
        p.svgPath = `<rect x="10" y="38" width="100" height="50" rx="6" fill="rgba(62,207,207,0.12)" stroke="#3ECFCF" stroke-width="2"/>
                    <rect x="25" y="48" width="15" height="10" rx="2" fill="#3ECFCF" opacity="0.7"/>
                    <rect x="45" y="48" width="15" height="10" rx="2" fill="#6C63FF" opacity="0.7"/>
                    <rect x="65" y="48" width="15" height="10" rx="2" fill="#FF6B9D" opacity="0.7"/>
                    <rect x="85" y="48" width="15" height="10" rx="2" fill="#F7C948" opacity="0.7"/>
                    <rect x="35" y="65" width="50" height="10" rx="3" fill="#3ECFCF" opacity="0.5"/>
                    <text x="60" y="105" text-anchor="middle" fill="#3ECFCF" font-size="10" font-weight="600" font-family="Inter,sans-serif">${specs || 'Mechanical'}</text>`;
      } else if (category === 'mouse') {
        p.svgBg = 'rgba(255,107,157,0.08)';
        p.svgPath = `<path d="M35 35 Q60 28 85 35 L90 80 Q60 95 30 80 Z" fill="rgba(255,107,157,0.15)" stroke="#FF6B9D" stroke-width="2"/>
                    <line x1="60" y1="28" x2="60" y2="65" stroke="#FF6B9D" stroke-width="2" opacity="0.7"/>
                    <ellipse cx="60" cy="48" rx="10" ry="6" fill="rgba(255,107,157,0.4)"/>
                    <circle cx="60" cy="80" r="4" fill="#FF6B9D"/>
                    <text x="60" y="108" text-anchor="middle" fill="#FF6B9D" font-size="10" font-weight="600" font-family="Inter,sans-serif">${specs || 'Gaming Mouse'}</text>`;
      } else if (category === 'computer') {
        p.svgBg = 'rgba(247,201,72,0.08)';
        p.svgPath = `<rect x="15" y="22" width="90" height="58" rx="5" fill="rgba(247,201,72,0.12)" stroke="#F7C948" stroke-width="2"/>
                    <rect x="22" y="28" width="76" height="46" rx="2" fill="#0a0a12"/>
                    <rect x="45" y="80" width="30" height="5" rx="2" fill="#F7C948" opacity="0.4"/>
                    <rect x="50" y="85" width="20" height="4" rx="2" fill="#F7C948" opacity="0.3"/>
                    <text x="60" y="108" text-anchor="middle" fill="#F7C948" font-size="9" font-weight="600" font-family="Inter,sans-serif">${specs || 'Intel Core PC'}</text>`;
      } else if (category === 'speaker') {
        p.svgBg = 'rgba(62,207,207,0.08)';
        p.svgPath = `<rect x="25" y="20" width="70" height="75" rx="6" fill="rgba(62,207,207,0.12)" stroke="#3ECFCF" stroke-width="2"/>
                    <circle cx="60" cy="45" r="15" fill="none" stroke="#3ECFCF" stroke-width="2"/>
                    <circle cx="60" cy="45" r="6" fill="#3ECFCF" opacity="0.5"/>
                    <circle cx="60" cy="78" r="8" fill="none" stroke="#3ECFCF" stroke-width="1.5"/>
                    <text x="60" y="110" text-anchor="middle" fill="#3ECFCF" font-size="10" font-weight="600" font-family="Inter,sans-serif">${specs || 'Desktop Audio'}</text>`;
      } else {
        p.svgBg = 'rgba(255,107,157,0.08)';
        p.svgPath = `<circle cx="60" cy="50" r="20" stroke="#FF6B9D" stroke-width="2" fill="none"/>
                    <circle cx="60" cy="50" r="8" fill="#FF6B9D" opacity="0.4"/>
                    <path d="M60 18v12M60 70v12M28 50h12M80 50h12" stroke="#FF6B9D" stroke-width="2.5" stroke-linecap="round"/>
                    <text x="60" y="105" text-anchor="middle" fill="#FF6B9D" font-size="10" font-weight="600" font-family="Inter,sans-serif">${specs || 'PC Hub Gear'}</text>`;
      }
    }

    saveProductsState();
    
    // Sync UI
    const searchVal = document.getElementById('dash-search-input').value;
    renderDashboardProducts(searchVal);
    renderProducts(currentFilter);
    validateCartStock();

    closeEditModal();
    showToast(`✏️ Changes to "${name}" saved!`);
  };

  const photoInput = document.getElementById('edit-prod-photo');
  if (photoInput.files && photoInput.files.length > 0) {
    compressImage(photoInput.files[0], function(base64Image) {
      applyChanges(base64Image);
    });
  } else {
    applyChanges();
  }
}

// =============================================
// DYNAMIC CATEGORIES LOGIC
// =============================================
function renderCategories() {
  const container = document.getElementById('categories-grid');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => {
    // Count products in this category dynamically
    const count = PRODUCTS.filter(p => p.category === cat.id).length;
    return `
      <div class="category-card cat-${cat.id}" id="cat-${cat.id}" onclick="filterProducts('${cat.id}')">
        <div class="cat-icon">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            ${cat.svgPath}
          </svg>
        </div>
        <h3 class="cat-name">${cat.name}</h3>
        <p class="cat-desc">${cat.desc}</p>
        <span class="cat-count">${count} Product${count !== 1 ? 's' : ''}</span>
        <div class="cat-arrow">→</div>
      </div>
    `;
  }).join('');
}

function renderFilterBar() {
  const filterBar = document.getElementById('filter-bar');
  if (!filterBar) return;

  const buttonsHTML = `
    <button class="filter-btn active" id="filter-all" onclick="filterProducts('all')">All</button>
  ` + CATEGORIES.map(cat => `
    <button class="filter-btn" id="filter-${cat.id}" onclick="filterProducts('${cat.id}')">${cat.name}</button>
  `).join('');

  filterBar.innerHTML = buttonsHTML;
}

function populateCategoryDropdowns() {
  const addSelect = document.getElementById('prod-cat');
  const editSelect = document.getElementById('edit-prod-cat');
  
  const optionsHTML = CATEGORIES.map(cat => `
    <option value="${cat.id}">${cat.name}</option>
  `).join('');

  if (addSelect) addSelect.innerHTML = optionsHTML;
  if (editSelect) editSelect.innerHTML = optionsHTML;
}

// Switch between different Owner Dashboard tab panels (Products, Categories, Payments)
function switchDashboardTab(tabName) {
  const productsPanel = document.getElementById('dash-products-panel');
  const categoriesPanel = document.getElementById('dash-categories-panel');
  const paymentsPanel = document.getElementById('dash-payments-panel');

  const tabProdBtn = document.getElementById('tab-products');
  const tabCatBtn = document.getElementById('tab-categories');
  const tabPayBtn = document.getElementById('tab-payments');

  // Hide all panels
  if (productsPanel) productsPanel.style.display = 'none';
  if (categoriesPanel) categoriesPanel.style.display = 'none';
  if (paymentsPanel) paymentsPanel.style.display = 'none';

  // Remove active state from all tabs
  if (tabProdBtn) tabProdBtn.classList.remove('active');
  if (tabCatBtn) tabCatBtn.classList.remove('active');
  if (tabPayBtn) tabPayBtn.classList.remove('active');

  // Show selected panel & activate tab button
  if (tabName === 'products') {
    if (productsPanel) productsPanel.style.display = 'grid';
    if (tabProdBtn) tabProdBtn.classList.add('active');
    renderDashboardProducts();
  } else if (tabName === 'categories') {
    if (categoriesPanel) categoriesPanel.style.display = 'grid';
    if (tabCatBtn) tabCatBtn.classList.add('active');
    renderDashboardCategories();
  } else if (tabName === 'payments') {
    if (paymentsPanel) paymentsPanel.style.display = 'grid';
    if (tabPayBtn) tabPayBtn.classList.add('active');
    fetchDashboardPayments();
  }
}

// Fetch all payment logs from Supabase and render in list
function fetchDashboardPayments() {
  const container = document.getElementById('dashboard-payments-list');
  if (!container) return;

  if (!window.supabaseDb) {
    container.innerHTML = `
      <div style="padding:40px; text-align:center; color:var(--text-muted); font-size:0.9rem;">
        ⚠️ Supabase cloud database is not configured. Payments tab requires a connected database.
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div style="padding:40px; text-align:center; color:var(--text-secondary); font-size:0.9rem;">
      ⌛ Fetching payments log from Supabase...
    </div>
  `;

  window.supabaseDb
    .from('payments')
    .select('*')
    .order('created_at', { ascending: false })
    .then(({ data: list, error }) => {
      if (error) {
        console.error('Error fetching payments:', error.message);
        container.innerHTML = `
          <div style="padding:40px; text-align:center; color:#ff5f57; font-size:0.9rem;">
            ⚠️ Error loading payments: ${error.message}
          </div>
        `;
        return;
      }

      if (!list || list.length === 0) {
        container.innerHTML = `
          <div style="padding:40px; text-align:center; color:var(--text-muted); font-size:0.9rem;">
            📭 No customer payments found in the database.
          </div>
        `;
        return;
      }

      container.innerHTML = list.map(pay => {
        return `
          <div class="dashboard-item">
            <div class="dash-item-icon" style="background: rgba(62,207,207,0.06); border: 1px solid var(--border); overflow:hidden;">
              <img src="${pay.screenshot}" style="width:100%; height:100%; object-fit:cover;" alt="Receipt Thumbnail"/>
            </div>
            <div class="dash-item-details">
              <div class="dash-item-name" style="font-size:0.9rem;">${pay.product_name} &nbsp;•&nbsp; <strong style="color:var(--cyan);">₹${Number(pay.price).toLocaleString('en-IN')}</strong></div>
              <div class="dash-item-meta" style="font-size:0.75rem;">Receipt ID: #${pay.id} &nbsp;•&nbsp; Date: ${new Date(pay.created_at).toLocaleString('en-IN')}</div>
            </div>
            <div class="dash-item-controls" style="gap:12px;">
              <button class="btn btn-primary btn-sm" style="padding:6px 12px; font-size:0.75rem; border-radius:100px;" onclick="showPaymentReceiptModal(${JSON.stringify(pay).replace(/"/g, '&quot;')})">
                👁️ View Screenshot
              </button>
              <button class="dash-btn-delete" onclick="deletePaymentRecord(${pay.id})" title="Delete Payment record" style="margin-left:4px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>
              </button>
            </div>
          </div>
        `;
      }).join('');
    });
}

// Delete payment log row from Supabase
function deletePaymentRecord(paymentId) {
  if (!confirm(`Are you sure you want to delete payment receipt record #${paymentId} from the database? This action cannot be undone.`)) {
    return;
  }

  if (!window.supabaseDb) return;

  window.supabaseDb
    .from('payments')
    .delete()
    .eq('id', paymentId)
    .then(({ error }) => {
      if (error) {
        console.error('Delete payment error:', error.message);
        showToast('⚠️ Could not delete payment record.');
      } else {
        showToast(`🗑️ Payment record #${paymentId} deleted.`);
        fetchDashboardPayments(); // Refresh list
      }
    });
}

// Render categories in Owner panel list
function renderDashboardCategories() {
  const listContainer = document.getElementById('dashboard-category-list');
  if (!listContainer) return;

  if (CATEGORIES.length === 0) {
    listContainer.innerHTML = '<div style="padding:24px; text-align:center; color:var(--text-muted); font-size:0.875rem;">No categories found</div>';
    return;
  }

  listContainer.innerHTML = CATEGORIES.map(cat => {
    const prodCount = PRODUCTS.filter(p => p.category === cat.id).length;
    return `
      <div class="dashboard-item">
        <div class="dash-item-icon" style="background:${cat.svgBg || 'rgba(108,99,255,0.08)'}">
          <svg viewBox="0 0 64 64" fill="none" style="width:28px; height:28px;">
            ${cat.svgPath}
          </svg>
        </div>
        <div class="dash-item-details">
          <div class="dash-item-name">${cat.name} (Key: ${cat.id})</div>
          <div class="dash-item-meta">${cat.desc} &nbsp;•&nbsp; ${prodCount} Product${prodCount !== 1 ? 's' : ''}</div>
        </div>
        <div class="dash-item-controls">
          <button class="dash-btn-delete" onclick="deleteDashboardCategory('${cat.id}')" title="Delete Category">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Add Dynamic Category
function handleAddCategory(e) {
  e.preventDefault();

  const id = document.getElementById('cat-id-input').value.trim().toLowerCase();
  const name = document.getElementById('cat-name-input').value.trim();
  const desc = document.getElementById('cat-desc-input').value.trim();

  // Validate ID format & duplicate checks
  if (!/^[a-z0-9]+$/.test(id)) {
    showToast('⚠️ Category ID key must be lowercase letters and numbers only!');
    return;
  }
  if (CATEGORIES.some(c => c.id === id)) {
    showToast('⚠️ Category ID key already exists!');
    return;
  }

  // Create a default category circle vector icon
  const svgBg = 'rgba(108,99,255,0.08)';
  const svgPath = `<circle cx="32" cy="32" r="30" fill="url(#cctvGrad)" opacity="0.15"/><circle cx="32" cy="32" r="10" stroke="#6C63FF" stroke-width="2"/><circle cx="32" cy="32" r="4" fill="#3ECFCF"/><defs><linearGradient id="cctvGrad" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#6C63FF"/><stop offset="1" stop-color="#3ECFCF"/></linearGradient></defs>`;

  const newCategory = {
    id,
    name,
    desc,
    svgBg,
    svgPath
  };

  CATEGORIES.push(newCategory);
  saveCategoriesState();

  // Sync controls and update forms
  populateCategoryDropdowns();
  renderCategories();
  renderFilterBar();
  renderDashboardCategories();

  document.getElementById('add-category-form').reset();
  showToast(`✅ Category "${name}" added successfully!`);
}

// Delete Category and safe re-categorize items
function deleteDashboardCategory(categoryId) {
  if (CATEGORIES.length <= 1) {
    showToast('⚠️ At least one category must exist in the catalog!');
    return;
  }

  const cat = CATEGORIES.find(c => c.id === categoryId);
  if (!cat) return;

  const prodCount = PRODUCTS.filter(p => p.category === categoryId).length;
  const warningMsg = prodCount > 0 
    ? `Warning: There are ${prodCount} products in this category. Deleting this category will move all of them to the "Uncategorized" category.\n\nAre you sure you want to delete "${cat.name}"?`
    : `Are you sure you want to delete the category "${cat.name}"?`;

  if (confirm(warningMsg)) {
    CATEGORIES = CATEGORIES.filter(c => c.id !== categoryId);
    
    // Ensure "uncategorized" exists if we have products to move
    if (prodCount > 0 && !CATEGORIES.some(c => c.id === 'uncategorized')) {
      CATEGORIES.push({
        id: 'uncategorized',
        name: 'Uncategorized',
        desc: 'Other products without specified category',
        svgBg: 'rgba(255,107,157,0.08)',
        svgPath: `<circle cx="32" cy="32" r="30" fill="rgba(255,107,157,0.15)" stroke="#FF6B9D" stroke-width="2"/><circle cx="32" cy="32" r="10" stroke="#FF6B9D" stroke-width="2" opacity="0.6"/>`
      });
    }

    // Remap products category
    PRODUCTS.forEach(p => {
      if (p.category === categoryId) {
        p.category = 'uncategorized';
        p.catLabel = 'Uncategorized';
      }
    });

    saveCategoriesState();
    saveProductsState();

    // Re-sync UI components
    populateCategoryDropdowns();
    renderCategories();
    renderFilterBar();
    renderDashboardCategories();
    renderDashboardProducts(); // update count labels if visible
    renderProducts('all'); // refresh main listings

    showToast(`🗑️ Category "${cat.name}" deleted.`);
  }
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

/* ============================================
   UI / UX PRO – MOTION GRAPHICS & FRAMER MOTION MODULE
   ============================================ */

// 1. Framer Motion Scroll Progress & Reveal Controller
function initFramerMotionEngine() {
  const progressBar = document.getElementById('scroll-progress');
  
  // Track scroll position using Motion or scroll listener fallback
  const updateScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
    if (progressBar) {
      progressBar.style.transform = `scaleX(${progress})`;
    }
  };
  
  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();

  // Scroll InView Staggered Reveal using Motion.inView or IntersectionObserver
  if (window.Motion && typeof window.Motion.inView === 'function') {
    window.Motion.inView('.reveal-on-scroll', (info) => {
      window.Motion.animate(info.target, 
        { opacity: [0, 1], y: [35, 0], scale: [0.96, 1] }, 
        { duration: 0.6, easing: [0.16, 1, 0.3, 1] }
      );
    });
  } else {
    // IntersectionObserver fallback
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
  }
}

// 2. 60 FPS Canvas Hero Motion Graphics Engine
let heroCanvasAnimId = null;
let heroParticlesRunning = true;

function initHeroCanvasMotion() {
  const canvas = document.getElementById('motion-hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight || window.innerHeight);

  window.addEventListener('resize', () => {
    if (!canvas || !canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
  });

  // Mouse repulsion coordinates
  let mouse = { x: -1000, y: -1000, radius: 150 };

  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  const colors = ['#6366F1', '#0EA5E9', '#EC4899', '#EAB308'];
  const numParticles = Math.min(Math.floor(width / 18), 65);
  const particles = [];

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2.5 + 1.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      pulse: Math.random() * Math.PI * 2
    });
  }

  function renderFrame() {
    if (!heroParticlesRunning) return;
    ctx.clearRect(0, 0, width, height);

    // Render connecting energy lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const opacity = (1 - dist / 130) * 0.22;
          ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    // Update & draw particles
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.pulse += 0.03;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Mouse interactive push
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < mouse.radius) {
        const angle = Math.atan2(dy, dx);
        const force = (mouse.radius - dist) / mouse.radius;
        p.x += Math.cos(angle) * force * 3;
        p.y += Math.sin(angle) * force * 3;
      }

      const r = p.radius + Math.sin(p.pulse) * 0.5;

      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 12;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    heroCanvasAnimId = requestAnimationFrame(renderFrame);
  }

  renderFrame();

  // Wire Ambient Motion FX Toggle Button
  const toggleBtn = document.getElementById('toggle-ambient-btn');
  const dot = toggleBtn ? toggleBtn.querySelector('.motion-dot') : null;
  const btnText = document.getElementById('motion-btn-text');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      heroParticlesRunning = !heroParticlesRunning;
      if (heroParticlesRunning) {
        if (dot) dot.classList.remove('off');
        if (btnText) btnText.textContent = 'Motion FX';
        renderFrame();
      } else {
        if (dot) dot.classList.add('off');
        if (btnText) btnText.textContent = 'Motion OFF';
        if (heroCanvasAnimId) cancelAnimationFrame(heroCanvasAnimId);
        ctx.clearRect(0, 0, width, height);
      }
    });
  }
}

// 3. 3D Interactive Perspective Tilt Controller
function init3DTiltCards() {
  const cardSelectors = '.product-card, .category-card, .feature-card, .hero-owner-scene';

  document.body.addEventListener('mousemove', (e) => {
    const card = e.target.closest(cardSelectors);
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.setProperty('--mx', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--my', `${(y / rect.height) * 100}%`);
  });

  document.body.addEventListener('mouseout', (e) => {
    const card = e.target.closest(cardSelectors);
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
}

// 4. Magnetic Hover Button Motion
function initMagneticButtons() {
  const magneticTargets = document.querySelectorAll('.btn-primary, .btn-ghost, .owner-portal-btn, .btn-cart, .btn-search, .motion-widget-btn');

  magneticTargets.forEach(btn => {
    btn.classList.add('btn-magnetic');

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate3d(${x * 0.25}px, ${y * 0.25}px, 0px) scale(1.04)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
    });
  });
}

// 5. Glowing Cursor Aura Follower
function initCursorAura() {
  const aura = document.getElementById('cursor-aura');
  if (!aura) return;

  let currentX = 0, currentY = 0;
  let targetX = 0, targetY = 0;

  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  function updateAura() {
    currentX += (targetX - currentX) * 0.15;
    currentY += (targetY - currentY) * 0.15;
    aura.style.left = `${currentX}px`;
    aura.style.top = `${currentY}px`;
    requestAnimationFrame(updateAura);
  }

  updateAura();
}

// 6. Kinetic Back To Top Button
function initKineticBackToTop() {
  const topBtn = document.getElementById('back-to-top-btn');
  if (!topBtn) return;

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.Motion && typeof window.Motion.animate === 'function') {
      window.Motion.animate(topBtn, { y: [-15, 0], scale: [1.3, 1] }, { duration: 0.5 });
    }
  });
}

// 7. Fullscreen Scroll Motion Graphics Canvas Engine
function initScrollMotionGraphicsEngine() {
  const canvas = document.getElementById('scroll-motion-bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  let currentScrollY = window.scrollY;
  let lastScrollY = window.scrollY;
  let scrollVelocity = 0;

  window.addEventListener('scroll', () => {
    currentScrollY = window.scrollY;
    scrollVelocity = Math.abs(currentScrollY - lastScrollY);
    lastScrollY = currentScrollY;
  }, { passive: true });

  const geometry = [];
  const colors = ['rgba(99, 102, 241, ', 'rgba(14, 165, 233, ', 'rgba(236, 72, 153, '];

  for (let i = 0; i < 28; i++) {
    geometry.push({
      x: Math.random() * width,
      y: Math.random() * height * 3,
      size: Math.random() * 36 + 14,
      type: Math.floor(Math.random() * 3), // 0: ring, 1: cross, 2: node
      color: colors[Math.floor(Math.random() * colors.length)],
      rotSpeed: (Math.random() - 0.5) * 0.02,
      rotation: Math.random() * Math.PI * 2
    });
  }

  function renderScrollFrame() {
    ctx.clearRect(0, 0, width, height);

    const scrollOffsetY = currentScrollY * 0.35;

    geometry.forEach((item) => {
      const screenY = (item.y - scrollOffsetY) % (height * 1.5);
      const drawY = screenY < -50 ? screenY + height * 1.5 : screenY;

      item.rotation += item.rotSpeed + scrollVelocity * 0.001;

      ctx.save();
      ctx.translate(item.x, drawY);
      ctx.rotate(item.rotation);

      const alpha = 0.12 + Math.min(scrollVelocity * 0.004, 0.22);

      if (item.type === 0) {
        // Rotating Tech Ring
        ctx.beginPath();
        ctx.arc(0, 0, item.size, 0, Math.PI * 2);
        ctx.strokeStyle = item.color + alpha + ')';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, item.size * 0.5, 0, Math.PI * 2);
        ctx.strokeStyle = item.color + (alpha * 0.6) + ')';
        ctx.lineWidth = 1;
        ctx.stroke();
      } else if (item.type === 1) {
        // Tech Crosshair Accent
        ctx.strokeStyle = item.color + alpha + ')';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(-item.size / 2, 0);
        ctx.lineTo(item.size / 2, 0);
        ctx.moveTo(0, -item.size / 2);
        ctx.lineTo(0, item.size / 2);
        ctx.stroke();
      } else {
        // Kinetic Glowing Node
        ctx.beginPath();
        ctx.arc(0, 0, item.size * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = item.color + (alpha * 1.2) + ')';
        ctx.fill();
      }

      ctx.restore();
    });

    // Animate section headers underline on scroll
    document.querySelectorAll('.section-header, .section-title').forEach(header => {
      const rect = header.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
        header.classList.add('is-visible');
      }
    });

    requestAnimationFrame(renderScrollFrame);
  }

  renderScrollFrame();
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  checkOwnerSession();
  populateCategoryDropdowns();
  renderCategories();
  renderFilterBar();
  renderProducts('all');
  initNavbar();
  initSearch();
  initCounters();
  initScrollReveal();

  // Initialize UI/UX Pro Motion Graphics & Framer Motion suite
  initFramerMotionEngine();
  initHeroCanvasMotion();
  initScrollMotionGraphicsEngine();
  init3DTiltCards();
  initMagneticButtons();
  initCursorAura();
  initKineticBackToTop();

  // Cart button from hero section
  const cartBtn = document.getElementById('cart-btn');
  if (cartBtn) cartBtn.addEventListener('click', toggleCart);

  // ── Supabase real-time sync ────────────────────────────────
  // initSupabase() is safe to call even when Supabase isn't configured —
  // it checks window.supabaseDb and silently does nothing if not set up.
  initSupabase();

  // ── Check if user landed on payment receipt viewer link ──
  checkPaymentReceipt();
});


