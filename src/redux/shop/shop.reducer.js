import ShopData from './shop-data';

const INITIAL_STATE = {
    collections: ShopData
};

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default reducer;