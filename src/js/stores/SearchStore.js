import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class SearchStore extends EventEmitter {
    constructor() {
        super();
        this.articles = [];
    }

    getSearchResults() {
            console.log('Getting search results...');

            let articleArr = [
                {
                  "id": "93-978300",
                  "heading": "Hatting The Auntie",
                  "link": "http://parallels.com/dui/vel/sem/sed/                sagittis.aspx",
                  "summary": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
                }, {
                  "id": "65-388010",
                  "heading": "Fighting Urbanism",
                  "link": "http://diigo.com/faucibus/orci/luctus/               et.html",
                  "summary": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
                }, {
                  "id": "07-48d73769",
                  "heading": "Blue Fish Wars",
                  "link": "http://sfgate.com/ipsum/primis/in/faucibus/orci/luctus.js",
                  "summary": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
                }, {
                  "id": "69-52723sf84",
                  "heading": "Happing The Donkeys",
                  "link": "https://infoseek.co.jp/aliquet/ultrices.aspx",
                  "summary": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
                }, {
                  "id": "57-381422372",
                  "heading": "British Narrators",
                  "link": "https://is.gd/nunc/nisl/duis.png",
                  "summary": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
                }, {
                  "id": "60-52536187",
                  "heading": "Travelling Solo Across The Desert",
                  "link": "http://wikipedia.org/quisque.aspx",
                  "summary": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
                }, {
                  "id": "69-52721384",
                  "heading": "Bridges Galore",
                  "link": "https://infoseek.co.jp/aliquet/ultrices.aspx",
                  "summary": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
                }, {
                  "id": "57-38144372",
                  "heading": "Happening Happenings",
                  "link": "https://is.gd/nunc/nisl/duis.png",
                  "summary": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
                }, {
                  "id": "60-52566187",
                  "heading": "The Bastard\'s Flock",
                  "link": "http://wikipedia.org/quisque.aspx",
                  "summary": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
                },
            ];

            return articleArr;

            //this.emit('change');
    }

    handleActions(action) {
        console.log('SearchStore received an action: ' , action);
        switch(action.type) {
            case 'NEWS_SEARCH':
                this.getSearchResults();
                break;
        }
    }
}

const searchStore = new SearchStore;
dispatcher.register(searchStore.handleActions.bind(searchStore));

export default searchStore;