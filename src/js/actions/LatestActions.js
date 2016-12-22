import dispatcher from '../dispatcher';

export function getScience() {
    dispatcher.dispatch({
        type: 'GET_SCIENCE',
    });
}

export function getLatest() {
    dispatcher.dispatch({
        type: 'GET_LATEST',
    });
}

export function addFavorite() {
    dispatcher.dispatch({
        type: 'GET_FAVORITES',
    });
}