import {cart, addToCart} from './cart.js';
import {products} from './products.js';


let productsHTML = '';

products.slice(28).forEach((product) => {
    productsHTML += `
        <div class="product-box">
            <a href="https://raymascarena.github.io/BBB/${product.image}" target="_blank">
                <img class="product-img" src="${product.image}">
            </a>
            <h2 class="product-title">${product.name}</h2>
            <div class="space-between">
                <span class="price">$${(Math.round(product.priceCents) / 100).toFixed(2)}</span>
                <button type="button" class="add-cart js-add-cart" data-product-id="${product.id}">
                    <img class="cartadd" src="images/cartadd.svg">
                </button>
            </div>
        </div>
    `;
});

document.querySelector('.js-accessories-grid').innerHTML = productsHTML;


function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}


document.querySelectorAll('.js-add-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;

        addToCart(productId);
        updateCartQuantity();
    });
});

updateCartQuantity();
