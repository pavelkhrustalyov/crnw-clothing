import React from 'react';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
            {
                collections.map((collection) => {
                    const {id, ...other} = collection;
                    return (
                        <CollectionPreview key={id} {...other}/>
                    );
                })
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});
 
export default connect(mapStateToProps)(CollectionOverview);