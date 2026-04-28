// Menu data stays in one array so real photos, availability, or ordering can be added later.
const menuItemsData = [
  {
    id: "latte",
    name: "Iced Latte",
    price: 8.5,
    category: "Coffee",
    coffeeView: "Coffee",
    description: "Smooth espresso with steamed milk.",
    detail:
      "A smooth and creamy blend of rich espresso and steamed milk. The perfect balance of bold and mellow, made for your everyday comfort.",
    traits: ["Ready Espresso", "Steamed Milk", "Hot", "Medium Size"],
    image: "CM.png",
  },
  {
    id: "americano",
    name: "Americano",
    price: 7,
    category: "Coffee",
    coffeeView: "Fresh Brew",
    description: "Bold and smooth espresso.",
    detail:
      "A clean espresso-forward drink topped with hot water for a simple cup with a deep roasted finish.",
    traits: ["Espresso", "Hot Water", "Hot", "Medium Size"],
    image: "americano.png",
  },
  {
    id: "latte",
    name: "Iced Latte",
    price: 8.5,
    category: "Coffee",
    coffeeView: "Fresh Brew",
    description: "Smooth espresso with steamed milk.",
    detail:
      "A smooth and creamy blend of rich espresso and steamed milk. The perfect balance of bold and mellow, made for your everyday comfort.",
    traits: ["Espresso", "Steamed Milk", "Hot", "Medium Size"],
    image: "CM.png",
  },
  {
    id: "caramel-macchiato",
    name: "Caramel Macchiato",
    price: 9.5,
    category: "Coffee",
    coffeeView: "Coffee",
    description: "Vanilla milk with caramel and espresso.",
    detail:
      "Layered milk, vanilla, espresso, and caramel notes for a sweeter coffee break.",
    traits: ["Espresso", "Caramel", "Iced", "Medium Size"],
    image: "IL.png",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    price: 9,
    category: "Coffee",
    coffeeView: "Coffee",
    description: "Espresso with steamed milk foam.",
    detail:
      "A balanced cafe classic with espresso, warm milk, and an airy foam cap dusted for a soft finish.",
    traits: ["Espresso", "Milk Foam", "Hot", "Medium Size"],
    image: "cappuccino.jpg",
  },
  {
    id: "mocha",
    name: "Mocha",
    price: 9.5,
    category: "Coffee",
    coffeeView: "Coffee",
    description: "Chocolate and espresso perfectly blended.",
    detail:
      "Rich chocolate meets espresso and milk for a cozy drink with a dessert-like finish.",
    traits: ["Espresso", "Chocolate", "Iced", "Medium Size"],
    image: "mocha.jpg",
  },
  {
    id: "long-black",
    name: "Long Black",
    price: 6.5,
    category: "Coffee",
    coffeeView: "Fresh Brew",
    description: "Espresso with hot water.",
    detail:
      "A dark, aromatic coffee with a smooth crema and a bold roasted profile.",
    traits: ["Espresso", "Hot Water", "Hot", "Medium Size"],
    image: "long-black.jpg",
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    price: 9,
    category: "Non Coffee",
    description: "Earthy matcha whisked with milk.",
    detail:
      "A creamy green tea latte with a mellow earthy note and gentle sweetness.",
    traits: ["Matcha", "Steamed Milk", "Hot or Iced", "Medium Size"],
    image: "matcha-latte.jpg",
  },
  {
    id: "chocolate-frappe",
    name: "Chocolate Frappe",
    price: 9,
    category: "Non Coffee",
    description: "Rich chocolate blended with milk.",
    detail:
      "A creamy chocolate frappe with a smooth texture and rich cocoa flavor.",
    traits: ["Chocolate", "Steamed Milk", "Hot or Iced", "Medium Size"],
    image: "CF.png",
  },
  {
    id: "chocolate",
    name: "Chocolate",
    price: 8,
    category: "Non Coffee",
    description: "Rich cocoa drink with a mellow finish.",
    detail:
      "Comforting cocoa blended with milk for a smooth cup without coffee.",
    traits: ["Cocoa", "Milk", "Hot", "Medium Size"],
    image: "chocolate.jpg",
  },
  {
    id: "mojito-Peach",
    name: "Mojito Peach",
    price: 7.9,
    category: "Non Coffee",
    description: "Refreshing peach mojito with citrus notes.",
    detail:
      "Light sparkling peach drink with lime slices, topped with popping boba for extra texture.",
    traits: ["Peach", "Citrus", "Refreshing", "Cold", "Bubble Pop"],
    image: "Mojito Peach.png",
  },
  {
    id: "lemon-tea",
    name: "Lemon Tea",
    price: 5,
    category: "Non Coffee",
    description: "Bright tea with citrus notes.",
    detail:
      "A light tea with refreshing lemon brightness, easy to enjoy with food or dessert.",
    traits: ["Tea", "Lemon", "Iced", "Medium Size"],
    image: "lemon-tea.jpg",
  },
  {
    id: "chocolate-cake",
    name: "Moist Chocolate Cake",
    price: 4.2,
    category: "Dessert",
    description: "Moist chocolate slice with deep cocoa flavor.",
    detail:
      "A soft chocolate cake slice with a rich cocoa profile and cafe-style finish.",
    traits: ["Chocolate", "Cake Slice", "Sweet", "Single Serve"],
    image: "Moist Choco.png",
  },
  {
    id: "hazel-choco-brownie",
    name: "Hazelnut Chocolate Brownie",
    price: 2.5,
    category: "Dessert",
    description: "Rich chocolate brownie topped with hazelnut spread.",
    detail:
      "A dense and fudgy chocolate brownie layered with smooth hazelnut chocolate, offering a rich and indulgent taste in every bite.",
    traits: ["Chocolate", "Hazelnut", "Fudgy", "Sweet", "Single Serve"],
    image: "HazelChocoBrownie.png",
  },
  {
    id: "japanese-creampuff",
    name: "Japanese Creampuff",
    price: 2.2,
    category: "Dessert",
    description: "Fudgy chocolate squares.",
    detail:
      "Dense, fudgy brownies with a lightly crisp edge and rich chocolate center.",
    traits: ["Chocolate", "Fudgy", "Sweet", "Single Serve"],
    image: "Creampuff.png",
  },
  {
    id: "cheese-brownie",
    name: "Cheese Brownie",
    price: 2.5,
    category: "Dessert",
    description: "Toasted sandwich with seasoned chicken.",
    detail:
      "Warm toast filled with seasoned chicken and fresh greens for a simple cafe meal.",
    traits: ["Chicken", "Toast", "Savory", "Fresh"],
    image: "CheeseBrownie.png",
  },
  {
    id: "cheesetart",
    name: "Cheesetart",
    price: 2.2,
    category: "Dessert",
    description: "Buttery layered pastry.",
    detail:
      "A crisp golden pastry with soft buttery layers, best beside a warm drink.",
    traits: ["Butter", "Pastry", "Warm", "Single Serve"],
    image: "Cheesetart.png",
  },
  {
    id: "tiramisu",
    name: "Tiramisu",
    price: 14.9,
    category: "Dessert",
    description: "Classic Italian dessert layered with coffee and cream.",
    detail:
      "A rich and creamy tiramisu made with layers of coffee-soaked sponge and smooth mascarpone cream, finished with a dusting of cocoa powder for a balanced bittersweet flavor.",
    traits: ["Coffee", "Creamy", "Cocoa", "Sweet", "Single Serve"],
    image: "Tiramisu.png",
  },
  {
    id: "koktail-buah",
    name: "Koktail Buah",
    price: 7.9,
    category: "Dessert",
    description: "Refreshing fruit cocktail with creamy sweet base.",
    detail:
      "A chilled mix of assorted fruits, jelly, and creamy milk base, offering a refreshing and sweet dessert perfect for a light treat.",
    traits: ["Fruits", "Creamy", "Cold", "Sweet", "Single Serve"],
    image: "Koktail Buah.png",
  },
  {
    id: "puding-caramel",
    name: "Puding Caramel",
    price: 3.9,
    category: "Dessert",
    description: "Smooth caramel pudding with a rich, creamy texture.",
    detail:
      "A soft and silky caramel pudding topped with a glossy layer of caramel sauce, offering a balanced sweet and slightly bitter flavor in every bite.",
    traits: ["Caramel", "Creamy", "Soft", "Cold", "Single Serve"],
    image: "Puding Caramel.png",
  },
  {
    id: "pavlova",
    name: "Pavlova",
    price: 6.9,
    category: "Dessert",
    description: "Light and crispy meringue dessert topped with cream and flavors.",
    detail:
      "A delicate pavlova with a crisp outer shell and soft marshmallow-like center, topped with fresh cream and finished with your choice of Classic, Biscoff, or Chocolate flavors, enhanced with fruits and rich toppings.",
    traits: ["Meringue", "Creamy", "Light", "Sweet", "Single Serve"],
    image: "Pavlova.png",
  },
];

const menuItems = menuItemsData.map((item, index) => ({
  ...item,
  key: `${item.id}-${index}`,
}));

const IMAGE_BASE_PATH = "images/menu";
const CAFE_WHATSAPP_NUMBER = "60174710755";

const menuGrid = document.querySelector("#menu-grid");
const menuTitle = document.querySelector("#menu-title");
const menuCount = document.querySelector("#menu-count");
const filterButtons = document.querySelectorAll("[data-category]");
const sidebarLinks = document.querySelectorAll(".sidebar .side-link");
const coffeeTopbar = document.querySelector("#coffee-topbar");
const coffeeViewButtons = document.querySelectorAll("[data-coffee-view]");
const menuApp = document.querySelector(".menu-app");
const detailPanel = document.querySelector(".detail-panel");
const closePreviewButton = document.querySelector(".detail-panel__close");
const detailVisual = document.querySelector("#detail-visual");
const detailName = document.querySelector("#selected-item-name");
const detailPrice = document.querySelector("#selected-item-price");
const detailDescription = document.querySelector("#selected-item-description");
const detailList = document.querySelector("#detail-list");
const detailQtyDecrease = document.querySelector("#detail-qty-decrease");
const detailQtyIncrease = document.querySelector("#detail-qty-increase");
const detailQtyValue = document.querySelector("#detail-qty-value");
const detailAddToCart = document.querySelector("#detail-add-to-cart");
const menuSearch = document.querySelector("#menu-search");
const cartToggle = document.querySelector("#cart-toggle");
const cartCount = document.querySelector("#cart-count");
const cartPanel = document.querySelector("#cart-panel");
const cartClose = document.querySelector("#cart-close");
const cartBackdrop = document.querySelector("#cart-backdrop");
const cartItems = document.querySelector("#cart-items");
const cartTotal = document.querySelector("#cart-total");
const orderForm = document.querySelector("#order-form");
const whatsappOrderButton = document.querySelector("#whatsapp-order");
const imageModal = document.querySelector("#image-modal");
const imageModalClose = document.querySelector(".image-modal__close");
const imageModalImage = document.querySelector("#image-modal-image");

let activeCategory = "Coffee";
let selectedItemKey = menuItems[0]?.key || null;
let activeCoffeeView = "Coffee";
let searchTerm = "";
let detailQuantity = 1;

const cart = new Map();

function formatPrice(price) {
  return `RM ${price.toFixed(2)}`;
}

function getItemByKey(itemKey) {
  return menuItems.find((item) => item.key === itemKey);
}

function getVisibleItemsByCategory(category) {
  if (category === "All Menu") {
    return menuItems;
  }

  if (category === "Coffee") {
    return menuItems.filter((item) => {
      if (item.category !== "Coffee") {
        return false;
      }

      const itemCoffeeView = item.coffeeView || "Coffee";
      return itemCoffeeView === activeCoffeeView;
    });
  }

  return menuItems.filter((item) => item.category === category);
}

function getSearchFilteredItems(items) {
  if (!searchTerm) {
    return items;
  }

  const query = searchTerm.toLowerCase();

  return items.filter((item) => {
    const searchableText = [item.name, item.description, item.detail, item.category, ...item.traits]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(query);
  });
}

function createMenuImage(item, isLarge = false) {
  const sizeClass = isLarge ? "menu-photo--large" : "";
  const loadingMode = isLarge ? "eager" : "lazy";

  return `
    <div class="menu-photo ${sizeClass}">
      <img src="${IMAGE_BASE_PATH}/${item.image}" alt="${item.name}" loading="${loadingMode}" decoding="async" onerror="this.closest('.menu-photo').classList.add('menu-photo--missing'); this.remove();">
      <span class="menu-photo__missing">Image not found</span>
    </div>
  `;
}

function createMenuCard(item) {
  const selectedClass = item.key === selectedItemKey ? "menu-card--selected" : "";

  return `
    <article class="menu-card ${selectedClass}" data-item-key="${item.key}" tabindex="0" aria-label="${item.name}, ${formatPrice(item.price)}">
      <div class="menu-card__media">
        ${createMenuImage(item)}
      </div>
      <div class="menu-card__body">
        <h2 class="menu-card__name">${item.name}</h2>
        <p class="menu-card__description">${item.description}</p>
        <span class="menu-card__price">${formatPrice(item.price)}</span>
        <div class="menu-card__actions">
          <button class="menu-card__add" type="button" data-add-to-cart="${item.key}">Add to cart</button>
        </div>
      </div>
    </article>
  `;
}

function getTraitIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm1 2.1a7 7 0 0 1 0 13.8V5.1z"/>
    </svg>
  `;
}

function updateDetailQuantityUI() {
  detailQtyValue.textContent = String(detailQuantity);
}

function renderDetailPanel(item) {
  detailVisual.innerHTML = createMenuImage(item, true);
  detailName.textContent = item.name;
  detailPrice.textContent = formatPrice(item.price);
  detailDescription.textContent = item.detail;
  detailList.innerHTML = item.traits
    .map((trait) => `<li>${getTraitIcon()}<span>${trait}</span></li>`)
    .join("");

  updateDetailQuantityUI();
}

function openImageModal(imagePath) {
  imageModalImage.src = `${IMAGE_BASE_PATH}/${imagePath}`;
  imageModalImage.alt = "Item full view";
  imageModal.classList.add("image-modal--visible");
  document.body.style.overflow = "hidden";
}

function closeImageModal() {
  imageModal.classList.remove("image-modal--visible");
  document.body.style.overflow = "";
}

function setCoffeeView(view) {
  activeCoffeeView = view;
  coffeeViewButtons.forEach((button) => {
    button.classList.toggle("tab-button--active", button.dataset.coffeeView === view);
  });
}

function openDetailPanel() {
  menuApp.classList.remove("menu-app--detail-closed");
  detailPanel.classList.remove("detail-panel--hidden");
}

function closeDetailPanel() {
  menuApp.classList.add("menu-app--detail-closed");
  detailPanel.classList.add("detail-panel--hidden");
}

function setActiveButtons(category) {
  filterButtons.forEach((button) => {
    const isActive = button.dataset.category === category;
    if (button.classList.contains("category-link")) {
      button.classList.toggle("category-link--active", isActive);
    }
  });
}

function renderMenu(category) {
  const categoryItems = getVisibleItemsByCategory(category);
  const visibleItems = getSearchFilteredItems(categoryItems);
  const selectedVisible = visibleItems.some((item) => item.key === selectedItemKey);

  if (!selectedVisible) {
    selectedItemKey = visibleItems[0]?.key || null;
    detailQuantity = 1;
  }

  const selectedItem = getItemByKey(selectedItemKey);
  const isCoffeeCategory = category === "Coffee";

  coffeeTopbar.classList.toggle("tab-bar--hidden", !isCoffeeCategory);
  menuTitle.textContent = isCoffeeCategory ? activeCoffeeView : category;
  menuCount.textContent = `${visibleItems.length} item${visibleItems.length === 1 ? "" : "s"}`;

  if (visibleItems.length === 0) {
    menuGrid.innerHTML = '<div class="menu-empty">No menu item found for that search.</div>';
    closeDetailPanel();
    return;
  }

  menuGrid.innerHTML = visibleItems.map(createMenuCard).join("");

  if (selectedItem) {
    renderDetailPanel(selectedItem);
  }
}

function selectCategory(category) {
  activeCategory = category;
  closeDetailPanel();

  if (category !== "Coffee") {
    setCoffeeView("Coffee");
  }

  setActiveButtons(category);
  renderMenu(category);
}

function selectItem(itemKey) {
  selectedItemKey = itemKey;
  detailQuantity = 1;
  openDetailPanel();
  renderMenu(activeCategory);
}

function openCartPanel() {
  cartPanel.classList.remove("cart-panel--hidden");
  cartBackdrop.classList.remove("cart-backdrop--hidden");
}

function closeCartPanel() {
  cartPanel.classList.add("cart-panel--hidden");
  cartBackdrop.classList.add("cart-backdrop--hidden");
}

function getCartItemCount() {
  let count = 0;
  cart.forEach((quantity) => {
    count += quantity;
  });
  return count;
}

function getCartTotal() {
  let total = 0;
  cart.forEach((quantity, itemKey) => {
    const item = getItemByKey(itemKey);
    if (item) {
      total += item.price * quantity;
    }
  });
  return total;
}

function updateCartBadges() {
  const count = getCartItemCount();
  cartCount.textContent = String(count);
  whatsappOrderButton.disabled = count === 0;
}

function addToCart(itemKey, quantity = 1) {
  const currentQuantity = cart.get(itemKey) || 0;
  cart.set(itemKey, currentQuantity + quantity);
  renderCart();
}

function decreaseCartItem(itemKey) {
  const currentQuantity = cart.get(itemKey) || 0;
  if (currentQuantity <= 1) {
    cart.delete(itemKey);
  } else {
    cart.set(itemKey, currentQuantity - 1);
  }
  renderCart();
}

function removeCartItem(itemKey) {
  cart.delete(itemKey);
  renderCart();
}

function renderCart() {
  const entries = Array.from(cart.entries());

  if (entries.length === 0) {
    cartItems.innerHTML = '<div class="cart-empty">Your cart is empty. Add menu items to start an order.</div>';
    cartTotal.textContent = formatPrice(0);
    updateCartBadges();
    return;
  }

  cartItems.innerHTML = entries
    .map(([itemKey, quantity]) => {
      const item = getItemByKey(itemKey);
      if (!item) {
        return "";
      }

      const lineTotal = item.price * quantity;

      return `
        <article class="cart-item">
          <div>
            <h3>${item.name}</h3>
            <p>${formatPrice(item.price)} each</p>
            <p>${formatPrice(lineTotal)}</p>
          </div>
          <div>
            <div class="cart-item__controls">
              <button type="button" data-cart-action="decrease" data-item-key="${itemKey}" aria-label="Decrease quantity">-</button>
              <span>${quantity}</span>
              <button type="button" data-cart-action="increase" data-item-key="${itemKey}" aria-label="Increase quantity">+</button>
            </div>
            <button class="cart-item__remove" type="button" data-cart-action="remove" data-item-key="${itemKey}">Remove</button>
          </div>
        </article>
      `;
    })
    .join("");

  cartTotal.textContent = formatPrice(getCartTotal());
  updateCartBadges();
}

function buildWhatsAppMessage(name, phone, pickup, notes) {
  const lines = [
    "KUPIS Cafe Order",
    "--------------------",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Pickup Time: ${pickup}`,
    "",
    "Items:",
  ];

  cart.forEach((quantity, itemKey) => {
    const item = getItemByKey(itemKey);
    if (!item) {
      return;
    }

    lines.push(`- ${item.name} x${quantity} = ${formatPrice(item.price * quantity)}`);
  });

  lines.push("");
  lines.push(`Total: ${formatPrice(getCartTotal())}`);

  if (notes) {
    lines.push(`Notes: ${notes}`);
  }

  return lines.join("\n");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectCategory(button.dataset.category);
  });
});

sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeDetailPanel();
  });
});

coffeeViewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setCoffeeView(button.dataset.coffeeView);
    renderMenu(activeCategory);
  });
});

closePreviewButton.addEventListener("click", () => {
  closeDetailPanel();
});

detailQtyDecrease.addEventListener("click", () => {
  detailQuantity = Math.max(1, detailQuantity - 1);
  updateDetailQuantityUI();
});

detailQtyIncrease.addEventListener("click", () => {
  detailQuantity += 1;
  updateDetailQuantityUI();
});

detailAddToCart.addEventListener("click", () => {
  if (!selectedItemKey) {
    return;
  }

  addToCart(selectedItemKey, detailQuantity);
  openCartPanel();
});

menuSearch.addEventListener("input", (event) => {
  searchTerm = event.target.value.trim();
  renderMenu(activeCategory);
});

cartToggle.addEventListener("click", openCartPanel);
cartClose.addEventListener("click", closeCartPanel);
cartBackdrop.addEventListener("click", closeCartPanel);

cartItems.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-cart-action]");

  if (!actionButton) {
    return;
  }

  const { cartAction, itemKey } = actionButton.dataset;

  if (cartAction === "increase") {
    addToCart(itemKey, 1);
  }

  if (cartAction === "decrease") {
    decreaseCartItem(itemKey);
  }

  if (cartAction === "remove") {
    removeCartItem(itemKey);
  }
});

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (cart.size === 0) {
    alert("Please add at least one item to the cart first.");
    return;
  }

  const name = document.querySelector("#order-name").value.trim();
  const phone = document.querySelector("#order-phone").value.trim();
  const pickup = document.querySelector("#order-pickup").value;
  const notes = document.querySelector("#order-notes").value.trim();

  if (!name || !phone || !pickup) {
    alert("Please complete name, phone, and pickup time.");
    return;
  }

  const message = buildWhatsAppMessage(name, phone, pickup, notes);
  const whatsappUrl = `https://wa.me/${CAFE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank", "noopener");
});

detailVisual.addEventListener("click", () => {
  const selectedItem = getItemByKey(selectedItemKey);
  if (selectedItem) {
    openImageModal(selectedItem.image);
  }
});

imageModalClose.addEventListener("click", closeImageModal);

imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) {
    closeImageModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageModal.classList.contains("image-modal--visible")) {
    closeImageModal();
  }

  if (event.key === "Escape" && !cartPanel.classList.contains("cart-panel--hidden")) {
    closeCartPanel();
  }
});

menuGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-to-cart]");
  if (addButton) {
    addToCart(addButton.dataset.addToCart, 1);
    return;
  }

  const card = event.target.closest(".menu-card");
  if (card) {
    selectItem(card.dataset.itemKey);
  }
});

menuGrid.addEventListener("keydown", (event) => {
  const card = event.target.closest(".menu-card");
  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    selectItem(card.dataset.itemKey);
  }
});

setActiveButtons(activeCategory);
setCoffeeView(activeCoffeeView);
renderCart();
renderMenu(activeCategory);
