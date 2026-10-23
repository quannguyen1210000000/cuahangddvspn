/* ==========================================================================
   EvaCare - Website Bán Dung Dịch Vệ Sinh Phụ Nữ & Chăm Sóc Phái Đẹp
   JavaScript Xử Lý Tương Tác Cấu Trúc 1 Trang (Single Page Website)
   ========================================================================== */

// 1. Danh sách sản phẩm mẫu (Sample Products Data)
const productsData = [
  {
    id: 1,
    name: "Dung Dịch Vệ Sinh EvaCare Gentle Care (Trầu Không & Cúc La Mã)",
    category: "daily",
    categoryName: "Dùng hàng ngày",
    price: 135000,
    oldPrice: 165000,
    rating: 5.0,
    reviewsCount: 128,
    badge: "Bán Chạy",
    badgeType: "",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    description: "Chiết xuất trầu không & cúc la mã tự nhiên, giúp làm sạch dịu nhẹ, kháng khuẩn 24h, cân bằng độ pH chuẩn 3.8 - 4.5. Phù hợp cho sử dụng hằng ngày."
  },
  {
    id: 2,
    name: "Bọt Vệ Sinh Cao Cấp EvaCare Soft Foam (Lô Hội & Trà Xanh)",
    category: "sensitive",
    categoryName: "Da nhạy cảm",
    price: 185000,
    oldPrice: 220000,
    rating: 4.9,
    reviewsCount: 96,
    badge: "Mới",
    badgeType: "organic",
    image: "https://images.unsplash.com/photo-1608248597262-8380268fe5e1?auto=format&fit=crop&w=600&q=80",
    description: "Tạo bọt mịn sẵn tức thì từ chiết xuất Lô Hội hữu cơ & Trà Xanh, tạo cảm giác thoáng mát, êm dịu nhất cho vùng da nhạy cảm."
  },
  {
    id: 3,
    name: "Dung Dịch Vệ Sinh Thảo Dược Hữu Cơ EvaCare Organic Herbal",
    category: "herbal",
    categoryName: "Thảo dược",
    price: 210000,
    oldPrice: 250000,
    rating: 4.8,
    reviewsCount: 84,
    badge: "Giảm 16%",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    description: "100% thảo dược thiên nhiên tuyển chọn (Kinh giới, Khổ sâm, Bạc hà). Giúp giảm ngứa, ngừa viêm nhiễm hiệu quả và mang lại hương thơm tự nhiên."
  },
  {
    id: 4,
    name: "Gel Vệ Sinh Dưỡng Ẩm & Trẻ Hóa EvaCare Hydra Pink Collagen",
    category: "hydra",
    categoryName: "Dưỡng ẩm & Trẻ hóa",
    price: 245000,
    oldPrice: 290000,
    rating: 5.0,
    reviewsCount: 142,
    badge: "Cao Cấp",
    badgeType: "",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
    description: "Bổ sung Collagen thực vật, Hyaluronic Acid & Vitamin E giúp dưỡng ẩm chuyên sâu, cải thiện độ đàn hồi và làm sáng mịn hồng hào vùng nhạy cảm."
  },
  {
    id: 5,
    name: "Xịt Kháng Khuẩn & Khử Mùi Nhanh EvaCare Fresh Mist 50ml",
    category: "daily",
    categoryName: "Dùng hàng ngày",
    price: 99000,
    oldPrice: 130000,
    rating: 4.7,
    reviewsCount: 79,
    badge: "Tiện Lợi",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
    description: "Chai xịt nhỏ gọn tiện bỏ túi xách, kháng khuẩn và khử mùi tức thì không cần rửa lại với nước. Thích hợp đi làm, du lịch."
  },
  {
    id: 6,
    name: "Dung Dịch Vệ Sinh Cho Mẹ Bầu & Sau Sinh EvaCare Pure & Safe",
    category: "sensitive",
    categoryName: "Da nhạy cảm",
    price: 195000,
    oldPrice: 230000,
    rating: 4.9,
    reviewsCount: 110,
    badge: "An Toàn Mẹ Bầu",
    badgeType: "organic",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
    description: "Công thức không xà phòng, không paraben, không hương liệu nhân tạo. Được các bác sĩ phụ khoa khuyên dùng cho phụ nữ mang thai và sau sinh."
  },
  {
    id: 7,
    name: "Gel Vệ Sinh Thảo Dược Nghệ Tây & Nhụy Hoa EvaCare Saffron",
    category: "herbal",
    categoryName: "Thảo dược",
    price: 260000,
    oldPrice: 310000,
    rating: 5.0,
    reviewsCount: 65,
    badge: "Khuyến Mãi",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    description: "Chứa tinh chất Saffron (Nhụy hoa nghệ tây) chống oxy hóa mạnh mẽ, làm dịu tổn thương và dưỡng da mịn màng, quý phái."
  },
  {
    id: 8,
    name: "Bộ Đôi Chăm Sóc Toàn Diện EvaCare Combo Day & Night",
    category: "hydra",
    categoryName: "Dưỡng ẩm & Trẻ hóa",
    price: 360000,
    oldPrice: 450000,
    rating: 5.0,
    reviewsCount: 210,
    badge: "Tiết Kiệm 20%",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    description: "Bộ sản phẩm gồm 1 Chai Gel hàng ngày (Ban ngày thoáng mát) + 1 Chai Bọt Serum Collagen (Ban đêm dưỡng ẩm chuyên sâu)."
  }
];

// 2. Quản lý trạng thái Giỏ hàng (Cart State)
let cart = JSON.parse(localStorage.getItem('evacare_cart')) || [];

function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

// 3. Khởi tạo khi DOM tải xong
document.addEventListener('DOMContentLoaded', () => {
  initCartUI();
  renderProducts('all');
  viewProductDetail(1, false);
  setupEventListeners();
  checkAuthHash();
});

window.addEventListener('hashchange', checkAuthHash);

function checkAuthHash() {
  const hash = window.location.hash;
  const search = window.location.search;
  if (hash === '#register' || search.includes('tab=register')) {
    switchAuthTab('register');
  } else if (hash === '#login' || search.includes('tab=login')) {
    switchAuthTab('login');
  }
}

// 4. Render danh sách sản phẩm
function renderProducts(filterCategory = 'all') {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = filterCategory === 'all' 
    ? productsData 
    : productsData.filter(p => p.category === filterCategory);

  grid.innerHTML = filtered.map(product => `
    <div class="product-card" data-id="${product.id}">
      ${product.badge ? `<span class="product-badge ${product.badgeType}">${product.badge}</span>` : ''}
      <div class="product-img-box" onclick="viewProductDetail(${product.id}, true)" style="cursor:pointer;">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <button class="quick-view-btn" onclick="event.stopPropagation(); viewProductDetail(${product.id}, true)">
          <i class="fas fa-eye"></i> Xem chi tiết
        </button>
      </div>
      <div class="product-info">
        <div class="product-category">${product.categoryName}</div>
        <h3 class="product-name" title="${product.name}" onclick="viewProductDetail(${product.id}, true)" style="cursor:pointer;">${product.name}</h3>
        <div class="product-rating">
          ${'<i class="fas fa-star"></i>'.repeat(Math.floor(product.rating))}
          <span>${product.rating} (${product.reviewsCount})</span>
        </div>
        <div class="product-price-row">
          <div class="price-group">
            <span class="current-price">${formatCurrency(product.price)}</span>
            ${product.oldPrice ? `<span class="old-price">${formatCurrency(product.oldPrice)}</span>` : ''}
          </div>
          <button class="add-cart-btn" onclick="addToCart(${product.id})" title="Thêm vào giỏ hàng">
            <i class="fas fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// 5. Cài đặt Event Listeners & Active State Cho Nav Link
function setupEventListeners() {
  // Tabs filter
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      tabBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const category = e.target.getAttribute('data-filter');
      renderProducts(category);
    });
  });

  // Nav Links Active State on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-toggle-btn');
  const navMenu = document.getElementById('nav-menu');
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Cart Drawer open/close
  const cartBtn = document.getElementById('cart-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartOverlay = document.getElementById('cart-overlay');

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // Search filter
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const keyword = e.target.value.toLowerCase().trim();
      const grid = document.getElementById('products-grid');
      if (!grid) return;

      const filtered = productsData.filter(p => p.name.toLowerCase().includes(keyword) || p.description.toLowerCase().includes(keyword));
      if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
          <i class="fas fa-search" style="font-size: 2.5rem; margin-bottom: 12px; display: block;"></i>
          Không tìm thấy sản phẩm phù hợp với từ khóa "${keyword}"
        </div>`;
      } else {
        grid.innerHTML = filtered.map(product => `
          <div class="product-card" data-id="${product.id}">
            ${product.badge ? `<span class="product-badge ${product.badgeType}">${product.badge}</span>` : ''}
            <div class="product-img-box">
              <img src="${product.image}" alt="${product.name}">
              <button class="quick-view-btn" onclick="openQuickView(${product.id})">Xem nhanh</button>
            </div>
            <div class="product-info">
              <div class="product-category">${product.categoryName}</div>
              <h3 class="product-name">${product.name}</h3>
              <div class="product-rating">
                ${'<i class="fas fa-star"></i>'.repeat(Math.floor(product.rating))}
                <span>${product.rating}</span>
              </div>
              <div class="product-price-row">
                <div class="price-group">
                  <span class="current-price">${formatCurrency(product.price)}</span>
                </div>
                <button class="add-cart-btn" onclick="addToCart(${product.id})"><i class="fas fa-cart-plus"></i></button>
              </div>
            </div>
          </div>
        `).join('');
      }
    });
  }

  // FAQ Accordions
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    }
  });

  // Password Visibility Toggle
  const togglePassBtns = document.querySelectorAll('.toggle-password');
  togglePassBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const input = this.parentElement.querySelector('input');
      if (input.type === 'password') {
        input.type = 'text';
        this.classList.replace('fa-eye', 'fa-eye-slash');
      } else {
        input.type = 'password';
        this.classList.replace('fa-eye-slash', 'fa-eye');
      }
    });
  });

  // Password Strength Indicator
  const regPassword = document.getElementById('reg-password');
  if (regPassword) {
    regPassword.addEventListener('input', function() {
      const val = this.value;
      const bar = document.getElementById('strength-bar');
      if (!bar) return;

      if (val.length === 0) {
        bar.className = 'strength-bar';
      } else if (val.length < 6) {
        bar.className = 'strength-bar weak';
      } else if (val.length < 10 || !/\d/.test(val) || !/[a-zA-Z]/.test(val)) {
        bar.className = 'strength-bar medium';
      } else {
        bar.className = 'strength-bar strong';
      }
    });
  }
}

// 6. Switch Auth Tab (Chuyển đổi giữa Đăng Nhập & Đăng Ký trong 1 Box duy nhất)
function switchAuthTab(tab) {
  const loginView = document.getElementById('login-box-view');
  const regView = document.getElementById('register-box-view');
  const loginBtn = document.getElementById('tab-login-btn');
  const regBtn = document.getElementById('tab-register-btn');

  if (!loginView || !regView) return;

  if (tab === 'login') {
    loginView.style.display = 'block';
    regView.style.display = 'none';
    if (loginBtn) {
      loginBtn.classList.add('active', 'tab-login');
      loginBtn.classList.remove('tab-register');
      loginBtn.style.background = '';
      loginBtn.style.color = '';
    }
    if (regBtn) {
      regBtn.classList.remove('active', 'tab-login', 'tab-register');
      regBtn.style.background = '';
      regBtn.style.color = '';
    }
    const pageTitle = document.querySelector('title');
    if (pageTitle && pageTitle.textContent.includes('EvaCare')) {
      document.title = 'Đăng Nhập - EvaCare Chăm Sóc Phái Đẹp';
    }
  } else if (tab === 'register') {
    loginView.style.display = 'none';
    regView.style.display = 'block';
    if (regBtn) {
      regBtn.classList.add('active', 'tab-register');
      regBtn.classList.remove('tab-login');
      regBtn.style.background = '';
      regBtn.style.color = '';
    }
    if (loginBtn) {
      loginBtn.classList.remove('active', 'tab-login', 'tab-register');
      loginBtn.style.background = '';
      loginBtn.style.color = '';
    }
    const pageTitle = document.querySelector('title');
    if (pageTitle && pageTitle.textContent.includes('EvaCare')) {
      document.title = 'Đăng Ký - EvaCare Chăm Sóc Phái Đẹp';
    }
  }

  // Cập nhật trạng thái active trên thanh điều hướng Header (nếu có)
  const navLogin = document.getElementById('nav-login-link');
  const navReg = document.getElementById('nav-register-link');
  if (navLogin && navReg) {
    if (tab === 'login') {
      navLogin.classList.add('active');
      navReg.classList.remove('active');
    } else {
      navReg.classList.add('active');
      navLogin.classList.remove('active');
    }
  }
}

// 7. Xử lý Giỏ hàng Drawer Functions
function openCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer && overlay) {
    drawer.classList.add('active');
    overlay.classList.add('active');
  }
}

function closeCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer && overlay) {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
  }
}

function addToCart(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();
  openCart();
  showToast(`Đã thêm "${product.name}" vào giỏ hàng!`, 'success');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
  showToast("Đã xóa sản phẩm khỏi giỏ hàng", "info");
}

function updateQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
    updateCartUI();
  }
}

function saveCart() {
  localStorage.setItem('evacare_cart', JSON.stringify(cart));
}

function initCartUI() {
  updateCartUI();
}

function updateCartUI() {
  const badgeCounts = document.querySelectorAll('.cart-count-badge');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  badgeCounts.forEach(b => b.textContent = totalItems);

  const cartBody = document.getElementById('cart-body');
  const cartTotalEl = document.getElementById('cart-total-price');

  if (!cartBody) return;

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div class="empty-cart-msg">
        <i class="fas fa-shopping-bag"></i>
        <p>Giỏ hàng của bạn đang trống</p>
      </div>
    `;
    if (cartTotalEl) cartTotalEl.textContent = formatCurrency(0);
    return;
  }

  cartBody.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">${formatCurrency(item.price)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
          <span>${item.quantity}</span>
          <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="remove-item-btn" onclick="removeFromCart(${item.id})" title="Xóa">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  `).join('');

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  if (cartTotalEl) cartTotalEl.textContent = formatCurrency(totalPrice);
}

function checkout() {
  if (cart.length === 0) {
    showToast("Giỏ hàng đang trống! Vui lòng chọn sản phẩm.", "warning");
    return;
  }
  showToast("Cảm ơn bạn! Đơn hàng đang được khởi tạo...", "success");
  setTimeout(() => {
    cart = [];
    saveCart();
    updateCartUI();
    closeCart();
    alert("🎉 Đặt hàng thành công! Đội ngũ EvaCare sẽ liên hệ xác nhận đơn hàng qua SĐT của bạn.");
  }, 1000);
}

// 8. Chi Tiết Sản Phẩm (Product Detail Section) & Quick View Modal
function viewProductDetail(productId, scrollToSection = false) {
  const product = productsData.find(p => p.id === productId) || productsData[0];
  const container = document.getElementById('product-detail-container');
  if (!container || !product) return;

  const discountPercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const thumbImages = [
    product.image,
    "https://images.unsplash.com/photo-1608248597262-8380268fe5e1?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
  ];

  container.innerHTML = `
    <div class="detail-card">
      <div class="detail-top-grid">
        <!-- Cột trái: Hình ảnh sản phẩm & Thumbnails -->
        <div class="detail-gallery">
          <div class="detail-main-img-wrap">
            ${product.badge ? `<span class="product-badge ${product.badgeType}">${product.badge}</span>` : ''}
            <img id="detail-main-img" src="${product.image}" alt="${product.name}">
          </div>
          <div class="detail-thumbs">
            ${thumbImages.map((imgUrl, idx) => `
              <div class="detail-thumb-item ${idx === 0 ? 'active' : ''}" onclick="changeDetailImage(this, '${imgUrl}')">
                <img src="${imgUrl}" alt="Ảnh chi tiết ${idx + 1}">
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Cột phải: Thông tin chi tiết sản phẩm -->
        <div class="detail-info">
          <div class="detail-info-header">
            <span class="product-category" style="margin-bottom:0;">${product.categoryName}</span>
            <span class="detail-stock-badge"><i class="fas fa-check-circle"></i> Còn hàng chính hãng</span>
          </div>

          <h3 class="detail-title">${product.name}</h3>

          <div class="product-rating" style="margin-bottom:8px;">
            ${'<i class="fas fa-star"></i>'.repeat(Math.floor(product.rating))}
            <span><strong>${product.rating}/5</strong> (${product.reviewsCount} đánh giá từ khách hàng)</span>
          </div>

          <div class="detail-price-box">
            <span class="detail-current-price">${formatCurrency(product.price)}</span>
            ${product.oldPrice ? `<span class="detail-old-price">${formatCurrency(product.oldPrice)}</span>` : ''}
            ${discountPercent > 0 ? `<span class="detail-discount-tag">Tiết kiệm ${discountPercent}%</span>` : ''}
          </div>

          <p class="detail-desc">${product.description}</p>

          <!-- Bảng thông số kỹ thuật -->
          <div class="detail-specs-grid">
            <div class="detail-spec-row"><span>Thương hiệu:</span> <strong>EvaCare Vietnam</strong></div>
            <div class="detail-spec-row"><span>Độ pH chuẩn:</span> <strong>3.8 - 4.5 (Chuẩn Y Khoa)</strong></div>
            <div class="detail-spec-row"><span>Dung tích:</span> <strong>150ml / 250ml</strong></div>
            <div class="detail-spec-row"><span>Cam kết:</span> <strong>0% Paraben, 0% Xà phòng</strong></div>
            <div class="detail-spec-row"><span>Loại da:</span> <strong>Mọi loại da & Da nhạy cảm</strong></div>
            <div class="detail-spec-row"><span>Giao hàng:</span> <strong>Che tên sản phẩm 100%</strong></div>
          </div>

          <!-- Tuỳ chọn số lượng -->
          <div class="detail-options-row">
            <div>
              <span style="font-weight:600; font-size:0.9rem; margin-right:10px;">Số lượng:</span>
              <div class="detail-qty-control">
                <button type="button" onclick="changeDetailQty(-1)">-</button>
                <input type="text" id="detail-qty-input" value="1" readonly>
                <button type="button" onclick="changeDetailQty(1)">+</button>
              </div>
            </div>
          </div>

          <!-- Nút hành động -->
          <div class="detail-actions">
            <button class="btn btn-primary" onclick="addDetailToCart(${product.id}, false)">
              <i class="fas fa-cart-plus"></i> Thêm Vào Giỏ Hàng
            </button>
            <button class="btn btn-secondary" onclick="addDetailToCart(${product.id}, true)">
              <i class="fas fa-bolt"></i> Mua Ngay Kín Đáo
            </button>
          </div>
        </div>
      </div>

      <!-- Tabs thông tin chuyên sâu: Mô tả / Thành phần / Hướng dẫn sử dụng -->
      <div class="detail-tabs-wrap">
        <div class="detail-tabs-header">
          <button class="detail-tab-btn active" onclick="switchDetailTab(this, 'tab-desc')">
            <i class="fas fa-info-circle"></i> Mô Tả Chi Tiết
          </button>
          <button class="detail-tab-btn" onclick="switchDetailTab(this, 'tab-ingredients')">
            <i class="fas fa-leaf"></i> Thành Phần & Công Dụng
          </button>
          <button class="detail-tab-btn" onclick="switchDetailTab(this, 'tab-usage')">
            <i class="fas fa-hand-sparkles"></i> Hướng Dẫn Sử Dụng
          </button>
        </div>

        <div id="tab-desc" class="detail-tab-panel">
          <p><strong>${product.name}</strong> là giải pháp chăm sóc vùng nhạy cảm toàn diện được nghiên cứu bởi đội ngũ chuyên gia da liễu EvaCare. Với công thức dịu nhẹ có độ pH sinh lý từ 3.8 – 4.5, sản phẩm giúp làm sạch nhẹ nhàng, khử mùi hôi suốt 24h mà không gây khô rát, giữ trọn độ ẩm tự nhiên.</p>
        </div>

        <div id="tab-ingredients" class="detail-tab-panel" style="display:none;">
          <p><strong>Thành phần thiên nhiên lành tính:</strong> Chiết xuất Lá Trầu Không tự nhiên, Tinh chất Cúc La Mã (Chamomile), Gel Lô Hội hữu cơ, Vitamin E, Lactic Acid tự nhiên.<br>
          <strong>Công dụng vượt trội:</strong> Kháng khuẩn tự nhiên, hỗ trợ ngăn ngừa viêm nhiễm nấm ngứa, làm dịu kích ứng và duy trì hệ vi sinh có lợi.</p>
        </div>

        <div id="tab-usage" class="detail-tab-panel" style="display:none;">
          <p><strong>Bước 1:</strong> Làm ướt vùng kín bằng nước sạch.<br>
          <strong>Bước 2:</strong> Lấy một lượng vừa đủ (khoảng 2-3ml) ra lòng bàn tay, tạo bọt nhẹ nhàng và thoa rửa bên ngoài vùng nhạy cảm trong 30-60 giây.<br>
          <strong>Bước 3:</strong> Rửa sạch lại bằng nước ấm và thấm khô bằng khăn mềm. Sử dụng 1-2 lần/ngày.</p>
        </div>
      </div>
    </div>
  `;

  if (scrollToSection) {
    const detailSection = document.getElementById('product-detail-section');
    if (detailSection) {
      detailSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

function changeDetailImage(thumbEl, imgUrl) {
  const mainImg = document.getElementById('detail-main-img');
  if (mainImg) mainImg.src = imgUrl;
  document.querySelectorAll('.detail-thumb-item').forEach(el => el.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

function changeDetailQty(delta) {
  const input = document.getElementById('detail-qty-input');
  if (!input) return;
  let val = parseInt(input.value, 10) || 1;
  val = Math.max(1, val + delta);
  input.value = val;
}

function addDetailToCart(productId, buyNow = false) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;
  const input = document.getElementById('detail-qty-input');
  const qty = input ? (parseInt(input.value, 10) || 1) : 1;

  const existingIndex = cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: qty
    });
  }

  saveCart();
  updateCartUI();
  if (buyNow) {
    openCart();
  }
  showToast(`Đã thêm ${qty} "${product.name}" vào giỏ hàng!`, 'success');
}

function switchDetailTab(btnEl, panelId) {
  document.querySelectorAll('.detail-tab-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  document.querySelectorAll('.detail-tab-panel').forEach(p => {
    p.style.display = p.id === panelId ? 'block' : 'none';
  });
}

function openQuickView(productId) {
  viewProductDetail(productId, true);
}

function closeModal() {
  const modalOverlay = document.getElementById('modal-overlay');
  if (modalOverlay) modalOverlay.classList.remove('active');
}

// 9. Toast Notifications
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let iconClass = 'fa-info-circle';
  if (type === 'success') iconClass = 'fa-check-circle';
  if (type === 'warning') iconClass = 'fa-exclamation-triangle';

  toast.innerHTML = `<i class="fas ${iconClass}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3200);
}

// 10. Handlers Form
function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const pass = document.getElementById('login-password').value;

  if (!email || !pass) {
    showToast("Vui lòng nhập đầy đủ thông tin đăng nhập!", "warning");
    return false;
  }

  showToast("Đăng nhập thành công! Chào mừng bạn quay lại.", "success");
  return false;
}

function handleRegister(event) {
  event.preventDefault();
  const name = document.getElementById('reg-fullname').value;
  const email = document.getElementById('reg-email').value;
  const phone = document.getElementById('reg-phone').value;
  const pass = document.getElementById('reg-password').value;
  const confirmPass = document.getElementById('reg-confirm-password').value;
  const terms = document.getElementById('reg-terms').checked;

  if (!name || !email || !phone || !pass || !confirmPass) {
    showToast("Vui lòng điền đầy đủ các trường!", "warning");
    return false;
  }

  if (pass !== confirmPass) {
    showToast("Mật khẩu xác nhận không trùng khớp!", "warning");
    return false;
  }

  if (!terms) {
    showToast("Bạn cần đồng ý với Điều khoản dịch vụ & Bảo mật!", "warning");
    return false;
  }

  showToast("Đăng ký tài khoản EvaCare thành công!", "success");
  switchAuthTab('login');
  return false;
}

function handleContact(event) {
  event.preventDefault();
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const message = document.getElementById('contact-message').value;

  if (!name || !email || !message) {
    showToast("Vui lòng điền thông tin và nội dung lời nhắn!", "warning");
    return false;
  }

  showToast("Yêu cầu tư vấn của bạn đã được gửi thành công. EvaCare sẽ liên hệ sớm nhất!", "success");
  document.getElementById('contact-form').reset();
  return false;
}
