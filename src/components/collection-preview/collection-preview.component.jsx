import React from 'react';

import { CollectionPreviewContainer, Preview, CollectionTitle } from './collection-preview.styles';
import CollectionItem from '../collection-item/collection-item.component';
import { withRouter } from 'react-router-dom';

const CollectionPreview = ({ title, items, match, history }) => {

    return (
        <CollectionPreviewContainer>
            <CollectionTitle 
                onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}>
                {title.toUpperCase()}
            </CollectionTitle>
            <Preview>
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map((item) => <CollectionItem key={item.id} item={item} /> )
                }
            </Preview>
        </CollectionPreviewContainer>
    );
};

export default withRouter(CollectionPreview);