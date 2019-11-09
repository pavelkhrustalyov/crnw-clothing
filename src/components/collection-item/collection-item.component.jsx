import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import { addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div 
                className="image"
                style={{backgroundImage: `url(${imageUrl})`}}>
            </div>
            <div className="collection-footer">
                <div className="name">{name}</div>
                <div className="price">{price}$</div>
            </div>
            <CustomButton 
                inverted
                onClick={() => addItem(item)}>
                    Add to Cart
            </CustomButton>
        </div>
    );
};

const mapDispatchToProps = {
    addItem
}
 
export default connect(null, mapDispatchToProps)(CollectionItem);