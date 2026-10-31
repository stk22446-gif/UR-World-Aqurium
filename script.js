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
  CONTACT_EMAIL: "stk22446@gmail.com", // Official Contact Email
  THEME_STORAGE_KEY: "ur_world_theme",
  CART_STORAGE_KEY: "ur_world_cart"
};

// Official Product Catalogue across Dogs, Cats, Birds, Small Pets, Aquatics & Accessories
const products = {
  // Dogs
  dog_kibble: { name: "Nutri-Balance Dog Food (1.2kg)", price: 499, category: "dog" },
  dog_leash: { name: "Reflective Harness & Leash", price: 349, category: "dog" },

  // Cats
  cat_food: { name: "Gourmet Ocean Cat Food (1kg)", price: 389, category: "cat" },
  cat_scratch: { name: "Sisal Scratching Post Tower", price: 549, category: "cat" },

  // Birds
  bird_seed: { name: "Exotic Bird Seed Blend (1kg)", price: 249, category: "bird" },
  bird_cage: { name: "Enamelled Bird Habitat Cage", price: 899, category: "bird" },

  // Small Pets
  smallpet_food: { name: "Hamster Gourmet Mix (800g)", price: 219, category: "smallpet" },
  smallpet_wheel: { name: "Silent Exercise Running Wheel", price: 299, category: "smallpet" },

  // Aquarium
  fish_flakes: { name: "Daily Tropical Fish Flakes", price: 149, category: "aquarium" },
  air_pump: { name: "Compact Quiet Air Pump", price: 399, category: "aquarium" },
  water_cond: { name: "Water Conditioner & Detoxifier", price: 199, category: "aquarium" },

  // Accessories
  pet_bowl: { name: "Non-Slip Stainless Dual Bowl", price: 249, category: "accessories" },
  pet_brush: { name: "Self-Cleaning Deshedding Brush", price: 229, category: "accessories" }
};

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
// 4. Shop Category Filtering
// -----------------------------------------------------------------------------
const filterButtons = $$("#filters button");
const productCards = $$(".product-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const selectedFilter = button.dataset.filter || "all";
    productCards.forEach((card) => {
      const match = selectedFilter === "all" || card.dataset.category === selectedFilter;
      card.style.display = match ? "flex" : "none";
    });
  });
});

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
      cart = parsed.filter((item) => products[item.id]);
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
  const totalPrice = cart.reduce(
    (sum, item) => sum + (products[item.id] ? products[item.id].price * item.qty : 0),
    0
  );

  if (cartCountEl) cartCountEl.textContent = totalCount;
  if (cartTotalEl) cartTotalEl.textContent = formatINR(totalPrice);

  if (!cartItemsEl) return;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🐾</div>
        <p>Your bag is waiting for something lovely.</p>
        <a href="#shop" class="btn btn-outline btn-sm empty-shop-btn" id="emptyShopBtn">Browse Pet Supplies</a>
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
        const prod = products[item.id];
        if (!prod) return "";
        return `
          <div class="cart-row">
            <div class="cart-item-details">
              <strong>${prod.name}</strong>
              <span class="cart-item-price">${formatINR(prod.price)} each</span>
              <div class="cart-qty-controls">
                <button class="qty-btn" data-action="decrease" data-id="${item.id}" aria-label="Decrease quantity for ${prod.name}">-</button>
                <span class="qty-count">${item.qty}</span>
                <button class="qty-btn" data-action="increase" data-id="${item.id}" aria-label="Increase quantity for ${prod.name}">+</button>
              </div>
            </div>
            <div class="cart-item-actions">
              <span class="cart-item-total">${formatINR(prod.price * item.qty)}</span>
              <button class="remove-btn" data-action="remove" data-id="${item.id}">Remove</button>
            </div>
          </div>
        `;
      })
      .join("");
  }
}

function addToCart(productId) {
  if (!products[productId]) return;
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
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

// "Add to Bag" Buttons on Product Cards
$$(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.dataset.id;
    if (id) addToCart(id);
  });
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

if (cartOpenBtn) cartOpenBtn.addEventListener("click", openCart);
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

// Product Card Direct WhatsApp Enquiry Buttons
$$(".product-wa-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.dataset.id;
    const prod = products[id];
    if (!prod) return;

    const message = `Hi UR-WORLD-AQUARIUM! I would like to enquire about:
• Product: ${prod.name}
• Price: ${formatINR(prod.price)}
• Category: ${prod.category.toUpperCase()}

Please share stock availability and delivery options.`;

    openWhatsApp(message);
  });
});

// Animal Cards Direct WhatsApp Enquiry
$$(".animal-enquire-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const animalName = button.dataset.animal || "Pet Companion";
    const message = `Hi UR-WORLD-AQUARIUM! I am interested in inquiring about ${animalName}. Could you please share details on current availability, dietary care, and guidance?`;
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
        const prod = products[item.id];
        return `• ${prod.name} (Qty: ${item.qty}) — ${formatINR(prod.price * item.qty)}`;
      })
      .join("\n");

    const total = cart.reduce(
      (sum, item) => sum + products[item.id].price * item.qty,
      0
    );

    const message = `Hi UR-WORLD-AQUARIUM! I would like to place an order / enquiry for the following pet supplies from my bag:

${itemLines}

Total Subtotal: ${formatINR(total)}

Please confirm item availability and doorstep delivery details. Thank you!`;

    openWhatsApp(message);
  });
}

// -----------------------------------------------------------------------------
// 8. Email Integration (stk22446@gmail.com) with Mailto Fallback
// -----------------------------------------------------------------------------
const contactForm = $("#contactForm");
const formFeedback = $("#formFeedback");
const mailtoFallbackLink = $("#mailtoFallbackLink");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const topic = (formData.get("topic") || "Pet & Aquatic Inquiry").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    if (!name || !email || !message) {
      if (formFeedback) {
        formFeedback.className = "form-feedback error";
        formFeedback.textContent = "Please fill in all required fields.";
      }
      return;
    }

    const subject = `[UR-WORLD-AQUARIUM Inquiry] ${topic} from ${name}`;
    const body = `Hello UR-WORLD-AQUARIUM Team,

Name: ${name}
Email: ${email}
Topic: ${topic}

Message:
${message}

---
Sent via UR-WORLD-AQUARIUM Website Contact Form`;

    const mailtoUrl = `mailto:${CONFIG.CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Update fallback link and display helpful instructions
    if (mailtoFallbackLink) {
      mailtoFallbackLink.href = mailtoUrl;
      mailtoFallbackLink.style.display = "inline-flex";
    }

    if (formFeedback) {
      formFeedback.className = "form-feedback success";
      formFeedback.innerHTML = `Your email client is opening with your prepared message addressed to <strong>${CONFIG.CONTACT_EMAIL}</strong>. If it didn't open automatically, <a href="${mailtoUrl}" style="text-decoration: underline; font-weight: 700; color: inherit;">click here to send directly</a>.`;
    }

    // Trigger the mailto client
    window.location.href = mailtoUrl;
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
if (heroVideo) {
  heroVideo.muted = true;
  heroVideo.defaultMuted = true;

  const playPromise = heroVideo.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      const startVideoOnInteraction = () => {
        heroVideo.play().catch(() => {});
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
// 11. Initialization
// -----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderCart();

  const yearEl = $("#year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

// Run theme setup immediately in case DOM is already parsed
initTheme();
renderCart();
