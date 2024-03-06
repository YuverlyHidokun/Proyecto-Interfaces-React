let cart = [];

let addToCartButtons = document.getElementsByClassName('btn-primary');

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function (event) {
        let itemId = event.target.dataset.itemId;
        addItemToCart(itemId);
    });
}

function addItemToCart(itemId) {
    let itemIndex = cart.findIndex(item => item.id === itemId);

    if (itemIndex === -1) {
        cart.push({
            id: itemId,
            quantity: 1
        });
    } else {
        cart[itemIndex].quantity++;
    }

    updateCart();
}

let removeFromCartButtons = document.getElementsByClassName('btn-danger');

for (let i = 0; i < removeFromCartButtons.length; i++) {
    removeFromCartButtons[i].addEventListener('click', function (event) {
        let itemId = event.target.dataset.itemId;
        removeItemFromCart(itemId);
    });
}

function removeItemFromCart(itemId) {
    let itemIndex = cart.findIndex(item => item.id === itemId);

    if (itemIndex !== -1 && cart[itemIndex].quantity > 1) {
        cart[itemIndex].quantity--;
    } else {
        cart.splice(itemIndex, 1);
    }

    updateCart();
}

function updateCart() {
    let cartList = document.querySelector('.cart ul');
    cartList.innerHTML = '';

    let cartTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let itemPrice = getItemPrice(item.id);

        let cartItem = document.createElement('li');
        cartItem.classList.add('mb-2');

        let cartCard = document.createElement('div');
        cartCard.classList.add('card');

        let cartCardBody = document.createElement('div');
        cartCardBody.classList.add('card-body');

        let cartTitle = document.createElement('h6');
        cartTitle.classList.add('card-title');
        cartTitle.textContent = getItemName(item.id);

        let cartText = document.createElement('p');
        cartText.classList.add('card-text');
        cartText.textContent = `$${itemPrice.toFixed(2)}`;

        let cartQuantity = document.createElement('span');
        cartQuantity.textContent = `Cantidad: ${item.quantity}`;

        let removeButton = document.createElement('button');
        removeButton.classList.add('btn', 'btn-danger');
        removeButton.dataset.itemId = item.id;
        removeButton.textContent = 'Borrar';
        removeButton.addEventListener('click', function (event) {
            removeItemFromCart(event.target.dataset.itemId);
        });

        cartCardBody.appendChild(cartTitle);
        cartCardBody.appendChild(cartText);
        cartCardBody.appendChild(cartQuantity);
        cartCardBody.appendChild(removeButton);
        cartCard.appendChild(cartCardBody);
        cartItem.appendChild(cart