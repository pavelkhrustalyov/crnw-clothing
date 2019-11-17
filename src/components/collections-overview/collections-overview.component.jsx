import React from 'react';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { CollectionOverviewContainer } from './collections-overview.styles';

const CollectionOverview = ({ collections }) => {
    return (
        <CollectionOverviewContainer>
            {
                collections.map((collection) => {
                    const {id, ...other} = collection;
                    return (
                        <CollectionPreview key={id} {...other}/>
                    );
                })
            }
        </CollectionOverviewContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);