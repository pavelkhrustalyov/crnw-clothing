import React from 'react';
import { addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

import { 
    CollectionItemContainer, 
    AddButton,
    BackgroundImage, 
    CollectionFooterContainer,
    NameContainer, 
    PriceContainer } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage className="image" imageUrl={imageUrl}>
            </BackgroundImage>
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}$</PriceContainer>
            </CollectionFooterContainer>
            <AddButton
                inverted
                onClick={() => addItem(item)}>
                    Add to Cart
            </AddButton>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = {
    addItem
}
 
export default connect(null, mapDispatchToProps)(CollectionItem);