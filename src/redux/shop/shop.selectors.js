import {
    createSelector
} from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) => collections ? Object.values(collections) : []
);

export const selectCollection = currentUrl => createSelector(
    [selectCollections],
    (collections) => collections ? collections[currentUrl] : null
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    (shop) => shop.isFetching
);

export const isCollectionLoaded = createSelector(
    [selectShop],
    (shop) => !!shop.collections
);