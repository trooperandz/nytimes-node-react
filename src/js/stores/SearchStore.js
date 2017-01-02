import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class SearchStore extends EventEmitter {
    constructor() {
        super();
        this.articles = [];
    }

    getLatest() {
        return this.articles;
    }

    handleActions(action) {
        console.log('SearchStore received an action: ' , action);
        switch(action.type) {
            case 'NEWS_SEARCH':
                this.articles = action.data;
                this.emit('change');
                break;
        }
    }
}

const searchStore = new SearchStore;
dispatcher.register(searchStore.handleActions.bind(searchStore));

export default searchStore;