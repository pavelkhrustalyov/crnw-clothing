import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    const isLengthCart = cartItems.length === 0;
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    !isLengthCart ?
                    (cartItems.map(item => <CartItem key={item.id} item={item} />))
                    : (<span className="empty-message">Your cart is empty</span>)
                }
            </div>
            {
                isLengthCart
                ? null
                : (<CustomButton onClick={() => {
                    history.push('/checkout')
                    dispatch(toggleCartHidden())
                }}>
                    Go To Checkout
                </CustomButton>)
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));