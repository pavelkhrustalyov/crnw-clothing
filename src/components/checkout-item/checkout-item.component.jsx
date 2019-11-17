import React from 'react';

import { connect } from 'react-redux';
import { removeItemFromCart } from '../../redux/cart/cart.actions';
import { addItem, decreaseItemInCart } from '../../redux/cart/cart.actions';
import { 
    CheckoutItemContainer,
    QuantityContainer,
    ImageContainer,
    TextContainer,
    RemoveButtonContainer } from './checkout-item.styles';

const CheckoutItem = ({ cartItem, removeItemFromCart, addItem, decreaseItemInCart }) => {
    const { id, name, quantity, imageUrl, price } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => decreaseItemInCart(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer className="remove-button" onClick={() => removeItemFromCart(id)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = {
    removeItemFromCart,
    addItem,
    decreaseItemInCart
};
 
export default connect(null, mapDispatchToProps)(CheckoutItem);
