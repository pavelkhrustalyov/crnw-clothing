import React from 'react';
import './collection-page.styles.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collection }) => {
    return (
        <div className="collection-page">
            <div className="title">{collection.title.toUpperCase()}</div>
            <div className="items">
                {
                    collection.items.map(
                        (item) => <CollectionItem key={item.id} item={item} />
                    )
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);