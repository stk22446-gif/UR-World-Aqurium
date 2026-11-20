/**
 * UR-WORLD-AQUARIUM — Official Website Script
 * Complete Premium Pet & Aquatic Lifestyle
 * Multi-Animal Collections, Theming, WhatsApp & Email Integrations, Shopping Bag
 */

// -----------------------------------------------------------------------------
// 1. Configuration & Constants
// -----------------------------------------------------------------------------
const CONFIG = {
  WHATSAPP_NUMBER: "919980039294", // Official WhatsApp: +91 99800 39294
  CONTACT_EMAIL: "urworldaquapets@gmail.com", // Official Contact Email
  THEME_STORAGE_KEY: "ur_world_theme",
  CART_STORAGE_KEY: "ur_world_cart"
};

// Master Product Catalog sourced directly from central catalog-data.js (Single Source of Truth)
const products = (typeof window !== "undefined" && window.PRODUCTS_CATALOG)
  ? window.PRODUCTS_CATALOG
  : (typeof PRODUCTS_CATALOG !== "undefined" ? PRODUCTS_CATALOG : {});

// Utilities
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const formatINR = (value) => `₹${Number(value).toLocaleString("en-IN")}`;

// -----------------------------------------------------------------------------
// 2. Dark Mode and Light Mode Theme System
// -----------------------------------------------------------------------------
const themeToggle = $("#themeToggle");
const themeLabel = $("#themeLabel");
const metaThemeColor = $("#metaThemeColor");

/**
 * Applies the selected theme to the root element, persists to localStorage,
 * and synchronizes theme meta tag and button text.
 * @param {'dark' | 'light'} theme
 */
function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(CONFIG.THEME_STORAGE_KEY, theme);

  if (themeLabel) {
    themeLabel.textContent = isDark ? "Dark" : "Light";
  }

  if (metaThemeColor) {
    metaThemeColor.setAttribute("content", isDark ? "#000000" : "#F8FAFC");
  }

  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light theme" : "Switch to dark theme"
    );
  }
}

/**
 * Detects initial theme:
 * 1. Checks localStorage preference.
 * 2. If not found, checks system preference via matchMedia.
 * 3. Defaults to dark mode for cinematic look.
 */
function initTheme() {
  const savedTheme = localStorage.getItem(CONFIG.THEME_STORAGE_KEY);
  if (savedTheme === "dark" || savedTheme === "light") {
    applyTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
  }
}

// Toggle theme on button click
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });
}

// Listen for OS color scheme changes if user hasn't explicitly set a preference
if (window.matchMedia) {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem(CONFIG.THEME_STORAGE_KEY)) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });
}

// -----------------------------------------------------------------------------
// 3. Mobile Navigation Menu
// -----------------------------------------------------------------------------
const menuToggle = $("#menuToggle");
const nav = $("#nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close navigation menu when clicking any nav link
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// -----------------------------------------------------------------------------
// 4. Dynamic Catalog Rendering (Single Source of Truth: catalog-data.js)
// -----------------------------------------------------------------------------
function renderShopProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const catalogProducts = (typeof window !== "undefined" && typeof window.getAllProducts === "function")
    ? window.getAllProducts()
    : ((typeof PRODUCTS_CATALOG !== "undefined") ? Object.values(PRODUCTS_CATALOG) : Object.values(products));

  if (!catalogProducts || catalogProducts.length === 0) return;

  grid.innerHTML = catalogProducts.map((p) => {
    const filterCat = p.filterCategory || p.category || "";
    const isEnquiry = p.isEnquiry || p.price === 0;

    let priceHtml = "";
    if (isEnquiry) {
      priceHtml = `<strong class="product-price">Enquire for Price</strong>`;
    } else if (p.mrp && p.mrp > p.price) {
      priceHtml = `<span class="product-mrp-strike">MRP ₹${p.mrp}</span><strong class="product-price">${formatINR(p.price)}</strong>`;
    } else {
      priceHtml = `<strong class="product-price">${formatINR(p.price)}</strong>`;
    }

    let actionButtonsHtml = "";
    if (isEnquiry) {
      const waEnquiryText = encodeURIComponent(`Hi UR WORLD AQUARIUM & PET SHOP! I would like to enquire about: ${p.name}. Could you please share pricing and availability?`);
      actionButtonsHtml = `
        <a class="btn-shop-enquire" href="https://wa.me/919980039294?text=${waEnquiryText}" target="_blank" rel="noopener" title="Enquire on WhatsApp">ENQUIRE</a>
        <a class="btn-product-details" href="product-detail.html?id=${p.id}" title="View Details">VIEW DETAILS &rarr;</a>
      `;
    } else {
      actionButtonsHtml = `
        <button class="add-button" data-id="${p.id}" title="Add to Bag">ADD TO BAG</button>
        <a class="btn-product-details" href="product-detail.html?id=${p.id}" title="View Details">VIEW DETAILS &rarr;</a>
      `;
    }

    return `
      <article class="product-card" data-category="${filterCat}" data-id="${p.id}">
        <div class="product-image">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="product-info">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <div class="product-bottom">
            <div class="product-meta-row">
              ${priceHtml}
            </div>
            <div class="product-btn-group">
              ${actionButtonsHtml}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  applyProductFilters();
}

function renderAnimalCollections() {
  const grid = document.getElementById("animalGrid") || document.querySelector(".animal-grid");
  if (!grid || !document.getElementById("animals")) return;

  // If grid already contains all animal collection cards in HTML, ensure they are visible
  const existingCards = (typeof grid.querySelectorAll === "function") ? grid.querySelectorAll(".animal-card") : [];
  if (existingCards && existingCards.length >= 6) {
    existingCards.forEach((card) => {
      card.classList.add("visible");
      card.style.opacity = "1";
      card.style.visibility = "visible";
      card.style.display = "flex";
    });
    return;
  }

  const categories = (typeof window !== "undefined" && typeof window.getAllCategories === "function")
    ? window.getAllCategories()
    : ((typeof CATEGORIES_METADATA !== "undefined") ? Object.values(CATEGORIES_METADATA) : []);

  if (!categories || categories.length === 0) return;

  grid.innerHTML = categories.map((cat) => {
    const specsHtml = (cat.specs || []).map(s => `<span><strong>${s.label}:</strong> ${s.val}</span>`).join("\n                            ");
    return `
      <article class="animal-card visible">
        <div class="card-image">
          <img src="${cat.image}" alt="${cat.cardTitle || cat.name}" loading="lazy">
          <span class="image-index">${cat.index}</span>
        </div>
        <div class="animal-content">
          <div class="card-meta">
            <h3>${cat.cardTitle || cat.name}</h3>
            <span class="species-badge">${cat.badge}</span>
          </div>
          <p class="animal-desc">${cat.cardDesc || cat.subheading}</p>
          <div class="animal-specs">
            ${specsHtml}
          </div>
          <div class="animal-action">
            <a class="btn-explore-collection" href="${cat.collectionUrl}">
              VIEW COLLECTION <span>&rarr;</span>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderCollectionGrid() {
  const grid = document.getElementById("collectionGrid") || document.querySelector(".collection-grid");
  if (!grid) return;

  let catId = grid.dataset.category;
  if (!catId) {
    const path = window.location.pathname.toLowerCase();
    if (path.includes("dogs")) catId = "dogs";
    else if (path.includes("cats")) catId = "cats";
    else if (path.includes("birds")) catId = "birds";
    else if (path.includes("mice")) catId = "mice";
    else if (path.includes("small-pets")) catId = "small-pets";
    else if (path.includes("aquarium-fish")) catId = "aquarium-fish";
    else if (path.includes("other-animals")) catId = "other-animals";
  }

  if (!catId) return;

  const pets = (typeof window !== "undefined" && typeof window.getPetsByCategory === "function")
    ? window.getPetsByCategory(catId)
    : ((typeof getPetsByCategory === "function") ? getPetsByCategory(catId) : []);

  if (!pets || pets.length === 0) return;

  const isCollectionsDir = window.location.pathname.includes("/collections/") || window.location.pathname.includes("\\collections\\");
  const petDetailHrefPrefix = isCollectionsDir ? "../pet-detail.html?id=" : "pet-detail.html?id=";

  grid.innerHTML = pets.map((pet) => {
    const chars = pet.characteristics || {};
    const specs = [];
    if (chars.energy || chars.energyLevel) specs.push(`<span><strong>Energy:</strong> ${chars.energy || chars.energyLevel}</span>`);
    if (chars.lifespan) specs.push(`<span><strong>Lifespan:</strong> ${chars.lifespan}</span>`);
    if (chars.diet) specs.push(`<span><strong>Diet:</strong> ${chars.diet}</span>`);
    if (chars.coat) specs.push(`<span><strong>Coat:</strong> ${chars.coat}</span>`);
    if (chars.temperament && specs.length < 3) specs.push(`<span><strong>Nature:</strong> ${chars.temperament}</span>`);
    if (chars.tankSize) specs.push(`<span><strong>Tank:</strong> ${chars.tankSize}</span>`);
    if (chars.waterTemp) specs.push(`<span><strong>Temp:</strong> ${chars.waterTemp}</span>`);
    if (chars.housing) specs.push(`<span><strong>Housing:</strong> ${chars.housing}</span>`);
    const displaySpecs = specs.slice(0, 3).join("\n                            ");

    const badgeLabel = pet.badge || (chars.temperament ? chars.temperament.split(",")[0].trim().toUpperCase() : "FAMILY COMPANION");

    let priceSnippet = "";
    if (pet.isEnquiry || pet.price === 0) {
      priceSnippet = `<div class="animal-card-price"><span class="price-val">Enquire for Price</span></div>`;
    } else if (pet.variants && pet.variants.length > 1) {
      const minPrice = Math.min(...pet.variants.map(v => v.price));
      const unitText = pet.unit ? ` (${pet.unit})` : '';
      priceSnippet = `<div class="animal-card-price"><span class="price-prefix">From</span> <span class="price-val">₹${minPrice.toLocaleString('en-IN')}</span> <span class="price-unit">${unitText}</span></div>`;
    } else {
      const unitText = pet.unit ? ` (${pet.unit})` : '';
      priceSnippet = `<div class="animal-card-price"><span class="price-val">₹${Number(pet.price).toLocaleString('en-IN')}</span> <span class="price-unit">${unitText}</span></div>`;
    }

    return `
      <article class="animal-detail-card">
        <div class="card-image">
          <img src="${(pet.gallery && pet.gallery[0]) ? pet.gallery[0] : ''}" alt="${pet.name}" loading="lazy">
          <span class="care-level-badge">${pet.badge || "Family Favourite"}</span>
        </div>
        <div class="animal-content">
          <div class="card-meta">
            <h3>${pet.name}</h3>
            <span class="species-badge">${badgeLabel.toUpperCase()}</span>
          </div>
          <p class="animal-desc">${pet.tagline || pet.description}</p>
          <div class="animal-specs">
            ${displaySpecs}
          </div>
          ${priceSnippet}
          <a href="${petDetailHrefPrefix}${pet.id}" class="btn-view-details">
            VIEW DETAILS <span>&rarr;</span>
          </a>
        </div>
      </article>
    `;
  }).join("");
}

// -----------------------------------------------------------------------------
// 4b. Shop Category Filtering, Combined Search & Load More Pagination System
// -----------------------------------------------------------------------------
const searchInput = $("#shopSearchInput");
const searchClearBtn = $("#shopSearchClear");
const resetAllBtn = $("#shopResetAll");
const filterChips = $$("#filters .filter-chip, #filters button");
const emptyState = $("#shopEmptyState");
const emptyTitle = $("#shopEmptyTitle");
const emptyDesc = $("#shopEmptyDesc");
const resultsCountEl = $("#shopResultsCount");
const clearFiltersInline = $("#btnClearFiltersInline");
const btnResetEmpty = $("#btnResetEmpty");
const btnEmptyWhatsApp = $("#btnEmptyWhatsApp");

const PRODUCTS_PER_PAGE = 8;
let visibleProductLimit = PRODUCTS_PER_PAGE;
let currentCategory = "all";

function updatePaginationControls(totalMatching, currentlyShown) {
  const paginationWrap = document.getElementById("shopPaginationWrap");
  const btnLoadMore = document.getElementById("btnShopLoadMore");
  const btnShowLess = document.getElementById("btnShopShowLess");

  if (!paginationWrap || !btnLoadMore || !btnShowLess) return;

  // Requirement 5: Do not show the button when 8 or fewer matching products exist.
  if (totalMatching <= PRODUCTS_PER_PAGE) {
    paginationWrap.style.display = "none";
    btnLoadMore.style.display = "none";
    btnShowLess.style.display = "none";
    return;
  }

  paginationWrap.style.display = "flex";

  // Requirement 2 & 5: Automatically hide Load More when all matching products are displayed.
  if (currentlyShown < totalMatching) {
    btnLoadMore.style.display = "inline-flex";
  } else {
    btnLoadMore.style.display = "none";
  }

  // Requirement 3: Once additional products are displayed, show a "SHOW LESS ↑" option.
  if (visibleProductLimit > PRODUCTS_PER_PAGE) {
    btnShowLess.style.display = "inline-flex";
  } else {
    btnShowLess.style.display = "none";
  }
}

function applyProductFilters() {
  const query = (searchInput && searchInput.value ? searchInput.value : "").trim().toLowerCase();

  // Toggle clear search cross button
  if (searchClearBtn) {
    searchClearBtn.style.display = query.length > 0 ? "inline-flex" : "none";
  }

  const cards = Array.from(document.querySelectorAll("#productGrid .product-card"));
  const matchingCards = [];

  cards.forEach((card) => {
    const rawCategories = (card.dataset.category || "").toLowerCase();
    const categoriesList = rawCategories.split(/\s+/);

    // Check category match
    const matchesCategory = currentCategory === "all" || categoriesList.includes(currentCategory);

    // Check search match against product title, description, category terms, and text
    const categoryTerms = rawCategories.replace(/-/g, " ");
    const cardText = `${card.textContent} ${categoryTerms}`.toLowerCase();
    const matchesSearch = !query || cardText.includes(query);

    if (matchesCategory && matchesSearch) {
      matchingCards.push(card);
    }
  });

  const totalMatching = matchingCards.length;

  // Display only up to visibleProductLimit matching cards, hide the rest
  cards.forEach((card) => {
    const matchIndex = matchingCards.indexOf(card);
    if (matchIndex !== -1 && matchIndex < visibleProductLimit) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });

  const currentlyShown = Math.min(visibleProductLimit, totalMatching);

  // Get active category human name
  const activeChip = $(`#filters .filter-chip[data-filter="${currentCategory}"], #filters button[data-filter="${currentCategory}"]`);
  const categoryName = (activeChip && activeChip.textContent) ? activeChip.textContent.trim() : "All Items";

  // Update dynamic count
  if (resultsCountEl) {
    if (totalMatching === 0) {
      resultsCountEl.textContent = `0 products found`;
    } else if (totalMatching <= PRODUCTS_PER_PAGE) {
      if (currentCategory === "all" && !query) {
        resultsCountEl.textContent = `Showing all ${totalMatching} products`;
      } else if (query && currentCategory !== "all") {
        resultsCountEl.textContent = `Found ${totalMatching} product${totalMatching === 1 ? "" : "s"} in "${categoryName}" for "${query}"`;
      } else if (query) {
        resultsCountEl.textContent = `Found ${totalMatching} product${totalMatching === 1 ? "" : "s"} matching "${query}"`;
      } else {
        resultsCountEl.textContent = `Showing ${totalMatching} product${totalMatching === 1 ? "" : "s"} in ${categoryName}`;
      }
    } else {
      if (currentCategory === "all" && !query) {
        resultsCountEl.textContent = `Showing ${currentlyShown} of ${totalMatching} products`;
      } else if (query && currentCategory !== "all") {
        resultsCountEl.textContent = `Showing ${currentlyShown} of ${totalMatching} products in "${categoryName}" for "${query}"`;
      } else if (query) {
        resultsCountEl.textContent = `Showing ${currentlyShown} of ${totalMatching} products matching "${query}"`;
      } else {
        resultsCountEl.textContent = `Showing ${currentlyShown} of ${totalMatching} products in ${categoryName}`;
      }
    }
  }

  // Toggle inline clear button
  if (clearFiltersInline) {
    const hasFilter = currentCategory !== "all" || query.length > 0;
    clearFiltersInline.style.display = hasFilter ? "inline-flex" : "none";
  }

  // Handle empty state
  const curEmptyState = document.getElementById("shopEmptyState") || emptyState;
  if (curEmptyState) {
    if (totalMatching === 0) {
      curEmptyState.style.display = "flex";

      if (query && currentCategory !== "all") {
        if (emptyTitle) emptyTitle.textContent = `No products found`;
        if (emptyDesc) emptyDesc.textContent = `No products match "${query}" within ${categoryName}. Try clearing search or exploring all categories.`;
      } else if (query) {
        if (emptyTitle) emptyTitle.textContent = `No products found`;
        if (emptyDesc) emptyDesc.textContent = `We couldn't find any products matching "${query}". Try checking your spelling or reset filters to browse all items.`;
      } else {
        if (emptyTitle) emptyTitle.textContent = `No products in ${categoryName} currently`;
        if (emptyDesc) emptyDesc.textContent = `Fresh shipments are arriving soon! UR WORLD AQUARIUM & PET SHOP also provides custom orders for ${categoryName}. Connect with us on WhatsApp for availability.`;
        if (btnEmptyWhatsApp) {
          btnEmptyWhatsApp.href = `https://wa.me/919980039294?text=Hi%20UR%20WORLD%20AQUARIUM%20%26%20PET%20SHOP!%20I%20am%20enquiring%20about%20availability%20for%20${encodeURIComponent(categoryName)}.`;
        }
      }
    } else {
      curEmptyState.style.display = "none";
    }
  }

  // Update Pagination Controls
  updatePaginationControls(totalMatching, currentlyShown);
}

// Category chip click listeners
if (filterChips && typeof filterChips.forEach === "function") {
  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      filterChips.forEach((btn) => btn.classList.remove("active"));
      chip.classList.add("active");
      currentCategory = chip.dataset.filter || "all";
      visibleProductLimit = PRODUCTS_PER_PAGE;
      applyProductFilters();
    });
  });
}

// Search input event (instant live search)
if (searchInput) {
  searchInput.addEventListener("input", () => {
    visibleProductLimit = PRODUCTS_PER_PAGE;
    applyProductFilters();
  });
}

// Clear search button
if (searchClearBtn) {
  searchClearBtn.addEventListener("click", () => {
    if (searchInput) {
      searchInput.value = "";
      searchInput.focus();
    }
    visibleProductLimit = PRODUCTS_PER_PAGE;
    applyProductFilters();
  });
}

// Reset all function (resets both search and category to All Items)
function resetAllShopFilters() {
  if (searchInput) {
    searchInput.value = "";
  }
  currentCategory = "all";
  if (filterChips && typeof filterChips.forEach === "function") {
    filterChips.forEach((btn) => {
      if (btn.dataset.filter === "all") {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }
  visibleProductLimit = PRODUCTS_PER_PAGE;
  applyProductFilters();
}

if (resetAllBtn) {
  resetAllBtn.addEventListener("click", resetAllShopFilters);
}
if (clearFiltersInline) {
  clearFiltersInline.addEventListener("click", resetAllShopFilters);
}
if (btnResetEmpty) {
  btnResetEmpty.addEventListener("click", resetAllShopFilters);
}

// Shop Load More & Show Less Buttons
const btnShopLoadMore = document.getElementById("btnShopLoadMore");
const btnShopShowLess = document.getElementById("btnShopShowLess");

if (btnShopLoadMore) {
  btnShopLoadMore.addEventListener("click", () => {
    visibleProductLimit += PRODUCTS_PER_PAGE;
    applyProductFilters();
  });
}

if (btnShopShowLess) {
  btnShopShowLess.addEventListener("click", () => {
    visibleProductLimit = PRODUCTS_PER_PAGE;
    applyProductFilters();
    const shopEl = document.getElementById("shop");
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

// -----------------------------------------------------------------------------
// 5. Shopping Bag State & Operations
// -----------------------------------------------------------------------------
let cart = [];

// Load cart from localStorage
try {
  const savedCart = localStorage.getItem(CONFIG.CART_STORAGE_KEY);
  if (savedCart) {
    const parsed = JSON.parse(savedCart);
    if (Array.isArray(parsed)) {
      cart = parsed.filter((item) => products[item.id] || item.isLiveAnimal || item.name);
    }
  }
} catch (err) {
  console.warn("Could not load cart from storage:", err);
  cart = [];
}

function saveCart() {
  try {
    localStorage.setItem(CONFIG.CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (err) {
    console.warn("Could not save cart:", err);
  }
}

function renderCart() {
  const cartCountEl = $("#cartCount");
  const cartTotalEl = $("#cartTotal");
  const cartItemsEl = $("#cartItems");
  const checkoutBtn = $("#checkoutButton");

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => {
    const price = item.price !== undefined ? item.price : (products[item.id] ? products[item.id].price : 0);
    return sum + price * item.qty;
  }, 0);

  const countElements = document.querySelectorAll("#cartCount, .cart-count, .cart-badge, .bag-pill-badge");
  countElements.forEach((el) => {
    el.textContent = totalCount;
  });
  if (cartTotalEl) cartTotalEl.textContent = formatINR(totalPrice);

  if (!cartItemsEl) return;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🐾</div>
        <p>Your bag is waiting for something lovely.</p>
        <a href="index.html#animals" class="btn btn-outline btn-sm empty-shop-btn" id="emptyShopBtn">Browse Collections &amp; Supplies</a>
      </div>
    `;
    const emptyShopBtn = $("#emptyShopBtn");
    if (emptyShopBtn) {
      emptyShopBtn.addEventListener("click", closeCart);
    }
    if (checkoutBtn) {
      checkoutBtn.disabled = true;
      checkoutBtn.style.opacity = "0.6";
      checkoutBtn.style.cursor = "not-allowed";
    }
  } else {
    if (checkoutBtn) {
      checkoutBtn.disabled = false;
      checkoutBtn.style.opacity = "1";
      checkoutBtn.style.cursor = "pointer";
    }

    cartItemsEl.innerHTML = cart
      .map((item) => {
        if (item.isLiveAnimal) {
          const itemPrice = item.price || 0;
          return `
            <div class="cart-row">
              <div class="cart-item-details">
                <strong>${item.name}</strong>
                <span class="cart-pet-badge">Live Companion Reservation</span>
                <span class="cart-pet-meta">Gender: ${item.gender || (item.options && item.options.gender) || 'Verified'} &bull; Age: ${item.age || (item.options && item.options.age) || 'Young'}</span>
                <span class="cart-item-price">${formatINR(itemPrice)} (Deposit: ${formatINR(item.deposit || 2000)})</span>
              </div>
              <div class="cart-item-actions">
                <span class="cart-item-total">${formatINR(itemPrice * item.qty)}</span>
                <button class="remove-btn" data-action="remove" data-id="${item.id}">Remove</button>
              </div>
            </div>
          `;
        }

        const baseId = item.productId || (item.id && item.id.includes('__') ? item.id.split('__')[0] : item.id);
        const prod = products[baseId] || (window.PRODUCTS_CATALOG && window.PRODUCTS_CATALOG[baseId]);
        const name = item.name || (prod ? prod.name : "Pet Essential");
        const price = item.price !== undefined ? item.price : (prod ? prod.price : 0);
        const variantHtml = item.variant ? `<span class="cart-pet-meta" style="color:var(--cyan, #06b6d4); font-size:11px; margin-top:2px; display:block;">Option: <strong>${item.variant}</strong></span>` : '';

        return `
          <div class="cart-row">
            <div class="cart-item-details">
              <strong>${name}</strong>
              ${variantHtml}
              <span class="cart-item-price">${formatINR(price)} each</span>
              <div class="cart-qty-controls">
                <button class="qty-btn" data-action="decrease" data-id="${item.id}" aria-label="Decrease quantity for ${name}">-</button>
                <span class="qty-count">${item.qty}</span>
                <button class="qty-btn" data-action="increase" data-id="${item.id}" aria-label="Increase quantity for ${name}">+</button>
              </div>
            </div>
            <div class="cart-item-actions">
              <span class="cart-item-total">${formatINR(price * item.qty)}</span>
              <button class="remove-btn" data-action="remove" data-id="${item.id}">Remove</button>
            </div>
          </div>
        `;
      })
      .join("");
  }

  // Reactive integration with the dedicated Shopping Bag page
  if (typeof window !== "undefined" && typeof window.renderFullCartPage === "function") {
    window.renderFullCartPage();
  }
}

function addToCart(productId, quantity = 1, variant = null) {
  const baseId = (productId && productId.includes('__')) ? productId.split('__')[0] : productId;
  const prod = products[baseId] || (window.PRODUCTS_CATALOG && window.PRODUCTS_CATALOG[baseId]);
  if (!prod) return;

  if (prod.isEnquiry || prod.price === 0) {
    const waText = encodeURIComponent(`Hi UR WORLD AQUARIUM & PET SHOP! I would like to enquire about: ${prod.name}. Could you please share pricing and availability?`);
    window.open(`https://wa.me/919980039294?text=${waText}`, '_blank', 'noopener,noreferrer');
    return;
  }

  const qtyToAdd = Math.max(1, parseInt(quantity, 10) || 1);

  let cartItemId = productId;
  let itemPrice = prod.price;
  let variantName = "";

  if (variant) {
    if (typeof variant === "object") {
      const varId = variant.id || variant.name;
      cartItemId = `${baseId}__${varId}`;
      itemPrice = variant.price !== undefined ? variant.price : prod.price;
      variantName = variant.name || variant.label || "";
    } else if (typeof variant === "string") {
      cartItemId = `${baseId}__${variant}`;
      variantName = variant;
    }
  }

  const existing = cart.find((item) => item.id === cartItemId);
  if (existing) {
    existing.qty += qtyToAdd;
    if (variantName && !existing.variant) existing.variant = variantName;
    if (itemPrice !== undefined) existing.price = itemPrice;
  } else {
    cart.push({
      id: cartItemId,
      productId: baseId,
      name: prod.name,
      variant: variantName,
      price: itemPrice,
      qty: qtyToAdd,
      image: prod.image || ""
    });
  }
  saveCart();
  renderCart();
  openCart();
}

if (typeof window !== "undefined") {
  window.addToCart = addToCart;
}

function addLiveAnimalToCart(petData) {
  if (!petData) return;

  if (petData.isEnquiry || petData.price === 0) {
    const waText = encodeURIComponent(`Hi UR WORLD AQUARIUM & PET SHOP! I would like to enquire about reserving: ${petData.name}. Could you please confirm pricing and availability?`);
    window.open(`https://wa.me/919980039294?text=${waText}`, '_blank', 'noopener,noreferrer');
    return;
  }

  const existing = cart.find((item) => item.id === petData.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: petData.id,
      petId: petData.petId,
      name: petData.name,
      breed: petData.breed,
      category: petData.category,
      gender: petData.gender,
      age: petData.age,
      variant: petData.variant || '',
      price: petData.price,
      deposit: petData.deposit || 2000,
      isLiveAnimal: true,
      image: petData.image || '',
      options: {
        gender: petData.gender,
        age: petData.age
      },
      qty: 1
    });
  }
  saveCart();
  renderCart();
  openCart();
}

function updateCartQty(productId, delta) {
  const item = cart.find((i) => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter((i) => i.id !== productId);
  }
  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  renderCart();
}

// Event Delegation for Cart Actions (+, -, Remove)
const cartItemsContainer = $("#cartItems");
if (cartItemsContainer) {
  cartItemsContainer.addEventListener("click", (e) => {
    const target = e.target.closest("button");
    if (!target) return;

    const action = target.dataset.action;
    const id = target.dataset.id;
    if (!id) return;

    if (action === "increase") {
      updateCartQty(id, 1);
    } else if (action === "decrease") {
      updateCartQty(id, -1);
    } else if (action === "remove") {
      removeFromCart(id);
    }
  });
}

// "Add to Bag" Buttons on Product Cards with Immediate Visual Confirmation
document.addEventListener("click", (e) => {
  const button = e.target.closest(".add-button, .btn-rec-add");
  if (!button) return;

  const id = button.dataset.id;
  if (id) {
    addToCart(id);
    const origText = button.textContent;
    button.textContent = "✓ ADDED";
    button.classList.add("added-success");
    setTimeout(() => {
      button.textContent = origText;
      button.classList.remove("added-success");
    }, 1200);
  }
});

// -----------------------------------------------------------------------------
// 6. Cart Drawer Visibility
// -----------------------------------------------------------------------------
const cartDrawer = $("#cartDrawer");
const cartBackdrop = $("#cartBackdrop");
const cartOpenBtn = $("#cartOpen");
const cartCloseBtn = $("#cartClose");

function openCart() {
  document.body.classList.add("cart-open");
  if (cartDrawer) cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  document.body.classList.remove("cart-open");
  if (cartDrawer) cartDrawer.setAttribute("aria-hidden", "true");
}

if (cartOpenBtn) {
  cartOpenBtn.addEventListener("click", (e) => {
    // If user clicked the navbar shopping bag button, navigate to the Shopping Bag page
    const href = cartOpenBtn.getAttribute("href");
    if (href) {
      window.location.href = href;
    } else {
      const isCollectionSubdir = window.location.pathname.includes("/collections");
      window.location.href = isCollectionSubdir ? "../cart.html" : "cart.html";
    }
  });
}
if (cartCloseBtn) cartCloseBtn.addEventListener("click", closeCart);
if (cartBackdrop) cartBackdrop.addEventListener("click", closeCart);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && document.body.classList.contains("cart-open")) {
    closeCart();
  }
});

// -----------------------------------------------------------------------------
// 7. WhatsApp Integration (+91 99800 39294)
// -----------------------------------------------------------------------------
function buildWhatsAppUrl(message) {
  return `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function openWhatsApp(message) {
  const url = buildWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
}

// Product Card Direct WhatsApp Enquiry Buttons (NO green, Ocean Blue)
document.addEventListener("click", (e) => {
  const button = e.target.closest(".product-wa-btn, .btn-rec-enquire");
  if (!button) return;

  const id = button.dataset.id;
  const prod = products[id] || (window.PRODUCTS_CATALOG && window.PRODUCTS_CATALOG[id]);
  if (!prod) return;

  const message = `Hi UR WORLD AQUARIUM & PET SHOP! I would like to enquire about:
• Product: ${prod.name}
• Price: ${formatINR(prod.price)}
• Category: ${prod.category.toUpperCase()}

Please let me know if this is currently available in stock for store pickup or delivery.`;

  openWhatsApp(message);
});

// Animal Cards Direct WhatsApp Enquiry
$$(".animal-enquire-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const animalName = button.dataset.animal || "Pet Companion";
    const message = `Hi UR WORLD AQUARIUM & PET SHOP! I am interested in inquiring about ${animalName}. Could you please share details on current availability, dietary care, and guidance?`;
    openWhatsApp(message);
  });
});

// Cart Checkout Button: Compiles all bag items into a prefilled WhatsApp message
const checkoutButton = $("#checkoutButton");
if (checkoutButton) {
  checkoutButton.addEventListener("click", () => {
    if (!cart.length) {
      alert("Your shopping bag is empty. Please add items before checking out.");
      return;
    }

    const itemLines = cart
      .map((item) => {
        if (item.isLiveAnimal) {
          return `• [LIVE COMPANION RESERVATION] ${item.name} — ${formatINR(item.price)} (Deposit: ${formatINR(item.deposit || 2000)}) [Subject to Availability & Handover]`;
        }
        const prod = products[item.id] || (window.PRODUCTS_CATALOG && window.PRODUCTS_CATALOG[item.id]);
        const name = prod ? prod.name : item.name;
        const price = prod ? prod.price : (item.price || 0);
        return `• ${name} (Qty: ${item.qty}) — ${formatINR(price * item.qty)}`;
      })
      .join("\n");

    const total = cart.reduce((sum, item) => {
      const price = item.price !== undefined ? item.price : (products[item.id] ? products[item.id].price : 0);
      return sum + price * item.qty;
    }, 0);

    const message = `Hi UR WORLD AQUARIUM & PET SHOP! I would like to place an order / reservation enquiry for the items in my bag:

${itemLines}

Total Subtotal / Valuation: ${formatINR(total)}

Please confirm companion availability, health documentation, and delivery/handover schedule. Thank you!`;

    openWhatsApp(message);
  });
}

// Expose Cart & Actions globally
if (typeof window !== "undefined") {
  window.addToCart = addToCart;
  window.addLiveAnimalToCart = addLiveAnimalToCart;
  window.renderCart = renderCart;
  window.openCart = openCart;
  window.closeCart = closeCart;
  window.updateCartQty = updateCartQty;
  window.removeFromCart = removeFromCart;
  window.getCart = function() { return cart; };
}

// -----------------------------------------------------------------------------
// 8. Quick Inquiry Form (Direct WhatsApp Redirection)
// -----------------------------------------------------------------------------
const contactForm = $("#contactForm");
const formFeedback = $("#formFeedback");
const waFallbackLink = $("#waFallbackLink");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = $("#contactName") || contactForm.elements["name"];
    const phoneInput = $("#contactPhone") || contactForm.elements["phone"];
    const categoryInput = $("#contactCategory") || contactForm.elements["category"];
    const messageInput = $("#contactMessage") || contactForm.elements["message"];
    const fallbackLink = $("#waFallbackLink");
    const feedbackEl = $("#formFeedback");

    const name = nameInput ? nameInput.value.trim() : "";
    const phone = phoneInput ? phoneInput.value.trim() : "";
    const category = categoryInput ? categoryInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    // Clear previous inline errors
    [nameInput, phoneInput, categoryInput, messageInput].forEach((el) => {
      if (el) el.classList.remove("field-error");
    });

    // Validation
    const errors = [];
    if (!name || name.length < 2) {
      errors.push("Please enter your name.");
      if (nameInput) nameInput.classList.add("field-error");
    }

    const digitsOnly = phone.replace(/\D/g, "");
    if (!phone || digitsOnly.length < 7 || !/^[0-9+()\- ]{7,20}$/.test(phone)) {
      errors.push("Please enter a valid phone number (at least 7 to 10 digits).");
      if (phoneInput) phoneInput.classList.add("field-error");
    }

    if (!category) {
      errors.push("Please select an inquiry category.");
      if (categoryInput) categoryInput.classList.add("field-error");
    }

    if (!message || message.length < 3) {
      errors.push("Please enter your message or question.");
      if (messageInput) messageInput.classList.add("field-error");
    }

    if (errors.length > 0) {
      if (feedbackEl) {
        feedbackEl.className = "form-feedback error";
        feedbackEl.innerHTML = errors.map((err) => `<div>• ${err}</div>`).join("");
      }
      return;
    }

    // Format WhatsApp message containing Customer Name, Phone, Category, and Message
    const messageLines = [
      "Hello UR WORLD AQUARIUM & PET SHOP,",
      "",
      "I would like to make a Quick Inquiry:",
      `• Customer Name: ${name}`,
      `• Phone Number: ${phone}`,
      `• Inquiry Category: ${category}`,
      "",
      "Message:",
      message,
      "",
      "---",
      "Sent via UR WORLD AQUARIUM & PET SHOP Website"
    ];
    const fullText = messageLines.join("\n");
    const encodedMessage = encodeURIComponent(fullText);

    // WhatsApp recipient must always be +91 99800 39294 (never customer's phone)
    const targetRecipient = "919980039294";
    const waUrl = `https://wa.me/${targetRecipient}?text=${encodedMessage}`;

    // Provide fallback link if popup blocker stops auto-opening
    if (fallbackLink) {
      fallbackLink.href = waUrl;
      fallbackLink.style.display = "inline-flex";
    }

    if (feedbackEl) {
      feedbackEl.className = "form-feedback info";
      feedbackEl.innerHTML = `Opening WhatsApp with your pre-filled inquiry... Please review and press <strong>Send</strong> in WhatsApp. If it didn't open automatically, <a href="${waUrl}" target="_blank" rel="noopener" style="text-decoration: underline; font-weight: 700; color: inherit;">click here to launch WhatsApp</a>.`;
    }

    // Attempt to open WhatsApp in a new tab/window
    let waWindow = null;
    try {
      waWindow = window.open(waUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      waWindow = null;
    }

    // Fallback if window.open was blocked by the browser
    if (!waWindow || waWindow.closed || typeof waWindow.closed === "undefined") {
      setTimeout(() => {
        window.location.href = waUrl;
      }, 350);
    }
  });
}

// -----------------------------------------------------------------------------
// 9. Intersection Observer for Scroll Reveals
// -----------------------------------------------------------------------------
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

$$(".reveal").forEach((el) => revealObserver.observe(el));

// -----------------------------------------------------------------------------
// 10. Hero Video Autoplay Assurance
// -----------------------------------------------------------------------------
const heroVideo = $("#heroVideo");
if (heroVideo && typeof heroVideo.play === "function") {
  heroVideo.muted = true;
  heroVideo.defaultMuted = true;

  const playPromise = heroVideo.play();
  if (playPromise !== undefined && typeof playPromise.catch === "function") {
    playPromise.catch(() => {
      const startVideoOnInteraction = () => {
        if (heroVideo && typeof heroVideo.play === "function") {
          heroVideo.play().catch(() => {});
        }
        window.removeEventListener("touchstart", startVideoOnInteraction);
        window.removeEventListener("scroll", startVideoOnInteraction);
        window.removeEventListener("click", startVideoOnInteraction);
      };
      window.addEventListener("touchstart", startVideoOnInteraction, { passive: true });
      window.addEventListener("scroll", startVideoOnInteraction, { passive: true });
      window.addEventListener("click", startVideoOnInteraction, { passive: true });
    });
  }
}

// -----------------------------------------------------------------------------
// 11. Google Review Testimonial Slider Engine
// -----------------------------------------------------------------------------
function initGoogleReviewsSlider() {
  const stage = $("#googleReviewStage");
  const track = $("#googleCardsTrack");
  const prevBtn = $("#googleRevPrev");
  const nextBtn = $("#googleRevNext");
  const dotsContainer = $("#googleSliderDots");

  if (!track) return;

  // Retrieve editable sample reviews
  const reviews = Array.isArray(window.GOOGLE_REVIEWS_CATALOG) && window.GOOGLE_REVIEWS_CATALOG.length > 0
    ? window.GOOGLE_REVIEWS_CATALOG
    : [
        {
          id: "g-rev-1",
          author: "Pooja Hegde",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
          rating: 5,
          date: "a month ago",
          text: "Had a wonderful experience! The team was helpful and made finding the right companion so much easier. Great guidance and a lovely experience overall."
        },
        {
          id: "g-rev-2",
          author: "Arjun Sundaram",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
          rating: 5,
          date: "2 months ago",
          text: "A great place for pet lovers. Appreciated the care, helpful guidance and variety of pet essentials available."
        },
        {
          id: "g-rev-3",
          author: "Sneha Pillai",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
          rating: 5,
          date: "3 months ago",
          text: "Really happy with the experience. The team was friendly and helped us understand the right care and nutrition for our companion."
        }
      ];

  const total = reviews.length;
  let currentIndex = 0;
  let autoTimer = null;
  let touchStartX = 0;
  let touchEndX = 0;

  // Render cards into track
  track.innerHTML = reviews.map((rev, index) => {
    const author = rev.author || "Google Reviewer";
    const initial = author.charAt(0).toUpperCase();
    const avatarHtml = rev.avatar
      ? `<img class="google-user-avatar" src="${rev.avatar}" alt="${author}" loading="lazy">`
      : `<div class="google-user-avatar" aria-hidden="true">${initial}</div>`;
    const dateStr = rev.date || "Verified Google Review";

    // 5 Stars in #F4B400
    const starCount = rev.rating ? Math.min(5, Math.max(1, rev.rating)) : 5;
    const starsHtml = Array.from({ length: 5 }, (_, i) => {
      const fill = i < starCount ? "#F4B400" : "#D0D7DE";
      return `<svg class="google-star-svg" viewBox="0 0 24 24" style="fill: ${fill};" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
    }).join("");

    return `
      <article class="google-review-card" data-index="${index}" aria-label="Review by ${author}">
        <div class="google-card-header">
          <div class="google-user-info">
            ${avatarHtml}
            <div class="google-user-meta">
              <h3 class="google-user-name">${author}</h3>
              <p class="google-review-date">${dateStr}</p>
            </div>
          </div>
          <div class="google-g-logo" title="Google Review">
            <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
          </div>
        </div>

        <div class="google-stars-row" aria-label="${starCount} out of 5 stars">
          ${starsHtml}
        </div>

        <p class="google-review-quote">"${rev.text}"</p>
      </article>
    `;
  }).join("");

  // Render Pagination Dots
  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    for (let i = 0; i < total; i++) {
      const dot = document.createElement("button");
      dot.className = `google-dot ${i === 0 ? "active" : ""}`;
      dot.setAttribute("aria-label", `Go to review ${i + 1}`);
      dot.addEventListener("click", () => {
        goToSlide(i);
        startAutoSlide();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll(".google-dot");
    dots.forEach((d, idx) => {
      d.classList.toggle("active", idx === currentIndex);
    });
  }

  function goToSlide(index) {
    if (total === 0) return;
    currentIndex = (index + total) % total;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  // Manual Arrow controls
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      startAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      startAutoSlide();
    });
  }

  // Automatic Slideshow (every 5 seconds)
  function startAutoSlide() {
    stopAutoSlide();
    autoTimer = setInterval(() => {
      nextSlide();
    }, 5000);
  }

  function stopAutoSlide() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  // Pause on hover
  if (stage) {
    stage.addEventListener("mouseenter", stopAutoSlide);
    stage.addEventListener("mouseleave", startAutoSlide);
  }

  // Touch swipe support on mobile
  track.addEventListener("touchstart", (e) => {
    stopAutoSlide();
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (diff < -45) {
      nextSlide();
    } else if (diff > 45) {
      prevSlide();
    }
    startAutoSlide();
  }, { passive: true });

  // Start slider
  goToSlide(0);
  startAutoSlide();
}

// -----------------------------------------------------------------------------
// 12. Initialization
// -----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderShopProducts();
  renderAnimalCollections();
  renderCollectionGrid();
  renderCart();
  initGoogleReviewsSlider();

  const yearEl = $("#year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

// -----------------------------------------------------------------------------
// 13. Official Page Loader (Cloudinary Animated GIF)
// -----------------------------------------------------------------------------
function dismissPageLoader() {
  const loader = document.getElementById("pageLoader");
  if (!loader) return;
  if (!loader.classList.contains("loaded")) {
    loader.classList.add("loaded");
  }
  loader.style.opacity = "0";
  loader.style.pointerEvents = "none";
  loader.style.visibility = "hidden";
  setTimeout(() => {
    if (loader) {
      loader.style.display = "none";
    }
  }, 350);
}

// Automatically dismiss as soon as the DOM is interactive; do not wait on heavy video buffer
if (document.readyState === "interactive" || document.readyState === "complete") {
  setTimeout(dismissPageLoader, 150);
} else {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(dismissPageLoader, 150);
  });
  window.addEventListener("load", dismissPageLoader);
}

// Safety fallback timeout: never block interaction or remain stuck
setTimeout(dismissPageLoader, 1200);

// Run theme, dynamic catalog renders, and cart setup immediately in case DOM is already parsed
initTheme();
renderShopProducts();
renderAnimalCollections();
renderCollectionGrid();
renderCart();
initGoogleReviewsSlider();
