import dispatcher from '../dispatcher';

export function newsSearch() {
    dispatcher.dispatch({
        type: 'NEWS_SEARCH',
    });
}