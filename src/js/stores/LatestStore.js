import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class LatestStore extends EventEmitter {
    constructor() {
        super();
        this.articles = [];
        //this.articles = this.getLatest();
        /*
        this.articles = [
            {
              "id": "07-48737223469",
              "title": "Mans Defiante Tante",
              "url": "http://sfgate.com/ipsum/primis/in/faucibus/orci/luctus.js",
              "abstract": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
            }, {
              "id": "69-5276221332384",
              "title": "Globalism Over India",
              "url": "https://infoseek.co.jp/aliquet/ultrices.aspx",
              "abstract": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
            }, {
              "id": "57-38153414643372",
              "title": "Ways Of Means",
              "url": "https://is.gd/nunc/nisl/duis.png",
              "abstract": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
            },
        ];*/
    }

    getLatest() {
        return this.articles;
    }

    // Note: action properties ==
    handleActions(action) {
        console.log('LatestStore received an action: ' , action);
        switch(action.type) {
            case 'GET_LATEST_BY_SECTION':
                this.articles = action.data;
                this.emit('change');
                break;
            case 'GET_SCIENCE':
                this.articles = action.data;
                this.emit('change');
                break;
            case 'GET_POLITICS':
                this.getLatest();
                break;
            case 'GET_HEALTH':
                this.getFavorites();
                break;
            case 'GET_WORLD':
                this.getWorld();
                break;
        }
    }
}

const latestStore = new LatestStore;
dispatcher.register(latestStore.handleActions.bind(latestStore));

export default latestStore;