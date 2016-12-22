import dispatcher from '../dispatcher';

export function removeFavorite() {
    dispatcher.dispatch({
        type: 'REMOVE_FAVORITE',
    });
}