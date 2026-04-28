# KUPIS Cafe Menu

A front-end-only cafe menu overview website built with HTML, CSS, and JavaScript.

## How to Run

Open `index.html` in any modern browser.

No backend, database, login, payment, ordering workflow, or build step is required.

## What Changed

The menu now supports a full front-end ordering flow:

- Responsive mobile layout (works on phone and desktop)
- Search bar to find menu quickly (example: latte, tiramisu)
- Add-to-cart buttons from both menu cards and detail panel
- Cart sidebar with quantity controls and auto total calculation
- Order form (name, phone, pickup time, notes)
- WhatsApp order button that opens a pre-filled message

## Project Structure

- `index.html` - Page layout and navigation
- `style.css` - Responsive tablet-style cafe UI
- `script.js` - Menu data, filtering, cart state, order form, WhatsApp flow, localStorage persistence, and printable preview
- `images/` - Reserved for future real menu photos

## WhatsApp Setup

Set your cafe WhatsApp number in `script.js`:

- `CAFE_WHATSAPP_NUMBER = "60174710755"`

Use full international format without `+`, spaces, or dashes.

## Host Online (Step 7)

### Option A: GitHub Pages

1. Push this folder to a GitHub repository.
2. In repository settings, open **Pages**.
3. Set source to your main branch (root folder).
4. Save and wait for your public link.

### Option B: Netlify

1. Go to Netlify and choose **Add new site** > **Deploy manually**.
2. Drag and drop the full project folder.
3. Netlify gives you a public URL instantly.

## Share by QR

1. Copy your hosted URL.
2. Use any QR generator (example: qr-code-generator.com).
3. Print the QR code and place it on tables/counter.

## Additional features added

- Cart persists in the browser using `localStorage` so items remain after refreshing the page.
- Cart rows now include item thumbnails (if present in `images/menu/`).
- When submitting the order, a printable order summary preview opens in a new tab; use the "Print" button before sending the WhatsApp message.

## Real Menu Photos Setup

The app now loads real images from `images/menu/`.

1. Put your photo files in `images/menu/`
2. Use these exact filenames (or update `image` values inside `script.js`):

- `latte.jpg`
- `americano.jpg`
- `cappuccino.jpg`
- `caramel-macchiato.jpg`
- `mocha.jpg`
- `long-black.jpg`
- `matcha-latte.jpg`
- `chocolate.jpg`
- `lemon-tea.jpg`
- `chocolate-cake.jpg`
- `burnt-cheesecake.jpg`
- `brownies.jpg`
- `chicken-sandwich.jpg`
- `croissant.jpg`
- `spaghetti-carbonara.jpg`

Recommended photo size: `800x800` (square), `JPG` format.

If a file is missing, the app shows an "Image not found" placeholder card.
