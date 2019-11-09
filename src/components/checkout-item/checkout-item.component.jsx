import React from 'react';

import './checkout-item.styles.scss';

import { connect } from 'react-redux';
import { removeItemFromCart } from '../../redux/cart/cart.actions';
import { addItem, decreaseItemInCart } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, removeItemFromCart, addItem, decreaseItemInCart }) => {
    const { id, name, quantity, imageUrl, price } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name}/>
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <span className="arrow" onClick={() => decreaseItemInCart(cartItem)}>&#10094;</span>
                <span className="value">{quantity}</span>
                <span className="arrow" onClick={() => addItem(cartItem)}>&#10095;</span>
            </div>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => removeItemFromCart(id)}>&#10005;</span>
        </div>
    );
};

const mapDispatchToProps = {
    removeItemFromCart,
    addItem,
    decreaseItemInCart
}
 
export default connect(null, mapDispatchToProps)(CheckoutItem);