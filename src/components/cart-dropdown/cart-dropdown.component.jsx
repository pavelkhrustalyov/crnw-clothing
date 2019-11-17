import React from 'react';

import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CartDropdownButton } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    const isLengthCart = cartItems.length === 0;
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    !isLengthCart ?
                    (cartItems.map(item => <CartItem key={item.id} item={item} />))
                    : (<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>)
                }
            </CartItemsContainer>
            {
                isLengthCart
                ? null
                : (<CartDropdownButton onClick={() => {
                    history.push('/checkout')
                    dispatch(toggleCartHidden())
                }}>
                    Go To Checkout
                </CartDropdownButton>)
            }
        </CartDropdownContainer>
    );
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));