import shopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collections) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
});

export const fetchCollectionsFailure = (error) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
});

export const fetchCollectionsStartAsync = () => (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());
    collectionRef.get().then(snaphsot => {
        const collectionMap = convertCollectionsSnapshotToMap(snaphsot);
        dispatch(fetchCollectionsSuccess(collectionMap));
    })
    .catch(err => dispatch(fetchCollectionsFailure(err.message)));
}