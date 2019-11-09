import cartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItemFromCart = (id) => ({
    type: cartActionTypes.DELETE_ITEM,
    payload: id
});

export const decreaseItemInCart = (item) => ({
    type: cartActionTypes.DECREASE_ITEM,
    payload: item
});