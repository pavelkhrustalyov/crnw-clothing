import React from 'react';

import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { CartContainer, ItemCountContainer, ShoppingIcon } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <CartContainer onClick={toggleCartHidden}>
            <ShoppingIcon />
            <ItemCountContainer>{itemCount}</ItemCountContainer>
        </CartContainer>
    );
};


const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = {
    toggleCartHidden
};


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
