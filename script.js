// Initialize cart if it doesn't exist
if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
}

// Function to update the cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    document.getElementById('cart-count').textContent = cart.length;
}

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product-card');
        const productId = product.getAttribute('data-id');
        const productName = product.getAttribute('data-name');
        const productPrice = product.getAttribute('data-price');

        const cart = JSON.parse(localStorage.getItem('cart'));
        cart.push({ id: productId, name: productName, price: productPrice });
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartCount();
        alert(`${productName} added to cart!`);
    });
});

// Update cart count on page load
updateCartCount();