import cartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart, decreaseItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionTypes.DELETE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case cartActionTypes.DECREASE_ITEM:
                return {
                    ...state,
                    cartItems: decreaseItemFromCart(state.cartItems, action.payload)
                }
        default:
            return state;
    }
};

export default reducer;