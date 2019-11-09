import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection-page/collection-page.component';

const ShopPage = ({ match }) => {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.url}/:collectionId`} component={CollectionPage} />
        </div>
    );
};

export default ShopPage;
