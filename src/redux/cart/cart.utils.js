const addItemToCart = (cartItems, addedItem) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === addedItem.id);
    if (existingItem) {
        return cartItems.map((cartItem) => {
            return cartItem.id === addedItem.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        });
    }

    return [ ...cartItems, { ...addedItem, quantity: 1 } ];
};

const removeItemFromCart = (cartItems, id) => cartItems.filter(item => item.id !== id)

const decreaseItemFromCart = (cartItems, item) => {
    const itemExists = cartItems.find(cartItem => cartItem.id === item.id);
    if (itemExists.quantity === 1) {
        return removeItemFromCart(cartItems, item.id);
    }
    return cartItems.map(cartItem => {
        return cartItem.id === item.id ?
        {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    });
};

export {
    addItemToCart,
    removeItemFromCart,
    decreaseItemFromCart
};