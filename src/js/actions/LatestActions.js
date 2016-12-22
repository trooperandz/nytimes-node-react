import dispatcher from '../dispatcher';

export function search(text) {
    dispatcher.dispatch({
        type: 'GET_LATEST',
        text,
    });
    /*
    dispatcher.dispatch({
        type: 'SAVE',

    })*/
}