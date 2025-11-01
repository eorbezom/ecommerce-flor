// Datos de productos de ejemplo
const products = [
    { id: 1, name: "Blusas de ocacion", price: 59.99, image: "images/camisa/camisa1.jpeg", category: "Mujeres", season: "Verano", type: "Camisas", featured: true },
    { id: 2, name: "Casaca de Lazo Elegante", price: 34.50, image: "images/casaca/casa2.jpeg", category: "Mujeres", season: "Invierno", type: "Casaca", featured: true },
    { id: 3, name: "Short Jeans Toque Rasgado", price: 69.99, image: "images/short/short6.jpeg", category: "Mujeres", season: "Verano", type: "Short", featured: true },
    { id: 4, name: "Jeans de Tendencia", price: 45.00, image: "images/pantalones1/panatalo2.jpeg", category: "Mujeres", season: "Verano", type: "Pantalones", featured: true },
    { id: 5, name: "Polo de Punto Suave", price: 49.99, image: "images/polos/polo1.jpeg", category: "Mujeres", season: "Verano", type: "Camisas", featured: false },
    { id: 6, name: "Polo de Punto Suave", price: 39.99, image: "images/polos/polo2.jpeg", category: "Mujeres", season: "Verano", type: "Camisas", featured: false },
    { id: 7, name: "Polo Plisada", price: 29.99, image: "images/polos2/polo5.jpeg", category: "Mujeres", season: "Verano", type: "Camisas", featured: false },
    { id: 8, name: "Polos Casuales", price: 15.00, image: "images/polos2/polo7.jpeg", category: "Mujeres", season: "Verano", type: "Camisas", featured: false },
    { id: 9, name: "Short Verano", price: 15.00, image: "images/short/short7.jpeg", category: "Mujeres", season: "Verano", type: "Short", featured: false },    
    { id: 10, name: "Coleccione de verano", price: 15.00, image: "images/short/short9.jpeg", category: "Mujeres", season: "Verano", type: "Short", featured: false },
    { id: 11, name: "Polos Casuales", price: 15.00, image: "images/polos2/polo6.jpeg", category: "Mujeres", season: "Verano", type: "Camisas", featured: false },
    { id: 12, name: "Corset Pesacadora", price: 15.00, image: "images/camisa/camisa2.jpeg", category: "Mujeres", season: "Verano", type: "Camisas", featured: false },
    { id: 13, name: "Camisa Elegante", price: 55.00, image: "images/camisa/camisa3.jpeg", category: "Mujeres", season: "Verano", type: "Camisas", featured: true },
    { id: 14, name: "Casaca elegante", price: 115.00, image: "images/casaca/casaca1.jpeg", category: "Mujeres", season: "Invierno", type: "Casaca", featured: false },
    { id: 15, name: "Casaca amorosa", price: 115.00, image: "images/casaca/casaca3.jpeg", category: "Mujeres", season: "Invierno", type: "Casaca", featured: false },
    { id: 16, name: "Casaca nocturna", price: 115.00, image: "images/casaca/casaca4.jpeg", category: "Mujeres", season: "Invierno", type: "Casaca", featured: false },
    { id: 17, name: "Falda pasion", price: 25.00, image: "images/faldas/falda1.jpeg", category: "Mujeres", season: "Verano", type: "Falda", featured: false },
    { id: 18, name: "Shorts Casuales", price: 30.00, image: "images/faldas/falda2.jpeg", category: "Mujeres", season: "Verano", type: "Short", featured: false },
    { id: 19, name: "Mini falda Seduccion", price: 35.00, image: "images/faldas/falda4.jpeg", category: "Mujeres", season: "Verano", type: "Falda", featured: false },
    { id: 20, name: "Jeans Seguridad", price: 75.00, image: "images/pantalones1/pantalo1.jpeg", category: "Mujeres", season: "Verano", type: "Pantalones", featured: false },
    { id: 21, name: "Coleecion de Jeans", price: 225.00, image: "images/pantalones1/pantalo3.jpeg", category: "Mujeres", season: "Verano", type: "Pantalones", featured: false },
    { id: 22, name: "Jeans Comodas", price: 65.00, image: "images/pantalones1/pantalon4.jpeg", category: "Mujeres", season: "Verano", type: "Pantalones", featured: false },
    { id: 23, name: "Mujer Joven", price: 68.00, image: "images/pantalones2/pantalo2.jpeg", category: "Mujeres", season: "Verano", type: "Pantalones", featured: false },
    { id: 24, name: "Lucir Pasion", price: 55.00, image: "images/pantalones2/pantalo3.jpeg", category: "Mujeres", season: "Verano", type: "Pantalones", featured: false },
    { id: 25, name: "Color idela ", price: 55.00, image: "images/pantalones2/pantalo4.jpeg", category: "Mujeres", season: "Verano", type: "Pantalones", featured: false },
    { id: 26, name: "Muestrala elegancia", price: 75.00, image: "images/pantalones2/pantalon1.jpeg", category: "Mujeres", season: "Verano", type: "Pantalones", featured: true },    
   

];

// Carrito de Compras                                                  //Camisas Casaca Vestidos Pantalones Short Falda  //Verano Invierno
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para guardar el carrito en localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para renderizar un producto
function renderProduct(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button class="btn add-to-cart" data-id="${product.id}">Agregar al carrito</button>
            </div>
        </div>
    `;
}

// Función para cargar productos en la cuadrícula
function loadProducts(containerId, productList) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = productList.map(renderProduct).join('');
    }
}

// Función para actualizar el contador del carrito
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    }
}

// Función para agregar un producto al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    if (product) {
        const existingItem = cart.find(item => item.id === parseInt(productId));
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        saveCart();
        updateCartCount();
        renderCart();
        alert(`${product.name} ha sido agregado al carrito.`);
    }
}

// Función para eliminar un producto del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== parseInt(productId));
    saveCart();
    updateCartCount();
    renderCart();
}

// Función para calcular el total del carrito
function calculateCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Función para renderizar el contenido del carrito
function renderCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total-price');

    if (cartItemsElement && cartTotalElement) {
        if (cart.length === 0) {
            cartItemsElement.innerHTML = '<p>Tu carrito está vacío.</p>';
        } else {
            cartItemsElement.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-details">
                        <strong>${item.name}</strong>
                        <span>$${item.price.toFixed(2)} x ${item.quantity}</span>
                    </div>
                    <button class="remove-from-cart" data-id="${item.id}">Eliminar</button>
                </div>
            `).join('');
        }
        cartTotalElement.textContent = calculateCartTotal().toFixed(2);
    }
}

// Lógica del Carrusel
// Lógica del Carrusel
const items = document.querySelectorAll('.carousel-item');
const track = document.querySelector('.carousel-track');

if (track && items.length > 0) { // ✅ Solo si existe el carrusel
    let index = 1;

    function updateCarousel() {
        items.forEach(item => item.classList.remove('active'));
        items[index].classList.add('active');

        const trackWidth = track.offsetWidth;
        const itemWidth = items[index].offsetWidth;

        const centerOffset = (trackWidth / 2) - (itemWidth / 2);
        const moveX = -(index * (itemWidth + 32)) + centerOffset;

        track.style.transform = `translateX(${moveX}px)`;
    }

    function nextSlide() {
        index = (index + 1) % items.length;
        updateCarousel();
    }

    function prevSlide() {
        index = (index - 1 + items.length) % items.length;
        updateCarousel();
    }

    document.querySelector('.next')?.addEventListener('click', nextSlide);
    document.querySelector('.prev')?.addEventListener('click', prevSlide);

    setInterval(nextSlide, 4000);
    updateCarousel();
}



// Lógica de Filtros (Solo en shop.html)
function applyFilters() {
    const shopGrid = document.getElementById('shop-product-grid');
    if (!shopGrid) return; // Solo ejecutar en shop.html

    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
    const selectedSeasons = Array.from(document.querySelectorAll('input[name="season"]:checked')).map(cb => cb.value);
    const selectedTypes = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(cb => cb.value);

    const filteredProducts = products.filter(product => {
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const seasonMatch = selectedSeasons.length === 0 || selectedSeasons.includes(product.season);
        const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.type);
        return categoryMatch && seasonMatch && typeMatch;
    });

    loadProducts('shop-product-grid', filteredProducts);
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar el carrusel si existe
    const allSlides = document.querySelectorAll('.carousel-slide');
    if (allSlides.length > 0) {
        // Re-obtener slides y currentSlide para la lógica de inicialización
        const slides = document.querySelectorAll('.carousel-slide');
        let currentSlideIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
        }

        function nextSlide() {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(currentSlideIndex);
        }

        showSlide(currentSlideIndex);
        setInterval(nextSlide, 5000); // Cambio automático cada 5 segundos
        document.querySelector('.next-btn')?.addEventListener('click', nextSlide);

        document.querySelector('.prev-btn')?.addEventListener('click', () => {
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
            showSlide(currentSlideIndex);
        });
    }

    // Cargar productos destacados en index.html
    const featuredProducts = products.filter(p => p.featured);
    loadProducts('product-grid', featuredProducts);

    // Cargar todos los productos en shop.html
     
    const shopGrid = document.getElementById('shop-product-grid');
    if (shopGrid) {
        // Filtrar IDs duplicados
        const uniqueProducts = products.filter((p, index, self) =>
            index === self.findIndex(t => t.id === p.id)
        );

        // Renderizar productos
        shopGrid.innerHTML = uniqueProducts.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.png'">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <button class="btn add-to-cart" data-id="${product.id}">Agregar al carrito</button>
                </div>
            </div>
        `).join('');
    }

    // --- Botón de filtros ---
    const applyFiltersBtn = document.getElementById('apply-filters');
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', () => {
            const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
            const selectedSeasons = Array.from(document.querySelectorAll('input[name="season"]:checked')).map(cb => cb.value);
            const selectedTypes = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(cb => cb.value);

            const filteredProducts = products.filter(product => {
                const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
                const seasonMatch = selectedSeasons.length === 0 || selectedSeasons.includes(product.season);
                const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.type);
                return categoryMatch && seasonMatch && typeMatch;
            });

            shopGrid.innerHTML = filteredProducts.map(product => `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.png'">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="price">$${product.price.toFixed(2)}</p>
                        <button class="btn add-to-cart" data-id="${product.id}">Agregar al carrito</button>
                    </div>
                </div>
            `).join('');
        });
    }

    // Lógica del Carrito Modals
    const cartModal = document.getElementById('cart-modal');
    const cartIcon = document.getElementById('cart-icon');
    const closeBtn = document.querySelector('.close-btn');

    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            renderCart();
            cartModal.style.display = 'block';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            cartModal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // Event Listeners para agregar/eliminar del carrito
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            addToCart(e.target.dataset.id);
        } else if (e.target.classList.contains('remove-from-cart')) {
            removeFromCart(e.target.dataset.id);
        }
    });

    // Lógica del Menú Hamburguesa (Responsive)
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }

    // Inicializar contador de carrito al cargar
    updateCartCount();

        // 🌸 Ventana emergente Promocional Automática + Tienda
const promoModal = document.getElementById("promoModal");
const promoClose = document.querySelector(".close-promo");
const promoAceptar = document.getElementById("aceptarPromo");
const tiendaLink = document.querySelector('.nav-links a[href="shop.html"]');

if (promoModal) {
  // Mostrar automáticamente después de 5 segundos al entrar a la página principal
  if (window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/")) {
    const promoShown = sessionStorage.getItem("promoShown");
    if (!promoShown) {
      setTimeout(() => {
        promoModal.style.display = "flex";
        sessionStorage.setItem("promoShown", "true");
      }, 2000); // 5 segundos
    }
  }

  // Mostrar al hacer clic en "Tienda" (solo una vez por sesión)
  if (tiendaLink) {
    tiendaLink.addEventListener("click", (e) => {
      e.preventDefault();
      const tiendaPromo = sessionStorage.getItem("tiendaPromo");
      if (!tiendaPromo) {
        promoModal.style.display = "flex";
        sessionStorage.setItem("tiendaPromo", "true");
      } else {
        window.location.href = "shop.html";
      }
    });
  }

  // Cerrar el modal
  const cerrarPromo = () => (promoModal.style.display = "none");

  if (promoClose) {
    promoClose.addEventListener("click", cerrarPromo);
  }
  if (promoAceptar) {
    promoAceptar.addEventListener("click", () => {
      cerrarPromo();
      if (!window.location.pathname.includes("index.html")) {
        window.location.href = "shop.html";
      }
    });
  }

  // Cerrar si se hace clic fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target === promoModal) cerrarPromo();
  });
}


});




