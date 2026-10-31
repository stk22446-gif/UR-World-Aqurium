# UR-WORLD-AQURIUM 🐠🌊

> **Discover Your Own Underwater World**  
> Explore the beauty of aquatic life, nature and everything beyond.

A premium aquarium and pet lifestyle website featuring cinematic underwater video backgrounds, dynamic dark/light mode theming, curated fish collections, an interactive aquarium gallery, an essentials online shop with shopping bag management, direct WhatsApp inquiry workflows, and direct email communication.

---

## 🌟 Key Features

1. **Cinematic Hero Video Background**
   - Full-width HD underwater video loop (`HERO_PAGE_yg0wvw.mp4`).
   - Autoplay, muted, loop, playsinline, with responsive high-resolution poster fallback.
   - Dual-gradient overlay ensuring high text readability across dark and light themes.

2. **Official Brand Logo Integration**
   - Official nature badge logo integrated in the navigation bar, footer, and browser favicon.
   - Preserves proportions using `object-fit: contain`.

3. **Dark Mode & Light Mode Theme System**
   - **Dark Mode**: `#061B2C` (Background), `#0B3550` (Secondary), `#38BDF8` (Accent), `#E0F2FE` (Text), and glassmorphic cards.
   - **Light Mode**: `#F4FAFC` (Background), `#E5F3F8` (Secondary), `#087F9E` (Accent), `#12394D` (Text), and crisp elevated white cards.
   - Navbar sun/moon toggle button with instant switching.
   - Preference saved in `localStorage` with initial OS `prefers-color-scheme` auto-detection.

4. **Complete Website Sections**
   - **Hero**: Clean headline, subtitle, and primary call-to-actions ("Explore Our Collection" and "Discover More").
   - **Fish Collection**: Detailed species profiles (*Betta splendens*, *Neon Tetra*, *Fancy Guppy*) with tank specs and direct WhatsApp enquiry buttons.
   - **Aquascaping Feature Band**: Showcase of natural living aquarium art.
   - **Aquarium Gallery**: Curated photo grid with hover zoom and captions.
   - **Online Shop**: Category filter tabs (*All Items*, *Fish Food*, *Equipment*, *Water Care*) with direct bag addition and product enquiry buttons.
   - **Shopping Bag**: Slide-out drawer with quantity controls (`+` / `-`), subtotal calculations in INR (`₹`), empty state, and one-click WhatsApp order generation.
   - **Contact & Inquiries**: WhatsApp card (`+91 99800 39294`), email card (`stk22446@gmail.com`), and contact form with functional mailto fallback.

5. **WhatsApp Integration**
   - **Official WhatsApp Number**: `+91 99800 39294`
   - Floating quick-chat action button with pulse animation.
   - Product cards generate prefilled product enquiry messages.
   - Cart checkout compiles all bag items, quantities, and subtotal into a ready-to-send WhatsApp order message.

6. **Email Integration**
   - **Official Email**: `stk22446@gmail.com`
   - Form prepares subject and message body into `mailto:stk22446@gmail.com` with on-screen fallback link.

---

## 🚀 Deployment Instructions

### Deploy to Vercel
1. Install the Vercel CLI (`npm i -g vercel`) or push the repository to GitHub.
2. In the Vercel Dashboard, click **Add New Project** and import the repository.
3. Keep default settings (Framework Preset: **Other**) and click **Deploy**.
4. Your site will be live on an ultra-fast global CDN.

### Deploy to GitHub Pages
1. Push this project to your GitHub repository:
   ```bash
   git add .
   git commit -m "UR-WORLD-AQURIUM - Final Hero Video Integration & Website Cleanup"
   git push origin main
   ```
2. In your repository settings, navigate to **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch** and choose `main` / `/ (root)`.
4. Click **Save** to publish.

---

## 📁 Project Structure

```text
UR-World-Aqurium/
├── index.html       # Semantic HTML5 website structure with hero video & drawer
├── styles.css       # Complete theme styling, variables, glassmorphism & responsive CSS
├── script.js        # Theme engine, cart management, WhatsApp integration & video helpers
├── vercel.json      # Vercel configuration for clean URLs
├── README.md        # Documentation and deployment guide
└── UR-WORLD-AQURIUM.zip # Fresh deployment package
```

---

## 📞 Official Contacts
- **WhatsApp**: [+91 99800 39294](https://wa.me/919980039294)
- **Email**: [stk22446@gmail.com](mailto:stk22446@gmail.com)
